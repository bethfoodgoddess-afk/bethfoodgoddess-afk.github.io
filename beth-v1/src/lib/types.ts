import { useTranslations } from 'next-intl'

export type TranslationFunction = ReturnType<typeof useTranslations>

export type WebsiteMetadata = {
  name?: string;
  description?: string;
  nameKey?: string;
  descriptionKey?: string;
  thumbnails: string[];
};

export type WebsiteEntry = {
  id: string;
  show?: boolean;
  metadata: WebsiteMetadata;
};


// tbd:

export type DemoWebsite = {
  name: string;
  description: string;
  thumbnail: string;
};

export type DemoWebsites = {
  [key: string]: DemoWebsite;
};
