type Props = {};

const Navbar = ({}: Props) => {
  const flexBetween = "flex item-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
};

export default Navbar;
