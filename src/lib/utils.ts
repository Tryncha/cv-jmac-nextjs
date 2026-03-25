import { getLocale, getTranslations } from 'next-intl/server';

export function capitalizeWord(word: string) {
  const normalizedWord = word.toLowerCase();
  return normalizedWord[0].toUpperCase + normalizedWord.slice(1, normalizedWord.length);
}

export async function getIntlConfig() {
  const t = await getTranslations();
  const locale = await getLocale();

  return { t, locale };
}
