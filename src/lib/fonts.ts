import { DM_Serif_Text, IBM_Plex_Serif, Work_Sans } from 'next/font/google';

export const workSans = Work_Sans({ subsets: ['latin'] });
export const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['100', '700'] });
export const dmSerifText = DM_Serif_Text({ subsets: ['latin'], weight: ['400'] });
