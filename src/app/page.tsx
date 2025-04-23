import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Contacts from './components/Contacts/Contacts'
import HeroSection from './components/HeroSection/HeroSection'

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Advantages />
            <Contacts />
        </>
    )
}
