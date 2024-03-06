import ClasseCard from "@/components/OurClasses/ClasseCard";
import Headings from "@/components/ui/Headings";
import { classes } from "@/lib/data";
import { ClasseType, SelectedPage } from "@/lib/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="cours">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Cours)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Headings>Les Cours</Headings>
            <p className="py-5">
              Avec nos équipements de pointe et nos programmes variés, vous
              trouverez chez EVOGYM l'inspiration et la motivation nécessaires
              pour atteindre vos objectifs.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClasseType) => (
              <ClasseCard
                key={item.classeTitle}
                classeTitle={item.classeTitle}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
