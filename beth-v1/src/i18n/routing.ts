import { defineRouting } from 'next-intl/routing';

// export default defineRouting({
const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Don't use a prefix for the default locale
  localePrefix: {
    mode: 'as-needed'
  }
});

export default routing;