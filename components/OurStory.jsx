"use client";
import React, { useState, useEffect } from "react";
import { Heart, Phone } from "lucide-react";

const OurStory = () => {
  const [bloodCoops, setBloodCoops] = useState(0);
  const [expertStaff, setExpertStaff] = useState(0);
  const [bloodDonations, setBloodDonations] = useState(0);

  useEffect(() => {
    const targetCoops = 75;
    const targetStaff = 90;
    const targetDonations = 320;
    const speed = 25;

    const coopsInterval = setInterval(() => {
      setBloodCoops(prev => {
        if (prev < targetCoops) return prev + 1;
        clearInterval(coopsInterval);
        return prev;
      });
    }, speed);

    const staffInterval = setInterval(() => {
      setExpertStaff(prev => {
        if (prev < targetStaff) return prev + 1;
        clearInterval(staffInterval);
        return prev;
      });
    }, speed);

    const donationsInterval = setInterval(() => {
      setBloodDonations(prev => {
        if (prev < targetDonations) return prev + 5;
        clearInterval(donationsInterval);
        return targetDonations;
      });
    }, speed);

    return () => {
      clearInterval(coopsInterval);
      clearInterval(staffInterval);
      clearInterval(donationsInterval);
    };
  }, []);

  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-4xl sm:text-5xl font-bold text-red-700">{bloodCoops}+</h3>
              <p className="text-gray-700 mt-2 font-medium">Blood Cooperations</p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-4xl sm:text-5xl font-bold text-red-700">{expertStaff}+</h3>
              <p className="text-gray-700 mt-2 font-medium">Expert Staff</p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-4xl sm:text-5xl font-bold text-red-700">{bloodDonations}+</h3>
              <p className="text-gray-700 mt-2 font-medium">Blood Donations</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="bg-red-700 text-white p-6 sm:p-8 rounded-2xl flex-1 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Why We Do It</h3>
              <hr className="border-red-400 my-4" />
              <p className="text-sm sm:text-base leading-relaxed">
                Every 2 seconds, someone needs a blood transfusion. Yet, less than
                5% of eligible donors give blood. We’re here to bridge that gap,
                making donation simple, safe, and rewarding.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/blood-bag.jpg"
                alt="Blood Bag"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-4">
            <h4 className="text-red-600 font-semibold text-lg sm:text-xl">Our Story</h4>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Dedicated to Life, The Story of Our Blood Drive Initiative
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              curabitur adipiscing pulvinar nisi natoque odio cursus. Consectetur
              lacus ridiculus sagittis nisi non euismod euismod molestie.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 border border-gray-100 rounded-2xl shadow-sm p-8">
            <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl flex-1 shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Have a Questions?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <Phone className="text-red-600 w-6 h-6" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Call Us</p>
                  <p className="text-gray-600 text-sm sm:text-base">+98 765 43210</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Heart className="text-red-600 w-5 h-5" /> Torquent sem ligula ultrices odio.
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Heart className="text-red-600 w-5 h-5" /> Integer aliquet enim conubia.
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Heart className="text-red-600 w-5 h-5" /> Massa eleifend dapibus litora.
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                  <Heart className="text-red-600 w-5 h-5" /> Aptent morbi duis pharetra vel.
                </li>
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full sm:w-auto">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
