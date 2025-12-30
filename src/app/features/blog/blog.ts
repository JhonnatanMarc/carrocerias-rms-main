import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductImagesService } from '@core/services/product-images.service';

interface Proyecto {
  slug: string;
  img: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  private readonly productService = inject(ProductImagesService);

  private readonly categoryDescriptions: Record<string, string> = {
    '1-brazos-de-izaje': 'Sistemas especializados para carga y descarga',
    '2-contenedores': 'Soluciones versátiles para transporte',
    '3-tanques-cisternas-de-vacio': 'Transporte de líquidos industriales',
    '4-semirremolque-plataforma': 'Carga sobredimensionada',
    '5-volquete-roquero-semirroquero': 'Minería y construcción',
    '6-semirremolque-cama-baja-lowboy': 'Maquinaria pesada',
    '10-furgones': 'Protección de carga seca',
    '11-baranda': 'Carga general',
    '12-grua-con-contenedor-para-chatarra': 'Material reciclable'
  };

  readonly proyectos = computed<Proyecto[]>(() => {
    const categories = this.productService.categories();
    const proyectos: Proyecto[] = [];

    for (const category of categories) {
      let firstModel = null;
      let subcategoryPath: string | undefined;

      if (category.subcategories?.length) {
        for (const sub of category.subcategories) {
          if (sub.models.length) {
            firstModel = sub.models[0];
            subcategoryPath = sub.path;
            break;
          }
        }
      } else if (category.models?.length) {
        firstModel = category.models[0];
      }

      if (firstModel?.images.length) {
        const imagePath = this.productService.getImagePath(
          category.path,
          firstModel.folderName,
          firstModel.images[0].fileName,
          subcategoryPath
        );

        proyectos.push({
          slug: category.id, // ✅ ESTE ES EL CAMBIO CLAVE
          img: imagePath,
          title: category.name,
          category: category.name,
          description:
            this.categoryDescriptions[category.id] ??
            'Soluciones industriales especializadas'
        });

      }
    }

    return proyectos;
  });
}
