import { getIntlConfig } from '../lib/utils';
import Image from 'next/image';
import CopyButton from './copy-button';

const EmailInfo = async ({
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
  const { t } = await getIntlConfig();

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
      <Image
        src={institutionLogo}
        alt={institutionName}
        width={180}
        height={100}
        className="aspect-video object-contain"
      />

      {/* Info */}
      <div className="font-medium 2xl:w-100">
        {/* Institution name */}
        <a
          href={institutionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-base text-slate-600 underline hover:text-slate-900 2xl:text-left 2xl:text-nowrap"
        >
          {INSTITUTION_NAMES[id]}
        </a>

        {/* Email address */}
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
          <CopyButton textToCopy={address} />
        </div>
      </div>
    </div>
  );
};

export default EmailInfo;
