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
    title: "State of the Art Facillities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid veniam eum rem atque voluptates a quia sed accusantium id.",
  },
  {
    icon: React.createElement(UserGroupIcon),
    title: "100's od Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid veniam eum rem atque voluptates a quia sed accusantium id.",
  },
  {
    icon: React.createElement(AcademicCapIcon),
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid veniam eum rem atque voluptates a quia sed accusantium id.",
  },
] as const;

export const classes: ClasseType[] = [
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image1,
  },
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image2,
  },
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image3,
  },
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image4,
  },
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image5,
  },
  {
    classeTitle: "Weight Training Classes",
    description:
      "Lorem ipsum, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quos.",
    image: image6,
  },
] as const;
