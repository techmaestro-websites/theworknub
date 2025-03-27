"use client"; // ✅ Add this at the top

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // ✅ Correct Type

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image Container */}
      <div
        ref={scrollRef}
        className="flex space-x-5 overflow-x-auto p-2 scrollbar-hide scroll-smooth"
      >
        <Image
          src="/images/cowork.jpg"
          alt="Conference Room"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/greenroom3.jpg"
          alt="Hot Desk"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/lounge.jpg"
          alt="Lounge Area"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/reception.jpg"
          alt="Reception Desk"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/walkway.jpg"
          alt="Private Office"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/privateOffice3.jpg"
          alt="Private Office"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/walkway2.jpg"
          alt="Private Office"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/greenroom.jpg"
          alt="Hot Desk"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/privateOffice2.jpg"
          alt="Dedicated Office"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/lounge3.jpg"
          alt="Dedicated Office"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/meetingRoom.jpg"
          alt="Meeting Room"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
        <Image
          src="/images/lounge2.jpg"
          alt="Open Workspace"
          width={300}
          height={250}
          className="rounded-xl object-cover flex-shrink-0"
          priority
        />
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Gallery;
