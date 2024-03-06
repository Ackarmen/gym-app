import Logo from "@/assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="footer-logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestiae aspernatur quam facere dolorum vel dolore, temporibus nam
            atque eveniet beatae error ipsum autem suscipit?
          </p>
          <p>&copy; {currentYear} EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5">Lorem ipsum azaz sitaz</p>
          <p className="my-5">Lorem ipsum artusq sit</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum artusq sit ipsum</p>
          <p>(333)897-9808</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
