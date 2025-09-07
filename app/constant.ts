"use client";

import { BicepsFlexed, Handshake, Lightbulb, LucideIcon } from "lucide-react";

export const whyChooseUs = [
    {
        index: '01',
        heading: 'Trusted Partnerships',
        desc: 'Collaborating with leading pharma giants like Natco, Akums, Intas, and Heil Pharma, we ensure uncompromised quality and industry-backed credibility.',
        color: 'bg-[#f8f8f8] text-black',
        height: 'md:h-72'
    },
    {
        index: '02',
        heading: 'Cutting-Edge Manufacturing',
        desc: 'With our upcoming world-class facility in Raibareli, designed as per FDA, WHO, and cGMP standards, we deliver innovative and reliable healthcare solutions.',
        color: 'bg-[#d3d9f7] text-black',
        height: 'md:h-72'
    },
    {
        index: '03',
        heading: 'Expert Leadership',
        desc: 'Guided by visionary directors and a dedicated senior management team, our strategy and execution fuel rapid growth across the orthopedic and chronic care segments.',
        color: 'bg-[#f8f8f8] text-black',
        height: 'md:h-72'
    },
    {
        index: '04',
        heading: 'Commitment to Patient Care',
        desc: 'Every milestone reflects our mission to enhance patient outcomes through advanced research, continuous innovation, and value-driven therapies.',
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
        name: 'Ritu Bhalla',
        designation: 'Whole Time Director',
        desc: 'Leads the strategic vision of Zycure, focusing on long-term growth, business development, and fostering innovation in Orthopedics and healthcare solutions.'
    },
    {
        reverse: true,
        name: 'Pankaj Shukla',
        designation: 'Whole Time Director',
        desc: 'Oversees operations and strategic collaborations, ensuring efficient processes, strong partnerships with top pharma companies, and smooth execution across all business functions.'
    },
    {
        reverse: false,
        name: 'Dr. Lalit Kumar Singh',
        designation: 'Whole Time Director',
        desc: 'Brings extensive expertise in healthcare and biopharmaceuticals, guiding research initiatives and product development to ensure high-quality patient-centric solutions.'
    },
    {
        reverse: true,
        name: 'Dr. Gaurav Kumar Saxena',
        designation: 'Whole Time Director',
        desc: 'Dr. Gaurav Kumar Saxena brings over 25 years of expertise in the pharmaceutical industry, having worked with renowned companies Like Sun Pharma,Alkem,Ipca &MSN His extensive experience spans critical care, acute, gynecology and gastroenterology segments, with a proven track record of Building and maintaining strong relationships with core customers,Delivering effective, result-oriented team and field management.Dr. Saxena leadership and expertise make him a valuable asset in the pharmaceutical industry.'
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
    name: "Debrefix",
    heading: "Papain + Urea Enzymatic Debriding Topical Cream",
    desc: "A powerful enzymatic formulation designed to gently and effectively remove necrotic tissue, promoting faster wound healing for chronic wounds, burns, and diabetic foot ulcers.",
    route: "/products/debrefix",
    modelUrl: "/debrefix.glb",
    style: "bg-blue-50",
    composition: ["Papain", "Urea"],
    uses: ["Chronic wounds", "Burns", "Diabetic foot ulcers", "Necrotic tissue removal"],
    benefits: [
      "Promotes faster wound healing",
      "Painless enzymatic debridement",
      "Reduces infection risk",
      "Supports tissue regeneration",
    ],
  },
  {
    num: "02",
    name: "Collabact M2",
    heading: "Mupirocin + Metronidazole + Collagen Powder",
    desc: "An advanced wound care solution that combines antibacterial and anti-inflammatory agents with collagen to reduce infection, accelerate healing, and restore skin integrity.",
    route: "/products/collabact-m2",
    modelUrl: "/collabact_m2.glb",
    style: "bg-green-50 md:flex-row-reverse",
    composition: ["Mupirocin", "Metronidazole", "Collagen"],
    uses: ["Infected wounds", "Post-surgical wounds", "Diabetic ulcers"],
    benefits: [
      "Antibacterial & anti-inflammatory action",
      "Accelerates granulation tissue formation",
      "Collagen aids in skin regeneration",
    ],
  },
  {
    num: "03",
    name: "Collabact Nu",
    heading: "Collagen Dry Sheets",
    desc: "A collagen-based wound dressing that supports tissue regeneration, maintains a moist environment, and enhances the body’s natural healing process for chronic and surgical wounds.",
    route: "/products/collabact-nu",
    modelUrl: "/collabact_nu.glb",
    style: "bg-purple-50",
    composition: ["Type I Collagen"],
    uses: ["Chronic wounds", "Surgical wounds", "Bed sores"],
    benefits: [
      "Provides structural support for new tissue",
      "Maintains moist wound environment",
      "Speeds up healing",
    ],
  },
  {
    num: "04",
    name: "Collabact W",
    heading: "Collagen Wet Sheets",
    desc: "Pre-hydrated collagen sheets designed for easy application on wounds. They promote faster healing by maintaining moisture balance and reducing patient discomfort.",
    route: "/products/collabact-w",
    modelUrl: "/collabact_w.glb",
    style: "bg-pink-50 md:flex-row-reverse",
    composition: ["Type I Collagen (Hydrated)"],
    uses: ["Chronic wounds", "Burn wounds", "Skin graft sites"],
    benefits: [
      "Easy application without pre-moistening",
      "Provides immediate hydration",
      "Reduces patient discomfort",
    ],
  },
  {
    num: "05",
    name: "Collabact Nano",
    heading: "Nanocrystalline Silver + Collagen",
    desc: "A next-generation wound dressing combining the antimicrobial power of nanocrystalline silver with collagen’s regenerative properties to prevent infections and accelerate healing.",
    route: "/products/collabact-nano",
    modelUrl: "/collabact_nano.glb",
    style: "bg-yellow-50",
    composition: ["Nanocrystalline Silver", "Collagen"],
    uses: ["Infected wounds", "Burns", "Chronic ulcers"],
    benefits: [
      "Strong antimicrobial protection",
      "Prevents biofilm formation",
      "Enhances healing process",
    ],
  },
];
