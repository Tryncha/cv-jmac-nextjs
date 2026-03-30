'use client';

import Carrousel from '@/src/components/carrousel';
import { Link } from '@/src/i18n/navigation';
import { useIntlConfig } from '@/src/lib/utils';
import { ArrowLeftFromLine } from 'lucide-react';

const Card = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="rounded-xl border border-slate-400 bg-slate-200 p-4 shadow-sm transition-colors hover:bg-slate-100">
      <h3 className="mb-1 text-lg font-semibold text-slate-800">{title}</h3>
      <div className="text-slate-700">{children}</div>
    </div>
  );
};

const LightMirrorPage = () => {
  const { t } = useIntlConfig();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative flex justify-center gap-2 border-slate-300 bg-slate-800 px-4 py-3 shadow-md sm:flex-row sm:items-center sm:py-2">
        <Link
          href="/"
          title="Volver atrás"
          className="absolute top-3 left-3 inline-flex items-center text-sm text-slate-600 hover:text-slate-900 hover:underline"
        >
          <ArrowLeftFromLine
            strokeWidth={2}
            size={32}
            color="#fff"
          />
        </Link>
        <h1 className="font-dm-serif-text text-2xl font-semibold tracking-wide text-white sm:text-5xl">
          {t('LightMirror.title')}
        </h1>
      </header>
      <div className="relative flex h-64 w-full flex-col items-center justify-end bg-slate-900 sm:h-80 md:h-96">
        <div className="absolute size-full bg-[url(/light-mirror/hero.jpg)] mask-radial-from-0% mask-radial-to-90% bg-cover bg-center bg-no-repeat" />
        <div className="z-20 px-4 py-4 text-center"></div>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <section className="my-12 flex flex-col items-center gap-2 sm:my-16 md:my-20">
          <h2 className="text-center text-xl font-semibold sm:text-2xl">{t('LightMirror.aboutUs.title')}</h2>
          <p className="max-w-full px-2 text-center text-sm sm:max-w-2xl sm:text-base lg:max-w-4xl">
            {t('LightMirror.aboutUs.text')}
          </p>
        </section>
        <Carrousel />
        <section className="my-8 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-12">
          <Card title="Origen y Motivación">
            <p>
              Nacemos de la necesidad de cerrar la brecha entre la aplicación científica y el impacto social en áreas de
              movilidad automotriz, materiales avanzados y fuentes de energía emergentes.
            </p>
          </Card>

          <Card title="Tecnología Principal">
            <ul className="ml-5 list-disc">
              <li>Espejos para puntos ciegos en el área automotriz</li>
              <li>Espejos solares de alta eficiencia</li>
              <li>Superficies reflectantes inteligentes</li>
              <li>Componentes ópticos avanzados</li>
            </ul>
          </Card>

          <Card title="Aplicaciones Estratégicas">
            <ul className="ml-5 list-disc">
              <li>Concentración de energía solar</li>
              <li>Sistemas híbridos fotovoltaico-térmicos</li>
              <li>Infraestructura verde y descarbonización</li>
              <li>Industria automotriz</li>
            </ul>
          </Card>

          <Card title="Impacto Ambiental y Social">
            <p>
              Dedicamos nuestra investigación a reducir la dependencia de combustibles fósiles y promover un desarrollo
              tecnológico sostenible.
            </p>
          </Card>

          <Card title="Modelo de Negocio">
            <ul className="ml-5 list-disc">
              <li>Fabricación y distirbución de superficies reflectantes</li>
              <li>Innovación tecnológica</li>
              <li>Creación de prototipos a medida</li>
              <li>Desarrollo de proyectos I+D+i</li>
            </ul>
          </Card>

          <Card title="Estado Actual y Próximos Pasos">
            <p>
              Actualmente en fase de validación tecnológica y desarrollo de prototipos. Buscamos activamente socios
              estratégicos y en registro de propiedad intelectual.
            </p>
          </Card>
        </section>
        <footer className="mt-8 bg-white pb-4 text-center text-xs text-slate-600 sm:mt-12 sm:text-sm">
          <span>&copy; Light Mirror Tech {new Date().getFullYear()}. Todos los derechos reservados.</span>
        </footer>
      </main>
    </div>
  );
};

export default LightMirrorPage;
