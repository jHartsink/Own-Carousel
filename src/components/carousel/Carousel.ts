import { defineComponent, refElement, bind, refCollection } from '@muban/muban';
import gsap from 'gsap';
import {eases} from '../../utils/transitions'
import './Carousel.style.scss';

export const Carousel = defineComponent({
  name: 'carousel',
  components: [],
  refs: {
    previousButton: refElement('previous'),
    nextButton: refElement('next'),
    carousel: refElement('carousel'),
    slides: refCollection('carousel-slide'),
    backgroundVisuals: refCollection('background-visual'),
  },
  setup({ refs }) {
    const { previousButton, nextButton, slides, backgroundVisuals } = refs;
    let activeIndex = 0;
    let wantedIndex = -1;
    const backgroundTimelines = backgroundVisuals.getElements().map((background) =>
      gsap.timeline({ paused: true }).from(background, {
        opacity: 0,
        duration: 2.2,
        ease: 'none',
      }),
    );

    gsap.set(backgroundTimelines[activeIndex], {
      progress: 1,
    });

    const positionSlides = () => {
      const offset = wantedIndex > activeIndex ? 1 : -1;
      if (slides) {
        gsap.to(slides.getElements(), {
          xPercent: `${wantedIndex * -100}`,
          duration: 2,
          stagger: 0.2 * offset,
          ease: eases.vinnieInOut,
        });
      }
    };

    const handleActiveBackground = () => {
      backgroundTimelines[wantedIndex].play();
      backgroundTimelines[activeIndex].reverse();
    };

    const onActiveIndexUpdate = (newIndex: number) => {
      wantedIndex = activeIndex + newIndex;

      if (wantedIndex < 0) return;
      if (wantedIndex >= slides.getElements().length) return;
      positionSlides();
      handleActiveBackground();
      activeIndex = wantedIndex;
    };

    const onPreviousClick = () => {
      onActiveIndexUpdate(-1);
    };
    const onNextClick = () => {
      onActiveIndexUpdate(1);
    };

    return [
      bind(previousButton, {
        click: () => {
          onPreviousClick();
        },
      }),
      bind(nextButton, {
        click: () => {
          onNextClick();
        },
      }),
    ];
  },
});
