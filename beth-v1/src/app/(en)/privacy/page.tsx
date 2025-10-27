import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t('privacy.hero.title')}{" "}
                {t('privacy.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('privacy.hero.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}