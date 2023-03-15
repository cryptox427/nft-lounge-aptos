import Image from "next/image";
import {ReactSVG} from 'react-svg'

export function Footer() {
    return (
        <div className={"footer flex justify-around items-center"}>
            <div></div>
            <p className="pl-32">@ 2023 Lemur Lounge. All rights reserved.</p>
            <div>
                <div className="flex space-x-2">
                    <a className="border border-slate-400 rounded-md flex items-center justify-center space-x-1 px-1 py-0.5 w-24 text-white text-xs"
                       href={'https://twitter.com/LemurLoungeNFT'} target={"_blank"}>
                        <Image src="/twitter.png" width={20} height={20} alt="logo"/>
                        <p>Twitter</p>
                    </a>

                    <a className="border border-slate-400 rounded-md flex items-center justify-center space-x-1 px-1 py-0.5 w-24 text-white text-xs"
                       href={'https://discord.gg/LemurLounge'} target={"_blank"}>
                        <Image src="/discord.png" width={20} height={20} alt="logo"/>
                        <p>Discord</p>
                    </a>
                </div>
                <div className="flex space-x-2">
                    <a className="border border-slate-400 rounded-md flex items-center justify-center space-x-1 px-1 py-0.5 w-24 text-white text-xs"
                       href={'https://www.thelemurlounge.com/'} target={"_blank"}>
                        <Image src="/website.png" width={15} height={15} alt="logo"/>
                        <p>Website</p>
                    </a>
                    <a className="border border-slate-400 rounded-md flex items-center justify-center space-x-1 px-1 py-0.5 w-24 text-white text-xs"
                       href={'https://souffl3.com/collection/ph1ZPEpcTUSbonuALSudY6zTC9kYFWxtZF1ayd9RvefQrdCc57k3C9ZiFNAZS'} target={"_blank"}>
                        <Image src="/market.png" width={20} height={20} alt="logo"/>
                        <p>Market</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
