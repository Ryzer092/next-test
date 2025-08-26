// components/site-header.tsx
import { Button } from "@/components/ui/button";

const X_URL = "https://x.com/Ryom1809";


export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
            <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
                <a href="#" className="font-semibold tracking-wide">Ryoma<span className="text-zinc-400">-introduce</span></a>
                <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#community" className="hover:text-white">Reviwe</a>
                    <a href="#faq" className="hover:text-white">FAQs</a>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="text-zinc-200">Make a donation</Button>
                    <Button asChild className="bg-white text-black hover:bg-zinc-200">
                        <a href="https://x.com/Ryom1809" target="_blank" rel="noopener noreferrer">
                            contact
                        </a>
                    </Button>

                </div>
            </div>
        </header>
    );
}