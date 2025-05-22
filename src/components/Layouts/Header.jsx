import Logo from "../Fragments/Logo";
import Navbar from "../Fragments/Navbar";
import Authentication from "../Fragments/Authentication";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[21px] sticky top-0 z-50 bg-secondary/[0.98] px-[80px]">
      <Logo
        imageClassName="w-6 h-6"
        textClassName="text-2xl leading-9"
        textLogo="Pawsome"
      />
      <Navbar />
      <Authentication />
    </header>
  );
};

export default Header;
