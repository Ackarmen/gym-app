import { BenefitType } from "@/lib/types";
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
