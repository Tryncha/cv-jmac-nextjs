import { PODCASTS } from '../data/podcasts';
import { useIntlConfig } from '../lib/utils';

const Podcasts = () => {
  const { t, locale } = useIntlConfig();

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Media.podcastsTitle')}</h2>
      <hr className="my-2 border-slate-300" />
      {PODCASTS.map((pod) => (
        <div
          key={pod.id}
          className="flex flex-col justify-between gap-4 p-2 hover:rounded-sm hover:bg-slate-50 lg:flex-row"
        >
          <a
            href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-50 justify-center lg:ml-4"
          >
            <img
              src={pod.imgSrc}
              alt={pod[locale].imgAlt}
              width={200}
              height={200}
              className="shadow-md"
            />
          </a>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col">
              <span>{pod[locale].duration}</span>
              <a
                href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {pod[locale].chapter}
              </a>
            </div>
            <p className="font-medium">{pod[locale].description}</p>
            <div className="flex flex-col border-l-4 border-slate-700 bg-slate-200 p-4 text-sm font-medium">
              <span>
                {t('Media.originalEpisode')} {pod[locale].podcast}.
              </span>
              <span>
                {`${t('Media.availableOn')} `}
                <a
                  href="https://open.spotify.com/episode/3S1HDJ3DtMTN0dXYFVWEUm?si=71f03fd5375a4052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  Spotify
                </a>
                .
              </span>
              <span>
                &copy; {pod[locale].owner}, {pod[locale].date}. {t('Media.copyright')}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Videos = () => {
  const { t } = useIntlConfig();

  return (
    <section>
      <h2 className="px-4 text-center text-2xl font-bold uppercase md:text-left">{t('Media.videosTitle')}</h2>
      <hr className="my-2 border-slate-300" />
      <div className="mx-4 flex gap-8">
        <div className="mt-4 flex flex-col">
          <h3 className="text-lg/6 font-bold">
            Vermú de nanociencia 2021: Materiales 3DOM e impresión 3D para Descontaminación ambiental
          </h3>
          <p className="my-2 text-justify whitespace-pre-line">
            Esta presentación borda el desarrollo y aplicación de materiales 3DOM (estructuras tridimensionales
            macro-porosas ordenadas) en procesos de descontaminación ambiental, destacando su formación mediante
            plantillas químicas, su alta área superficial útil para la catálisis, y su integración con tecnologías de
            impresión 3D como método eficiente y sostenible. Se exploran ventajas como la reducción de residuos, la
            eficiencia energética, y se plantean futuras líneas de investigación que combinan impresión 3D con
            materiales microporosos para mejorar el rendimiento de catalizadores en entornos contaminados
          </p>
          <span className="font-medium">
            Enlace Original:{' '}
            <a
              href="https://www.youtube.com/watch?v=GjyXu3OyeBI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 underline transition-colors hover:text-blue-600"
            >
              https://www.youtube.com/watch?v=GjyXu3OyeBI
            </a>
          </span>
        </div>
        <div className="mr-4 hidden justify-center xl:flex">
          <iframe
            id="video"
            width="600"
            height="315"
            src="https://www.youtube.com/embed/GjyXu3OyeBI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Media = () => {
  return (
    <section>
      <Podcasts />
      <Videos />
    </section>
  );
};

export default Media;
