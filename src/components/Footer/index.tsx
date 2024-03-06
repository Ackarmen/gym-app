import Logo from "@/assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="footer-logo" />
          <p className="my-5">
            EVOGYM est bien plus qu'une salle de sport. Avec des installations
            de moderne et une équipe de coachs passionnés, chaque séance
            d'entraînement devient une expérience motivante. Que vous soyez
            débutant ou athlète confirmé, rejoignez-nous dès aujourd'hui.
          </p>
          <p>&copy; {currentYear} EVOGYM Tous Droits Réservés.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Liens utiles</h4>
          <p className="my-5">
            <a
              href="https://www.leblogdusport.fr/complements-alimentaires-quels-nutriments-pour-un-entrainement-de-qualite/"
              target="_blank"
            >
              Compléments alimentaire
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://www.leblogdusport.fr/choisir-les-produits-de-yoga-qui-correspondent-le-mieux-a-vos-besoins/"
              target="_blank"
            >
              Accessoires indispensables de yoga
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://www.leblogdusport.fr/comment-bien-sequiper-pour-le-running/"
              target="_blank"
            >
              Bien s'équiper pour courir
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">exemple@exemple.com</p>
          <p>(333) 897-9808</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
