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
          <Image src="/logo.png" width={640} height={400} alt="logo" />
        </a>
      </div>
        <div className="text-white" style={{marginTop: -120, marginBottom: 70}}>Welcome to The Lounge.
            Build out the lounge, lounge your lemur.</div>
      <AptosConnect />
    </nav>
  );
}
