"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GalleryType } from "./GallerySectionType";

const GallerySection = () => {
  const [galleryType, setGallaryType] = useState<GalleryType>(
    GalleryType.Territory
  );

  return (
    <section id="gallery" className="container mx-auto px-8 mt-20 mb-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-primary font-medium text-[64px] leading-[128%]">
          Галерея
        </h2>
        <p className="font-secondary font-normal text-[18px] leading-[150%] text-[#4E4E4E]">
          Побачити — щоб відчути
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-secondary text-[18px] leading-[150%] text-[#4E4E4E] w-[50%]">
          Ознайомтесь з атмосферою ЖК VOLNA через фото та відео. Побачте
          комплекс з висоти, інтер’єри апартаментів та кімнат, місць загального
          користування, ландшафтний дизайн території.
        </p>
        <div className="flex gap-4">
          <button
            className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] ${
              galleryType === GalleryType.Territory
                ? "bg-btn-active"
                : "bg-btn-default"
            }  rounded-2xl`}
            onClick={() => setGallaryType(GalleryType.Territory)}
          >
            Фотографії території
          </button>
          <button
            className={`cursor-pointer font-secondary text-[15px] text-black w-[190px] h-[50px] ${
              galleryType === GalleryType.Interior
                ? "bg-btn-active"
                : "bg-btn-default"
            }  rounded-2xl`}
            onClick={() => setGallaryType(GalleryType.Interior)}
          >
            Фотографії інтер’єру
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div className="grid grid-cols-1 grid-rows-3 gap-6">
          <div className="relative overflow-hidden rounded-[20px]">
            <AnimatePresence>
              <motion.div
                key={galleryType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4 }}
              >
                <Image
                  fill
                  src={
                    galleryType === GalleryType.Interior
                      ? "/gallery-section-2.jpg"
                      : "/gallery-section-1.jpg"
                  }
                  alt="Gallery 1"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="row-span-2 relative overflow-hidden rounded-[20px]">
            <AnimatePresence>
              <motion.div
                key={galleryType}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4 }}
              >
                <Image
                  fill
                  src={
                    galleryType === GalleryType.Interior
                      ? "/gallery-section-2.jpg"
                      : "/gallery-section-1.jpg"
                  }
                  alt="Gallery 1"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 grid-rows-[auto_260px] gap-6">
            <div className="relative aspect-video overflow-hidden rounded-[20px]">
              <iframe
                src="https://player.vimeo.com/video/115783408?muted=0"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  fill
                  src="/gallery-section-3.jpg"
                  alt="Gallery 3"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  fill
                  src="/gallery-section-4.jpg"
                  alt="Gallery 4"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
