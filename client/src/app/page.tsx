import ClientReviews from "@/components/sections/ClientReviews";
import CtaSection from "@/components/sections/CtaSection";
import FAQSection from "@/components/sections/FaqSection";
import Hero from "@/components/sections/Hero";
import OurEducators from "@/components/sections/OurEducators";
import OurServicesSection from "@/components/sections/OurServices";
import WhyChoose from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* why choose us */}
      <WhyChoose />

      {/* our educators */}
      <OurEducators />

      {/* client reviews */}
      <ClientReviews />

      {/* what we offer or our services state all courses avl */}
      <OurServicesSection/>


      {/* register or cta */}
      <CtaSection />

      {/* faq */}
      <FAQSection/>
      
    </div>
  );
}
