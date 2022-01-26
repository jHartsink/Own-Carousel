/* eslint-disable arrow-body-style */
/* eslint-disable lit-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/naming-convention */

import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { CarouselProps } from './Carousel.types';

export function CarouselTemplate(
  { carouselSlides }: CarouselProps,
  ref?: string,
): ComponentTemplateResult {
  return html`<div data-component="carousel" data-ref=${ref}>
    <div class="background-wrapper">
      ${carouselSlides.map(({ src, alt }) => {
        return html`
          <picture data-ref="background-visual">
            <img src=${src} alt=${alt} />
          </picture>
        `;
      })}
    </div>
    <button class="carousel-button previous" data-ref="previous">
      <span> Previous</span>
    </button>

    <button class="carousel-button next" data-ref="next">
      <span>Next</span>
    </button>

    <div data-ref="carousel" class="carousel" data-carousel>
      <ul class="carousel-wrapper">
        ${carouselSlides.map(({ src, alt }) => {
          return html`<li class="carousel-slide" data-ref="carousel-slide">
            <div class="visual">
              <picture>
                <img src=${src} alt=${alt} />
              </picture>
            </div>
          </li>`;
        })}
      </ul>
    </div>
  </div>`;
}
