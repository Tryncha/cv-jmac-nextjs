import React from 'react';
import Image from 'next/image';
import { useIntlConfig } from '../lib/utils';
import { ImgAuthor } from '../types';
import { Modal } from '../context/modal-context';

const ZoomableImage = ({
  src,
  alt,
  width,
  height,
  author,
  isOpen,
  onClose
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  author: ImgAuthor[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { t } = useIntlConfig();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />

      {/* Image Footer */}
      {author.length > 0 && (
        <div className="bg-slate-200 p-2 text-right">
          <span className="font-medium">{t('ImageZoom.designedBy')} </span>
          {author.map((a, i) => (
            <React.Fragment key={i}>
              {a.url ? (
                <a
                  href={a.url || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-800 underline transition-colors hover:text-blue-600"
                >
                  {a.name}
                </a>
              ) : (
                <span className="font-semibold">{a.name}</span>
              )}
              {i < author.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default ZoomableImage;
