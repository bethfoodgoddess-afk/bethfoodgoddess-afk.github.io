"use client"

// import { Users, Target, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from 'next-intl'
// import type { TranslationFunction } from '@/lib/types'

// export async function generateStaticParams() {
//   const ids = ['es', 'en'];
//   return ids.map((locale) => ({
//     locale: locale,
//   }));
// }

// const getStats = (t: TranslationFunction) => [
//   {
//     icon: Users,
//     number: "50+",
//     label: t('about.stats.clients'),
//     color: "text-bright-blue",
//   },
//   {
//     icon: Target,
//     number: "100+",
//     label: t('about.stats.projects'),
//     color: "text-bright-green",
//   },
//   {
//     icon: Award,
//     number: "5",
//     label: t('about.stats.experience'),
//     color: "text-bright-purple",
//   },
//   {
//     icon: Clock,
//     number: "24/7",
//     label: t('about.stats.support'),
//     color: "text-bright-orange",
//   },
// ]

// const getValues = (t: TranslationFunction) => [
//   {
//     title: t('about.values.quality.title'),
//     description: t('about.values.quality.description'),
//   },
//   {
//     title: t('about.values.innovation.title'),
//     description: t('about.values.innovation.description'),
//   },
//   {
//     title: t('about.values.commitment.title'),
//     description: t('about.values.commitment.description'),
//   },
//   {
//     title: t('about.values.transparency.title'),
//     description: t('about.values.transparency.description'),
//   },
// ]

// const getTeam = (t: TranslationFunction) => [
//   {
//     name: t('about.team.carlos.name'),
//     role: t('about.team.carlos.role'),
//     description: t('about.team.carlos.description'),
//   },
//   {
//     name: t('about.team.maria.name'),
//     role: t('about.team.maria.role'),
//     description: t('about.team.maria.description'),
//   },
//   {
//     name: t('about.team.luis.name'),
//     role: t('about.team.luis.role'),
//     description: t('about.team.luis.description'),
//   },
// ]

export default function About() {
  const t = useTranslations()
  // const stats = getStats(t)
  // const values = getValues(t)
  // const team = getTeam(t)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-bright-purple/10 to-bright-pink/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-bright-purple">
                {t('about.hero.title')}{" "}
                {t('about.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('about.values.quality.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.values.quality.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('about.values.innovation.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.values.innovation.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('about.values.commitment.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.values.commitment.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('about.values.transparency.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('about.values.transparency.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}