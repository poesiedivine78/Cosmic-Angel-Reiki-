
import React from 'react';

export const COLORS = {
  primary: '#020617',
  secondary: '#0F172A',
  accent: '#C084FC',
  blue: '#3B82F6',
  violet: '#8B5CF6',
  gold: '#D4AF37',
  goldLight: '#FACC15',
  bronze: '#CD7F32'
};

export const SOCIAL_STATS = {
  facebook: "14k+",
  tiktok: "7k+",
  total: "21k+ Âmes guidées"
};

export const CHAKRAS = [
  { name: "Couronne", color: "#A855F7", frequency: "963 Hz", meaning: "Connexion Divine", pos: "top-[5%]" },
  { name: "3ème Œil", color: "#6366F1", frequency: "852 Hz", meaning: "Intuition & Vision", pos: "top-[18%]" },
  { name: "Gorge", color: "#3B82F6", frequency: "741 Hz", meaning: "Expression & Vérité", pos: "top-[32%]" },
  { name: "Cœur", color: "#22C55E", frequency: "639 Hz", meaning: "Amour & Paix", pos: "top-[46%]" },
  { name: "Solaire", color: "#FACC15", frequency: "528 Hz", meaning: "Confiance & Pouvoir", pos: "top-[59%]" },
  { name: "Sacré", color: "#F97316", frequency: "417 Hz", meaning: "Créativité & Émotion", pos: "top-[73%]" },
  { name: "Racine", color: "#EF4444", frequency: "396 Hz", meaning: "Ancrage & Stabilité", pos: "top-[87%]" }
];

export const BOOKS = [
  {
    title: "Recueil de Poésies Divines",
    subtitle: "L'Essence de l'Éveil",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    url: "https://www.amazon.fr/dp/B0CSBQYHGJ",
    tag: "Poésie Divine",
    description: "Un voyage au cœur de la vibration par les mots. Des textes conçus pour résonner avec votre âme Starseed."
  },
  {
    title: "Jérémy le doux rêveur",
    subtitle: "Apprendre les différences",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    url: "https://www.amazon.fr/J%C3%A9r%C3%A9my-doux-r%C3%AAveur-apprendre-diff%C3%A9rences-ebook/dp/B0CTGFR6QK",
    tag: "Conte Inspirant",
    description: "Un conte initiatique enseignant la beauté de la singularité et l'acceptation de notre lumière intérieure dès l'enfance."
  }
];

export const TESTIMONIALS = [
  {
    author: "Sophie M.",
    role: "Éveil de Conscience",
    text: "Le Protocole Phoenix a littéralement transmuté mes blocages. Michael a cette capacité rare de voir l'invisible et de le guérir avec une douceur infinie.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    author: "Lucas R.",
    role: "Reiki Kundalini",
    text: "Une puissance incroyable. J'ai ressenti l'énergie circuler comme jamais auparavant. Un réalignement total qui a changé ma vision du quotidien.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    author: "Elena V.",
    role: "Soin Usui & Poésie",
    text: "Les mots de Michael soignent autant que ses mains. Son recueil est devenu mon compagnon de chevet. Un guide lumineux et authentique.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

export interface HealingPathology {
  title: string;
  reiki: "Usui" | "Kundalini";
  desc: string;
  icon: string;
  impact: {
    physical: number;
    emotional: number;
    spiritual: number;
  };
  details: {
    origin: string;
    benefits: string[];
    recommendation: string;
  };
}

export const PATHOLOGIES: Record<string, HealingPathology[]> = {
  physique: [
    { 
      title: "Douleurs & Tensions", 
      reiki: "Usui", 
      desc: "Libération des nœuds physiques et musculaires.", 
      icon: "Activity",
      impact: { physical: 95, emotional: 30, spiritual: 15 },
      details: {
        origin: "Somatisation d'une rigidité mentale ou d'un refus de 'lâcher-prise'.",
        benefits: ["Relâchement musculaire profond", "Drainage lymphatique énergétique", "Sensation de légèreté"],
        recommendation: "3 séances pour un déblocage complet."
      }
    },
    { 
      title: "Fatigue Chronique", 
      reiki: "Kundalini", 
      desc: "Recharge des batteries vitales et du Prana.", 
      icon: "Zap",
      impact: { physical: 90, emotional: 60, spiritual: 40 },
      details: {
        origin: "Fuite énergétique au Plexus Solaire suite à un stress prolongé.",
        benefits: ["Vitalité immédiate", "Soutien des surrénales", "Clarté d'esprit"],
        recommendation: "4 séances (Cycle régénérant)."
      }
    },
    { 
      title: "Insomnie & Sommeil", 
      reiki: "Usui", 
      desc: "Apaisement du système nerveux pour la nuit.", 
      icon: "Moon",
      impact: { physical: 75, emotional: 80, spiritual: 30 },
      details: {
        origin: "Hyper-activation du mental et déconnexion de l'ancrage terrestre.",
        benefits: ["Endormissement rapide", "Sommeil non-fragmenté", "Repos des cellules"],
        recommendation: "2 séances pour stabiliser le cycle."
      }
    },
    { 
      title: "Troubles Digestifs", 
      reiki: "Usui", 
      desc: "Libération du 'deuxième cerveau' émotionnel.", 
      icon: "Wind",
      impact: { physical: 85, emotional: 70, spiritual: 20 },
      details: {
        origin: "Difficulté à assimiler des événements de vie ou émotions 'lourdes'.",
        benefits: ["Confort viscéral", "Apaisement du feu intérieur", "Transit régulé"],
        recommendation: "3 séances focalisées sur le ventre."
      }
    },
    { 
      title: "Migraines & Céphalées", 
      reiki: "Kundalini", 
      desc: "Décompression de la sphère cérébrale.", 
      icon: "Layers",
      impact: { physical: 80, emotional: 60, spiritual: 50 },
      details: {
        origin: "Saturation du Chakra Couronne par un excès de contrôle mental.",
        benefits: ["Baisse de la pression mentale", "Vision plus nette", "Paix intérieure"],
        recommendation: "2 séances d'urgence ou 3 en préventif."
      }
    }
  ],
  psychique: [
    { 
      title: "Anxiété & Angoisses", 
      reiki: "Usui", 
      desc: "Retrouver une sécurité intérieure solide.", 
      icon: "Shield",
      impact: { physical: 40, emotional: 100, spiritual: 40 },
      details: {
        origin: "Faille dans le corps éthérique laissant passer les peurs collectives.",
        benefits: ["Calme instantané", "Sentiment de protection", "Respiration libérée"],
        recommendation: "3 séances (Sécurisation éthérique)."
      }
    },
    { 
      title: "Chocs Émotionnels", 
      reiki: "Kundalini", 
      desc: "Transmutation des traumatismes récents.", 
      icon: "Heart",
      impact: { physical: 50, emotional: 95, spiritual: 60 },
      details: {
        origin: "Cristallisation d'une douleur vive dans les mémoires cellulaires.",
        benefits: ["Libération des pleurs", "Cicatrisation du cœur", "Retour à la joie"],
        recommendation: "1 à 2 séances intensives."
      }
    },
    { 
      title: "Dépression & Apathie", 
      reiki: "Kundalini", 
      desc: "Rallumer l'étincelle de vie intérieure.", 
      icon: "Zap",
      impact: { physical: 60, emotional: 90, spiritual: 80 },
      details: {
        origin: "Perte de connexion avec sa propre force vitale et ses désirs d'âme.",
        benefits: ["Reprise d'activité", "Envie d'agir", "Réalignement des envies"],
        recommendation: "Accompagnement de 5 séances minimum."
      }
    },
    { 
      title: "Confiance en Soi", 
      reiki: "Usui", 
      desc: "Affirmation de sa légitimité et de sa place.", 
      icon: "Stars",
      impact: { physical: 30, emotional: 85, spiritual: 70 },
      details: {
        origin: "Faiblesse du Plexus Solaire et jugements limitants hérités.",
        benefits: ["Posture droite", "Prise de parole aisée", "Rayonnement solaire"],
        recommendation: "3 séances de renforcement solaire."
      }
    },
    { 
      title: "Charge Mentale", 
      reiki: "Usui", 
      desc: "Nettoyage du trop-plein d'informations.", 
      icon: "Brain",
      impact: { physical: 50, emotional: 80, spiritual: 40 },
      details: {
        origin: "Saturation des centres mentaux par une suractivité analytique.",
        benefits: ["Discernement", "Priorités claires", "Calme cognitif"],
        recommendation: "2 séances pour un 'Reset' mental."
      }
    }
  ],
  spirituel: [
    { 
      title: "Éveil Starseed", 
      reiki: "Kundalini", 
      desc: "Intégrer ses origines stellaires ici-bas.", 
      icon: "Stars",
      impact: { physical: 40, emotional: 60, spiritual: 100 },
      details: {
        origin: "Nostalgie d'ailleurs et difficulté à s'adapter à la densité terrestre.",
        benefits: ["Ancrage multidimensionnel", "Acceptation du corps", "Paix cosmique"],
        recommendation: "3 séances (Accompagnement Starseed)."
      }
    },
    { 
      title: "Mission de Vie", 
      reiki: "Usui", 
      desc: "Trouver sa voie et son utilité divine.", 
      icon: "Compass",
      impact: { physical: 20, emotional: 50, spiritual: 100 },
      details: {
        origin: "Déconnexion du plan d'incarnation choisi avant la naissance.",
        benefits: ["Guidance claire", "Synchronicités fortes", "Action alignée"],
        recommendation: "1 séance de reconnexion au Soi."
      }
    },
    { 
      title: "Dons & Intuition", 
      reiki: "Usui", 
      desc: "Déblocage des capacités extrasensorielles.", 
      icon: "Eye",
      impact: { physical: 10, emotional: 40, spiritual: 95 },
      details: {
        origin: "Blocage au 3ème Œil suite à des peurs ou des refoulés d'enfance.",
        benefits: ["Visions plus claires", "Ressenti vibratoire", "Confiance intuitive"],
        recommendation: "3 séances focalisées sur le 3ème œil."
      }
    },
    { 
      title: "Passé & Karma", 
      reiki: "Kundalini", 
      desc: "Nettoyage des liens et dettes karmiques.", 
      icon: "History",
      impact: { physical: 30, emotional: 70, spiritual: 100 },
      details: {
        origin: "Résonance de traumatismes vécus dans d'autres espaces-temps.",
        benefits: ["Schémas rompus", "Liberté de choix", "Allègement de l'âme"],
        recommendation: "Protocole Phoenix (4 séances)."
      }
    },
    { 
      title: "Nuit Noire de l'Âme", 
      reiki: "Kundalini", 
      desc: "Renaissance après l'effondrement spirituel.", 
      icon: "RefreshCw",
      impact: { physical: 50, emotional: 80, spiritual: 100 },
      details: {
        origin: "Désintégration de l'ancien ego pour une mise à jour fréquentielle.",
        benefits: ["Résilience divine", "Clarté après le chaos", "Ascension stabilisée"],
        recommendation: "Suivi mensuel ou 6 séances rapprochées."
      }
    }
  ]
};

export const SERVICES = [
  {
    title: "Soin Reiki Usui",
    price: "65€",
    duration: "60 min",
    type: "Usui",
    color: "#3B82F6",
    subtitle: "Régénération & Paix",
    description: "Le soin traditionnel japonais pour apaiser le corps et l'esprit. Idéal pour un entretien régulier de votre santé énergétique.",
    detailedBenefits: {
      physique: [{ label: "Douleurs", text: "Soulagement immédiat" }, { label: "Sommeil", text: "Repos profond" }],
      psychique: [{ label: "Stress", text: "Calme mental" }, { label: "Lâcher-prise", text: "Détente globale" }],
      spirituel: [{ label: "Chakras", text: "Harmonisation" }, { label: "Ancrage", text: "Connexion Terre" }]
    }
  },
  {
    title: "Soin Reiki Kundalini",
    price: "85€",
    duration: "75 min",
    type: "Kundalini",
    color: "#8B5CF6",
    subtitle: "Puissance & Libération",
    description: "Une énergie tellurique intense pour transmuter les mémoires profondes et les blocages karmiques.",
    detailedBenefits: {
      physique: [{ label: "Vitalité", text: "Recharge" }, { label: "Prana", text: "Circulation" }],
      psychique: [{ label: "Blocages", text: "Libération" }, { label: "Pouvoir", text: "Confiance" }],
      spirituel: [{ label: "Karmique", text: "Nettoyage" }, { label: "Expansion", text: "Perception" }]
    }
  }
];

export const PROGRAMS = [
  {
    title: "Le Protocole Phoenix",
    sessions: 4,
    focus: "Transmutation VIP & Ascension",
    description: "L'apogée de l'accompagnement énergétique. Ce cycle est conçu pour ceux qui cherchent une refonte complète de leur structure fréquentielle.",
    philosophy: "Le Phénix brûle ses anciennes plumes pour laisser place à une version supérieure de lui-même.",
    perks: [
      { label: "Souveraineté", text: "Accès prioritaire Michael" },
      { label: "Immersion", text: "Méditation canalisée offerte" },
      { label: "Guidance", text: "Suivi VIP 1 mois" },
      { label: "Précision", text: "Bilan complet avant/après" }
    ],
    path: [
      { step: "Ancrage", desc: "Stabilisation du système nerveux.", icon: "Shield", duration: "Semaine 1" },
      { step: "Le Brûlis", desc: "Activation Kundalini ciblée.", icon: "Zap", duration: "Semaine 2" },
      { step: "Transmutation", desc: "Nettoyage karmique profond.", icon: "History", duration: "Semaine 3" },
      { step: "Ascension", desc: "Stabilisation haute fréquence.", icon: "Stars", duration: "Semaine 4" }
    ],
    price: "240€",
    saving: "Économie de 50€"
  }
];

export const BIO_STORY = [
  {
    phase: "L'AUTEUR",
    title: "Poésie Divine",
    text: "L'écriture est pour moi une forme de canalisation. Mes recueils sont conçus pour infuser la lumière dans votre cœur."
  },
  {
    phase: "LE GUIDE",
    title: "21k Âmes Guidées",
    text: "Accompagner ma communauté est ma mission. Chaque partage est une graine d'éveil semée dans le champ collectif."
  }
];
