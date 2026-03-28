import { useEffect, useState } from 'react';

export function useStateModal(initialState: boolean) {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isModalOpen, setIsModalOpen]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return { isModalOpen, openModal, closeModal };
}
