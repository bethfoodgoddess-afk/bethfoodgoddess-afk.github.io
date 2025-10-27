import React from "react";
import { Section } from "@/components/ui/section";
import { portfolioItems, otherPortfolioItems } from "@/items/portfolioData";
import { PortfolioItem } from "@/components/elements/portfolio-item";
import { MessageSquare, Search, HelpCircle, Brain, Code, Book, Atom, Zap, FileText, LucideIcon, MonitorSmartphone, Bot, BookOpen, Cloud } from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  "MessageSquare": MessageSquare,
  "Search": Search,
  "HelpCircle": HelpCircle,
  "Brain": Brain,
  "Code": Code,
  "Book": Book,
  "Atom": Atom,
  "Zap": Zap,
  "FileText": FileText,
  "MonitorSmartphoneIcon": MonitorSmartphone,
  "Bot": Bot,
  "BookOpen": BookOpen,
  "Cloud": Cloud,
};


interface PortfolioProps {
  title?: string;
  className?: string;
}

export default function Portfolio({
  title,
  className,
}: PortfolioProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto">
        {title && (
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        )}

        {title && (
          <p className="py-8">
            As a software engineer, I worked on many (open-source) &quot;personal projects&quot; over the years,
            which I used to use as my &quot;portfolio&quot; (unlike the Web designers or frontend developers).
            They are all still available
            in the public repositories, but none of them are actively maintained at this point.
            Instead,
            I&apos;ve been mostly working on AI/LLM development recently,
            not because it&apos;s a trend/fad,
            but because I genuinely believe that there can be a lot that I can contribute
            in this developing area.
            Here are some of the &quot;demo&quot; apps I have developed in the past year or so
            while learning the AI/LLM programming.
            (TBD: These demo apps will be made available on the Web, possibly in the next few weeks.)
          </p>
        )}

        {portfolioItems.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                label={item.label}
                url={item.url}
                description={item.description}
                screenshot={item.screenshot}
                icon={item.icon ? React.createElement(iconMap[item.icon], { className: `h-6 w-6 ${item.color ?? ''}` }) : undefined}
              />
            ))}
          </div>
        )}

        <h3 className="mt-8 mb-4">Other RAG-Based Chatbots</h3>

        {otherPortfolioItems.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {otherPortfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                label={item.label}
                url={item.url}
                description={item.description}
                screenshot={item.screenshot}
                icon={item.icon ? React.createElement(iconMap[item.icon], { className: `h-6 w-6 ${item.color ?? ''}` }) : undefined}
              />
            ))}
          </div>
        )}

      </div>
    </Section>
  );
}
