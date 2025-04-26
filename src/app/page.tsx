import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Appartments from './components/Appartments/Appartments'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Location from './components/Location/Location'
// import MegaGallery from './components/MegaGallery/MegaGallery'

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Appartments />
            <Advantages />
            <Location />
            {/* <MegaGallery /> */}
            <Contacts />
            <Footer />
        </>
    )
}
