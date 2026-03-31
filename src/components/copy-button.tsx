'use client';

import { CopyIcon } from 'lucide-react';
import { useCopyText } from '../hooks/use-copy';
import { useIntlConfig } from '../lib/utils';

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const { t } = useIntlConfig();
  const { isCopied, copyToCilpboard } = useCopyText();

  return (
    <div className="relative hidden xl:block">
      {isCopied && (
        <div className="animate-fade-out pointer-events-none absolute left-9 inline rounded-sm bg-slate-600 px-3 text-center text-nowrap text-slate-50">
          <div className="absolute top-1 -left-1 size-3 rotate-45 bg-slate-600" />
          {t('Contact.copyEmail')}
        </div>
      )}
      <button
        onClick={() => copyToCilpboard(textToCopy)}
        className="mx-2 cursor-pointer align-middle"
      >
        <CopyIcon size="16" />
      </button>
    </div>
  );
};

export default CopyButton;
