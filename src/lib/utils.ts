export function capitalizeWord(word: string) {
  const normalizedWord = word.toLowerCase();
  return normalizedWord[0].toUpperCase + normalizedWord.slice(1, normalizedWord.length);
}
