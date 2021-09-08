import HeroBG from '../../assets/hero-bg.png';
export const HeroImageComponent = () => {
  return (
    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
      <img
        className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
        src={HeroBG}
        alt="hero background"
      />
    </div>
  );
};
