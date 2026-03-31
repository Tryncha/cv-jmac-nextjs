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
              {t('LightMirror.aboutUs.text')}
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
    </main>
  );
};

export default LightMirrorPage;
