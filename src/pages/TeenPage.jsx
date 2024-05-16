import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SkillsSection from '../components/SkillsSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';

const TeenPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <HowItWorksSection />
            <SkillsSection />
            <SuccessStoriesSection />
            <FAQSection />
            <CallToActionSection />
            <Footer />
        </div>
    );
}

export default TeenPage;
