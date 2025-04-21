import Gallery from '../Gallery/Gallery'
import { Stats } from '../Stats/Stats'
import Image from 'next/image'

const About = () => {
    return (
        <section
            id='about'
            className='container mx-auto px-8'>
            <div className='flex justify-between items-center mt-20 mb-10'>
                <h2 className='font-primary font-medium text-[64px] leading-[128%]'>Про Житловий Комплекс</h2>
                <p className='font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Продуманий простір для щоденного комфорту
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-2 lg:col-span-1'>
                    <Gallery images={['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg']} />
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                        Житловий комплекс «VOLNA»,
                        <strong>створений з думкою про комфорт та безпеку мешканців</strong>, розташований у тихому
                        затишному районі Києва, на Осокорках.
                    </p>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='h-[410px] bg-[#F8F8F8] rounded-[29px]'>
                            <h3 className='text-center my-4 font-primary font-medium text-[26px] leading-[128%] text-[#1D1D1F]'>
                                Комфорт та безпека мешканців
                            </h3>
                            <div className='flex justify-center mb-4'>
                                <button className='font-secondary text-[15px] cursor-pointer border-2 border-[#E5E5E5] bg-white rounded-[24px] w-[200px] h-[48px]'>
                                    Переваги Проживання
                                </button>
                            </div>
                            <div className='relative h-[240px] m-2'>
                                <Image
                                    fill
                                    src={'/gallery-1.jpg'}
                                    alt={'Alt'}
                                    className='rounded-[25px]'
                                />
                            </div>
                        </div>
                        <div className='h-[410px] bg-[#F8F8F8] rounded-[29px]'>
                            <div className='relative h-[240px]'>
                                <Image
                                    fill
                                    src={'/gallery-1.jpg'}
                                    alt={'Alt'}
                                    className='rounded-[25px]'
                                />
                            </div>
                            <h3 className='text-center mt-3 font-secondary text-[24px] leading-[150%] text-[#4E4E4E]'>
                                Ціна оренди від
                            </h3>
                            <div className='text-center font-secondary text-[24px] leading-[150%] text-[#4E4E4E]'>
                                ₴4.000
                            </div>
                            <div className='flex justify-center mt-5'>
                                <button className='font-secondary text-[15px] cursor-pointer bg-[#B4EF7B] rounded-[24px] w-[200px] h-[48px]'>
                                    Варіанти Проживання
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Stats />
            <div className='grid grid-cols-2 gap-6 mt-12'>
                <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Тут <strong>кожна деталь продумана до дрібниць</strong> - від облаштування апартаментів та кімнат до
                    озеленення і ландшафтного дизайну території, що створює <strong>приємне середовище</strong>, де
                    хочеться жити, працювати і відпочивати.
                </p>
                <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Комплекс має закриту територію з охороною 24/7 , власну автостоянку, автономну інженерну
                    інфраструктуру, включно з власною артезіанською свердловиною для водопостачання
                </p>
            </div>
        </section>
    )
}

export default About
