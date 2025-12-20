import { type Contact, type InsertContact, type Faq, type InsertFaq } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contacts
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;

  // FAQs
  getAllFaqs(): Promise<Faq[]>;
  getFaqsByCategory(category: string): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private faqs: Map<string, Faq>;

  constructor() {
    this.contacts = new Map();
    this.faqs = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample FAQs
    const faqs = [
      {
        id: randomUUID(),
        question: "How do I book a luggage storage slot?",
        answer: "Simply open the Storezee app, find nearby storage locations on the map, select your preferred spot, choose pickup time, and confirm your booking. Our Saathi partner will come to collect your luggage.",
        category: "booking",
        order: 1
      },
      {
        id: randomUUID(),
        question: "Is my luggage safe and secure?",
        answer: "Yes! We use smart technology to track your luggage in real-time. All our storage partners are verified, and we provide insurance coverage for your belongings.",
        category: "safety",
        order: 1
      },
      {
        id: randomUUID(),
        question: "How much does it cost to store luggage?",
        answer: "Pricing varies by location and duration. Generally, it starts from ₹50 per bag for a few hours. You can see exact pricing in the app when selecting a storage location.",
        category: "pricing",
        order: 1
      },
      {
        id: randomUUID(),
        question: "How long does pickup take?",
        answer: "Our Saathi partners typically arrive within 30-60 minutes of your booking confirmation. You'll get real-time tracking updates in the app.",
        category: "pickup",
        order: 1
      },
      {
        id: randomUUID(),
        question: "Can I retrieve my luggage anytime?",
        answer: "Yes, you can schedule pickup of your stored luggage anytime through the app. We recommend booking at least 30 minutes in advance for faster service.",
        category: "delivery",
        order: 1
      }
    ];

    faqs.forEach(faq => this.faqs.set(faq.id, faq));
  }

  // Contacts
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // FAQs
  async getAllFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
  }

  async getFaqsByCategory(category: string): Promise<Faq[]> {
    return Array.from(this.faqs.values())
      .filter(faq => faq.category === category)
      .sort((a, b) => a.order - b.order);
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const id = randomUUID();
    const faq: Faq = { 
      ...insertFaq, 
      id
    };
    this.faqs.set(id, faq);
    return faq;
  }
}

export const storage = new MemStorage();
