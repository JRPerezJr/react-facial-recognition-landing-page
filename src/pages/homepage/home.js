import { HeroComponent } from '../../components/hero/hero';
import { FeatureSection } from '../../components/feature-section/feature-section.component';
import { DownloadComponent } from '../../components/download/download.component';
import { FAQComponent } from '../../components/faq-section/faq.component';

export const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <FeatureSection />
      <DownloadComponent />
      <FAQComponent />
    </>
  );
};
