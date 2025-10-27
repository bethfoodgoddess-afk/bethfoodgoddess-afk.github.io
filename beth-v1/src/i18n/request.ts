import { getRequestConfig } from 'next-intl/server';
import enMessages from '../../messages/en.json';

export default getRequestConfig(async ({ locale }) => {
  // console.log("Locale in request config:", locale);
  return {
    locale: locale ?? 'en',
    messages: enMessages,
  };
});
