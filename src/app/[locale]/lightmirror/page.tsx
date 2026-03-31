import Carrousel from '@/src/components/lightmirror/carrousel';
import { getIntlConfig } from '@/src/lib/utils';
import Image from 'next/image';

const Card = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="rounded-xl border border-slate-400 bg-slate-200 p-4 shadow-sm transition-colors hover:bg-slate-100">
      <h3 className="mb-1 text-lg font-semibold text-slate-800">{title}</h3>
      <div className="text-slate-700">{children}</div>
    </div>
  );
};

const LightMirrorPage = async () => {
  const { t } = await getIntlConfig();

  return (
    <main className="flex-col bg-slate-50">
      {/* Main info */}
      <section className="bg-[url(/light-mirror/hero.jpg)] bg-cover bg-center">
        <div className="flex items-center justify-between gap-2 bg-white/85 p-12">
          <div className="flex w-2xl flex-col gap-4">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-7xl font-bold text-slate-900">Light Mirror</span>
                <span className="text-7xl font-bold text-slate-700">Tech.</span>
              </div>
              <Image
                src="/light-mirror/logo_transparent.png"
                alt="Light Mirror Tech Logo"
                width={175}
                height={175}
              />
            </div>
            <p className="text-sm font-medium sm:max-w-2xl sm:text-base lg:max-w-4xl">
              {t.rich('LightMirror.aboutUs.text', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>

          {/* Demo image */}
          <div className="rounded-xl bg-white p-4">
            <Image
              src="/light-mirror/4.jpg"
              alt="Mirrors"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <Carrousel className="my-12" />

      <section className="grid grid-cols-1 gap-4 px-2 pt-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-12">
        <Card title={t('LightMirror.origin.title')}>
          <p>{t('LightMirror.origin.text')}</p>
        </Card>

        <Card title={t('LightMirror.coreTech.title')}>
          <ul className="ml-5 list-disc">
            <li>{t('LightMirror.coreTech.item1')}</li>
            <li>{t('LightMirror.coreTech.item2')}</li>
            <li>{t('LightMirror.coreTech.item3')}</li>
            <li>{t('LightMirror.coreTech.item4')}</li>
          </ul>
        </Card>

        <Card title={t('LightMirror.applications.title')}>
          <ul className="ml-5 list-disc">
            <li>{t('LightMirror.applications.item1')}</li>
            <li>{t('LightMirror.applications.item2')}</li>
            <li>{t('LightMirror.applications.item3')}</li>
            <li>{t('LightMirror.applications.item4')}</li>
          </ul>
        </Card>

        <Card title={t('LightMirror.impact.title')}>
          <p>{t('LightMirror.impact.text')}</p>
        </Card>

        <Card title={t('LightMirror.businessModel.title')}>
          <ul className="ml-5 list-disc">
            <li>{t('LightMirror.businessModel.item1')}</li>
            <li>{t('LightMirror.businessModel.item2')}</li>
            <li>{t('LightMirror.businessModel.item3')}</li>
            <li>{t('LightMirror.businessModel.item4')}</li>
          </ul>
        </Card>

        <Card title={t('LightMirror.status.title')}>
          <p>{t('LightMirror.status.text')}</p>
        </Card>
      </section>
    </main>
  );
};

export default LightMirrorPage;
