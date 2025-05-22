import Button from "../Elements/Button";

const Navbar = () => {
  return (
    <nav className="h-6 justify-center items-center gap-4 inline-flex">
      <Button
        type="link"
        href="#"
        outerClassName="w-[132px]"
        btnClassName="w-[132px] text-slate-500 font-normal hover:text-primary leading-normal"
      >
        Education
      </Button>

      <Button
        type="link"
        href="#"
        outerClassName="w-[132px]"
        btnClassName="w-[132px] text-slate-500 font-normal hover:text-primary leading-normal"
      >
        About Us
      </Button>

      <Button
        type="link"
        href="#"
        outerClassName="w-[132px]"
        btnClassName="w-[132px] text-slate-500 font-normal hover:text-primary leading-normal"
      >
        Contact Us
      </Button>
    </nav>
  );
};

export default Navbar;
