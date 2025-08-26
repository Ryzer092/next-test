// components/section-community.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const people = [
    { name: "Joe", role: "CTO", img: "avatars/joe.png" },
    { name: "emma", role: "developer", img: "avatars/emma.png" },
    { name: "key", role: "friend", img: "avatars/key.png" },
];

export function SectionCommunity() {
    return (
        <section id="community" className="mx-auto max-w-6xl px-4 py-20">

            <div className="grid md:grid-cols-2 gap-10 items-start">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">Ryoma's review</h2>
                    <p className="text-zinc-300 mt-3 leading-7">
                        A diverse group of people who have worked with Ryoma, including founders, engineers, filmmakers,
                        writers, and researchers, gather under the same roof, and a culture of naturally helping each other
                        with projects has taken root.
                    </p>
                    <Separator className="my-6 bg-white/10" />
                    <div className="flex -space-x-3">
                        {people.map((p) => (
                            <Avatar key={p.name} className="border border-white/20">
                                <AvatarImage src={p.img} alt={p.name} />
                                <AvatarFallback>{p.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                    <p className="text-xs text-zinc-400 mt-3">
                        ※ Please refrain from contacting them directly.
                    </p>
                </div>


                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-zinc-200 leading-7">
                        <p className="italic">
                            “I was a bit worried when I met him, but I met some friends who became like family, and the project really took off. It was a turning point in my life.”
                        </p>
                        <p className="mt-4 text-zinc-400">— Joe</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-zinc-200 leading-7">
                        <p className="italic">
                            “He works as fast as a bullet train. He really helped me out.”
                        </p>
                        <p className="mt-4 text-zinc-400">— Emma</p>
                    </div>
                </div>
            </div>
        </section>
    );
}