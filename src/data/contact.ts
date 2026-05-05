import {
  BlueSkyIcon,
  CVLacIcon,
  LinkedInIcon,
  OrcidIcon,
  ResearchGateIcon,
  ScholarIcon,
  ScopusIcon,
  XIcon
} from '@/src/components/icons/social-icons';
import { IconProps } from '../types';
import { JSX } from 'react';

interface ContactData {
  id: string;
  name: string;
}

export interface SocialMedia extends ContactData {
  url: string;
  type: 'social-media';
  Icon: (props: IconProps) => JSX.Element;
}

export interface Email extends ContactData {
  institutionUrl: string;
  institutionLogo: string;
  emailAddress: string;
  type: 'email';
}

export const CONTACT: Array<SocialMedia | Email> = [
  {
    id: 'twitter/x',
    name: 'Twitter/X',
    type: 'social-media',
    url: 'https://x.com/JhonMAguirreC',
    Icon: XIcon
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    type: 'social-media',
    url: 'https://www.linkedin.com/in/jhon-mauricio-aguirre-cort%C3%A9s-b0452427b/',
    Icon: LinkedInIcon
  },
  {
    id: 'bluesky',
    name: 'BlueSky',
    type: 'social-media',
    url: 'https://bsky.app/profile/jmacor7.bsky.social',
    Icon: BlueSkyIcon
  },
  {
    id: 'google-scholar',
    name: 'Google Scholar',
    type: 'social-media',
    url: 'https://scholar.google.com/citations?user=Srkl6pcAAAAJ&hl=en&oi=ao',
    Icon: ScholarIcon
  },
  {
    id: 'cvlac',
    name: 'CvLAC',
    type: 'social-media',
    url: 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000462837',
    Icon: CVLacIcon
  },
  {
    id: 'research-gate',
    name: 'Research Gate',
    type: 'social-media',
    url: 'https://www.researchgate.net/profile/Jhon-Aguirre-Cortes',
    Icon: ResearchGateIcon
  },
  {
    id: 'scopus',
    name: 'Scopus',
    type: 'social-media',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=57195378601&origin=AuthorProfile',
    Icon: ScopusIcon
  },
  {
    id: 'orcid',
    name: 'ORCID',
    type: 'social-media',
    url: 'https://orcid.org/0000-0002-9700-3544',
    Icon: OrcidIcon
  },
  {
    id: 'unal',
    name: 'Universidad Nacional de Colombia (UNAL)',
    institutionUrl: 'https://unal.edu.co/',
    institutionLogo: '/logos/unal-sm.png',
    emailAddress: 'jmaguirrec@unal.edu.co',
    type: 'email'
  },
  {
    id: 'ucaldas',
    name: 'Universidad de Caldas (UCaldas)',
    institutionUrl: 'https://www.ucaldas.edu.co/',
    institutionLogo: '/logos/ucaldas-sm.png',
    emailAddress: 'jhon.aguirre@ucaldas.edu.co',
    type: 'email'
  },
  {
    id: 'ugr',
    name: 'Universidad de Granada (UGR)',
    institutionUrl: 'https://www.ugr.es/',
    institutionLogo: '/logos/ugr-sm.png',
    emailAddress: 'jmacor7@correo.ugr.es',
    type: 'email'
  },
  {
    id: 'uclm',
    name: 'Universidad de Castilla-La Mancha (UCLM)',
    institutionUrl: 'https://www.uclm.es/',
    institutionLogo: '/logos/uclm-sm.png',
    emailAddress: 'JhonMauricio.Aguirre@uclm.es',
    type: 'email'
  },
  {
    id: 'ucm',
    name: 'Universidad Católica de Manizales (UCM)',
    institutionUrl: 'https://www.ucm.edu.co/',
    institutionLogo: '/logos/ucm-sm.png',
    emailAddress: 'jaguirre@ucm.edu.co',
    type: 'email'
  },
  {
    id: 'udea',
    name: 'Universidad de Antioquia (UdeA)',
    institutionUrl: 'https://www.udea.edu.co/',
    institutionLogo: '/logos/udea-sm.png',
    emailAddress: 'jhon.aguirre@udea.edu.co',
    type: 'email'
  }
];
