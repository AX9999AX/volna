import Image from 'next/image'
import AnimatedList from '../AnimatedList/AnimatedList'

const Advantages = () => {
    return (
        <section
            id='advantages'
            className='container mx-auto px-8 mt-20 mb-20'>
            <div className='flex justify-between items-center flex-wrap mt-8 md:mt-20 mb-10'>
                <h2 className='w-full md:w-auto text-center md:text-left font-primary font-medium text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                    Переваги проживання
                </h2>
                <p className='w-full md:w-auto text-center md:text-left font-secondary font-normal text-[12px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                    Усе, що потрібно для сучасного життя
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-2 md:col-span-1 relative grid grid-cols-2 gap-6'>
                    <div className='col-span-2 2xl:col-span-1 bg-[#F8F8F8] rounded-[29px] h-auto 2xl:h-[240px] p-6'>
                        <h3 className='font-primary font-medium text-[20px] md:text-[26px] leading-[128%] text-center mb-3'>
                            Сервісна служба
                        </h3>
                        <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E] text-center'>
                            На території ЖК працює сервісні служба, яка надає послуги з прання речей та прибирання
                            кімнат та апартаментів
                        </p>
                    </div>
                    <div className='col-span-2 2xl:col-span-1 bg-[#B4EF7B] rounded-[29px] h-auto 2xl:h-[420px]'>
                        <div className='relative h-[200px] m-2 rounded-2xl'>
                            <Image
                                fill
                                src={'/advantages/parking.avif'}
                                alt='Parking'
                                className='object-cover rounded-2xl'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                        <h3 className='font-primary font-medium text-[26px] leading-[128%] text-center my-3'>
                            Парковка на 40+ автомобілів
                        </h3>
                        <p className='font-secondary text-[18px] leading-[150%] text-[#4E4E4E] px-3 text-center mb-6 md:mb-0'>
                            Для зручності мешканців передбачено паркомісця на 40 автомобілів.
                        </p>
                    </div>
                    <Image
                        width={672}
                        height={275}
                        src='/advantages/territory.jpg'
                        alt='Gallery 1'
                        className='hidden 2xl:block absolute -z-1 bottom-0 w-full xl:h-[340px] 2xl:h-[275px]'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className='bg-[#F8F8F8] p-6 mb-5 rounded-[33px]'>
                        <h3 className='text-center md:text-left font-primary font-medium text-[20px] md:text-[26px] leading-[128%]'>
                            Автономність та екологічність
                        </h3>
                        <AnimatedList
                            items={[
                                'Водопостачання з власної артезіанської свердловини з системою очистки води',
                                'Власна система очищення та водовідведення стічних вод',
                                'Система автоматичного поливу зелених насаджень',
                                'Автономне аварійне джерело електропостачання',
                            ]}
                        />
                    </div>
                    <div className='bg-[#F8F8F8] p-6 rounded-[33px]'>
                        <h3 className='text-center md:text-left font-primary font-medium text-[20px] md:text-[26px] leading-[128%]'>
                            Безпека Житлового Комплексу
                        </h3>
                        <AnimatedList
                            items={[
                                'Система протипожежної сигналізації та оповіщення про пожежу',
                                'Система димовидалення та пожежогасіння',
                                'Блискавкозахист',
                                'Відеоспостереження та контроль доступу на територію комплексу',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
