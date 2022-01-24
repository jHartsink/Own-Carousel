import type { AppTemplateProps } from '../App.template';
import { CarouselMock } from '@/components/carousel/Carousel.mock';

export const data = (): AppTemplateProps => ({
  layout: {
    name: 'default-layout',
    props: {
      blocks: [
        {
          name: 'carousel',
          props: CarouselMock,
        },
      ],
    },
  },
});

// https://github.com/nfl/react-helmet
export const meta = (): Record<string, string> => ({
  title: 'foo',
  description: 'bar',
});
