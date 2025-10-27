import { useTranslations } from 'next-intl';
import { LucideIcon, Sunrise, Train, Anchor, Compass, InfoIcon } from "lucide-react";
import React from "react";
import ClientOnly from "@/components/ClientOnly";
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
  ProjectItemPeriod,
} from "@/components/elements/project-item";

interface TravelStory {
  icon: LucideIcon;
  title: string;
  period: string;
  description: string;
  color: string;
}

const travelStoryIconMap = {
  "Sunrise": Sunrise,
  "Train": Train,
  "Anchor": Anchor,
  "Compass": Compass,
};

const getTravelStories = (t) => {
  const items = t.raw('home.travel_stories.items') as any[];
  return items.map((item) => {
    const iconComponent = travelStoryIconMap[item.icon as keyof typeof travelStoryIconMap] || InfoIcon;
    return {
      ...item,
      icon: iconComponent,
    };
  });
}

export default function StoriesPage() {
  const t = useTranslations();
  const travelStories = getTravelStories(t);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {t('travelStoriesPage.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('travelStoriesPage.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Travel Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelStories.map((story, index) => (
              <ClientOnly key={index}>
                <ProjectItem key={index} title={story.title} description={story.description}>
                  <Popover>
                    <PopoverTrigger className="cursor-pointer">
                      <ProjectItemTitle className="flex items-center gap-2">
                        <ProjectItemIcon>
                          {story.icon && React.createElement(story.icon, { className: `h-6 w-6 ${story.color}` })}
                        </ProjectItemIcon>
                        {story.title}
                        <InfoIcon className="h-4 w-4 text-muted-foreground" />
                      </ProjectItemTitle>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] text-sm">
                      {story.description}
                    </PopoverContent>
                  </Popover>
                  {story.period && (
                    <ProjectItemPeriod className="text-xs text-muted-foreground -mt-2 -mb-1 md:-mt-3 md:-mb-2">
                      {story.period || "???"}
                    </ProjectItemPeriod>
                  )}
                  <ProjectItemDescription className="line-clamp-8 md:line-clamp-6 lg:line-clamp-5">
                    {story.description}
                  </ProjectItemDescription>
                </ProjectItem>
              </ClientOnly>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}