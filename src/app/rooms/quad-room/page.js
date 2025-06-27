"use client"
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, MapPin, Calendar, Users, Home, Star, Wifi, Car, Coffee, Utensils, Dumbbell, Shield } from "lucide-react";
import AboutVideo from '../../global/Videos/AboutVideo'

const HotelRoomPage = () => {
  const [guests, setGuests] = useState({ adult: 1, children: 0, infant: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const dropdownRef = useRef(null);

  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  }]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setGuests(prev => ({ ...prev, [name]: parseInt(value) }));
  };

  const handleServiceChange = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const calculateTotal = () => {
    let total = 119;
    selectedServices.forEach(service => {
      if (service === 'cleaning') total += 9;
      if (service === 'activity') total += 17 * (guests.adult + guests.children);
    });
    return total;
  };

  // SVG Icons for amenities
  const AirConditionerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2h8v2H8z" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 8h12M6 12h12M6 16h12" />
      <path d="M8 20v2M12 20v2M16 20v2" />
    </svg>
  );

  const BathtubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12h20l-2 6H4l-2-6z" />
      <path d="M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <circle cx="8" cy="10" r="1" />
      <circle cx="16" cy="10" r="1" />
    </svg>
  );

  const MapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
      <path d="M9 3v15M15 9v12" />
    </svg>
  );

  const NatureIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L8 8h8l-4-6z" />
      <path d="M12 8L8 14h8l-4-6z" />
      <path d="M12 14v8" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  );

  const HairDryerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M12 14v6" />
      <path d="M8 16h8" />
      <path d="M10 6l4 4M14 6l-4 4" />
    </svg>
  );

  const MiniBarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8v8M12 8v8M17 8v8" />
      <path d="M3 12h18" />
    </svg>
  );

  const SwimmingPoolIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 18c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" />
      <path d="M2 14c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" />
      <circle cx="12" cy="8" r="3" />
      <path d="M12 5V2" />
    </svg>
  );

  const TowelIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M6 8h12M6 12h12M6 16h12" />
      <rect x="4" y="2" width="2" height="20" rx="1" />
    </svg>
  );

  const amenities = [
    { icon: AirConditionerIcon, name: "Air Conditioner" },
    { icon: BathtubIcon, name: "Bathtub" },
    { icon: MapIcon, name: "City Map" },
    { icon: NatureIcon, name: "Guided Nature Tours" },
    { icon: HairDryerIcon, name: "Hair Dryer" },
    { icon: Wifi, name: "High Speed WiFi" },
  ];

  const hiddenAmenities = [
    { icon: MiniBarIcon, name: "Mini Bar" },
    { icon: SwimmingPoolIcon, name: "Swimming Pool" },
    { icon: TowelIcon, name: "Towels" },
  ];

  const rooms = [
    {
      name: "Single Room",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/room-gallery-01-433x397.jpg",
      price: "$119",
      capacity: "1-4 persons",
      size: "68m²",
    },
    {
      name: "Queen",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/room-gallery-05-433x397.jpg",
      price: "$94",
      capacity: "2-4 persons",
      size: "60m²",
    },
    {
      name: "Sunny Place",
      image: "https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/Room-img07-433x397.jpg",
      price: "$136",
      capacity: "2-5 persons",
      size: "54m²",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/Room-single-06.jpg')` }}

      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
            Quad Room
          </h1>
        </div>

        <button className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-teal-700 hover:bg-teal-800 flex items-center justify-center text-white text-xs font-medium transition-all duration-300 hover:scale-95">
          SEE GALLERY
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Room Details */}
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-teal-700" />
                  <div className="text-lg">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="text-teal-700 ml-2 font-medium">3-8 persons</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Home className="w-8 h-8 text-teal-700" />
                  <div className="text-lg">
                    <span className="text-gray-600">Size:</span>
                    <span className="text-teal-700 ml-2 font-medium">120m²</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Perfect for families or small groups, our Quad Room is thoughtfully designed to accommodate up to four guests with ease and comfort. Whether you're planning a quick getaway or a longer stay, this spacious room offers the ideal setting for shared experiences.
                </p>
                <p>
                  The room features flexible bedding arrangements, including two double beds or four single beds (subject to availability), complemented by amenities such as high-speed Wi-Fi, a flat-screen TV, a dedicated workspace, and a private en-suite bathroom with essential toiletries. The Quad Room blends comfort, practicality, and value—making it an excellent choice for group travel.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-6 text-center">Room Tour</h3>
              <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <AboutVideo />
              </div>
              <p className="text-center text-gray-600 mt-4">Take a virtual tour of our quad Room</p>
            </div>

            {/* Amenities */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif">Amenities</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-teal-700">
                        <IconComponent />
                      </div>
                      <span className="text-lg">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>

              {showMore && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {hiddenAmenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-teal-700">
                          <IconComponent />
                        </div>
                        <span className="text-lg">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="text-teal-700 underline font-medium hover:text-teal-800 transition-colors"
              >
                {showMore ? "Show Less" : "See More Amenities"}
              </button>
            </div>

            {/* House Rules */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">House Rules</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Check-in: 3:00 PM - 9:00 PM",
                    "Checkout: 11:00 AM",
                    "No smoking",
                    "No pets",
                    "No parties or events"
                  ].map((rule, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">Cancellation</h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-600 leading-relaxed">
                  Cancellations made up to 48 hours before the check-in date are eligible for a full refund.
                  For cancellations made within 48 hours of check-in, one night's stay will be charged.
                  No-shows will be charged the full booking amount. Please contact us directly for any changes or special requests.
                </p>

              </div>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                Location
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-500 italic">Map integration would go here</p>
              </div>
            </div>
          </div>

          {/* Enhanced Booking Sidebar */}
          <div className="space-y-6">
            {/* Sticky Booking Card */}
            <div className="sticky top-8">
              <div className=" rounded-lg  p-8 border-t-4 border-teal-700">
                <h3 className="text-2xl font-serif">Your Reservation</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Check-in/out */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">CHECK-IN</label>
                    <input
                      type="date"
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-teal-700 outline-none p-3 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">CHECK-OUT</label>
                    <input
                      type="date"
                      className="w-full border-2 border-gray-200 rounded-lg focus:border-teal-700 outline-none p-3 transition-colors"
                    />
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">ROOMS</label>
                  <select className="w-full border-2 border-gray-200 rounded-lg focus:border-teal-700 outline-none p-3 transition-colors">
                    {Array.from({ length: 5 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Room{i > 0 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-sm font-medium mb-2 text-gray-700">GUESTS</label>
                  <input
                    type="text"
                    readOnly
                    value={`${guests.adult} Adult${guests.adult > 1 ? "s" : ""}, ${guests.children} Children, ${guests.infant} Infant${guests.infant !== 1 ? "s" : ""}`}
                    className="w-full border-2 border-gray-200 rounded-lg focus:border-teal-700 outline-none p-3 cursor-pointer transition-colors"
                    onClick={toggleDropdown}
                  />
                  <ChevronDown className="absolute right-3 top-11 w-4 h-4 text-gray-400 pointer-events-none" />

                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-xl border rounded-lg p-4 z-20">
                      <div className="space-y-4">
                        {[
                          { key: "adult", label: "Adults", max: 10 },
                          { key: "children", label: "Children (2-12 yrs)", max: 10 },
                          { key: "infant", label: "Infants (0-2 yrs)", max: 10 }
                        ].map(({ key, label, max }) => (
                          <div key={key} className="flex justify-between items-center">
                            <label className="text-sm font-medium">{label}</label>
                            <select
                              name={key}
                              value={guests[key]}
                              onChange={handleSelectChange}
                              className="border rounded px-2 py-1"
                            >
                              {Array.from({ length: max + 1 }, (_, i) => (
                                <option key={i} value={i}>{i}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                        <button
                          onClick={toggleDropdown}
                          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition-colors"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Extra Services */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-serif text-center mb-4">Extra Services</h4>
                <div className="space-y-3">
                  {[
                    { id: "cleaning", name: "Cleaning Fee", price: 9, type: "total" },
                    { id: "activity", name: "Some Activity", price: 17, type: "per-person" },
                    { id: "parking", name: "Parking", price: 0, type: "total" }
                  ].map((service) => (
                    <label key={service.id} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-white rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => handleServiceChange(service.id)}
                        className="accent-teal-700 w-4 h-4"
                      />
                      <div className="flex-1 flex items-center">
                        <span className="font-medium text-sm">{service.name}</span>
                        <div className="flex-1 border-b border-dotted border-gray-300 mx-3"></div>
                        <span className="text-sm text-gray-600 font-semibold">
                          {service.price === 0 ? "Free" : `$${service.price}${service.type === "per-person" ? " / person" : ""}`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 text-center p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                <h4 className="text-lg font-serif mb-2">Your Price</h4>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-2xl text-teal-700">$</span>
                  <span className="text-4xl font-bold text-teal-700">{calculateTotal()}</span>
                  <span className="text-gray-500">/ per room</span>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-700 to-teal-800 text-white py-4 rounded-lg hover:from-teal-800 hover:to-teal-900 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Related Rooms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded">
                    <span className="text-sm opacity-80">from </span>
                    <span className="font-semibold">{room.price}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-serif group-hover:text-teal-700 transition-colors">
                    {room.name}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-600">
                    <div>
                      <span>Capacity: </span>
                      <span className="text-teal-700 font-medium">{room.capacity}</span>
                    </div>
                    <div>
                      <span>Size: </span>
                      <span className="text-teal-700 font-medium">{room.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default HotelRoomPage;