import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <input
      type="text"
      placeholder="Search FAQs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 border-gray-300 rounded-lg"
    />
  );
};
export default SearchBar;
