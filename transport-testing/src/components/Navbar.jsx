"use client";
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdownMobile, setOpenDropdownMobile] = useState (null);

    const toggleDropdownMobile = (menu) => {
        setOpenDropdownMobile(openDropdownMobile === menu ? null : menu);
    };

    return (
        <nav className="bg-[url('/cover.png')] bg-cover bg-center bg-no-repeat shadow-lg dark:border-slate-800 transition-colors duration-300">
            <div className="w-full mx-auto px-4 lg:px-10 2xl:px-14 py-2 lg:py-3 2xl:py-5 flex items-center justify-between">
                <div className="cursor-pointer flex items-center shrink-0 gap-2">
                    <div className="w-10 lg:w-15 2xl:w-20">
                        <img src={'/logo dtkj.png'} alt="dtkj" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-xs lg:text-lg 2xl:text-2xl text-white">Dewan Transportasi Kota Jakarta</span>
                        <span className="text-[10px] lg:text-sm 2xl:text-lg text-white"><i>Jakarta Transportation Council</i></span>
                    </div>
                </div>

                <div className="hidden md:flex items-center sm:gap-4 lg:gap-8 2xl:gap-12 font-semibold sm:text-xs lg:text-base 2xl:text-[21px] text-white h-16">
                    <div className="cursor-pointer hover:text-amber-400 transition-colors">
                        <button className="h-full flex items-center border-transparent">
                            Beranda
                        </button>
                    </div>
                    <div className="relative group cursor-pointer h-full flex items-center">
                        <div className="hover:text-amber-400 transition-colors flex items-center h-full">
                            <button className="h-full flex items-center border-transparent">
                                Profil
                            </button>
                        </div>
                        <div className="absolute top-19 2xl:top-22.5 w-45 2xl:w-58 bg-[#2357A6]/70 backdrop-transparent border border-white/20 shadow-2xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                            <div className="flex flex-col text-sm 2xl:text-lg font-normal">
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Tentang
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Keputusan Gubernur
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Program Kerja
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Unsur Keanggotaan
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Anggota
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative group cursor-pointer h-full flex items-center">
                        <div className="cursor-pointer hover:text-amber-400 transition-colors">
                            <button className="h-full flex items-center border-transparent">
                                Acara
                            </button>
                        </div>
                        <div className="absolute top-19 2xl:top-22.5 w-45 2xl:w-58 bg-[#2357A6]/70 backdrop-transparent border border-white/20 shadow-2xl rounded-b-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                            <div className="flex flex-col text-sm 2xl:text-lg font-normal">
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    FGD
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Jajak Pendapat
                                </a>
                                <a href="#" className="px-5 2xl:px-7 py-2 2xl:py-3 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors font-medium">
                                    Kunjungan Kerja
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:text-amber-400 transition-colors">
                        <button className="h-full flex items-center border-transparent">
                            Beranda
                        </button>
                    </div>
                    <div className="cursor-pointer hover:text-amber-400 transition-colors">
                        <button className="h-full flex items-center border-transparent">
                            Artikel
                        </button>
                    </div>
                    <div className="cursor-pointer hover:text-amber-400 transition-colors">
                        <button className="h-full flex items-center border-transparent">
                            Magang
                        </button>
                    </div>
                    <div className="cursor-pointer hover:text-amber-400 transition-colors">
                        <button className="h-full flex items-center border-transparent">
                            Rekomendasi
                        </button>
                    </div>
                </div>


                {/* --- MOBILE --- */}
                <div className="flex md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2 bg-[#2357A6]/60 rounded-lg border border-white/20"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out bg-[#1B3B6F]/95 backdrop-blur-md border-b border-white/20 overflow-hidden ${isOpen ? "max-h-150 py-4" : "max-h-0 py-0"}`}>
                <div className="flex flex-col px-6 gap-3 text-white font-medium">
                    <a href="#" className="py-2 hover:text-amber-400 border-b border-white/10">Beranda</a>
                    <div>
                        <button 
                            onClick={() => toggleDropdownMobile('profil')} 
                            className="w-full flex justify-between items-center py-2 hover:text-amber-400 border-b border-white/10"
                        >
                            <span>Profil</span>
                            <span className={`transform transition-transform ${openDropdownMobile === 'profil' ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {openDropdownMobile === 'profil' && (
                            <div className="flex flex-col pl-4 py-2 gap-2 text-sm bg-black/20 rounded-lg mt-1">
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Tentang</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Keputusan Gubernur</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Program Kerja</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Unsur Keanggotaan</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Anggota</a>
                            </div>
                        )}
                    </div>

                    <div>
                        <button 
                            onClick={() => toggleDropdownMobile('acara')} 
                            className="w-full flex justify-between items-center py-2 hover:text-amber-400 border-b border-white/10"
                        >
                            <span>Acara</span>
                            <span className={`transform transition-transform ${openDropdownMobile === 'acara' ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        {openDropdownMobile === 'acara' && (
                            <div className="flex flex-col pl-4 py-2 gap-2 text-sm bg-black/20 rounded-lg mt-1">
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">FGD</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Jajak Pendapat</a>
                                <a href="#" className="py-1 text-slate-200 hover:text-amber-400">Kunjungan Kerja</a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="py-2 hover:text-amber-400 border-b border-white/10">Artikel</a>
                    <a href="#" className="py-2 hover:text-amber-400 border-b border-white/10">Magang</a>
                    <a href="#" className="py-2 hover:text-amber-400">Rekomendasi</a>
                </div>
            </div>
        </nav>
    );
}