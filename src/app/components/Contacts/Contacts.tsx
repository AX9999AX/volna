const Contacts = () => {
  return (
    <section id="contacts" className="container mx-auto px-8 mt-20 mb-20">
      <div className="flex justify-between items-center mb-12 flex-wrap">
        <h2 className="text-center md:text-left font-primary font-medium text-[48px] lg:text-[64px] leading-[128%]">
          Контактна інформація
        </h2>
        <p className="hidden lg:block font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
          Завжди на звʼязку
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-6 2xl:col-span-7">
          <p className="font-secondary text-[18px] text-[#4E4E4E] leading-[150%]">
            З усіх питань, стосовно проживання в ЖК, звертайтесь до
            адміністратора.
          </p>
          <p className="font-secondary text-[18px] text-[#4E4E4E] leading-[150%]">
            Ми завжди на зв’ язку та готові відповісти на ваші питання.
          </p>
          <div className="flex items-center mt-10 flex-wrap">
            <div className="font-primary font-medium text-[26px] leading-[126%] mr-[90px]">
              Месенджери
            </div>
            <div className="flex">
              <a className="cursor-pointer border-2 rounded-[24px] border-[#E5E5E5] p-2 mr-4">
                Viber
              </a>
              <a className="cursor-pointer border-2 rounded-[24px] border-[#E5E5E5] p-2">
                Telegram
              </a>
            </div>
          </div>
          <div className="flex items-center mt-8 flex-wrap">
            <div className="font-primary font-medium text-[26px] leading-[126%] mr-[28px]">
              Соціальні Мережі
            </div>
            <div className="flex">
              <a className="cursor-pointer border-2 rounded-[24px] border-[#E5E5E5] p-2 mr-4">
                TikTok
              </a>
              <a className="cursor-pointer border-2 rounded-[24px] border-[#E5E5E5] p-2 mr-4">
                Instagram
              </a>
              <a className="cursor-pointer border-2 rounded-[24px] border-[#E5E5E5] p-2">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 2xl:col-span-5 bg-[#B4EF7B] rounded-[29px] p-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div className="font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0">
              Адреса
            </div>
            <a
              href="https://www.google.com/maps?q=Київська обл., Золочівська ТГ, вул. Квіткова, 21-А"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
            >
              Київська обл., Золочівська ТГ, вул. Квіткова, 21-А
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div className="font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0">
              Телефон
            </div>
            <a
              href="tel:+380674271737"
              className="bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
            >
              +380 (67) 427-17-37
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="font-primary font-medium text-xl sm:text-2xl leading-[128%] text-gray-900 mb-2 sm:mb-0">
              Email
            </div>
            <a
              href="mailto:bvvolna@gmail.com"
              className="bg-white text-gray-800 rounded-2xl px-4 py-2 font-secondary text-sm sm:text-base hover:bg-gray-100 transition-colors duration-200"
            >
              bvvolna@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
