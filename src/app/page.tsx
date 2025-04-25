import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
// import Appartment from './components/Appartment/Appartment'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
// import Location from './components/Location/Location'

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Advantages />
            <Contacts />
            <Footer />
        </>
    )
}
