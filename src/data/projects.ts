import type { ProjectData } from '../types';

const projects: ProjectData[] = [
  {
    id: 0,
    es: {
      title: 'Desarrollo de Actividades dentro del grupo: Procesos Químicos Catalíticos y Biotecnológicos',
      institution: 'Universidad Nacional de Colombia (UNAL)',
      city: 'Manizales, Colombia',
      description: [
        'Síntesis de materiales tipo hidrotalcita en diferentes relaciones Mg-Al',
        'Reacciones de intercambio iónico en las hidrotalcitas con especies orgánicas',
        'Caracterización fisicoquímica con XRD, XPS, SEM-EDX y FT-IR'
      ]
    },
    en: {
      title: 'Development of Activities Within the Group: Catalytic and Biotechnological Chemical Processes',
      institution: 'National University of Colombia (UNAL)',
      city: 'Manizales, Colombia',
      description: [
        'Synthesis of hydrotalcite-type materials with different Mg-Al ratios',
        'Ion-exchange reactions in hydrotalcites with organic species',
        'Physicochemical characterization using XRD, XPS, SEM-EDX and FT-IR'
      ]
    }
  },
  {
    id: 1,
    es: {
      title:
        'Obtención de bifenilo usando nanopartículas de paladio soportadas en una hidroxisal intercambiada con un surfactante',
      institution: 'Universidad de Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      description: [
        'Síntesis de hidroxisales intercambiadas con surfactante dodecil-sulfato de sodio (DS)',
        'Obtención de nanopartículas de paladio por reducción con etanol',
        'Reacción de acoplamiento C-C de Heck y Suzuki'
      ]
    },
    en: {
      title:
        'Production of Biphenyl Using Palladium Nanoparticles Supported on a Hydroxysalt Exchanged with a Surfactant',
      institution: 'University of Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      description: [
        'Synthesis of hydroxysalts exchanged with sodium dodecyl sulfate (DS)',
        'Preparation of palladium nanoparticles via ethanol reduction',
        'C–C coupling reactions (Heck and Suzuki)'
      ]
    }
  },
  {
    id: 2,
    es: {
      title:
        'Exploración de la actividad de hidroxisales laminares con paladio en reacciones de acoplamiento tándem con 2-yodofenol',
      institution: 'Universidad de Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      description: [
        'Cuantificación de lauril sulfato de sodio mediante el método de azul de metileno para tensioactivos aniónicos',
        'Determinación de producto organicos de reacción por TLC y de GC-MS',
        'Síntesis de difenilacetileno y 2-fenilbenzofurano a través de la reacción de síntesis orgánica de Sonogashira'
      ]
    },
    en: {
      title:
        'Exploration of the Activity of Palladium-Containing Layered Hydroxysalts in Tandem Coupling Reactions with 2-Iodophenol',
      institution: 'University of Caldas (UCaldas)',
      city: 'Manizales, Colombia',
      description: [
        'Quantification of sodium lauryl sulfate using the methylene blue method for anionic surfactants',
        'Determination of organic reaction products by TLC and GC-MS',
        'Synthesis of diphenylacetylene and 2-phenylbenzofuran through the Sonogashira organic synthesis reaction'
      ]
    }
  },
  {
    id: 3,
    es: {
      title:
        'Evaluación preliminar de la posibilidad de valorización de residuos de polvo de acero mediante un proceso fisicoquímico a escala de laboratorio',
      institution: 'Universidad Católica de Manizales (UCM)',
      city: 'Manizales, Colombia',
      description: [
        'Análisis granulométrico por tamizado utilizando la serie de mallas Tyler',
        'Digestión ácida de residuos sólidos mediante agua regia',
        'Cristalización y purificación de sales inorgánicas por métodos de precipitación controlada'
      ]
    },
    en: {
      title:
        'Preliminary Evaluation of the Feasibility of Valorizing Steel Dust Waste Through a Physicochemical Process at Laboratory Scale',
      institution: 'Catholic University of Manizales (UCM)',
      city: 'Manizales, Colombia',
      description: [
        'Granulometric analysis by sieving using the Tyler mesh series',
        'Acid digestion of solid residues using aqua regia',
        'Crystallization and purification of inorganic salts through controlled precipitation methods'
      ]
    }
  },
  {
    id: 4,
    es: {
      title:
        'Preparación de carbones activados mediante activación química de residuos de cáscaras de semillas de argán: aplicación para la eliminación de paracetamol y amoxicilina de soluciones acuosas',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      description: [
        'Impresión 3D y adecuación de reactores para sistemas gaseosos',
        'Estudio de deposición de nano materiales sobre distintos filamentos de impresión 3D',
        'Implantación de montaje experimental para descomponer formaldehído'
      ]
    },
    en: {
      title:
        'Preparation of Activated Carbons by Chemical Activation of Argan Seed Shell Waste: Application for the Removal of Paracetamol and Amoxicillin from Aqueous Solutions',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      description: [
        '3D printing and adaptation of reactors for gaseous systems',
        'Study of nanomaterial deposition on different 3D printing filaments',
        'Implementation of an experimental setup for formaldehyde decomposition'
      ]
    }
  },
  {
    id: 5,
    es: {
      title: 'Difusores de gases obtenidos mediante impresión 3D como electrodos para la foto/electro-reducción de CO2',
      institution: 'Universidad de Granada (UGR)',
      city: 'Granada, España',
      description: [
        'Modificación y adecuación de reactores fabricados mediante impresión 3D',
        'Instalación de sistemas de montaje para la descomposición de gases nocivos utilizando reactores impresos en 3D',
        'Diseño y construcción de un sistema de reacción en continuo con iluminación LED simulando luz solar'
      ]
    },
    en: {
      title: '3D-Printed Gas Diffusers as Electrodes for the Photo/Electroreduction of CO2',
      institution: 'University of Granada (UGR)',
      city: 'Granada, Spain',
      description: [
        'Modification and adaptation of reactors manufactured by 3D printing',
        'Installation of assembly systems for the decomposition of harmful gases using 3D printed reactors',
        'Design and construction of a continuous-flow reaction system with LED illumination simulating sunlight'
      ]
    }
  },
  {
    id: 6,
    es: {
      title: 'Sensores de Amoníaco de Bajo Coste para Control y Prevención de la Contaminación Atmosférica',
      institution: 'Universidad de Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, España',
      description: [
        'Diseño y construcción de un sistema de atmósfera inerte para síntesis de materiales sensibles al aire',
        'Optimización de la síntesis inorgánica de semiconductores acoplados',
        'Optimización de tecnología analítica para la determinación de amoníaco'
      ]
    },
    en: {
      title: 'Low-Cost Ammonia Sensors for the Control and Prevention of Atmospheric Pollution',
      institution: 'University of Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, Spain',
      description: [
        'Design and construction of an inert-atmosphere system for the synthesis of air-sensitive materials',
        'Optimization of the inorganic synthesis of coupled semiconductors',
        'Optimization of analytical technology for ammonia determination'
      ]
    }
  },
  {
    id: 7,
    es: {
      title:
        'Desarrollo de Sensores para Gases Contaminantes de Interés Industrial Basados en Materiales Híbridos Nanoestructurados',
      institution: 'Universidad de Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, España',
      description: [
        'Adecuación de sistemas con sensores para monitoreo en condiciones ambientales reales',
        'Diseño de un sistema de detección de gases a nivel de partes por billón (ppb)',
        'Diseño e implementación de un equipo de medición fotoelectroquímica con complejos quelantes'
      ]
    },
    en: {
      title:
        'Development of Sensors for Industrially Relevant Pollutant Gases Based on Hybrid Nanostructured Materials',
      institution: 'University of Castilla-La Mancha (UCLM)',
      city: 'Ciudad Real, Spain',
      description: [
        'Adaptation of sensor systems for monitoring under real environmental conditions',
        'Design of a gas detection system at parts-per-billion (ppb) levels',
        'Design and implementation of a photoelectrochemical measurement setup using chelating complexes'
      ]
    }
  }
];

export default projects.reverse();
