import Image from "next/image";

const Advantages = () => {
  return (
    <section className="container mx-auto px-8 mt-20 mb-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-primary font-medium text-[64px] leading-[128%]">
          Переваги проживання
        </h2>
        <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
          Усе, що потрібно для сучасного життя
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative grid grid-cols-2 gap-6">
          <div className="col-span-2 2xl:col-span-1 bg-[#F8F8F8] rounded-[29px] h-auto 2xl:h-[240px] p-6">
            <h3 className="font-primary font-medium text-[26px] leading-[128%] text-center mb-3">
              Сервісна служба
            </h3>
            <p className="font-secondary text-[18px] leading-[150%] text-[#4E4E4E] text-center">
              На території ЖК працює сервісні служба, яка надає послуги з прання
              речей та прибирання кімнат та апартаментів
            </p>
          </div>
          <div className="col-span-2 2xl:col-span-1 bg-[#B4EF7B] rounded-[29px] h-auto 2xl:h-[420px]">
            <div className="relative h-[200px] m-2 rounded-2xl">
              <Image
                fill
                src={"/parking.jpg"}
                alt="Parking"
                className="object-cover rounded-2xl"
              />
            </div>
            <h3 className="font-primary font-medium text-[26px] leading-[128%] text-center my-3">
              Парковка на 40+ автомобілів
            </h3>
            <p className="font-secondary text-[18px] leading-[150%] text-[#4E4E4E] text-center">
              Для зручності мешканців передбачено паркомісця на 40 автомобілів.
            </p>
          </div>
          <Image
            width={672}
            height={275}
            src="/test.jpg"
            alt="Gallery 1"
            className="hidden 2xl:block absolute -z-1 bottom-0 w-full xl:h-[340px] 2xl:h-[275px]"
          />
        </div>
        <div>
          <div className="bg-[#F8F8F8] p-6 mb-5 rounded-[33px]">
            <h3 className="font-primary font-medium text-[26px] leading-[128%]">
              Автономність та екологічність
            </h3>
            <ul>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Водопостачання з власної артезіанської свердловини з
                    системою очистки води
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Власна система очищення та водовідведення стічних вод
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Система автоматичного поливу зелених насаджень
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Автономне аварійне джерело електропостачання
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#F8F8F8] p-6 rounded-[33px]">
            <h3 className="font-primary font-medium text-[26px] leading-[128%]">
              Безпека Житлового Комплексу
            </h3>
            <ul>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Система протипожежної сигналізації та оповіщення про пожежу
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Система димовидалення та пожежогасіння
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Блискавкозахист
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4 min-h-[20px] min-w-[20px]">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
                    Відеоспостереження та контроль доступу на
                    територію комплексу
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
