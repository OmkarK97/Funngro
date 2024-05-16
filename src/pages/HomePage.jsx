import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import CallToActionSection from '../components/CallToActionSection';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeatureSection />
            <TestimonialSection />
            <CallToActionSection />
            <Footer />
        </div>
    );
}

export default HomePage;
