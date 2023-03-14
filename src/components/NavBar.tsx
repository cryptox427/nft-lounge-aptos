import Image from "next/image";
import { NavItem } from "./NavItem";
import { AptosConnect } from "./AptosConnect";
import {
  MODULE_URL
} from "../config/constants";

export function NavBar() {
  return (
    <nav className={"text-center"}>
      <div>
        <a href="/" target="_self">
          <Image src="/logo.png" width={640} height={320} alt="logo" />
        </a>
      </div>
      <AptosConnect />
    </nav>
  );
}
