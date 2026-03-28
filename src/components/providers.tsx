'use client';

import { ModalProvider } from '../context/modal-context';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
