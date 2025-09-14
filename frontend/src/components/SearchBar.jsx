import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md w-full">
      <Search size={16} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-sm outline-none ml-2 w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
