import EmailInfo from '@/src/components/email-info';
import {
  BlueSkyIcon,
  CVLacIcon,
  LinkedInIcon,
  OrcidIcon,
  ResearchGateIcon,
  ScholarIcon,
  ScopusIcon,
  XIcon
} from '@/src/components/icons/social-icons';
import { CONTACT } from '@/src/data/contact';
import { getIntlConfig } from '@/src/lib/utils';
import { JSX } from 'react';

const ICON_SIZE = 70;
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

const ContactPage = async () => {
  const { t } = await getIntlConfig();

  //  sm:  px-4, pt-18
  //  md: pt-36, pb-8
  //  lg: pt-36, pb-8
  //  xl: px-12, pt-32, mx-12
  // 2xl: px-12, pt-32, mx-12

  return (
    <main className="z-10 flex min-h-screen flex-col gap-4 border-x border-slate-300 bg-white pt-4 pb-18 shadow-sm sm:px-4 sm:pt-28 md:pt-36 xl:mx-12 xl:px-12 xl:pt-28">
      <section className="flex flex-col gap-12 2xl:flex-row">
        {/* Emails */}
        <section className="flex-1">
          <h2 className="px-4 text-center text-2xl font-bold uppercase">{t('Contact.sendMail')}</h2>
          <hr className="my-2 border-slate-300" />
          {CONTACT.filter((c) => c.type === 'email').map((email) => (
            <EmailInfo
              key={email.id}
              id={email.id}
              institutionName={email.name}
              institutionLogo={email.institutionLogo}
              institutionUrl={email.institutionUrl}
              address={email.emailAddress}
            />
          ))}
        </section>

        {/* Academic connections */}
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

export default ContactPage;
