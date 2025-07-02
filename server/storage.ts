import { contacts, blogPosts, projects, type Contact, type InsertContact, type BlogPost, type InsertBlogPost, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Blog methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private blogPosts: Map<number, BlogPost>;
  private projects: Map<number, Project>;
  private currentContactId: number;
  private currentBlogId: number;
  private currentProjectId: number;

  constructor() {
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    this.currentContactId = 1;
    this.currentBlogId = 1;
    this.currentProjectId = 1;

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Creating Interactive Dashboards in Power BI",
        slug: "creating-interactive-dashboards-power-bi",
        excerpt: "Learn how to build compelling and interactive dashboards in Power BI that drive business decisions. Step-by-step guide with real examples...",
        content: "Full blog post content here...",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Power BI", "Tutorial"],
        readTime: 5
      },
      {
        title: "Advanced Excel Techniques for Data Analysts",
        slug: "advanced-excel-techniques-data-analysts",
        excerpt: "Master advanced Excel functions, pivot tables, and data analysis techniques that every data analyst should know. Boost your productivity with these tips...",
        content: "Full blog post content here...",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Excel", "Tips"],
        readTime: 7
      },
      {
        title: "Data Cleaning Best Practices and Common Pitfalls",
        slug: "data-cleaning-best-practices-common-pitfalls",
        excerpt: "Data cleaning is 80% of the work in data analysis. Learn the best practices, common mistakes to avoid, and efficient techniques for preparing your data...",
        content: "Full blog post content here...",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        tags: ["Data Cleaning", "Best Practices"],
        readTime: 6
      }
    ];

    samplePosts.forEach(post => this.createBlogPost(post));

    // Sample projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Sales Performance Dashboard",
        description: "Interactive Power BI dashboard tracking monthly sales performance, revenue trends, and key performance indicators with dynamic filtering capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        technologies: ["Power BI", "KPI Tracking", "Sales Analytics"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Advanced Excel analysis identifying customer behavior patterns and segments, enabling targeted marketing strategies and improved customer retention.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        technologies: ["Excel Advanced", "Customer Analytics", "Segmentation"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
      },
      {
        title: "Hospital Admission Insights",
        description: "Comprehensive visual reports analyzing hospital admission data patterns, patient demographics, and operational efficiency metrics for healthcare management.",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        technologies: ["Healthcare Analytics", "Visual Reports", "Data Insights"],
        liveUrl: "#",
        githubUrl: "#",
        featured: true
      }
    ];

    sampleProjects.forEach(project => this.createProject(project));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0)
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogId++;
    const post: BlogPost = { 
      ...insertPost, 
      id,
      publishedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.featured);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
