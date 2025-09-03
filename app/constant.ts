"use client";

import { BicepsFlexed, Handshake, Lightbulb, LucideIcon } from "lucide-react";

export const whyChooseUs = [
    {
        index: '01',
        heading: 'Cutting-Edge Technology',
        desc: 'We utilize the latest technologies to ensure high standards of quality and safety',
        color: 'bg-[#f8f8f8] text-black',
        height: 'md:h-72'
    },
    {
        index: '02',
        heading: 'Cutting-Edge Technology',
        desc: 'We utilize the latest technologies to ensure high standards of quality and safety',
        color: 'bg-[#d3d9f7] text-black',
        height: 'md:h-72'
    },
    {
        index: '03',
        heading: 'Cutting-Edge Technology',
        desc: 'We utilize the latest technologies to ensure high standards of quality and safety',
        color: 'bg-[#f8f8f8] text-black',
        height: 'md:h-72'
    },
    {
        index: '04',
        heading: 'Cutting-Edge Technology',
        desc: 'We utilize the latest technologies to ensure high standards of quality and safety',
        color: 'bg-black text-white',
        height: 'md:h-32'
    }    
]

interface JourneyItem {
  icon: LucideIcon;
  heading: string;
  desc: string;
}

export const ourJourneyData: JourneyItem[] = [
  {
    icon: BicepsFlexed,
    heading: "Building a Strong Foundation",
    desc: "From our beginnings in Hyderabad, Zycure Biotech and Zychor Biologicals have steadily grown with a vision to deliver reliable, innovative healthcare solutions across India."
  },
  {
    icon: Handshake,
    heading: "Strategic Partnerships & Expansion",
    desc: "Collaborating with leading pharma giants like Natco, Akums, Intas, and Heil Pharma, we strengthened our presence in Orthopedics, Plastic Surgery, and Chronic Wound Management."
  },
  {
    icon: Lightbulb,
    heading: "Innovating for the Future",
    desc: "With cutting-edge facilities, global-standard manufacturing, and breakthrough wound-care products, we continue our journey to transform patient care and meet unmet medical needs."
  }
];

export const TeamCardData = [
    {
        reverse: false,
        imageSrc: '/ourJourneyImage.jpg', // or RituImg if imported
        heading: 'Ritu Bhalla – Whole Time Director',
        desc: 'Leads the strategic vision of Zycure, focusing on long-term growth, business development, and fostering innovation in Orthopedics and healthcare solutions.'
    },
    {
        reverse: true,
        imageSrc: '/ourJourneyImage.jpg', // or PankajImg
        heading: 'Pankaj Shukla – Whole Time Director',
        desc: 'Oversees operations and strategic collaborations, ensuring efficient processes, strong partnerships with top pharma companies, and smooth execution across all business functions.'
    },
    {
        reverse: false,
        imageSrc: '/ourJourneyImage.jpg', // or LalitImg
        heading: 'Dr. Lalit Kumar Singh – Whole Time Director',
        desc: 'Brings extensive expertise in healthcare and biopharmaceuticals, guiding research initiatives and product development to ensure high-quality patient-centric solutions.'
    },
    {
        reverse: true,
        imageSrc: '/ourJourneyImage.jpg', // or GauravImg
        heading: 'Dr. Gaurav Kumar Saxena – Whole Time Director',
        desc: 'Focuses on product innovation and operational excellence, driving initiatives in chronic wound management, Orthopedics, and critical care to improve patient outcomes.'
    }
];


export const missionCardData = [
    { 
        position: true,
        num: '01',
        heading: 'Innovation',
        desc: 'We are committed to pioneering cutting-edge therapies and products that address complex medical challenges, with a focus on Orthopedics, Plastic Surgery, and Chronic Wound Management.'
    },
    { 
        position: false,
        num: '02',
        heading: 'Quality',
        desc: 'By adhering to international standards such as FDA, WHO, and cGMP guidelines, we ensure that every product meets the highest benchmarks of safety, efficacy, and reliability.'
    },
    { 
        position: true,
        num: '03',
        heading: 'Care',
        desc: 'Patients are at the core of our mission. Our solutions are designed to improve healing outcomes, reduce suffering, and bring long-term benefits to those in need.'
    },
    { 
        position: false,
        num: '04',
        heading: 'Collaboration',
        desc: 'Through strategic partnerships with leading pharmaceutical companies and the establishment of advanced facilities, we leverage collective expertise to expand our impact on the healthcare ecosystem.'
    }
];


export const productCardData = [
    {
        num: "01",
        heading: "Papain + Urea Enzymatic Debriding Topical Cream",
        desc: "A powerful enzymatic formulation designed to gently and effectively remove necrotic tissue, promoting faster wound healing for chronic wounds, burns, and diabetic foot ulcers.",
        route: "/products/papain-urea-cream",
        imageSrc: "/product1.jpg",
        style: "bg-blue-50"
    },
    {
        num: "02",
        heading: "Mupirocin + Metronidazole + Collagen Powder",
        desc: "An advanced wound care solution that combines antibacterial and anti-inflammatory agents with collagen to reduce infection, accelerate healing, and restore skin integrity.",
        route: "/products/mupirocin-metronidazole-collagen",
        imageSrc: "/product1.jpg",
        style: "bg-green-50 flex-row-reverse"
    },
    {
        num: "03",
        heading: "Collagen Dry Sheets",
        desc: "A collagen-based wound dressing that supports tissue regeneration, maintains a moist environment, and enhances the body’s natural healing process for chronic and surgical wounds.",
        route: "/products/collagen-dry-sheets",
        imageSrc: "/product1.jpg",
        style: "bg-purple-50"
    },
    {
        num: "04",
        heading: "Collagen Wet Sheets",
        desc: "Pre-hydrated collagen sheets designed for easy application on wounds. They promote faster healing by maintaining moisture balance and reducing patient discomfort.",
        route: "/products/collagen-wet-sheets",
        imageSrc: "/product1.jpg",
        style: "bg-pink-50 flex-row-reverse"
    },
    {
        num: "05",
        heading: "Nanocrystalline Silver + Collagen",
        desc: "A next-generation wound dressing combining the antimicrobial power of nanocrystalline silver with collagen’s regenerative properties to prevent infections and accelerate healing.",
        route: "/products/nanocrystalline-silver-collagen",
        imageSrc: "/product1.jpg",
        style: "bg-yellow-50"
    }
];