export type CarouselSlide = {
    src: string;
    alt: string;
  };
  
  export type CarouselProps = {
    carouselSlides: ReadonlyArray<CarouselSlide>;
  };
  