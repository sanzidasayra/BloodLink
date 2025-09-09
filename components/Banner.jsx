import React from 'react';

const Banner = () => {
  return (
    <section className="relative w-full h-[900px]">
  <img
    src="/banner.jpg"
    alt="Blood Donation"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex p-8 md:p-16">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-start h-full mt-16 pt-10 md:mt-24">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-3xl">
      Donate Blood, Keep the World Beating
    </h1>
    <p className="text-lg md:text-2xl text-white mb-6 max-w-4xl">
      Every drop of blood you donate has the power to save lives. By giving a little of yourself, you can bring hope, health, and happiness to someone in need. Join us today and help keep the world beating, one donation at a time.
    </p>
    <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-fit'>
      Start Donating
    </button>
  </div>
</div>

</section>

  );
};

export default Banner;
