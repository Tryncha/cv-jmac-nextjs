'use client';

import { CopyIcon } from 'lucide-react';
import { useCopyText } from '../hooks/use-copy';
import { useIntlConfig } from '../lib/utils';
import {
  BlueSkyIcon,
  CVLacIcon,
  LinkedInIcon,
  OrcidIcon,
  ResearchGateIcon,
  ScholarIcon,
  ScopusIcon,
  XIcon
} from './icons/social-icons';
import { JSX } from 'react';
import { CONTACT } from '../data/contact';

const InstitutionalEmail = ({
  id,
  institutionName,
  institutionLogo,
  institutionUrl,
  address
}: {
  id: string;
  institutionName: string;
  institutionLogo: string;
  institutionUrl: string;
  address: string;
}) => {
  const { t } = useIntlConfig();
  const { isCopied, copyToCilpboard } = useCopyText();

  const INSTITUTION_NAMES: Record<string, string> = {
    unal: t('App.institutionName.unal'),
    ucaldas: t('App.institutionName.ucaldas'),
    ugr: t('App.institutionName.ugr'),
    uclm: t('App.institutionName.uclm'),
    ucm: t('App.institutionName.ucm'),
    udea: t('App.institutionName.udea')
  };

  return (
    <div className="mx-4 my-8 flex flex-col items-center gap-4 hover:rounded-sm hover:bg-slate-50 2xl:flex-row">
      <img
        src={institutionLogo}
        alt={institutionName}
        width={180}
        height={100}
        className="aspect-video object-contain"
      />
      <div className="font-medium 2xl:w-100">
        <a
          href={institutionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-base text-slate-600 underline hover:text-slate-900 2xl:text-left 2xl:text-nowrap"
        >
          {INSTITUTION_NAMES[id]}
        </a>
        <div className="flex items-center justify-center 2xl:justify-normal">
          <a
            // href={`mailto:${address}?Subject=${EMAIL_SUBJECT}`}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${t('Contact.emailSubject')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
          >
            {address}
          </a>
          <div className="relative hidden xl:block">
            {isCopied && (
              <div className="animate-fade-out pointer-events-none absolute left-9 inline rounded-sm bg-slate-600 px-3 text-center text-nowrap text-slate-50">
                <div className="absolute top-1 -left-1 size-3 rotate-45 bg-slate-600" />
                {t('Contact.copyEmail')}
              </div>
            )}
            <button
              onClick={() => copyToCilpboard(address)}
              className="mx-2 cursor-pointer align-middle"
            >
              <CopyIcon size="16" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ICON_SIZE = '70';
const socialIcons: Record<string, JSX.Element> = {
  'twitter/x': <XIcon size={ICON_SIZE} />,
  'linkedin': <LinkedInIcon size={ICON_SIZE} />,
  'bluesky': <BlueSkyIcon size={ICON_SIZE} />,
  'google-scholar': <ScholarIcon size={ICON_SIZE} />,
  'cvlac': <CVLacIcon size={ICON_SIZE} />,
  'research-gate': <ResearchGateIcon size={ICON_SIZE} />,
  'scopus': <ScopusIcon size={ICON_SIZE} />,
  'orcid': <OrcidIcon size={ICON_SIZE} />
};

const Contact = () => {
  const { t } = useIntlConfig();

  return (
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 md:pt-36 xl:mx-12 xl:px-12 xl:pt-28">
      <section className="flex flex-col gap-12 2xl:flex-row">
        <section className="flex-1">
          <h2 className="px-4 text-center text-2xl font-bold uppercase">{t('Contact.sendMail')}</h2>
          <hr className="my-2 border-slate-300" />
          {CONTACT.filter((c) => c.type === 'email').map((email) => (
            <InstitutionalEmail
              key={email.id}
              id={email.id}
              institutionName={email.name}
              institutionLogo={email.institutionLogo}
              institutionUrl={email.institutionUrl}
              address={email.emailAddress}
            />
          ))}
        </section>
        <section className="flex-1">
          <h2 className="px-4 text-center text-2xl font-bold uppercase">{t('Contact.links')}</h2>
          <hr className="my-2 border-slate-300" />
          <div className="grid grid-cols-2">
            {CONTACT.filter((c) => c.type === 'social-media').map((c) => (
              <a
                key={c.id}
                className="flex flex-col items-center gap-4 py-2 hover:rounded-sm hover:bg-slate-50"
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[c.id]}
                <span className="text-lg font-semibold text-blue-800 underline transition-colors hover:text-blue-600">
                  {c.name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contact;
