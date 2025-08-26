// src/components/section-cta.tsx
import { Button } from "@/components/ui/button";

export function SectionCTA() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-24 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
                Have you fallen in love with Ryoma?
            </h2>
            <p className="text-zinc-300 mt-3">
                Even small things are fine. Let's grow together with Ryoma.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
                    <a href="https://x.com/Ryom1809" target="_blank" rel="noopener noreferrer">
                        contact now
                    </a>
                </Button>

            </div>
        </section>
    );
}
