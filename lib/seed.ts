/**
 * Strapi Data Seeding Script
 * 
 * Usage: node seed-strapi.js
 * 
 * Make sure to set these environment variables:
 * - STRAPI_URL (default: http://localhost:1337)
 * - STRAPI_TOKEN (your API token)
 */

const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
    console.error('❌ STRAPI_TOKEN environment variable is required');
    process.exit(1);
}

const api = axios.create({
    baseURL: `${STRAPI_URL}/api`,
    headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

/**
 * Converts plain text to Strapi blocks format
 * @param {string} text - Plain text to convert
 * @returns {Array} - Array of block objects
 */
function textToBlocks(text: string) {
    if (!text) return [];

    // Split by double newlines to create paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim());

    return paragraphs.map(paragraph => ({
        type: 'paragraph',
        children: [
            {
                type: 'text',
                text: paragraph.trim()
            }
        ]
    }));
}

// Data to seed
const industries = [
    {
        name: 'Aviation',
        description: textToBlocks('In-flight connectivity and entertainment systems serving 1500+ aircraft globally'),
        icon: 'Plane',
        color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        order: 0
    },
    {
        name: 'Healthcare',
        description: textToBlocks('Digital health platforms connecting patients with healthcare providers'),
        icon: 'Heart',
        color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        order: 1
    },
    {
        name: 'Enterprise',
        description: textToBlocks('Enterprise software solutions for monitoring, analytics, and operational efficiency'),
        icon: 'Building2',
        color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        order: 2
    },
    {
        name: 'E-commerce',
        description: textToBlocks('Scalable platforms for online retail and digital commerce'),
        icon: 'ShoppingCart',
        color: 'bg-amber-50 text-amber-700 border-amber-200',
        order: 3
    }
];

const experiences = [
    {
        company: 'AirFi',
        role: 'Lead Engineer',
        dateFrom: '2021-12-01',
        dateTo: null,
        currentlyWorking: true,
        details: textToBlocks('Leading backend engineering for cloud-native systems powering 1500+ aircraft.'),
        tags: ['AWS Serverless', 'GenAI', 'Node.js', 'System Design'],
        color: 'bg-cyan-50 text-cyan-700 border-cyan-100',
        logo: 'https://logo.clearbit.com/airfi.aero',
        icon: 'Rocket',
        order: 3
    },
    {
        company: 'Bombayworks',
        role: 'Senior Software Engineer',
        dateFrom: '2020-08-01',
        dateTo: '2021-11-30',
        currentlyWorking: false,
        details: textToBlocks('Directed fullstack development across enterprise projects, improving incident response by 50%.'),
        tags: ['React', 'Node.js', 'MySQL', 'Monitoring'],
        color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
        logo: 'https://logo.clearbit.com/bombayworks.com',
        icon: 'Code2',
        order: 2
    },
    {
        company: 'HealthDekho',
        role: 'Team Lead',
        dateFrom: '2016-01-01',
        dateTo: '2020-07-31',
        currentlyWorking: false,
        details: textToBlocks('Managed engineering team, rebuilt legacy platform, and migrated to microservices.'),
        tags: ['Microservices', 'Team Leadership', 'Migration'],
        color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        logo: 'https://logo.clearbit.com/healthdekho.com',
        icon: 'Activity',
        order: 1
    },
    {
        company: 'Codebox',
        role: 'Associate Engineer',
        dateFrom: '2014-01-01',
        dateTo: '2015-12-31',
        currentlyWorking: false,
        details: textToBlocks('Delivered multiple fullstack applications and optimized performance.'),
        tags: ['PHP', 'JavaScript', 'Fullstack'],
        color: 'bg-slate-50 text-slate-700 border-slate-100',
        logo: 'https://logo.clearbit.com/codebox.in',
        icon: 'Server',
        order: 0
    }
];

const skillGroups = [
    { name: 'Core & GenAI', description: textToBlocks(''), order: 0 },
    { name: 'Cloud Native', description: textToBlocks(''), order: 1 },
    { name: 'Frontend', description: textToBlocks(''), order: 2 },
    { name: 'Data', description: textToBlocks(''), order: 3 }
];

const skills = {
    'Core & GenAI': [
        'Node.js',
        'TypeScript',
        'GenAI Integration',
        'System Design',
        'Distributed Systems'
    ],
    'Cloud Native': [
        'AWS Lambda',
        'API Gateway',
        'SQS/SNS',
        'S3',
        'DynamoDB',
        'Docker'
    ],
    'Frontend': [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'Framer Motion'
    ],
    'Data': [
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'Elasticsearch'
    ]
};

const testimonials = [
    {
        authorName: 'Ajinkya Shelar',
        authorTitle: 'Sr. iOS Engineer | Glancer | Ex-Quikr',
        testimony: textToBlocks(`Worked with Aatif for 5 years at HealthDekho & he's genuinely one of the best full-stack developers I've had the chance to collaborate with.

Super solid technically, whether it's frontend or backend, he just gets things done.

But honestly, what I'll remember most is how easy and fun it was to work with him. Always positive, always helpful, and the kind of person who makes the team better just by being there. Great developer, even better human.

Any team would be lucky to have him.`),
        color: 'bg-cyan-50 border-cyan-100',
        featured: true,
        relationship: 'colleague',
        order: 0
    },
    {
        authorName: 'Tanveer Bhanot',
        authorTitle: 'Director at AirFi',
        testimony: textToBlocks(`I have had the opportunity to work with Aatif for a few years and he has been one of the most dependable and technically strong engineers on the team. His depth in JavaScript, Node.js, TypeScript, React and cloud architecture is outstanding. He approaches the most complex problems with clarity and calmness.

Aatif is an amazing team member, always ready to help others, share knowledge and support the team without hesitation. He is exceptionally likeable, easy to work with and brings a composed presence that makes a huge difference during high pressure situations.

I strongly recommend Aatif for any senior engineering or architectural role. His combination of technical strength, ownership and supportive leadership makes him a valuable asset to any organisation.`),
        color: 'bg-indigo-50 border-indigo-100',
        featured: true,
        relationship: 'manager',
        order: 1
    },
    {
        authorName: 'Pratheek Krishnan',
        authorTitle: 'Staff Engineer at AirFi',
        testimony: textToBlocks(`Aatif is one of the calmest minds I've worked with. His approach to solving even the toughest problems has always impressed me. He has literally been available day or night to provide support and guide the team when needed.

His expertise in modern tech stacks such as NodeJS, NextJS, MongoDB, TypeScript, and the broader JavaScript ecosystem is excellent, and he can always be relied on for clear and accurate technical clarification. He is highly committed to his deliverables and is extremely dependable. In all our time working together, I've never seen a project under his ownership face unnecessary escalations.

I would strongly recommend him to lead and contribute to any project involving modern technology and scalable solutions.`),
        color: 'bg-emerald-50 border-emerald-100',
        featured: true,
        relationship: 'colleague',
        order: 2
    }
];

const philosophies = [
    {
        title: 'SCALE IS NON-NEGOTIABLE.',
        content: textToBlocks('Built on the belief that systems should grow effortlessly, not chaotically. Expansion should feel natural, not dramatic.'),
        order: 0,
        category: 'scale'
    },
    {
        title: 'RELIABILITY IS A QUIET ART.',
        content: textToBlocks('The best systems rarely shout for attention, they\'re too busy working.'),
        order: 1,
        category: 'reliability'
    },
    {
        title: 'SPEED AS A STANDARD.',
        content: textToBlocks('True velocity emerges from clarity, not chaos. From design, not desperation.'),
        order: 2,
        category: 'speed'
    }
];

async function seedData() {
    try {
        console.log('🌱 Starting data seeding...\n');

        // Seed Industries
        console.log('📍 Seeding industries...');
        for (const industry of industries) {
            try {
                await api.post('/industries', { data: industry });
                console.log(`  ✓ Created: ${industry.name}`);
            } catch (error: any) {
                if (error.response?.status === 400) {
                    console.log(`  ⚠ Skipped: ${industry.name} (validation error or already exists)`);
                } else {
                    console.log(`  ✗ Error: ${industry.name}`, error.message);
                }
            }
        }

        // Seed Experiences
        console.log('\n💼 Seeding experiences...');
        for (const experience of experiences) {
            try {
                await api.post('/experiences', { data: experience });
                console.log(`  ✓ Created: ${experience.role} at ${experience.company}`);
            } catch (error: any) {
                if (error.response?.status === 400) {
                    console.log(`  ⚠ Skipped: ${experience.role} at ${experience.company}`);
                } else {
                    console.log(`  ✗ Error: ${experience.role} at ${experience.company}`, error.message);
                }
            }
        }

        // Seed Skill Groups and Skills
        console.log('\n🎯 Seeding skill groups and skills...');
        const skillGroupIds: any = {};

        for (const group of skillGroups) {
            try {
                const response = await api.post('/skill-groups', { data: group });
                skillGroupIds[group.name] = response.data.data.documentId;
                console.log(`  ✓ Created skill group: ${group.name}`);
            } catch (error: any) {
                // Try to fetch existing group
                try {
                    const response = await api.get(`/skill-groups?filters[name][$eq]=${group.name}`);
                    if (response.data.data.length > 0) {
                        skillGroupIds[group.name] = response.data.data[0].documentId;
                        console.log(`  ↺ Found existing: ${group.name}`);
                    }
                } catch (fetchError) {
                    console.log(`  ✗ Error with skill group: ${group.name}`);
                }
            }
        }

        // Seed Skills
        for (const [groupName, skillList] of Object.entries(skills)) {
            const groupId = skillGroupIds[groupName];
            console.log(groupId);
            if (!groupId) {
                console.log(`  ⚠ Skipping skills for ${groupName} - group not found`);
                continue;
            }

            for (const skillName of skillList) {
                try {
                    await api.post('/skills', {
                        data: {
                            name: skillName,
                            skill_group: groupId,
                            proficiency: 'advanced'
                        }
                    });
                    console.log(`    ✓ Created skill: ${skillName}`);
                } catch (error: any) {
                    if (error.response?.status === 400) {
                        console.log(`    ⚠ Skipped skill: ${skillName}`);
                    }
                }
            }
        }

        // Seed Testimonials
        console.log('\n💬 Seeding testimonials...');
        for (const testimonial of testimonials) {
            try {
                await api.post('/testimonials', { data: testimonial });
                console.log(`  ✓ Created: ${testimonial.authorName}`);
            } catch (error: any) {
                if (error.response?.status === 400) {
                    console.log(`  ⚠ Skipped: ${testimonial.authorName}`);
                } else {
                    console.log(`  ✗ Error: ${testimonial.authorName}`, error.message);
                }
            }
        }

        // Seed Philosophies
        console.log('\n🧠 Seeding philosophies...');
        for (const philosophy of philosophies) {
            try {
                await api.post('/philosophies', { data: philosophy });
                console.log(`  ✓ Created: ${philosophy.title}`);
            } catch (error: any) {
                if (error.response?.status === 400) {
                    console.log(`  ⚠ Skipped: ${philosophy.title}`);
                } else {
                    console.log(`  ✗ Error: ${philosophy.title}`, error.message);
                }
            }
        }

        console.log('\n✅ Seeding completed!\n');
        console.log('Next steps:');
        console.log('1. Go to your Strapi admin panel');
        console.log('2. Publish all the created entries');
        console.log('3. Test your GraphQL queries at /graphql');

    } catch (error: any) {
        console.error('❌ Seeding failed:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
        process.exit(1);
    }
}

seedData();