export interface LocaleResume {
  description: string;
}

export interface Resume {
  es: LocaleResume;
  en: LocaleResume;
}

export interface Director {
  name: string;
  url: string;
}

export interface LocaleStudy {
  title: string;
  institution: string;
  city: string;
  director?: Director[];
  area?: string;
  thesis?: string;
  award?: string;
}

export interface Study {
  id: number;
  es: LocaleStudy;
  en: LocaleStudy;
}

export interface LocaleOtherStudy {
  title: string;
  institution: string;
  city: string;
  date: string;
}

export interface OtherStudy {
  id: number;
  es: LocaleOtherStudy;
  en: LocaleOtherStudy;
}

export interface LocaleWorkExperience {
  title: string;
  institution: string;
  city: string;
  description: string[];
  subjects?: string[];
}

export interface WorkExperience {
  id: number;
  es: LocaleWorkExperience;
  en: LocaleWorkExperience;
}

export interface LocaleDirection {
  name: string;
  institution: string;
  student: string;
  participation?: string;
  type: string;
  city: string;
}

export interface Direction {
  id: number;
  es: LocaleDirection;
  en: LocaleDirection;
}

export interface LocaleParticipation {
  title: string;
  institution: string;
  student: string;
  director: Director;
  participation: string;
  type: string;
  city: string;
}

export interface Participation {
  id: number;
  es: LocaleParticipation;
  en: LocaleParticipation;
}

export interface LocaleProject {
  title: string;
  institution: string;
  city: string;
  description: string[];
}

export interface Project {
  id: number;
  es: LocaleProject;
  en: LocaleProject;
}

export interface LocaleInvestigation {
  groupName: string;
  institution: string;
  department: string;
  director: string;
  area: string;
  location: string;
  lines: string[];
}

export interface Investigation {
  id: number;
  url: string;
  es: LocaleInvestigation;
  en: LocaleInvestigation;
}

export type PresentationPageTab = 'articles' | 'presentations' | 'media';

export interface Impact {
  jm?: string;
  sjr?: string;
  jcr?: string;
}

export interface Journal {
  name: string;
  url: string;
}

export interface ImgAuthor {
  name: string;
  url: string;
}

export interface LocaleArticle {
  title: string;
  abstract: string;
  keywords: string[];
  date: string;
}

export interface Article {
  id: number;
  imgSrc: string;
  imgAlt: string;
  imgAuthor: ImgAuthor[];
  journal: Journal;
  authors: string[];
  doi: string;
  url?: string;
  impact?: Impact;
  es: LocaleArticle;
  en: LocaleArticle;
}

export interface LocalePresentation {
  title: string;
  institution: string;
  conference: string;
  type: string;
  city: string;
  date: string;
}

export interface Presentation {
  id: number;
  imgSrc: string;
  imgAlt: string;
  imgAuthor: ImgAuthor[];
  es: LocalePresentation;
  en: LocalePresentation;
}

export interface LocalePodcast {
  chapter: string;
  imgAlt: string;
  podcast: string;
  owner: string;
  description: string;
  date: string;
  duration: string;
  languages: string[];
}

export interface Podcast {
  id: number;
  imgSrc: string;
  es: LocalePodcast;
  en: LocalePodcast;
}
