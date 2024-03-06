import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { BenefitType, ClasseType } from "@/lib/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const benefits: BenefitType[] = [
  {
    icon: React.createElement(HomeModernIcon),
    title: "Installations de Pointe",
    description:
      "Nos installations ultramodernes offrent un environnement propice à votre entraînement. Avec des équipements dernier cri et des espaces bien aménagés, vous bénéficierez d'une expérience fitness exceptionnelle.",
  },
  {
    icon: React.createElement(UserGroupIcon),
    title: "+100 Cours Variés",
    description:
      "Découvrez une multitude de cours adaptés à tous les niveaux et tous les intérêts. Que vous préfériez le cardio, le renforcement musculaire, le yoga ou la danse, vous trouverez forcément une activité qui vous convient.",
  },
  {
    icon: React.createElement(AcademicCapIcon),
    title: "Entraîneurs Experts et Professionnels",
    description:
      "Notre équipe de coachs hautement qualifiés est là pour vous guider et vous motiver à atteindre vos objectifs. Avec leur expertise et leur dévouement, vous bénéficierez d'un encadrement personnalisé pour des résultats optimaux.",
  },
] as const;

export const classes: ClasseType[] = [
  {
    classeTitle: "Cours de Renforcement Musculaire",
    description:
      "Augmenter la force musculaire et développer la masse musculaire.",
    image: image1,
  },
  {
    classeTitle: "Yoga et Méditation",
    description:
      "Favoriser la flexibilité, réduire le stress et améliorer la concentration.",
    image: image2,
  },
  {
    classeTitle: "Cours de Cardio Intensif",
    description:
      "Améliorer l'endurance cardiovasculaire et brûler les graisses.",
    image: image3,
  },
  {
    classeTitle: "Cours de Pilates",
    description:
      "Renforcer les muscles profonds, améliorer la posture et favoriser la stabilité.",
    image: image4,
  },
  {
    classeTitle: "Entraînement HIIT",
    description:
      "Améliorer la condition physique générale, brûler des calories et augmenter le métabolisme.",
    image: image5,
  },
  {
    classeTitle: "Cours de Stretching et Relaxation",
    description:
      "Améliorer la souplesse, soulager les tensions musculaires et favoriser la détente.",
    image: image6,
  },
] as const;
