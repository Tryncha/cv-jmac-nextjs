import { OtherStudy, Study } from '../types';

export const MAIN_STUDIES: Study[] = [
  {
    id: 0,
    es: {
      title: 'Bachiller Técnico en Química Industrial',
      institution: 'INEM Baldomero Sanín Cano',
      city: 'Manizales, Colombia'
    },
    en: {
      title: 'Technical Bachelor in Industrial Chemistry',
      institution: 'INEM Baldomero Sanín Cano',
      city: 'Manizales, Colombia'
    }
  },
  {
    id: 1,
    es: {
      title: 'Grado en Ingeniería Química',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia'
    },
    en: {
      title: 'Degree in Chemical Engineering',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia'
    }
  },
  {
    id: 2,
    es: {
      title: 'Máster en Ingeniería Química',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      director: [
        {
          name: 'Óscar Hernán Giraldo-Osorio',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=6602624764'
        }
      ],
      area: 'Materiales bidimiensionales híbridos',
      thesis: 'Síntesis y caracterización de hidróxidos dobles laminares intercalados con complejos metálicos',
      award: 'Distinción de Tesis Meritoria',
      city: 'Manizales, Colombia'
    },
    en: {
      title: "Master's in Chemical Engineering",
      institution: 'National University of Colombia (UNAL)',
      director: [
        {
          name: 'Óscar Hernán Giraldo-Osorio',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=6602624764'
        }
      ],
      area: 'Hybrid Two-Dimensional Materials',
      thesis: 'Synthesis and Characterization of Layered Double Hydroxides Intercalated with Metal Complexes',
      award: 'Meritorious Thesis Distinction',
      city: 'Manizales, Colombia'
    }
  },
  {
    id: 3,
    es: {
      title: 'Doctorado en Química',
      institution: 'Universidad de Granada (UGR)',
      director: [
        {
          name: 'Agustín Francisco Pérez-Cadenas',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=6602951412'
        },
        {
          name: 'Esther Bailón-García',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=55921372200'
        }
      ],
      area: 'Fotocatalisis en fabricación aditiva/3D',
      thesis:
        'Diseño y modelación mediante impresión 3D, de sistemas híbridos fotoreactor/catalizador para optimizar reacciones de interés medioambiental',
      award: 'Distinción CUM LAUDE',
      city: 'Granada, España'
    },
    en: {
      title: 'Chemistry PhD',
      institution: 'University of Granada (UGR)',
      director: [
        {
          name: 'Agustín Francisco Pérez-Cadenas',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=6602951412'
        },
        {
          name: 'Esther Bailón-García',
          url: 'https://www.scopus.com/authid/detail.uri?authorId=55921372200'
        }
      ],
      area: 'Photocatalysis in Additive/3D Manufacturing',
      thesis:
        'Design and Modeling, via 3D Printing, of Hybrid Photoreactor/Catalyst Systems to Optimize Environmentally Relevant Reactions',
      award: 'Distinction CUM LAUDE',
      city: 'Granada, Spain'
    }
  }
].reverse();

export const GRADUATES: Study[] = [
  {
    id: 0,
    es: {
      title: 'Docencia Universitaria',
      institution: 'Universidad de Caldas (UCaldas)',
      city: 'Manizales, Colombia'
    },
    en: {
      title: 'University Teaching',
      institution: 'University of Caldas (UCaldas)',
      city: 'Manizales, Colombia'
    }
  },
  {
    id: 1,
    es: {
      title: 'Docencia Universitaria',
      institution: 'Universidad Católica de Manizales (UCM)',
      city: 'Manizales, Colombia'
    },
    en: {
      title: 'University Teaching',
      institution: 'Catholic University of Manizales (UCM)',
      city: 'Manizales, Colombia'
    }
  },
  {
    id: 2,
    es: {
      title: 'Ambientes de Aprendizaje Flexibles Apoyados por NTIC',
      institution: 'Universidad Católica de Manizales (UCM)',
      city: 'Manizales, Colombia'
    },
    en: {
      title: 'Flexible Learning Environments Supported by ICT',
      institution: 'Catholic University of Manizales (UCM)',
      city: 'Manizales, Colombia'
    }
  }
].reverse();

export const OTHER_STUDIES: OtherStudy[] = [
  {
    id: 0,
    es: {
      title: 'Primera Jornada Técnica de Ingeniería Química',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 29, 2001'
    },
    en: {
      title: 'First Technical Conference on Chemical Engineering',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 29, 2001'
    }
  },
  {
    id: 1,
    es: {
      title: 'Investigación, Desarrollo y Aplicación de Métodos Heliofotocatalíticos',
      institution: 'Universidad de Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      date: 'Dic 06, 2004'
    },
    en: {
      title: 'Research, Development and Application of Helio-Photocatalytic Methods',
      institution: 'University of Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      date: 'Dec 06, 2004'
    }
  },
  {
    id: 2,
    es: {
      title: 'Congreso Colombiano de Ingeniería Química',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Ago 26, 2005'
    },
    en: {
      title: 'Colombian Congress of Chemical Engineering',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Aug 26, 2005'
    }
  },
  {
    id: 3,
    es: {
      title: 'Simposio Nacional de Nanotecnología. La revolución del Siglo XXI',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Sep 16, 2006'
    },
    en: {
      title: 'National Symposium on Nanotechnology. The 21st Century Revolution',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Sep 16, 2006'
    }
  },
  {
    id: 4,
    es: {
      title: 'Fundamentos de la Norma ISO/IEC 17025:2005',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      city: 'Manizales, Colombia',
      date: 'Oct 24, 2007'
    },
    en: {
      title: 'Fundamentals of ISO/IEC 17025:2005 Standard',
      institution: 'National Learning Service (SENA)',
      city: 'Manizales, Colombia',
      date: 'Oct 24, 2007'
    }
  },
  {
    id: 5,
    es: {
      title: 'Espectroscopia de Impedancia Electroquímica',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 02, 2007'
    },
    en: {
      title: 'Electrochemical Impedance Spectroscopy',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 02, 2007'
    }
  },
  {
    id: 6,
    es: {
      title: 'Auditorías Internas Aplicadas a la Norma ISO/IEC 17025',
      institution: 'Servicio Nacional de Aprendizaje (SENA)',
      city: 'Manizales, Colombia',
      date: 'Nov 28, 2007'
    },
    en: {
      title: 'Internal Audits Applied to ISO/IEC 17025 Standard',
      institution: 'National Learning Service (SENA)',
      city: 'Manizales, Colombia',
      date: 'Nov 28, 2007'
    }
  },
  {
    id: 7,
    es: {
      title: 'Catálisis Heterogénea. Principios y Aplicaciones',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Feb 13, 2009'
    },
    en: {
      title: 'Heterogeneous Catalysis. Principles and Applications',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Feb 13, 2009'
    }
  },
  {
    id: 8,
    es: {
      title: 'Gestión del Mejoramiento Continuo',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Oct 09, 2009'
    },
    en: {
      title: 'Continuous Improvement Management',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Oct 09, 2009'
    }
  },
  {
    id: 9,
    es: {
      title: 'Calorimetría Diferencial de Barrido. Fundamentos y Aplicaciones',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 13, 2009'
    },
    en: {
      title: 'Differential Scanning Calorimetry. Fundamentals and Applications',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      date: 'Nov 13, 2009'
    }
  },
  {
    id: 10,
    es: {
      title: 'B.P.M. en manipulación de alimentos',
      institution: 'Politécnico Prosanear',
      city: 'Medellín, Colombia',
      date: 'Ene 22, 2015'
    },
    en: {
      title: 'Good Manufacturing Practices (GMP) in food handling',
      institution: 'Politécnico Prosanear',
      city: 'Medellín, Colombia',
      date: 'Jan 22, 2015'
    }
  },
  {
    id: 11,
    es: {
      title: '3a Jornada Técnica de Ingeniería Ambiental',
      institution: 'Universidad Católica de Manizales (UCM)',
      city: 'Manizales, Colombia',
      date: 'Oct 29, 2015'
    },
    en: {
      title: '3rd Technical Conference on Environmental Engineering',
      institution: 'Catholic University of Manizales (UCM)',
      city: 'Manizales, Colombia',
      date: 'Oct 29, 2015'
    }
  },
  {
    id: 12,
    es: {
      title: 'Formación de un Documento de Word para la Tesis',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Feb 17, 2021'
    },
    en: {
      title: 'Creating a Word Document for the Thesis',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Feb 17, 2021'
    }
  },
  {
    id: 13,
    es: {
      title: 'Elaboración del Plan de Investigación',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Feb 17, 2021'
    },
    en: {
      title: 'Preparation of the Research Plan',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Feb 17, 2021'
    }
  },
  {
    id: 14,
    es: {
      title: 'Mapeando la Ciencia con VOSviewer',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Mar 01, 2021'
    },
    en: {
      title: 'Mapping Science with VOSviewer',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Mar 01, 2021'
    }
  },
  {
    id: 15,
    es: {
      title: 'La Ruta Emprendedora de los Investigadores en Formación',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Mar 16, 2021'
    },
    en: {
      title: 'The Entrepreneurial Path of Researchers in Training',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Mar 16, 2021'
    }
  },
  {
    id: 16,
    es: {
      title: 'Herramientas para el Desarrollo de la Investigación',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'May 27, 2021'
    },
    en: {
      title: 'Tools for Research Development',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'May 27, 2021'
    }
  },
  {
    id: 17,
    es: {
      title: 'Escritura y Publicación de Artículos Científicos',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Jun 18, 2021'
    },
    en: {
      title: 'Writing and Publishing Scientific Articles',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Jun 18, 2021'
    }
  },
  {
    id: 18,
    es: {
      title: 'Divulgación Científica',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Oct 14, 2021'
    },
    en: {
      title: 'Scientific Dissemination',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Oct 14, 2021'
    }
  },
  {
    id: 19,
    es: {
      title: 'Escritura de Documentos',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Oct 28, 2021'
    },
    en: {
      title: 'Document Writing',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Oct 28, 2021'
    }
  },
  {
    id: 20,
    es: {
      title: 'Taller de Revisión de la Literatura para Estudiantes de Doctorado',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Nov 26, 2021'
    },
    en: {
      title: 'Literature Review Workshop for Doctoral Students',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Nov 26, 2021'
    }
  },
  {
    id: 21,
    es: {
      title: 'Breve Introducción a la Ciencia de Datos y sus Técnicas',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Dic 03, 2021'
    },
    en: {
      title: 'Brief Introduction to Data Science and Its Techniques',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Dec 03, 2021'
    }
  },
  {
    id: 22,
    es: {
      title: 'Tips for successful grant applications: experiences from the applicant and the reviewer point of view',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Dec 21, 2021'
    },
    en: {
      title: 'Tips for Successful Grant Applications: Experiences from the Applicant and the Reviewer Point of View',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Dec 21, 2021'
    }
  },
  {
    id: 23,
    es: {
      title: 'Visualización de Resultados (figuras) en Artículos Científicos',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Feb 04, 2022'
    },
    en: {
      title: 'Visualization of Results (Figures) in Scientific Articles',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Feb 04, 2022'
    }
  },
  {
    id: 24,
    es: {
      title: 'Congreso Anual Internacional de Estudiantes de Doctorado',
      institution: 'Universidad Miguel Hernández (UMH)',
      city: 'Granada, España',
      date: 'Feb 04, 2022'
    },
    en: {
      title: 'Annual International Congress of Doctoral Students',
      institution: 'Miguel Hernández University (UMH)',
      city: 'Granada, Spain',
      date: 'Feb 04, 2022'
    }
  },
  {
    id: 25,
    es: {
      title: 'Colaboración y Movilidad en el Doctorado',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Feb 11, 2022'
    },
    en: {
      title: 'Collaboration and Mobility in Doctoral Studies',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Feb 11, 2022'
    }
  },
  {
    id: 26,
    es: {
      title: 'Introducción a las Expresiones Regulares',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Feb 18, 2022'
    },
    en: {
      title: 'Introduction to Regular Expressions',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Feb 18, 2022'
    }
  },
  {
    id: 27,
    es: {
      title: 'Programa Mentor de Doctorandos',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Abr 01, 2022'
    },
    en: {
      title: 'Doctoral Mentoring Program',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Apr 01, 2022'
    }
  },
  {
    id: 28,
    es: {
      title: 'Gestión de Residuos, Economía Circular y Emprendimiento',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Abr 24, 2022'
    },
    en: {
      title: 'Waste Management, Circular Economy and Entrepreneurship',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Apr 24, 2022'
    }
  },
  {
    id: 29,
    es: {
      title: 'XV Reunión del Grupo Español del Carbón',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Abr 17, 2022'
    },
    en: {
      title: '15th Meeting of the Spanish Carbon Group',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Apr 17, 2022'
    }
  },
  {
    id: 30,
    es: {
      title: 'Inteligencia Artificial 360°',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'May 20, 2022'
    },
    en: {
      title: 'Artificial Intelligence 360°',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'May 20, 2022'
    }
  },
  {
    id: 31,
    es: {
      title: 'To Be Visible, or Not to Be, That is the Question: Difusión de Publicaciones',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'May 30, 2022'
    },
    en: {
      title: 'To Be Visible, or Not to Be, That is the Question: Dissemination of Publications',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'May 30, 2022'
    }
  },
  {
    id: 32,
    es: {
      title: 'XXXVIII Reunión Bienal de la Sociedad Española de Química',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Jun 30, 2022'
    },
    en: {
      title: '38th Biennial Meeting of the Spanish Chemical Society',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Jun 30, 2022'
    }
  },
  {
    id: 33,
    es: {
      title: 'El Maravilloso Mundo de los Materiales Basados en Carbono',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Nov 30, 2022'
    },
    en: {
      title: 'The Wonderful World of Carbon-Based Materials',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Nov 30, 2022'
    }
  },
  {
    id: 34,
    es: {
      title: 'I Jornada de Jóvenes Investigadores del Grupo Español del Carbón',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      date: 'Dic 02, 2022'
    },
    en: {
      title: '1st Conference of Young Researchers of the Spanish Carbon Group',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      date: 'Dec 02, 2022'
    }
  },
  {
    id: 35,
    es: {
      title: 'Capacitación en Habilidades Laborales. Cómo Preparar una Entrevista en Inglés',
      institution: 'Fundación Valencia Activa (FCVPE)',
      city: 'Valencia, España',
      date: 'Sep 30, 2024'
    },
    en: {
      title: 'Training in Job Skills. How to Prepare for an Interview in English',
      institution: 'Valencia Activa Foundation (FCVPE)',
      city: 'Valencia, Spain',
      date: 'Sep 30, 2024'
    }
  },
  {
    id: 36,
    es: {
      title: 'Prevención de Riesgos Laborales I+D',
      institution: 'Universidad de Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, España',
      date: 'Nov 11, 2025'
    },
    en: {
      title: 'Occupational Risk Prevention R&D',
      institution: 'University of Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, Spain',
      date: 'Nov 11, 2025'
    }
  }
].reverse();
