import Image from 'next/image';
import { Article, Impact } from '../types';
import { ARTICLES } from '../data/articles';
import { useIntlConfig } from '../lib/utils';
import ZoomableImage from './zoomable-image';
import { useState } from 'react';

const JOURNALS = {
  jm: 'Journal Metrics',
  sjr: 'Scimago Journal Ranking',
  jcr: 'Journal Citation Reports'
};

const BASE_DOI_URL = 'https://doi.org';

const ArticleItem = ({ article }: { article: Article }) => {
  const { locale } = useIntlConfig();

  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const { imgSrc, imgAlt, imgAuthor, journal, authors, doi, url, impact, ...localeArticle } = article;
  const { title, abstract, date, keywords } = localeArticle[locale];

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
        {/* Image container */}
        <div
          onClick={() => setIsImageZoomed(true)}
          className="shrink-0 transition-transform hover:scale-105"
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={400}
            height={400}
            className="aspect-video cursor-pointer border border-slate-200 bg-white object-contain p-2 shadow-sm"
          />
        </div>

        {/* Image info */}
        <div className="flex flex-col justify-center px-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-20">
            <div className="flex flex-col">
              <span className="font-medium">{date}</span>
              <a
                href={doi ? `${BASE_DOI_URL}/${doi}` : url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {title}
              </a>
              <span className="font-bold">{authors.join(', ')}</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {keywords.map((word) => (
                  <span
                    key={`${word}-${title}`}
                    className="rounded-full border border-slate-300 bg-slate-100 px-2 text-xs italic shadow-xs"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-end xl:w-auto">
              <a
                href={journal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-nowrap text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {journal.name}
              </a>
              {impact &&
                (Object.entries(impact) as [keyof Impact, string][]).map(([key, impValue]) => (
                  <a
                    key={key}
                    href={impValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nowrap text-gray-600 underline transition-colors hover:text-gray-900"
                  >
                    {JOURNALS[key]}
                  </a>
                ))}
            </div>
          </div>
          <p className="my-4 text-justify">{abstract}</p>
          {doi ? (
            <span className="font-medium">
              DOI:{' '}
              <a
                href={`${BASE_DOI_URL}/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {doi}
              </a>
            </span>
          ) : (
            <span className="font-medium">
              URL:{' '}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline transition-colors hover:text-blue-600"
              >
                {`${url?.slice(0, 80)}...`}
              </a>
            </span>
          )}
        </div>
      </article>
      <hr className="my-2 border-slate-300" />
    </>
  );
};

const Articles = () => {
  return (
    <section>
      {ARTICLES.map((art) => (
        <ArticleItem
          key={art.id}
          article={art}
        />
      ))}
    </section>
  );
};

export default Articles;
