// // components/RoomInfoCard.jsx
// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { DateRange } from "react-date-range";

// const RoomInfoCard = ({ room, range, setRange, guests, setGuests }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleSelectChange = (e) => {
//     const { name, value } = e.target;
//     setGuests((prev) => ({
//       ...prev,
//       [name]: parseInt(value),
//     }));
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-lg max-w-md">
//       {/* Image */}
//       <img src={room.image} alt={room.name} className="rounded-lg w-full h-auto mb-4" />

//       {/* Title & Price */}
//       <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
//       <p className="text-gray-700 mb-1">Price: {room.price}</p>

//       {/* Capacity & Size */}
//       <div className="gap-4 headerFont space-y-1 text-[58px] mb-4">
//         <div className="flex items-center space-x-2">
//           <span>Capacity:</span>
//           <span>{room.capacity}</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span>Size:</span>
//           <span>{room.size}</span>
//         </div>
//       </div>

//       {/* Description (props drilled) */}
//       <RoomDescription paragraphs={room.description} />

//       {/* Guests */}
//       <div className="relative mb-4" ref={dropdownRef}>
//         <button
//           onClick={toggleDropdown}
//           className="px-4 py-2 bg-[#0b6354] text-white rounded hover:bg-[#094c40] transition"
//         >
//           Select Guests
//         </button>

//         {isOpen && (
//           <div className="absolute z-20 bg-white border border-gray-200 p-4 rounded shadow-md mt-2 space-y-2">
//             {["adult", "children", "infant"].map((type) => (
//               <div key={type} className="flex justify-between items-center space-x-4">
//                 <label htmlFor={type} className="capitalize">
//                   {type}
//                 </label>
//                 <input
//                   type="number"
//                   name={type}
//                   min={0}
//                   value={guests[type]}
//                   onChange={handleSelectChange}
//                   className="border px-2 py-1 w-16 rounded text-center"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Date Picker */}
//       <DateRange
//         ranges={range}
//         onChange={(item) => setRange([item.selection])}
//         moveRangeOnFirstSelection={false}
//         editableDateInputs={true}
//         className="date-range-tailwind"
//       />
//     </div>
//   );
// };

// export default RoomInfoCard;
