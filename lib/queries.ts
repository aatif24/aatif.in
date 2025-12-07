import { gql } from '@apollo/client';

export const GET_PORTFOLIO_DATA = gql`
  query GetPortfolioData {
    industries {
      documentId
      name
      description
      color
      icon
      order
      createdAt
      updatedAt
      publishedAt
    }
    
    skillGroups {
      documentId
      name
      description
      order
      createdAt
      updatedAt
      publishedAt
    }
    
    skills(pagination: { limit: 100 }) {
      documentId
      name
      proficiency
      yearsOfExperience
      order
      skill_group {
        documentId
        name
      }
      createdAt
      updatedAt
      publishedAt
    }
    
    testimonials {
      documentId
      authorName
      authorTitle
      testimony
      tags
      color
      linkedinUrl
      order
      featured
      relationship
      authorImage {
        documentId
        url
        alternativeText
        width
        height
      }
      createdAt
      updatedAt
      publishedAt
    }
    
    experiences(sort: "order:desc", pagination: { limit: 100 }) {
      documentId
      company
      role
      dateFrom
      dateTo
      currentlyWorking
      details
      tags
      color
      logo
      icon
      order
      createdAt
      updatedAt
      publishedAt
    }
    
    philosophies {
      documentId
      title
      content
      order
      category
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

// Individual queries for specific content types
export const GET_INDUSTRIES = gql`
  query GetIndustries {
    industries {
      documentId
      name
      description
      color
      icon
      order
    }
  }
`;

export const GET_SKILL_GROUPS = gql`
  query GetSkillGroups {
    skillGroups {
      documentId
      name
      description
      order
    }
  }
`;

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      documentId
      name
      proficiency
      order
      skill_group {
        documentId
        name
      }
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      documentId
      authorName
      authorTitle
      testimony
      color
      linkedinUrl
      featured
      relationship
      tags
    }
  }
`;

export const GET_FEATURED_TESTIMONIALS = gql`
  query GetFeaturedTestimonials {
    testimonials(sort: "order:asc", pagination: { limit: 3 }) {
      documentId
      authorName
      authorTitle
      testimony
      color
      linkedinUrl
      featured
      relationship
    }
  }
`;

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    experiences(sort: "order:desc", pagination: { limit: 100 }) {
      documentId
      company
      role
      dateFrom
      dateTo
      currentlyWorking
      details
      tags
      color
      icon
      logo
    }
  }
`;

export const GET_PHILOSOPHIES = gql`
  query GetPhilosophies {
    philosophies {
      documentId
      title
      content
      order
      category
    }
  }
`;