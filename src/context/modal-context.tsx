import { Activity, createContext, useContext, useState } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  className,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-80 flex items-center justify-center bg-black/80 transition-colors"
      >
        {/* Modal */}
        <section
          onClick={(e) => e.stopPropagation()}
          className={className}
        >
          {children}
        </section>
      </div>
    </Activity>
  );
};

const DEFAULT_MODAL = {
  zoomedImage: false,
  skills: false,
  pictos: false,
  luminas: false
};

type ModalType = typeof DEFAULT_MODAL;

interface ModalContextType {
  isModalOpen: ModalType;
  openModal: (modalId: keyof ModalType) => void;
  closeAll: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return modalContext;
}

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(DEFAULT_MODAL);

  function openModal(modalId: keyof ModalType) {
    setIsModalOpen({
      ...DEFAULT_MODAL,
      [modalId]: true
    });
  }

  function closeAll() {
    setIsModalOpen(DEFAULT_MODAL);
  }

  const modalValue = { isModalOpen, openModal, closeAll };

  return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>;
};

export default ModalContext;
