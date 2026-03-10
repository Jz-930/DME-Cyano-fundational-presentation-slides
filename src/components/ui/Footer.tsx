import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#02050a] border-t border-white/5 py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-gray-400 font-light">
                    <div className="space-y-4">
                        <Link href="https://dmestudio-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="relative block h-8 w-32 mb-6">
                            <Image src="/images/logos/dmmi_logo_white.webp" alt="DME Studio Logo" fill className="object-contain object-left" />
                        </Link>
                        <p className="leading-relaxed">专门帮助多伦多及北美金融、保险 Broker 建立高质感数字营销系统。用“极高视觉质感”+“互动式Web App”筛选高客。</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase">Core Solutions</h4>
                        <ul className="space-y-3">
                            <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Premium Assets</span></li>
                            <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">Functional Web Dev</span></li>
                            <li><span className="hover:text-cyan-400 transition-colors cursor-pointer">A/B Testing Strategies</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase">AI Division</h4>
                        <Link href="https://cyano-display.netlify.app/" target="_blank" rel="noopener noreferrer" className="relative block h-6 w-24 mb-4">
                            <Image src="/images/logos/cyano_logo_green.webp" alt="Cyano Logo" fill className="object-contain object-left" />
                        </Link>
                        <ul className="space-y-3">
                            <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Agentic Retrieval (RAG)</span></li>
                            <li><span className="hover:text-emerald-400 transition-colors cursor-pointer">Auto Proposal System</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase">Connect</h4>
                        <ul className="space-y-3">
                            <li><a href="tel:+16478706338" className="hover:text-cyan-400 transition-colors">+1 647-870-6338</a></li>
                            <li><a href="mailto:jiackey.zhang@dmestudio.net" className="hover:text-cyan-400 transition-colors">jiackey.zhang@dmestudio.net</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex items-center justify-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DME Studio &amp; Cyano. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
