export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  warnHtmlInMessage: false,
  missingWarn: false,
  fallbackWarn: false,
  messages: {
    en: {
      'Copyright {year} {app}. All rights reserved.': '{copy} {year} {app}. All rights reserved.',
    },
  },
}));
