import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import NavItems from "./NavItems";

function MobileNav() {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="lg:hidden align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col gap-6 bg-white">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={100}
            height={100}
            priority
          />
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
