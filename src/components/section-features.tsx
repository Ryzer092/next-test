// components/section-features.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap, Rocket, Landmark, Twitter, University } from "lucide-react";

type Item = {
    date: string;               // "2024-10" など
    title: string;              // 肩書き
    org?: string;               // 会社/学校
    location?: string;          // 任意
    description: string;        // 詳細
    tags?: string[];            // 任意
    icon?: React.ElementType;   // lucide アイコン
};

// ← ここをあなたの経歴で書き換えてください
const timeline: Item[] = [
    {
        date: "2023-09～2024-12",
        title: "LeaPUP! Inc. Intern",
        org: "LeaPUP! Inc",
        description: "Responsible for creating website pages and project management at an educational startup.",
        tags: ["PM", "HTML", "CSS"],
        icon: Building,
    },
    {
        date: "2023-12～now",
        title: "SNS operation business",
        org: "Sole proprietor",
        description: "Providing toC services on SNS",
        tags: ["algorithm", " marketing"],
        icon: Twitter,
    },
    {
        date: "2024-1～2024-8",
        title: "Rule-making in LLC-type DAOs",
        org: "LDP Web3PT",
        description: "We created rules for the establishment of a limited liability company-type DAO.",
        tags: ["DAO", "law"],
        icon: Landmark,
    },
    {
        date: "2025-03",
        title: "High school graduation",
        org: "Ibaraki high school",
        description: "Successfully completed higher education in Japan.",
        tags: ["Main subjects"],
        icon: GraduationCap,
    },
    {
        date: "2025-4～",
        title: "University student",
        org: "Toyo University",
        description: "Faculty of Information and Collaboration",
        tags: ["AI", "Web"],
        icon: University,
    },
    {
        date: "2025-8",
        title: "Endowed Chair in Global Consumption Intelligence, University of Tokyo",
        org: "Tokyo University",
        description: "Graduated from Data Science and Machine Learning Department",
        tags: ["AI", "Machine Learning", "Data Science"],
        icon: GraduationCap,
    },
];

export function SectionFeatures() {
    // 新しい→古い順にしたいなら下の sort を使う
    // const sorted = [...timeline].sort((a, b) => b.date.localeCompare(a.date));
    const sorted = timeline;

    return (
        <section id="features" className="mx-auto max-w-4xl px-4 py-20">
            <div className="mb-10">
                <h2 className="text-3xl font-semibold">Ryoma's career</h2>
                <p className="text-zinc-400 mt-2">Ryoma's history to date</p>
            </div>

            <ol className="relative border-l border-white/10">
                {sorted.map((item, i) => {
                    const Icon = item.icon ?? Building;

                    return (
                        <li key={i} className="mb-10 ml-6">
                            {/* 左のドット */}
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black ring-8 ring-black/80">
                                <Icon className="h-3 w-3" />
                            </span>

                            {/* 本体カード */}
                            <Card className="border-white/10 bg-white/5">
                                <CardContent className="p-5">
                                    <div className="grid grid-cols-[1fr_auto] items-baseline gap-2">
                                        {/* 左カラム：タイトル＋（任意で所属） */}
                                        <div className="min-w-0">
                                            <h3 className="text-xl md:text-[22px] font-semibold text-zinc-100 leading-6">
                                                {item.title}
                                            </h3>
                                            {item.org ? (
                                                <p className="text-sm text-zinc-300 mt-0.5">{item.org}</p>
                                            ) : null}
                                        </div>

                                        {/* 右カラム：日付 */}
                                        <span className="text-xs text-zinc-400 whitespace-nowrap">{item.date}</span>
                                    </div>


                                    {item.location ? (
                                        <div className="text-xs text-zinc-400 mt-1">{item.location}</div>
                                    ) : null}

                                    <p className="mt-3 text-sm text-zinc-300 leading-7">{item.description}</p>

                                    {item.tags?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {item.tags.map((t) => (
                                                <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-zinc-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </CardContent>
                            </Card>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
