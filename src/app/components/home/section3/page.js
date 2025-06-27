'use client';
import React, { useState } from 'react';

const activities = [
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-2.svg",
        title: "Restaurants",
        desc: "Enjoy delicious dishes in our elegant restaurants.",
        color: "from-orange-50 to-red-50",
        accent: "text-orange-600",
    },
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-3.svg",
        title: "Full board",
        desc: "All-inclusive comfort and convenience for your stay.",
        color: "from-blue-50 to-indigo-50",
        accent: "text-blue-600",
    },
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-6.svg",
        title: "Entertainment",
        desc: "Relax with curated entertainment experiences.",
        color: "from-purple-50 to-pink-50",
        accent: "text-purple-600",
    },
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-4.svg",
        title: "Pool area",
        desc: "Lounge by the pool and soak in the sunshine.",
        color: "from-cyan-50 to-blue-50",
        accent: "text-cyan-600",
    },
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-1.svg",
        title: "Cocktail bar",
        desc: "Sip world-class cocktails in a refined setting.",
        color: "from-emerald-50 to-teal-50",
        accent: "text-emerald-600",
    },
    {
        icon: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/icon-5.svg",
        title: "Tour guide",
        desc: "Explore the city with our professional tour guides.",
        color: "from-amber-50 to-yellow-50",
        accent: "text-amber-600",
    },
];

const Activities = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
                    {/* Title Section */}
                    <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left sticky top-8">
                        <div className="relative">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
                                Activities
                            </h1>
                            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-green-800 to-green-700 rounded-full transform transition-all duration-700 ease-out"></div>
                        </div>
                        <p className="mt-6 text-lg text-gray-600 max-w-xs leading-relaxed">
                            Discover exceptional experiences crafted for your perfect getaway
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer border border-gray-100/50 hover:-translate-y-2 hover:scale-[1.02] ${hoveredIndex === index ? 'ring-2 ring-blue-500/20' : ''
                                    }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() =>
                                    setSelectedActivity(
                                        selectedActivity === index ? null : index
                                    )
                                }
                            >
                                {/* Gradient background overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${activity.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out`}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 mx-auto sm:mx-0">
                                            <img
                                                src={activity.icon}
                                                alt={activity.title}
                                                className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
                                            />
                                        </div>
                                    </div>


                                    {/* Text */}
                                    <div className="space-y-3 text-center sm:text-left">
                                        <h6
                                            className={`text-xl font-bold transition-colors duration-300 ${hoveredIndex === index
                                                    ? activity.accent
                                                    : 'text-gray-800'
                                                }`}
                                        >
                                            {activity.title}
                                        </h6>
                                        <p
                                            className={`text-sm leading-relaxed transition-all duration-300 ${hoveredIndex === index
                                                    ? 'text-gray-700'
                                                    : 'text-gray-600'
                                                }`}
                                        >
                                            {activity.desc}
                                        </p>
                                    </div>

                                    {/* Learn more */}
                                    {selectedActivity === index && (
                                        <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-2">
                                                Learn more
                                                <svg
                                                    className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent transform rotate-45 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-150"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fade-in animation */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default Activities;
