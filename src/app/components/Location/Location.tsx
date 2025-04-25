'use client'

import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./LocationMap'), {
    ssr: false,
})

const Location = () => {
    return (
        <section className='bg-[#F8F8F8]'>
            <div className='container mx-auto'>
                <div className='flex xl:hidden justify-between items-center flex-wrap pt-12'>
                    <h2 className='w-full xl:w-auto text-center xl:text-left font-primary font-medium text-[24px] md:text-[48px] 2xl:text-[64px] leading-[128%]'>
                        Локація та інфраструктура
                    </h2>
                    <p className='w-full xl:w-auto text-center xl:text-left font-secondary font-normal text-[12px] md:text-[18px] leading-[150%] text-[#4E4E4E]'>
                        Усе, що потрібно для сучасного життя
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-6 py-12'>
                    <div className='col-span-2 xl:col-span-1 w-full min-h-[350px] xl:min-h-[0px] h-full rounded-2xl overflow-hidden'>
                        <DynamicMap />
                    </div>
                    <div className='col-span-2 xl:col-span-1'>
                        <h2 className='hidden xl:block text-center xl:text-left font-primary font-medium text-[24px] md:text-[40px] xl:text-[42px] my-6'>
                            Локація та інфраструктура
                        </h2>
                        <p className='text-center xl:text-left font-secondary text-[18px] leading-[150%] text-[#4E4E4E]'>
                            ЖК VOLNA розташований у зручному та спокійному районі, де все необхідне — поруч. У
                            безпосередній близькості знаходяться магазини, школи, дитячі садки, аптеки та сервіси.
                        </p>
                        <p className='text-center xl:text-left font-secondary text-[18px] leading-[150%] text-[#4E4E4E] mt-4'>
                            <strong>Зручна транспортна розв’язка</strong> дозволяє швидко дістатися в будь-яку частину
                            міста, як на авто, так і громадським транспортом.
                        </p>
                        <div className='flex justify-between items-center mt-10 flex-wrap'>
                            <div className='order-2 md:order-none w-full md:w-auto flex items-center flex-wrap'>
                                <div className='w-full md:w-auto text-center md:text-left font-secondary text-[18px] leading-[150%] text-[#4E4E4E] mt-4 md:mt-0'>
                                    До метро:
                                </div>
                                <div className='w-full md:w-auto flex justify-center items-center mt-4 md:mt-0'>
                                    <div className='font-secondary text-[15px] leading-[150%] p-3 bg-white rounded-2xl ml-5 mr-3'>
                                        Автобус 74
                                    </div>
                                    <div className='font-secondary text-[15px] leading-[150%] p-3 bg-white rounded-2xl'>
                                        Маршрутка 174
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center order-1 md:order-none w-full md:w-auto '>
                                <div className='font-secondary text-[15px] leading-[150%] p-3 bg-[#B4EF7B] rounded-2xl'>
                                    Станція метро “Славутич”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
