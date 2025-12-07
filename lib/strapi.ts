import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { GET_PORTFOLIO_DATA } from './queries';
import {
    experiences as staticExperiences,
    industries as staticIndustries,
    skills as staticSkills,
    recommendations as staticRecommendations
} from './portfolio-data';

// Types matching the component expectations
export interface Experience {
    id: string;
    company: string;
    role: string;
    dateFrom: string;
    dateTo: string | null;
    currentlyWorking: boolean;
    details: string;
    tags: string[];
    color: string;
    logo?: string;
    icon?: string;
}

export interface Industry {
    id: string;
    name: string;
    description: string;
    icon?: string;
    color: string;
}

export interface Recommendation {
    id: string;
    authorName: string;
    authorTitle: string;
    testimony: string;
    tags: string[];
    color: string;
    linkedinUrl?: string;
    authorImage?: string;
    relationship?: string;
    featured?: boolean;
}

export interface SkillGroup {
    id: string;
    name: string;
    skills: string[];
}

export interface Philosophy {
    id: string;
    title: string;
    content: string;
    order: number;
    category?: string;
}

export interface PortfolioData {
    experiences: Experience[];
    industries: Industry[];
    skills: SkillGroup[];
    recommendations: Recommendation[];
    philosophies: Philosophy[];
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${STRAPI_URL}/graphql`,
        headers: STRAPI_TOKEN ? {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        } : {},
    }),
    cache: new InMemoryCache(),
});

/**
 * Converts Strapi blocks content to plain text
 * Blocks is an array of rich text nodes that need to be converted to string
 */
function blocksToText(blocks: any): string {
    if (!blocks || !Array.isArray(blocks)) return '';

    return blocks.map((block: any) => {
        if (block.type === 'paragraph') {
            return block.children?.map((child: any) => child.text || '').join('') || '';
        }
        if (block.type === 'heading') {
            return block.children?.map((child: any) => child.text || '').join('') || '';
        }
        if (block.type === 'list') {
            return block.children?.map((item: any) =>
                item.children?.map((child: any) => child.text || '').join('') || ''
            ).join('\n') || '';
        }
        return '';
    }).join('\n\n').trim();
}

/**
 * Transforms Strapi API response to match component interface
 * Strapi v5 returns flat data without nested data.attributes structure
 */
function transformStrapiData(data: any): PortfolioData {
    // Transform experiences - flat structure in v5
    const experiences: Experience[] = (data.experiences || []).map((item: any) => ({
        id: item.documentId,
        company: item.company,
        role: item.role,
        dateFrom: item.dateFrom,
        dateTo: item.dateTo,
        currentlyWorking: item.currentlyWorking,
        details: blocksToText(item.details),
        tags: item.tags || [],
        color: item.color,
        logo: item.logo,
        icon: item.icon,
    }));

    // Transform industries - flat structure in v5
    const industries: Industry[] = (data.industries || []).map((item: any) => ({
        id: item.documentId,
        name: item.name,
        description: blocksToText(item.description),
        color: item.color,
        icon: item.icon,
    }));

    // Transform skills - Group skills by their skill_group
    const skillGroupMap: Record<string, { id: string; name: string; skills: string[]; order: number }> = {};

    // First, create skill groups from skillGroups data
    if (data.skillGroups) {
        data.skillGroups.forEach((group: any) => {
            skillGroupMap[group.documentId] = {
                id: group.documentId,
                name: group.name,
                skills: [],
                order: group.order || 0,
            };
        });
    }

    // Then, populate skills into their respective groups
    if (data.skills) {
        data.skills.forEach((skill: any) => {
            const skillName = skill.name;
            const skillGroup = skill.skill_group;

            if (skillGroup) {
                const groupId = skillGroup.documentId;
                if (skillGroupMap[groupId]) {
                    skillGroupMap[groupId].skills.push(skillName);
                } else {
                    // Create group if it doesn't exist yet
                    skillGroupMap[groupId] = {
                        id: groupId,
                        name: skillGroup.name,
                        skills: [skillName],
                        order: 999, // Default order for unordered groups
                    };
                }
            }
        });
    }

    // Convert map to array and sort by order
    const skills: SkillGroup[] = Object.values(skillGroupMap)
        .sort((a, b) => a.order - b.order)
        .map(group => ({
            id: group.id,
            name: group.name,
            skills: group.skills,
        }));

    // Transform testimonials/recommendations - filter featured
    const allRecommendations: Recommendation[] = (data.testimonials || []).map((item: any) => ({
        id: item.documentId,
        authorName: item.authorName,
        authorTitle: item.authorTitle,
        testimony: blocksToText(item.testimony),
        tags: item.tags || [],
        color: item.color,
        linkedinUrl: item.linkedinUrl,
        authorImage: item.authorImage?.url
            ? `${STRAPI_URL}${item.authorImage.url}`
            : undefined,
        relationship: item.relationship,
        featured: item.featured,
    }));

    // Get only featured testimonials, or first 3 if none are featured
    const featuredRecs = allRecommendations.filter(rec => rec);
    const recommendations = featuredRecs.length > 0
        ? featuredRecs.slice(0, 3)
        : allRecommendations.slice(0, 3);

    // Transform philosophies
    const philosophies: Philosophy[] = (data.philosophies || []).map((item: any) => ({
        id: item.documentId,
        title: item.title,
        content: blocksToText(item.content),
        order: item.order || 0,
        category: item.category,
    }));

    return {
        experiences,
        industries,
        skills,
        recommendations,
        philosophies,
    };
}

/**
 * Generates fallback data from static portfolio data
 */
function generateFallbackData(): PortfolioData {
    return {
        experiences: staticExperiences.map((exp, i) => ({
            id: `static-exp-${i}`,
            company: exp.company,
            role: exp.role,
            dateFrom: exp.period.split(' – ')[0],
            dateTo: exp.period.includes('Present') ? null : exp.period.split(' – ')[1],
            currentlyWorking: exp.period.includes('Present'),
            details: exp.description,
            tags: exp.tags,
            color: exp.color,
            logo: exp.logo,
            icon: exp.icon,
        })),
        industries: staticIndustries.map((ind, i) => ({
            id: `static-ind-${i}`,
            name: ind.name,
            description: ind.description,
            icon: ind.icon,
            color: ind.color,
        })),
        skills: Object.entries(staticSkills).map(([name, skillList], i) => ({
            id: `static-skill-${i}`,
            name,
            skills: skillList,
        })),
        recommendations: staticRecommendations.map((rec, i) => ({
            id: `static-rec-${i}`,
            authorName: rec.name,
            authorTitle: rec.title,
            testimony: rec.text,
            tags: [],
            color: rec.color,
        })),
        philosophies: [
            {
                id: 'static-phil-1',
                title: 'SCALE IS NON-NEGOTIABLE.',
                content: 'Built on the belief that systems should grow effortlessly, not chaotically. Expansion should feel natural, not dramatic.',
                order: 0,
                category: 'scale',
            },
            {
                id: 'static-phil-2',
                title: 'RELIABILITY IS A QUIET ART.',
                content: 'The best systems rarely shout for attention, they\'re too busy working.',
                order: 1,
                category: 'reliability',
            },
            {
                id: 'static-phil-3',
                title: 'SPEED AS A STANDARD.',
                content: 'True velocity emerges from clarity, not chaos. From design, not desperation.',
                order: 2,
                category: 'speed',
            },
        ],
    };
}

/**
 * Fetches portfolio data from Strapi CMS via GraphQL.
 * Falls back to static data if the connection fails or isn't configured.
 */
export async function fetchPortfolioData(): Promise<PortfolioData> {
    // If no Strapi URL configured, return static data immediately
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
        console.log('📦 Strapi URL not configured, using static fallback data');
        return generateFallbackData();
    }

    try {
        console.log('🔍 Fetching portfolio data from Strapi...');

        const { data } = await client.query<any>({
            query: GET_PORTFOLIO_DATA,
            context: {
                fetchOptions: {
                    next: { revalidate: 300 } // Cache for 5 minutes (ISR)
                }
            }
        });

        if (!data) {
            throw new Error('No data returned from Strapi');
        }

        console.log('✅ Successfully fetched data from Strapi');
        console.log('Data summary:', {
            experiences: data.experiences?.length || 0,
            industries: data.industries?.length || 0,
            skillGroups: data.skillGroups?.length || 0,
            skills: data.skills?.length || 0,
            testimonials: data.testimonials?.length || 0,
            philosophies: data.philosophies?.length || 0,
        });
        // sleep for 5 seconds
        // await new Promise((resolve) => setTimeout(resolve, 5000));  
        return transformStrapiData(data);

    } catch (error) {
        console.error('❌ Failed to fetch from Strapi, using fallback data:', error);

        // Log more details in development
        if (process.env.NODE_ENV === 'development') {
            console.error('Error details:', {
                message: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined,
            });
        }

        return generateFallbackData();
    }
}

/**
 * Validates Strapi connection
 */
export async function validateStrapiConnection(): Promise<boolean> {
    if (!process.env.NEXT_PUBLIC_STRAPI_URL) {
        return false;
    }

    try {
        const { data } = await client.query({
            query: GET_PORTFOLIO_DATA,
            fetchPolicy: 'no-cache',
        });
        return !!data;
    } catch {
        return false;
    }
}