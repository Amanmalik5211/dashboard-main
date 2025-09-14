
const StatsCard = ({ label, value, change, positive }) => {
  return (
    <div className="bg-gray-800 p-3 xs:p-4 sm:p-5 rounded-xl shadow flex flex-col">
      <span className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-400">
        {label}
      </span>

      <span className="text-sm xs:text-md sm:text-lg md:text-1xl lg:text-2xl font-bold">
        {value}
      </span>

      <span
        className={`mt-1 text-[10px] xs:text-xs sm:text-sm md:text-base ${
          positive ? "text-green-500" : "text-red-500"
        }`}
      >
        {change} vs last week
      </span>
    </div>
  );
};

export default StatsCard;
