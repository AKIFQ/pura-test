import { Hero } from '../layout/Hero'
import { SubscribeForm } from '../common/SubscribeForm'
import { AboutSection } from '../common/AboutSection'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <>
      <Hero />
      <SubscribeForm />
      <AboutSection />
      <Contact />
    </>
  );
};
