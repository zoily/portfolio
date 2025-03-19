import { Experience, Education, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Loïc MEIGNIER",
  title: "Développeur web freelance",
  location: "Dijon, FR",
  phone: "06 79 05 11 07",
  email: "loicmeignier@gmail.com",
  linkedin: "linkedin.com/in/loicmeignier"
};

export const experiences: Experience[] = [
  {
    startDate: "2024-02",
    endDate: "2024-04",
    title: "Module de gestion RH",
    company: "GIP CPage/Atol",
    location: "Dijon, FR",
    description: "Création d'un outil de gestion de ticket intégré au produit principal, TMA des différentes solutions proposées par le pôle",
    technologies: ["VS Code", "IntelliJ", "Eclipse", "Maven", "Spring", "Java 8", "GitLab (CI/CD)", "Jenkins", "Jira", "Ottama"]
  },
  {
    startDate: "2022-07",
    endDate: "2023-09",
    title: "Design system",
    company: "Enedis",
    location: "Lyon, FR",
    description: "Développement d'un design system en Lit (web components)",
    technologies: ["Lit", "storybook", "web components", "atomic design", "github", "Figma"]
  },
  {
    startDate: "2021-06",
    endDate: "2022-06",
    title: "Solution de gestion de lits hospitaliers",
    company: "Maincare",
    location: "Dijon, FR",
    description: "Développement d'un outil web de cartographie de lits hospitaliers",
    technologies: ["Vue.js", "Vuen", "Typescript", "JavaEE", "Maven", "GitLab"]
  },
  {
    startDate: "2019-11",
    endDate: "2021-05",
    title: "Payment Tracker",
    company: "iBanFirst",
    location: "Dijon, FR",
    description: "Création d'un outil web de tracking de paiements (Component Driven Development), TMA du produit principale",
    technologies: ["React.js", "Redux", "Storybook", "GitLab", "PHP", "Solid"]
  },
  {
    startDate: "2018-11",
    endDate: "2019-11",
    title: "Interfaces logicielles d'un outil de santé",
    company: "GIP CPage/Atleca",
    location: "Dijon, FR",
    description: "En charge de la TMA de niveau 1 à 3 et du développement de solutions, dans le domaine de l'interopérabilité dans le secteur de la santé",
    technologies: ["Java EE", "Web Services", "Maven", "SQL"]
  },
  {
    startDate: "2015-06",
    endDate: "2018-11",
    title: "Geolys",
    company: "TEVOLYS",
    location: "Dijon, FR",
    description: "Participation à l'élaboration d'un logiciel de smart office",
    technologies: ["C#", "Azure", "Vue.js", "SharePoint", "NoSQL"]
  },
  {
    startDate: "2012-06",
    endDate: "2015-02",
    title: "Outil de gestion agricole",
    company: "Estalis",
    location: "Dijon, FR",
    description: "Développement d'une application web destinée aux agriculteurs, en alternance",
    technologies: ["C#", "ASP.NET MVC", "Angular", "Ionic", "jQuery", "SQL"]
  }
];

export const education: Education[] = [
  {
    startDate: "2013",
    endDate: "2015",
    degree: "Titre d'expert en ingénierie (bac+5)",
    school: "CUCDB",
    location: "Dijon, FR",
    description: "Titre d'Expert en Ingénierie Informatique Appliquée"
  },
  {
    startDate: "2011",
    endDate: "2012",
    degree: "Licence professionnelle",
    school: "Université de Franche-Comté",
    location: "Besançon, FR",
    description: "Développement orienté objet multi-tiers"
  }
];
