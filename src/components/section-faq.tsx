// components/section-faq.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


export function SectionFAQ() {
    return (
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">FAQs</h2>
            <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are Ryoma's skills?</AccordionTrigger>
                    <AccordionContent>
                        I am good at Python, Javascript, and Typescript.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>I'm worried about Ryoma's personality. What's he like?</AccordionTrigger>
                    <AccordionContent>
                        He can be a little impatient, but he is calm and kind.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>I would like to ask him for a job. How can I do that?</AccordionTrigger>
                    <AccordionContent>
                        You can apply by clicking the contact button on the page.👆
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}