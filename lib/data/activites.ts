export interface Activite {
  id: string
  titre: string
  categorie: string
  duree: string
  materiel: string
  intensite: string
  pourqui: string
  image: string
  description: string
  bienfaits: string[]
  recommandations: string
  aussi: string[]
}

export const activitesData: Record<string, Activite> = {
  "kb-workout": {
    id: "kb-workout",
    titre: "KB WORKOUT",
    categorie: "FORCE",
    duree: "45 min",
    materiel: "Kettlebells",
    intensite: "Moyenne à forte",
    pourqui: "18-55 ans",
    image: "/kb-workout.jpg",
    description: "Le KB Workout est un cours de renforcement musculaire utilisant des kettlebells. Cet entraînement fonctionnel sollicite l'ensemble du corps à travers des mouvements dynamiques et contrôlés.",
    bienfaits: [
      "Améliore la force et la puissance",
      "Développe l'endurance musculaire",
      "Renforce le core et les stabilisateurs",
      "Brûle un maximum de calories"
    ],
    recommandations: "Tenue : Vêtements confortables, chaussures de sport. À prévoir : Serviette et bouteille d'eau.",
    aussi: ["cross-force", "bodypump"]
  },
  "cross-force": {
    id: "cross-force",
    titre: "CROSS FORCE",
    categorie: "FORCE",
    duree: "50 min",
    materiel: "Poids libres",
    intensite: "Forte",
    pourqui: "18-55 ans",
    image: "/cross-force.avif",
    description: "Le Cross Force est un entraînement intense combinant force fonctionnelle et cardio.",
    bienfaits: [
      "Développe la force globale",
      "Améliore l'endurance cardiovasculaire",
      "Sculpte la silhouette",
      "Brûle les graisses"
    ],
    recommandations: "Tenue : Vêtements de sport techniques, chaussures stabilisantes.",
    aussi: ["kb-workout", "bodypump"]
  },
  "aquagym": {
    id: "aquagym",
    titre: "AQUAGYM",
    categorie: "AQUATIQUE",
    duree: "45 min",
    materiel: "Aquatique",
    intensite: "Moyenne",
    pourqui: "Tous niveaux",
    image: "/aquagym.jpg",
    description: "L'Aquagym est une activité douce et complète qui se pratique en piscine.",
    bienfaits: [
      "Renforce les muscles en douceur",
      "Améliore la circulation",
      "Favorise la perte de poids",
      "Soulage les douleurs articulaires"
    ],
    recommandations: "Tenue : Maillot de bain, bonnet de bain obligatoire.",
    aussi: ["bodybalance", "abdos-fessiers"]
  }
  // ... ajoutez toutes les autres activités
}

export const activitesList = Object.values(activitesData)