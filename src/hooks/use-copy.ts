import { useState } from 'react';

export function useCopyText(resetDelay = 4000) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyToCilpboard(text: string) {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), resetDelay);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  }

  return { isCopied, copyToCilpboard };
}
