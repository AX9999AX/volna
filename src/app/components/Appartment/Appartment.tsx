import Image from "next/image";

export default function Appartment() {
  return (
    <section className="container mx-auto p-8">
      <div className="p-4 border-2 border-[#B4EF7B] rounded-[33px]">
        <div className="flex justify-between my-6">
          <h3 className="font-secondary font-bold text-[32px] leading-[115%]">
            Апартаменти категорії «Люкс»
          </h3>
          <div>₴11.000</div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div>
              <Image
                src="/lux-1.jpg"
                alt="Описание картинки"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/lux-1.jpg"
                alt="Описание картинки"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <Image
                src="/lux-1.jpg"
                alt="Описание картинки"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <p className="font-secondary text-[18px] leading-[150%] text-[#4E4E4E] mb-5">
              В «Комфортній» частини ЖК «VOLNA», зі своєю окремою рецепцією,
              розташовано 69 двомісних апартаментів категорії «люкс» та
              «напівлюкс»
            </p>
            <p>Облаштований:</p>
            <ul>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    1 двомісним ліжком або 2 одномісними ліжками, з
                    ортопедичними матрацами
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Шафа для одягу
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Дзеркало з вішалкою для верхнього одягу
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Меблевий стелаж
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Стіл з 2 стільцями
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Мінікухня з електроплитою
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Холодильник
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Комплект посуду та столових приладів
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Кондиціонер
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Wi-Fi роутер
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Електрорадіатор з індивідуальним керуванням
                  </p>
                </div>
              </li>
              <li className="my-3">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={"/icon-tick.svg"}
                      alt={"Tick"}
                      width={15}
                      height={18}
                    />
                  </div>
                  <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#18181B]">
                    Рулонні штори на вікнах
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
