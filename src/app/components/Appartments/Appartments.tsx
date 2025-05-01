import AppartmentHalfLux from '../Appartment/AppartmentHalfLux'
import AppartmentLux from '../Appartment/AppartmentLux'

const Appartments = () => {
    return (
        <section
            id='appartments'
            className='container mx-auto px-8 mt-20 mb-20'>
            <div className='flex justify-between items-center flex-wrap mt-8 md:mt-20 mb-4 md:mb-10'>
                <h2 className='w-full md:w-auto text-center md:text-left font-primary font-bold text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                    Варіанти проживання
                </h2>
                <p className='w-full md:w-auto text-center md:text-left font-secondary font-normal text-[13px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Від «стандарту» до «люксу» — усе продумано
                </p>
            </div>
            <AppartmentLux />
            <AppartmentHalfLux />
        </section>
    )
}

export default Appartments
