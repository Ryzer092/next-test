import { Button } from "@/components/ui/button";


export function SectionHero() {
    return (
        <section className="relative bg-page">
            <div className="mx-auto max-w-6xl px-4 py-28 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">A place for people who want to know Ryoma</p>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
                    Ryoma's special introduction
                </h1>
                <p className="mt-6 text-zinc-300 max-w-2xl mx-auto">
                    If you want to know more about Ryoma, you should read this.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
                        <a href="https://x.com/Ryom1809" target="_blank" rel="noopener noreferrer">
                            contact now
                        </a>
                    </Button>
                </div>
            </div>
            <div className="pointer-events-none select-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-black" />
        </section>
    );
}