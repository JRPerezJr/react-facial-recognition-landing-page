import { HeroImageComponent } from '../hero-image/hero-image.component';
import { RoundedRectangleComponent } from '../rounded-rectangle/rounded-rectangle.component';
import { ButtonComponent } from '../button-component/button.component';

export const HeroComponent = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 lg:leading-tight">
            A simple facial recognition application
          </h2>
          <p className="text-lg text-center lg:text-left mb-6">
            A clean and simple interface to upload your photo links and detect
            faces. Try it for free.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <ButtonComponent
              twClass={
                'btn text-primary btn-black hover:bg-primary hover:text-secondary'
              }
              text={'Try it now'}
            />
          </div>
        </div>
        <HeroImageComponent />
      </div>
      <RoundedRectangleComponent
        twClass={
          'hidden md:block overflow-hidden bg-light-blue rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36'
        }
      />
    </section>
  );
};
