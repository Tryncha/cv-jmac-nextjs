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
