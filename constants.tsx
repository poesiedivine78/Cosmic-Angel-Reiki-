
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
      title: "Douleurs Chroniques", 
      reiki: "Usui", 
      desc: "Soulagement des tensions cristallisées dans le corps.", 
      icon: "Activity",
      impact: { physical: 90, emotional: 40, spiritual: 20 },
      details: {
        origin: "Énergie stagnante suite à un traumatisme non résolu ou une posture émotionnelle rigide.",
        benefits: ["Relâchement myofascial", "Diminution de l'inflammation", "Réparation cellulaire accélérée"],
        recommendation: "3 à 5 séances pour un déracinement durable."
      }
    },
    { 
      title: "Fatigue & Burn-out", 
      reiki: "Kundalini", 
      desc: "Recharge vitale pour les systèmes épuisés.", 
      icon: "Zap",
      impact: { physical: 85, emotional: 75, spiritual: 50 },
      details: {
        origin: "Fuite énergétique majeure au niveau du plexus solaire et épuisement des surrénales.",
        benefits: ["Restauration du Prana", "Clarté mentale retrouvée", "Motivation profonde"],
        recommendation: "Accompagnement de 4 séances (Protocole Phoenix conseillé)."
      }
    },
    { 
      title: "Stress & Sommeil", 
      reiki: "Usui", 
      desc: "Régulation du système nerveux pour un repos total.", 
      icon: "Moon",
      impact: { physical: 70, emotional: 60, spiritual: 30 },
      details: {
        origin: "Hyper-stimulation du chakra frontal et manque d'ancrage racinaire.",
        benefits: ["Apaisement du système parasympathique", "Sommeil réparateur", "Diminution du cortisol"],
        recommendation: "2 séances pour stabiliser le cycle du sommeil."
      }
    },
    { 
      title: "Troubles Digestifs", 
      reiki: "Usui", 
      desc: "Libération du plexus solaire et du ventre.", 
      icon: "Wind",
      impact: { physical: 80, emotional: 65, spiritual: 25 },
      details: {
        origin: "Contrôle excessif ou émotions 'non digérées' stagnantes dans le ventre.",
        benefits: ["Relance du transit", "Apaisement du feu digestif", "Harmonie viscérale"],
        recommendation: "3 séances pour un rééquilibrage global."
      }
    },
    { 
      title: "Migraines & Tensions", 
      reiki: "Kundalini", 
      desc: "Décompression mentale et fluidité circulatoire.", 
      icon: "Layers",
      impact: { physical: 75, emotional: 70, spiritual: 40 },
      details: {
        origin: "Suractivité mentale et surcharge au niveau du chakra de la couronne.",
        benefits: ["Baisse de la pression intracrânienne", "Libération des cervicales", "Clarté de vision"],
        recommendation: "2 à 3 séances de déblocage intense."
      }
    }
  ],
  psychique: [
    { 
      title: "Anxiété & Peurs", 
      reiki: "Usui", 
      desc: "Sécurisation émotionnelle et retour au présent.", 
      icon: "Brain",
      impact: { physical: 50, emotional: 95, spiritual: 40 },
      details: {
        origin: "Fragilité de l'aura laissant filtrer les énergies environnantes négatives.",
        benefits: ["Bulle de protection énergétique", "Confiance en soi", "Sérénité face à l'imprévu"],
        recommendation: "3 séances espacées de 15 jours."
      }
    },
    { 
      title: "Blocages Émotionnels", 
      reiki: "Kundalini", 
      desc: "Libération des mémoires cellulaires anciennes.", 
      icon: "Heart",
      impact: { physical: 40, emotional: 100, spiritual: 60 },
      details: {
        origin: "Empreintes karmiques ou d'enfance logées dans le chakra du cœur.",
        benefits: ["Pleurs libérateurs", "Ouverture du cœur", "Transmutation des rancœurs"],
        recommendation: "1 à 2 séances intenses."
      }
    },
    { 
      title: "Deuil & Séparation", 
      reiki: "Usui", 
      desc: "Accompagnement dans la transition et l'acceptation.", 
      icon: "Shield",
      impact: { physical: 30, emotional: 90, spiritual: 70 },
      details: {
        origin: "Coupure brutale des liens énergétiques sans fermeture de cycle.",
        benefits: ["Apaisement du manque", "Acceptation du départ", "Reconstruction de l'espace sacré"],
        recommendation: "4 séances pour traverser les étapes du deuil."
      }
    },
    { 
      title: "Confiance en Soi", 
      reiki: "Kundalini", 
      desc: "Rayonnement du pouvoir personnel intérieur.", 
      icon: "Zap",
      impact: { physical: 60, emotional: 85, spiritual: 50 },
      details: {
        origin: "Affaissement du chakra du plexus solaire suite à des dévalorisations répétées.",
        benefits: ["Posture de leader retrouvée", "Capacité d'action directe", "Affirmation de sa vérité"],
        recommendation: "3 séances d'activation de la force intérieure."
      }
    },
    { 
      title: "Charge Mentale", 
      reiki: "Usui", 
      desc: "Vider le trop-plein pour retrouver le calme.", 
      icon: "Layers",
      impact: { physical: 45, emotional: 80, spiritual: 35 },
      details: {
        origin: "Saturation du canal mental par une accumulation de responsabilités.",
        benefits: ["Silence intérieur", "Priorisation intuitive", "Détachement émotionnel"],
        recommendation: "2 séances pour un nettoyage mental profond."
      }
    }
  ],
  spirituel: [
    { 
      title: "Perte de Sens", 
      reiki: "Usui", 
      desc: "Réalignement avec votre mission d'âme.", 
      icon: "Compass",
      impact: { physical: 10, emotional: 60, spiritual: 100 },
      details: {
        origin: "Déconnexion du Moi Supérieur et oubli des codes stellaires originels.",
        benefits: ["Intuition décuplée", "Synchronicités accrues", "Vision claire de son chemin"],
        recommendation: "1 séance de reconnexion profonde."
      }
    },
    { 
      title: "Syndrome Starseed", 
      reiki: "Kundalini", 
      desc: "S'ancrer dans l'incarnation terrestre.", 
      icon: "Stars",
      impact: { physical: 35, emotional: 70, spiritual: 95 },
      details: {
        origin: "Difficulté de l'âme à supporter la densité vibratoire de la Terre.",
        benefits: ["Sentiment d'appartenance", "Ancrage puissant", "Activation des codes d'origine"],
        recommendation: "2 séances pour harmoniser ciel et terre."
      }
    },
    { 
      title: "Intuition Bloquée", 
      reiki: "Usui", 
      desc: "Ouverture du 3ème œil et clairvoyance.", 
      icon: "Eye",
      impact: { physical: 5, emotional: 50, spiritual: 90 },
      details: {
        origin: "Peur inconsciente du monde invisible ou rationalisation excessive.",
        benefits: ["Perceptions subtiles accrues", "Rêves lucides", "Confiance en ses ressentis"],
        recommendation: "3 séances de déblocage du chakra frontal."
      }
    },
    { 
      title: "Mémoires Karmiques", 
      reiki: "Kundalini", 
      desc: "Nettoyage des dettes et schémas ancestraux.", 
      icon: "History",
      impact: { physical: 20, emotional: 75, spiritual: 100 },
      details: {
        origin: "Pactes, vœux ou traumatismes issus de vies antérieures.",
        benefits: ["Libération des schémas répétitifs", "Allègement de l'âme", "Souveraineté retrouvée"],
        recommendation: "Cycle de 5 séances (Protocole Phoenix vivement conseillé)."
      }
    },
    { 
      title: "Nuit Noire de l'Âme", 
      reiki: "Kundalini", 
      desc: "Renaître après un effondrement spirituel.", 
      icon: "RefreshCw",
      impact: { physical: 40, emotional: 90, spiritual: 100 },
      details: {
        origin: "Mort de l'ego nécessaire pour une ascension vibratoire majeure.",
        benefits: ["Lumière dans l'obscurité", "Force de résilience divine", "Transformation radicale"],
        recommendation: "Accompagnement long terme (6 séances) ou Phoenix."
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
