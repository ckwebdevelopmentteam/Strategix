import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import LeadForm from '@/components/LeadForm/LeadForm';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import TurnkeySolutions from '@/components/TurnkeySolutions/TurnkeySolutions';
import Partners from '@/components/Partners/Partners';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/UI/WhatsAppButton';
import ExitIntentPopup from '@/components/UI/ExitIntentPopup';
import LeadModal from '@/components/UI/LeadModal';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LeadForm />
        <Services />
        <WhyUs />
        <TurnkeySolutions />

        <FinalCTA />
      </main>
      <Footer />
      {/* Fixed Floating Elements */}
      <WhatsAppButton />
      <ExitIntentPopup />
      <LeadModal />
    </>
  );
}
