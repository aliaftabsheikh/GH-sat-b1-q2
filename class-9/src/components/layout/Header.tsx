import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between bg-blue-300">
      <div className="font-bold text-xl">LOGO</div>
      <ul className="hidden md:flex gap-1 list-none ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col gap-1 list-none ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
