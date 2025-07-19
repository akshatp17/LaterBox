import Footer from "../components/footer"
import HeroSection from "../components/landing/hero-section"
import LandingNavbar from "../components/landing/landing-navbar"
import LoginSection from "../components/landing/login-section"
import ProvideSection from "../components/landing/provide-section"
import PricingSection from "../components/landing/pricing-section"
import FAQSection from "../components/landing/faq-section"

const LandingPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen overflow-x-hidden">
            <LandingNavbar />

            {/* Hero Section */}
            <section className="flex items-center justify-evenly py-20">
                <HeroSection />
            </section>

            {/* Login and Upload Section + AI Features */}
            <section className="bg-gray-100 py-20">
                <LoginSection />
            </section>

            {/* What we provide/How to use section */}
            <section className="bg-white py-20">
                <ProvideSection />
            </section>

            {/* Pricing Section */}
            <section className="bg-gray-100 py-20">
                <PricingSection />
            </section>

            {/* FAQs Section */}
            <section className="bg-white py-20">
                <FAQSection />
            </section>

            <Footer />
        </div>
    )
}

export default LandingPage
