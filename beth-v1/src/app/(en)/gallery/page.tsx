import { useTranslations } from 'next-intl';

export default function GalleryPage() {
  const t = useTranslations();

  const photoGallery = t.raw('home.photo_gallery.items') as any[];

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
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
