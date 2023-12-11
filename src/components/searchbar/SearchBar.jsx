import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const CustomSearchBar = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-2">
        <MagnifyingGlassIcon className="h-4 w-5 text-green-500" />
      </div>
      <input
        type="text"
        placeholder="| Custom Search"
        className="border border-green-300 pl-8 pr-20 py-1 px-2 rounded-md focus:outline-none focus:border-green-500"
      />
    </div>
  );
};

export default CustomSearchBar;
