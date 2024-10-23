import banner from "../../../../assets/banner.png";
const Banner = () => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 min-h-80 lg:hidden"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="relative z-10 space-y-5 my-10">
        <h2 className="font-extrabold text-4xl text-black">
          আপনি কি শিখতে চান?
        </h2>
        <p className="font-semibold text-black text-base">
          দেশসেরা ইন্সট্রাক্টরদের সেরা সব কোর্স এখন এক প্ল্যাটফর্মে।
        </p>
        <button className="w-full bg-blue-300 font-semibold text-base text-white py-3 rounded-lg">
          সাবস্ক্রিপশন
        </button>
        <button className="w-full bg-blue-300 font-semibold text-base text-white py-3 rounded-lg">
          সাবস্ক্রিপশন
        </button>
      </div>
      <img
        src={banner}
        alt="banner image"
        className="hidden lg:block h-96 opacity-40"
      />
    </div>
  );
};

export default Banner;
