export enum SelectedPage {
  Accueil = "accueil",
  Avantages = "avantages",
  Cours = "cours",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClasseType {
  classeTitle: string;
  description: string;
  image: string;
}
