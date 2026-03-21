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
