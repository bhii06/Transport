'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    imageUrl: "/slideshow/mikrotrans.jpg",
    alt: "Armada MikroTrans Jakarta",
  },
  {
    id: 2,
    imageUrl: "/slideshow/transjakarta.png", 
    alt: "Bus Transjakarta",
  },
  {
    id: 3,
    imageUrl: "/slideshow/krl.png",
    alt: "KRL Commuter Line",
  },
  {
    id: 4,
    imageUrl: "/slideshow/mrt.png",
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
          <CarouselPrevious className="left-2 md:left-8 bg-transparent hover:bg-transparent hover:text-amber-400 text-white border-none lg:h-35 lg:w-35 2xl:h-40 2xl:w-40 drop-shadow-md" />
          <CarouselNext className="right-2 md:right-8 bg-transparent hover:bg-transparent hover:text-amber-400 text-white border-none lg:h-35 lg:w-35 2xl:h-40 2xl:w-40 drop-shadow-md" />
        </Carousel>
      </section>

      {/* ==================== BANNER LAPORAN MASYARAKAT ==================== */}
      <section className="w-full bg-[url('/background/cover.png')] bg-cover bg-center bg-no-repeat py-10 md:py-14 lg:py-16 px-4 text-center text-white relative shadow-inner">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 md:space-y-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Laporan Masyarakat Transportasi Jakarta
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-white/90 font-medium max-w-2xl">
            Sampaikan laporan, keluhan, dan masukan terkait transportasi di Jakarta.
          </p>
          <div className="pt-2">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-[#fcc22c] hover:bg-[#e0a819] text-slate-950 font-bold px-6 py-2.5 md:py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md text-sm md:text-base"
            >
              Hubungi Kami
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}