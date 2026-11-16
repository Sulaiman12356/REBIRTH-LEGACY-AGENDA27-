/**
 * CANDIDATE & CAMPAIGN CONFIGURATION
 * 
 * Update contact details, phone numbers, and social links here.
 * Any change made here propagates throughout the entire platform.
 */

export interface CandidateConfig {
  name: string;
  popularName: string;
  title: string;
  campaignName: string;
  tagline: string;
  institution: string;
  faculty: string;
  department: string;
  association: string;
  philosophy: string;
  whatsappNumber: string; // International format without '+' (e.g., '2348051780169')
  whatsappGroupUrl: string;
  siteUrl: string;
  email: string;
  portfolioUrl: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    github?: string;
  };
  assets: {
    primaryPortrait: string;
    artisticPortrait: string;
    rebirthEmblem: string;
    oouLogo: string;
    nacosLogo: string;
  };
  whatsappTemplates: {
    question: string;
    feedback: string;
    general: string;
  };
}

export const candidateConfig: CandidateConfig = {
  name: "ONIFADE SULAIMAN IPESOLA",
  popularName: "MR. CLARITY",
  title: "Aspiring NACOS President, OOU Chapter",
  campaignName: "REBIRTH LEGACY",
  tagline: "RENEW. REBUILD. LEAVE A LEGACY.",
  institution: "Olabisi Onabanjo University (OOU)",
  faculty: "Faculty of Science",
  department: "Department of Computer Science",
  association: "Nigerian Association of Computing Students (NACOS)",
  philosophy: "CLARITY CREATES DIRECTION. DIRECTION CREATES PROGRESS.",
  
  // WhatsApp Contact & Official Community Group Configuration
  whatsappNumber: "2348051780169",
  whatsappGroupUrl: "https://chat.whatsapp.com/EbHlsYgqvTTKf02c1Av5TH?s=cl&p=a&mlu=0",
  siteUrl: "https://rebirthlegacyagenda27.vercel.app",
  email: "ipesolasulaiman@gmail.com",
  portfolioUrl: "https://claritydigital.academy",

  socials: {
    linkedin: "https://linkedin.com/in/onifade-sulaiman-ipesola",
    twitter: "https://x.com/mrclarity_oou",
    instagram: "https://instagram.com/mrclarity_official",
  },

  assets: {
    // Official supplied candidate assets from workspace
    primaryPortrait: "/assets/aistudio/IMG-20261027-WA0219_f706bfc1.jpg",
    artisticPortrait: "/assets/aistudio/IMG-20261027-WA0218_d6c3ab5e.jpg",
    rebirthEmblem: "/assets/aistudio/IMG-20261027-WA0215_5350e723.jpg",
    oouLogo: "/assets/aistudio/IMG-20261027-WA0214_b2523c74.jpg",
    nacosLogo: "/assets/aistudio/IMG-20261027-WA0213_c519ad9e.jpg",
  },

  whatsappTemplates: {
    question: "Hello Mr. Clarity, I have a question regarding the REBIRTH LEGACY agenda for NACOS OOU.",
    feedback: "Hello Mr. Clarity, I would like to share my feedback and suggestions regarding the REBIRTH LEGACY agenda for NACOS OOU.",
    general: "Hello Mr. Clarity, I am reaching out regarding the REBIRTH LEGACY initiative.",
  },
};

/**
 * Helper to build direct WhatsApp link with prefilled text
 */
export function getWhatsAppUrl(templateType: "question" | "feedback" | "general" = "general", customNote?: string): string {
  const baseNumber = candidateConfig.whatsappNumber.replace(/[^0-9]/g, "");
  let message = candidateConfig.whatsappTemplates[templateType] || candidateConfig.whatsappTemplates.general;
  if (customNote) {
    message += `\n\nNote: ${customNote}`;
  }
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}
