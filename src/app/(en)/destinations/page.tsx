import { useTranslations } from 'next-intl';
import { LucideIcon, Plane, Mountain, Sun, Pyramid, InfoIcon } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ProjectItem,
  ProjectItemDescription,
  ProjectItemIcon,
  ProjectItemTitle,
} from "@/components/elements/project-item";

interface Destination {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const destinationIconMap = {
  "Plane": Plane,
  "Mountain": Mountain,
  "Sun": Sun,
  "Pyramid": Pyramid,
};

const getDestinations = (t) => {
  const items = t.raw('home.destinations.items') as any[];
  return items.map((item) => {
    const iconComponent = destinationIconMap[item.icon as keyof typeof destinationIconMap] || InfoIcon;
    return {
      ...item,
      icon: iconComponent,
    };
  });
}

export default function DestinationsPage() {
  const t = useTranslations();
  const destinations = getDestinations(t);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('destinationsPage.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('destinationsPage.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <ProjectItem key={index} title={destination.title} description={destination.description}>
                <ProjectItemTitle className="flex items-center gap-2">
                  <ProjectItemIcon>
                    {destination.icon && React.createElement(destination.icon, { className: `h-6 w-6 ${destination.color}` })}
                  </ProjectItemIcon>
                  {destination.title}
                </ProjectItemTitle>
                <ProjectItemDescription>
                  {destination.description}
                </ProjectItemDescription>
              </ProjectItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}