
import ClientOnly from '@/components/ClientOnly';
import { ProjectItem, ProjectItemDescription, ProjectItemIcon, ProjectItemTitle } from '@/components/elements/project-item';
import { Popover } from '@radix-ui/react-popover';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import { Camera, Mountain, Turtle, Building, InfoIcon } from 'lucide-react';

const portfolioIconMap = {
  "Camera": Camera,
  "Mountain": Mountain,
  "Turtle": Turtle,
  "Building": Building,
};

export default function GalleryPage() {
  const t = useTranslations();

  const rawGallery = t.raw('home.photo_gallery.items') as any[];
  const photoGallery = rawGallery.map((item) => {
    const iconComponent = portfolioIconMap[item.icon as keyof typeof portfolioIconMap] || InfoIcon;
    return {
      ...item,
      icon: iconComponent,
    };
  });

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {t('photoGalleryPage.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('photoGalleryPage.hero.description')}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {photoGallery.map((item, index) => (
              <ProjectItem key={index} title={item.label} description={item.description || ""}>
                <ClientOnly>
                  <ProjectItemTitle className="flex items-center gap-2">
                    <ProjectItemIcon>
                      {item.icon && React.createElement(item.icon, { className: `h-6 w-6 ${item.color ?? ''}` })}
                    </ProjectItemIcon>
                    {item.label}
                  </ProjectItemTitle>
                </ClientOnly>
                {item.screenshot && (
                  <div className="my-1">
                    {item.url ? (
                      <a href={item.url}>
                        <Image
                          src={item.screenshot}
                          alt={item.label}
                          width={128}
                          height={128}
                          style={{ objectFit: "cover" }}
                        />
                      </a>
                    ) : (
                      <Image
                        src={item.screenshot}
                        alt={item.label}
                        width={128}
                        height={128}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                )}
                <ProjectItemDescription className="line-clamp-3">
                  {item.description}
                </ProjectItemDescription>
              </ProjectItem>
            ))}

          </div>
        </div>

      </main>
    </>
  );
}
