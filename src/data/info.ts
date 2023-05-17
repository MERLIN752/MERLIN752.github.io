export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Pierre Allain",
  jobDescription: "Développeur débutant",
  about: "Je suis un développeur en cours de formation dans l'école Ynov, à Lyon, je suis plutôt orienté Backend et Applications.",

  experience: [
    {
      name: "Développeur C# pour le projet Holo Lens",
      location: "Lyon, France",
      startDate: "Novembre 2022",
      endDate: "Mai 2023",
      description: ["Développeur C# dans le cadre d'un projet de réalisation d'expériences pour la réalité augmentée"
      ],
    },
  ],

  education: [
    {
      name: "Bachelor informatique Lyon Ynov Campus",
      location: "Lyon, France",
      startDate: "2022",
      endDate: "2025",
      description: [
        "Bachelor informatique dans l'école Lyon Ynov Campus, école privée à Lyon 7."
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/MERLIN752",
    email: "pierre.allain2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/pierre-allain-72a2361a0/",
  },

  projects: [
    {
      title: "Boxxle style Zelda",
      isFeatured: true,
      thumbnail: "./assets/images/boxxle.png",
      githubUrl: "https://ytrack.learn.ynov.com/git/apierre/boxxle",
    },

    {
      title: "Music Tracker",
      isFeatured: true,
      thumbnail: "./assets/images/musicTracker.png",
      githubUrl: "https://github.com/Lyon-Ynov-Campus/groupie-tracker-musictracker",
    },

    {
      title: "Hangman Go",
      isFeatured: true,
      thumbnail: "./assets/images/hangmanGo.png",
      githubUrl: "https://ytrack.learn.ynov.com/git/apierre/hangman-classic",
    }
  ],
};
