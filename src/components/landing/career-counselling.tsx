import counselling from "@/assets/images/landing/3-crop.jpg";

const Counselling = () => {
  return (
    <div className="clipped-counselling absolute hover:scale-[1.1] transition-all duration-300 hover:cursor-pointer hover:z-[1] -translate-x-[2%] translate-y-[120%]">
      <img src={counselling} alt="Counselling" className="clipped-image" />
      <svg width="0" height="0">
        <clipPath id="counselling" clipPathUnits="userSpaceOnUse">
          <path d="M91.625.95C64.066 3.671 34.434 10.476 12.301 19.19c-7.324 2.903-7.668 3.176-8.785 6.625-.606 1.997-1.723 7.532-2.414 12.25-5.34 37.391 8.785 75.692 40.136 108.997 35.832 37.937 82.86 64.8 129.715 73.875 35.23 6.898 73.3 4.628 103.703-6.168l8.184-2.907-.258-13.613c-.52-20.875 2.84-37.664 11.023-55.543 4.223-9.074 12.403-22.144 18.09-28.77L316 109.04l-4.824-6.625C273.883 51.316 226.94 19.098 170.438 5.848 150.023 1.128 113.16-1.23 91.625.949m0 0" />
        </clipPath>
      </svg>
    </div>
  );
};

export default Counselling;
