import { useState } from 'react';
import { PRESENTATIONS } from '../../data/presentations';
import { useIntlConfig } from '../../lib/utils';
import { Presentation } from '../../types';
import ZoomableImage from '../zoomable-image';

const PresentationItem = ({ presentation }: { presentation: Presentation }) => {
  const { locale } = useIntlConfig();

  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const { imgSrc, imgAlt, imgAuthor, ...localePresentation } = presentation;
  const { title, date, institution, conference, type, city } = localePresentation[locale];

  return (
    <>
      <ZoomableImage
        src={imgSrc}
        alt={imgAlt}
        width={600}
        height={60}
        author={imgAuthor}
        isOpen={isImageZoomed}
        onClose={() => setIsImageZoomed(false)}
      />
      <article className="mt-2 flex flex-col items-center gap-8 py-4 hover:rounded-sm hover:bg-slate-50 2xl:flex-row 2xl:px-8">
        <div
          onClick={() => setIsImageZoomed(true)}
          className="shrink-0 transition-transform hover:scale-105"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            width={400}
            className="aspect-video cursor-pointer border border-slate-200 bg-white object-contain p-2 shadow-sm"
          />
        </div>
        <div className="flex flex-col justify-center px-4">
          <span className="font-medium">
            {date} - {type}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="font-medium">{conference}</span>
          <span className="mt-2 font-medium">{institution}</span>
          <span className="font-medium">{city}</span>
        </div>
      </article>
      <hr className="my-2 border-slate-300" />
    </>
  );
};

const Presentations = () => {
  return (
    <section>
      {PRESENTATIONS.map((pres) => (
        <PresentationItem
          key={pres.id}
          presentation={pres}
        />
      ))}
    </section>
  );
};

export default Presentations;
