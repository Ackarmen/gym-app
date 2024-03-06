import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import BenefitCard from "@/components/Benefits/BenefitCard";
import ActionButton from "@/components/Button";
import Headings from "@/components/ui/Headings";
import { benefits } from "@/lib/data";
import { BenefitType, SelectedPage } from "@/lib/types";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="avantages" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Avantages)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Headings>PLUS QU'UNE SALLE DE SPORT.</Headings>
          <p className="text-md my-5">
            Des équipements de qualité, des coachs experts et une variété de
            cours pour atteindre vos objectifs en toute simplicité. Nous
            accordons une attention particulière à chacun de nos membres.
          </p>
        </motion.div>

        {/* Benefits Sec */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Headings>
                    DES <span className="text-primary-500">MILLIONS</span> DE
                    MEMBRES{" "}
                    <span className="underline decoration-primary-500 underline-offset-4">
                      HEUREUX
                    </span>{" "}
                    ET{" "}
                    <span className="underline decoration-primary-500 underline-offset-4">
                      SATISFAITS
                    </span>
                  </Headings>
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                {" "}
                Dans un monde où la santé et le bien-être sont essentiels,
                EVOGYM s'engage à offrir une expérience fitness exceptionnelle.
                Notre équipe de professionnels qualifiés est dédiée à vous
                accompagner dans votre parcours de remise en forme, en vous
                fournissant des conseils personnalisés et un soutien constant.
              </p>
              <p className="mb-5">
                Notre salle de sport compte des millions de membres satisfaits,
                attestant de la qualité de nos services et installations.
                Rejoignez EVOGYM pour atteindre vos objectifs de remise en forme
                avec succès, aux côtés de nos coachs experts.
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Nous Rejoindre
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
