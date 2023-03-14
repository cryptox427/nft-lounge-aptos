import Image from "next/image";
import { ReactSVG } from 'react-svg'

export function Footer() {
    return (
        <div className={"footer"}>
            <div></div>
            <p>@ 2023 Lemur Lounge. All rights reserved.</p>
            <div className={"flex"}>
                <a href={'https://discord.com'} target={"_blank"}><Image src="/discord.png" width={30} height={30} alt="logo" /></a>
                <a href={'https://instagram.com'} target={"_blank"}><Image src="/instagram.png" width={30} height={30} alt="logo" /></a>
                <a href={'https://twitter.com'} target={"_blank"}><Image src="/twitter.png" width={30} height={30} alt="logo" /></a>
                {/*<a href={'https://discord.com'} target={"_blank"}><Image src="/discord.png" width={30} height={30} alt="logo" /></a>*/}
            </div>
        </div>
    )
}
