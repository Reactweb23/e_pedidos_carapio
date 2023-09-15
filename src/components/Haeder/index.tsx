import Image from "next/image"
import { Information } from "../Information"

export const Header = () => {
    return (
        <header className="flex flex-col bg-slate-200 relative  overflow-x-hidden">
            <div className="flex items-center w-screen justify-between">
                <div className="flex flex-col gap-1 ">
                    <div className="flex items-center gap-1">
                        <Image
                            height={18}
                            width={18}
                            src="/instagram.svg"
                            alt="instagram epedidos"
                        />
                        <p className="text-xs">@epedios</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            height={18}
                            width={18}
                            src="/play.svg"
                            alt="playstore epedidos"
                        />
                        <p className="text-xs">epedios/playstore</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image
                            height={18}
                            width={18}
                            src="/apple.svg"
                            alt="applestore epedidos"
                        />
                        <p className="text-xs">epedios/applestore</p>
                    </div>
                </div>
                <h1 className="text-lg font-medium" >E-Pedidos</h1>
                <Image
                    height={80}
                    width={80}
                    src="/logo.svg"
                    alt="logo"
                />
            </div>
            <Information />
        </header>
    )
}