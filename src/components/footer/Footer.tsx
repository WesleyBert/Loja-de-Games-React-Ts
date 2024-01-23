import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-black text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-x1 font-bold">Loja de Games | copyright:</p>
                    <p className="text-lg">Acesse minhas redes sociais</p>
                    <div className="flex gap-2">
                        <Link to="https://www.linkedin.com/in/wesley-berto/"><LinkedinLogo size={48} weight='bold' /></Link>

                        <GithubLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;