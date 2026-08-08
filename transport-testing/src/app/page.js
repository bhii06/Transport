'use client';

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    imageUrl: "/mikrotrans.jpg",
    alt: "Armada MikroTrans Jakarta",
  },
  {
    id: 2,
    imageUrl: "/transjakarta.png", 
    alt: "Bus Transjakarta",
  },
  {
    id: 3,
    imageUrl: "/krl.png",
    alt: "KRL Commuter Line",
  },
  {
    id: 4,
    imageUrl: "/mrt.png",
    alt: "MRT",
  }

];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* ==================== HERO CAROUSEL SECTION ==================== */}
      <section className="w-full relative bg-slate-900">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative group"
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id} className="p-0">
                <div className="relative w-full h-[300px] lg:h-[600px] 2xl:h-[700px] overflow-hidden">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.alt}
                    fill
                    priority={slide.id === 1}
                    className="object-cover object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Tombol Panah Navigasi */}
          <CarouselPrevious className="left-4 md:left-8 bg-transparent hover:bg-white/70 text-white border-none h-16 w-16 drop-shadow-md" />
          <CarouselNext className="right-4 md:right-8 bg-transparent hover:bg-white/70 text-white border-none h-16 w-16 drop-shadow-md" />
        </Carousel>
      </section>

    </main>
  );
}