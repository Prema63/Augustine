"use client"

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const doubleRoom = () => {
    const images = [
        "https://api.staybluo.com/property_assets/property_images/121/1751010968-img-20250626-wa0074.jpg",
        "https://api.staybluo.com/property_assets/property_images/121/1751011199-img-20250626-wa0064.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);


    const router = useRouter();
    const handleClick = () => {
        router.push('/rooms/double-room');
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isHovered, images.length]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 sm:py-8 px-4">
            <div className="max-w-2xl">
                {/* Main Card  */}
                <div className=" rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">

                    {/* Image Section */}
                    <div
                        className="relative group w-full"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative h-52 sm:h-64 md:h-72 lg:h-[400px] overflow-hidden">
                            <img
                                src={images[currentImageIndex]}
                                alt="Luxury Hotel Room"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                            {/* Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 
                         bg-white/15 backdrop-blur-md hover:bg-white/25 
                         p-2 sm:p-3 rounded-full transition-all duration-300 
                         opacity-0 group-hover:opacity-100 hover:scale-110
                         border border-white/30 shadow-lg"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 
                         bg-white/15 backdrop-blur-md hover:bg-white/25 
                         p-2 sm:p-3 rounded-full transition-all duration-300 
                         opacity-0 group-hover:opacity-100 hover:scale-110
                         border border-white/30 shadow-lg"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
                            </button>

                            {/* Image  */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 shadow-lg ${index === currentImageIndex
                                            ? 'bg-white scale-125 shadow-white/50'
                                            : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Room Section- Bottom */}
                    <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50/50">
                        <div className="space-y-4 sm:space-y-6">

                            {/* Room Title */}
                            <div className="space-y-2 text-center sm:text-left">
                                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light text-gray-900 
                             hover:text-emerald-700 transition-colors duration-300 cursor-pointer
                             tracking-tight leading-tight">
                                    3 BHK Safdarjung Enclave
                                </h1>
                                <div className="w-12 sm:w-16 h-0.5 bg-emerald-600 transition-all duration-300 hover:w-20 sm:hover:w-24 mx-auto sm:mx-0"></div>
                            </div>

                            {/* Room Specifications */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start 
                              py-3 sm:py-0 px-4 sm:px-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none
                              border-b border-gray-200 sm:border-none">
                                    <span className="text-gray-600 font-medium text-sm sm:text-base">Capacity</span>
                                    <span className="text-emerald-700 font-bold text-sm sm:text-lg tracking-wide">6</span>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start 
                              py-3 sm:py-0 px-4 sm:px-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none
                              border-b border-gray-200 sm:border-none">
                                    <span className="text-gray-600 font-medium text-sm sm:text-base">Size</span>
                                    <span className="text-emerald-700 font-bold text-sm sm:text-lg">70M²</span>
                                </div>

                                <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start 
                              py-3 sm:py-0 px-4 sm:px-0 bg-gray-50 sm:bg-transparent rounded-lg sm:rounded-none">
                                    <span className="text-gray-600 font-medium text-sm sm:text-base">Price</span>
                                    <span className="text-emerald-700 font-bold text-lg sm:text-2xl">$89</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-center sm:text-left">
                                Experience the perfect blend of space and elegance in our thoughtfully crafted double room.
                                Ideal for families or friends traveling together, this room offers generous comfort, premium amenities, and tasteful design that ensures a relaxing and memorable stay.
                            </p>

                            {/* Additional Features */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                {['WiFi', 'Air Conditioning', 'Room Service', 'Balcony'].map((feature, index) => (
                                    <span key={index}
                                        className="px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-700 
                               bg-emerald-50 rounded-full border border-emerald-200
                               hover:bg-emerald-100 hover:scale-105 transition-all duration-200
                               cursor-default">
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Action Button */}
                            <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start">
                                <button
                                    onClick={handleClick}
                                    className="group relative rounded-lg inline-flex items-center justify-center
                           px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest
                           text-gray-900 bg-transparent border-2 border-gray-900
                           hover:bg-emerald-600 hover:border-emerald-600 hover:text-white
                           transition-all duration-300 ease-in-out
                           transform hover:scale-105 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                           shadow-lg hover:shadow-xl w-full sm:w-auto"
                                >
                                    <span className="relative z-10">BOOK SUITE</span>
                                    <div className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left rounded-lg"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default doubleRoom;