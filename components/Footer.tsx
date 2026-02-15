import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 border-t border-zinc-100 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-2">
                    <img src="/Logo1.png" alt="ArchLift Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>ArchLift</span>
                </div>

                {/* Socials */}
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-zinc-400 hover:text-black transition-colors transform hover:scale-110 duration-200">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-black transition-colors transform hover:scale-110 duration-200">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-black transition-colors transform hover:scale-110 duration-200">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-black transition-colors transform hover:scale-110 duration-200">
                        <Facebook size={20} />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-400 text-sm">
                    &copy; {new Date().getFullYear()} ArchLift. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-zinc-400">
                    <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
