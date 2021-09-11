import { HeroComponent } from '../../components/hero/hero';
import { FeatureSection } from '../../components/feature-section/feature-section.component';
import { DownloadComponent } from '../../components/download/download.component';
import { FAQComponent } from '../../components/faq-section/faq.component';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';
import { FooterComponent } from '../../components/footer/footer.component';

export const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <FeatureSection />
      <DownloadComponent />
      <FAQComponent />
      <ContactUsComponent />
      <FooterComponent />
    </>
  );
};
