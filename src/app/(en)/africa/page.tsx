"use client"

// import { Users, Target, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from 'next-intl'
// import type { TranslationFunction } from '@/lib/types'


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
                {t('africa.hero.title')}{" "}
                {t('africa.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('africa.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('africa.values.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('africa.values.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('africa.values.quality.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('africa.values.quality.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('africa.values.innovation.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('africa.values.innovation.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('africa.values.commitment.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('africa.values.commitment.description')}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {t('africa.values.transparency.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('africa.values.transparency.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}