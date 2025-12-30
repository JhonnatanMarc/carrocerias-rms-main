 import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.html',
  imports: [CommonModule]
})
export default class BlogDetailComponent {
  slug = '';
  data: any;

  productos: Record<string, any> = {

    '1-brazos-de-izaje': {
      title: 'Brazos de Izaje',
      description:
        'En Carrocerías RMS, ofrecemos una amplia gama de contenedores diseñados para satisfacer las necesidades de almacenamiento y transporte de diversas industrias. Nuestros contenedores están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes',
      caracteristicas: [
        'Estructura de acero resistente y duradero',
        'Capacidad de carga: desde 1m³ hasta 45m³',
        'Dimensiones: desde 1m x 1m x 1m hasta 6m x 2,6m x 2,6m (Largo x Ancho x Alto)',
        'Puertas de acceso con cerradura de seguridad'
      ],
      Opciones: [
        'Colores y diseños personalizados',
        'Equipamiento adicional (estanterías, divisores, etc.)',
        'Sistema de seguimiento y monitoreo'
      ],
      Tipos: [
        'Contenedores para almacenamiento de materiales',
        'Contenedores para transporte de carga',
        'Contenedores para almacenamiento de residuos',
        'Contenedores para uso en obra'
      ],
        Beneficio: [
        'Mayor seguridad para tus productos y materiales',
        'Mayor eficiencia en el almacenamiento y transporte de carga',
        'Personalización según tus necesidades específicas',
        'Cumplimiento con las normas y regulaciones internacionales'
      ],
        Aplicaciones: [
        'Industria de la construcción',
        'Industria de la manufactura',
        'Industria de la logística y el transporte',
        'Industria de la minería',
        'Transporte de residuos sólidos.'
      ]
    },

    '2-contenedores': {
      title: 'Contenedores',
      description:
        'En Carrocerías RMS, ofrecemos una amplia gama de semirremolques plataforma diseñados para satisfacer las necesidades de transporte de carga de diversas industrias. Nuestros semirremolques plataforma están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes.',
      caracteristicas: [
        'Estructura de acero de alta resistencia',
        'Capacidad de carga: desde 20 toneladas hasta 50 toneladas',
        'Dimensiones: desde 12m x 2,6m hasta 18m x 3m (Largo x Ancho)',
        'Altura de carga: desde 0,5m hasta 2,4m',
        'Sistema de frenos de aire y ABS'
      ],
      Opciones: [
        'Colores y diseños personalizados',
        'Sistema de seguimiento y monitoreo'
      ],
      Tipos: [
        'Semirremolques plataforma para transporte de carga general',
        'Semirremolques plataforma para transporte de maquinaria y equipo',
        'Semirremolques plataforma para transporte de materiales de construcción',
        'Semirremolques plataforma para transporte de productos agrícolas'
      ]  ,
        Beneficio: [
        'Mayor seguridad para tus productos y personal',
        'Mayor eficiencia en el transporte de carga',
        'Personalización según tus necesidades específicas',
        'Cumplimiento con las normas y regulaciones internacionales'
      ],
        Aplicaciones: [
        'Industria de la construcción',
        'Industria de la manufactura',
        'Industria de la logística y el transporte',
        'Industria de la minería',
        ]
    },

    '3-tanques-cisternas-de-vacio': {
      title: 'Tanques Cisternas de Vacío',
     description:
'En Carrocerías RMS, ofrecemos una amplia gama de cisternas diseñadas para satisfacer las necesidades detransporte de líquidos y gases de diversas industrias. Nuestras cisternas están fabricadas con materiales de alta calidad y están diseñadas para ser resistentes, seguras y eficientes'    ,
  caracteristicas: [
        'Estructura para todo tipo de carga liquida',
        'Tanque de acero o aluminio ',
        'Válvulas de seguridad y control de presión',
        'Sistema de vacío (cirtenas sanitarias) ',
        'Personalización según tus necesidades'
      ],
       Opciones: [
        'Colores y diseños personalizados',
        'Sistema de seguimiento y monitoreo'
      ],
      Tipos: [
        'Cisternas para transporte de líquidos (agua, combustible, productos químicos, etc.) ',
        'Cisternas para transporte de gases (GLP, GNL, etc.) ',
        'Cisternas para transporte de productos alimenticios (leche, jugo, etc.) ',
        'Cisternas para transporte de productos químicos (ácidos, bases, etc.) ',
        'Cisternas para transporte de residuos líquidos. '
      ]  ,
        Beneficio: [
        'Mayor seguridad para tus productos y personal',
        'Mayor eficiencia en el transporte de líquidos y gases',
        'Personalización según tus necesidades específicas',
        'Cumplimiento con las normas y regulaciones internacionales'
      ],
        Aplicaciones: [
        'Industria de la minería',
        'Industria de la construcción',
        'Industria de la logística y el transporte',
        'Industria de la agricultura',
        ]
    },
    

    '4-semirremolque-plataforma': {
      title: 'Semirremolque Plataforma',
      description:
        'En Carrocerías RMS, ofrecemos una amplia gama de volquetes roqueros diseñados para satisfacer las necesidades de transporte de materiales pesados y voluminosos en la industria de la minería y la construcción. Nuestros volquetes roqueros están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes.',
      caracteristicas: [
        'Estructura de acero resistente y duradero',
        'Capacidad de carga: desde 20 toneladas hasta 50 toneladas',
        'Dimensiones: desde 4m x 2,5m x 1,5m hasta 6m x 3m x 2m (Largo x Ancho x Alto)',
        'Sistema de descarga hidráulica',
        'Sistema de frenos de aire y ABS'
      ],
       Opciones: [
        'Colores y diseños personalizados',
        'Sistema de seguimiento y monitoreo'
      ],
      Tipos: [
        'Volquetes roqueros para transporte de rocas y minerales',
        'Volquetes roqueros para transporte de materiales de construcción',
        'Volquetes roqueros para transporte de desechos mineros',
        'Volquetes roqueros para transporte de productos agrícolas'
      ]  ,
        Beneficio: [
        'Mayor seguridad para tus productos y personal',
        'Mayor eficiencia en el transporte de materiales pesados y voluminosos',
        'Personalización según tus necesidades específicas',
        'Cumplimiento con las normas y regulaciones internacionales'
      ],
       medidas:[
          ' Capacidad de carga: desde 1.000 litros hasta 18.000 litros ',
          'Dimensiones: desde 2m x 1m x 1m hasta 10m x 3m x 3m (Largo x Ancho x Alto)',
          'Carga Útil: desde 1 tonelada hasta 18 toneladas ',
          '- Materiales: Acero, Aluminio, Acero Inoxidable, según tus necesidades '
        ]
    },

    '5-volquete-roquero-semirroquero': {
      title: 'Volquete Roquero / Semirroquero',
      description:
      'En Carrocerías RMS, ofrecemos una amplia gama de volquetes roqueros diseñados para satisfacer las necesidades de transporte de materiales pesados y voluminosos en la industria de la minería y la construcción. Nuestros volquetes roqueros están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes.',
        caracteristicas: [
          'Estructura de acero resistente y duradero',
          'Capacidad de carga: desde 20 toneladas hasta 50 toneladas',
          'Dimensiones: desde 4m x 2,5m x 1,5m hasta 6m x 3m x 2m (Largo x Ancho x Alto)',
          'Sistema de descarga hidráulica',
          'Sistema de frenos de aire y ABS'
        ],
        Opciones: [
          'Colores y diseños personalizados',
          'Sistema de seguimiento y monitoreo',
        ],
        Tipos: [
          'Volquetes roqueros para transporte de rocas y minerales',
          'Volquetes roqueros para transporte de materiales de construcción',
          'Volquetes roqueros para transporte de desechos mineros',
          'Volquetes roqueros para transporte de productos agrícolas'
        ]  ,
          Beneficio: [
          'Volquetes roqueros para transporte de productos agrícolas',
          'Volquetes roqueros para transporte de productos agrícolas',
          'Volquetes roqueros para transporte de productos agrícolas',
          'Cumplimiento con las normas y regulaciones internacionales'
        ],
          Aplicaciones: [
          'Industria de la minería',
          'Industria de la construcción',
          'Industria de la logística y el transporte',
          'Industria de la manufactura',
          ]
      },

    '6-semirremolque-cama-baja-lowboy': {
      title: 'Semirremolque Cama Baja (Lowboy)',
      description:
      'En Carrocerías RMS, ofrecemos una amplia gama de semirremolques cama baja diseñados para satisfacer las necesidades de transporte de carga pesada y voluminosa en diversas industrias. Nuestros semirremolques cama baja están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes',
      caracteristicas: [
          'Estructura de acero resistente y duradero',
          'Capacidad de carga: desde 20 toneladas hasta 60 toneladas',
          'Dimensiones: desde 12m x 3m hasta 18m x 4m (Largo x Ancho)',
          'Dimensiones: desde 12m x 3m hasta 18m x 4m (Largo x Ancho)',
          'Sistema de frenos de aire y ABS'
        ],
        Opciones: [
          'Colores y diseños personalizados',
          'Sistema de seguimiento y monitoreo',
        ],
        Tipos: [
          'Semirremolques cama baja para transporte de maquinaria pesada',
          'Semirremolques cama baja para transporte de maquinaria pesada',
          'Semirremolques cama baja para transporte de materiales de construcción',
          'Semirremolques cama baja para transporte de productos agrícolas'
        ]  ,
          Beneficio: [
          'Mayor seguridad para tus productos y personal',
          'Mayor eficiencia en el transporte de carga pesada y voluminosa',
          'Personalización según tus necesidades específicas',
          'Cumplimiento con las normas y regulaciones internacionales'
        ],
          Aplicaciones: [
          'Industria de la minería',
          'Industria de la construcción',
          'Industria de la logística y el transporte',
          'Industria de la manufactura',
          ]
      },

    '10-furgones': {
      title: 'Furgones',
      description:
        'En carrocerías RMS ofrecemos una amplia gama de furgones diseñados para satisfacer las necesidades de transporte de carga de diversas industrias. nuestros furgones están fabricados con materiales de alta calidad y están diseñados para ser resistentes, seguros y eficientes.',
        caracteristicas: [
          'Estructura de acero resistente y duradero',
          'Carrocería de acero o aluminio según el tipo de carga para el transporte',
          'Puertas de acceso con cerradura de seguridad',
          'Sistema de ventilación y iluminación',
          'Personalización según tus necesidades'
        ],
         medidas:[
          'Capacidad de carga: desde 3 hasta 25 toneladas',
          'Dimensiones: desde 4m x 2m x 2m hasta 11m x 2.60 m x 3m (largo x ancho x alto)',
          'Peso bruto: desde 6 toneladas hasta 30 toneladas',
        ],
        Opciones: [
          'Colores y diseños personalizados',
          'Equipamiento adicional (grúa, rampa, etc.)',
          'Sistema de seguimiento y monitoreo'
        ]  ,
          Beneficio: [
          'Mayor seguridad para tus productos y personal',
          'Mayor eficiencia en el transporte de carga',
          'Personalización según tus necesidades específicas',
        ],
    },

    '11-baranda': {
      title: 'Baranda',
      description:
      'En Carrocerías RMS, ofrecemos una amplia gama de barandas rebatibles diseñadas para satisfacer las necesidades de seguridad y protección en el transporte de carga en diversas industrias. Nuestras barandas rebatibles están fabricadas con materiales de alta calidad y están diseñadas para ser resistentes, seguras y eficientes.',
      caracteristicas: [
        'Estructura de acero resistente y duradero',
        'Altura: desde 0,5m hasta 2m',
        'Longitud: desde 1m hasta 10 m',
        'Sistema de rebatimiento manual o hidráulico'
      ],
        Opciones: [
          'Colores y diseños personalizados',
          'Sistema de seguimiento y monitoreo',
          'Equipamiento adicional (cerraduras, sensores, etc.)',
          'Materiales y recubrimientos especiales'
        ],
        Tipos: [
          'Barandas rebatibles para camiones y semirremolques',
          'Barandas rebatibles para contenedores y plataformas',
          'Barandas rebatibles para maquinaria y equipo',
          'Barandas rebatibles para maquinaria y equipo'
        ]  ,
          Beneficio: [
          'Mayor seguridad para tus productos y personal',
          'Mayor eficiencia en el transporte de carga',
          'Personalización según tus necesidades específicas',
          'Cumplimiento con las normas y regulaciones internacionales'
        ],
          Aplicaciones: [
          'Industria de la minería',
          'Industria de la construcción',
          'Industria de la logística y el transporte',
          'Industria de la manufactura',
          ]
      },

    '12-grua-con-contenedor-para-chatarra': {
      title: 'Grúa con Contenedor para Chatarra',
      description:
        'En Carrocerías RMS, ofrecemos una amplia gama de grúas con contenedor diseñadas para satisfacer las necesidades de carga y descarga de materiales en diversas industrias. Nuestras grúas con contenedor están fabricadas con materiales de alta calidad y están diseñadas para ser resistentes, seguras y eficientes.',
     caracteristicas: [
        'Estructura de acero resistente y duradero',
        'Capacidad de carga: desde 1 tonelada hasta 25 toneladas',
        'Altura de izaje: desde 2m hasta 4.30 m',
        'Longitud de la grúa: desde 2m hasta 8m',
        'Sistema de control de carga y seguridad'
      ],
        Opciones: [
          'Colores y diseños personalizados',
          'Sistema de seguimiento y monitoreo',
          'Equipamiento adicional (cerraduras, sensores, etc.)',
        ],
        Tipos: [
          'Gruas con contenedor para carga y descarga de materiales',
          'Gruas con contenedor para uso en obra',
          'Gruas con contenedor para uso en puertos y aeropuertos',
          'Gruas con contenedor para uso en industrias de la construcción y la manufactura'
        ]  ,
          Beneficio: [
          'Mayor seguridad para tus productos y personal',
          'Mayor eficiencia en la carga y descarga de materiales',
          'Personalización según tus necesidades específicas',
          'Cumplimiento con las normas y regulaciones internacionales'
        ],
          Aplicaciones: [
          'Industria de la minería',
          'Industria de la construcción',
          'Industria de la logística y el transporte',
          'Industria de la manufactura',
          ]
      }
  };

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.data = this.productos[this.slug];
  }
}