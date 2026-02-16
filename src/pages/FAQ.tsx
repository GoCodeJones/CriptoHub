import { faqItems } from "@/data/content";

const FAQ = () => (
  <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
    <h1 className="text-4xl font-bold text-foreground">FAQ</h1>
    <div className="space-y-6">
      {faqItems.map((item, i) => (
        <div key={i} className="space-y-2">
          <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
