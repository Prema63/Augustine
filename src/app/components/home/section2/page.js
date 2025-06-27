'use client';

import React from 'react';

const Discover = () => {
    return (
        <>
            {/* Header Section: Date / Time / Weather */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 py-12 px-4">
                {/* Date */}
                <div className="flex flex-col items-center">
                    <span className="text-6xl lg:text-8xl font-light text-[#d6ccc8]">6</span>
                    <span className="text-lg lg:text-xl font-light text-black my-3 lg:my-5">06, 2025</span>
                </div>

                {/* Separator */}
                <div className="h-16 lg:h-32 hidden lg:block">
                    <svg width="60" height="132" viewBox="0 0 60 132" className="w-8 lg:w-auto h-full">
                        <line x1="60" y1="0" x2="0" y2="132" stroke="#7A7A7A" strokeWidth="2" />
                    </svg>
                </div>


                {/* Time */}
                <div className="flex flex-col items-center">
                    <span className="text-6xl lg:text-8xl font-light text-[#d6ccc8]">
                        12:05 <span className="ml-2 text-xl lg:text-2xl">AM</span>
                    </span>
                    <span className="text-lg lg:text-xl font-light text-black my-3 lg:my-5">current time</span>
                </div>

                {/* Separator */}
                <div className="h-16 lg:h-32 hidden lg:block">
                    <svg width="60" height="132" viewBox="0 0 60 132" className="w-8 lg:w-auto h-full">
                        <line x1="60" y1="0" x2="0" y2="132" stroke="#7A7A7A" strokeWidth="2" />
                    </svg>
                </div>

                {/* Temperature */}
                <div className="flex flex-col items-center">
                    <span className="text-6xl lg:text-8xl font-light text-[#d6ccc8]">
                        25<sup>°</sup>C
                    </span>
                    <span className="text-lg lg:text-xl font-light text-black my-3 lg:my-5">clear sky</span>
                </div>
            </div>

            {/* Discovery Section Title */}
            <section className="w-full py-12 lg:py-16 bg-gradient-to-r from-gray-100 to-white">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="w-full mb-8 lg:mb-12 relative">
                        <span className="block w-12 my-4 lg:my-7 h-[2px] bg-gray-400 mb-2"></span>
                        <p className="text-sm lg:text-md my-3 lg:my-5 text-[#0b6354] font-light">This is Augustine</p>
                        <h4 className="text-2xl lg:text-4xl font-light text-[#7A7A7A]">
                            An Ode to Discovery.
                        </h4>
                    </div>
                </div>

                {/* Cards */}
                <section className="w-full py-8 lg:py-12">
                    <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Taste Card */}
                            <Card
                                title="Taste"
                                description="Discover flavors that tell stories"
                                image="https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img4.jpg"
                                badgeColor="from-[#0b6354] to-[#0a5a4a]"
                            />

                            {/* Art Card */}
                            <Card
                                title="Art"
                                description="Where creativity meets inspiration"
                                image="https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img2.jpg"
                                badgeColor="from-[#8b4513] to-[#654321]"
                                extraMargin="lg:mt-16"
                            />

                            {/* Culture Card */}
                            <Card
                                title="Culture"
                                description="Immerse in timeless traditions"
                                image="https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img3.jpg"
                                badgeColor="from-[#d4af37] to-[#b8941f]"
                                extraCol="md:col-span-2 lg:col-span-1 lg:mt-8"
                                taller
                            />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

const Card = ({ title, description, image, badgeColor, extraMargin = '', extraCol = '', taller = false }) => {
    return (
        <div
            className={`group flex flex-col items-center transition-transform duration-700 hover:scale-105 ${extraCol} ${extraMargin}`}
        >
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-4 group-hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className={`w-full ${taller ? 'h-64 lg:h-96' : 'h-64 lg:h-80'} object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700`}
                    />
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br ${badgeColor} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer`}
                    >
                        <p className="text-white text-sm lg:text-base font-medium">{title}</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl pointer-events-none"></div>
            </div>
            <div className="mt-12 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-gray-600 text-sm lg:text-base max-w-xs">{description}</p>
            </div>
        </div>
    );
};

export default Discover;
