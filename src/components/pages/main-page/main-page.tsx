import { SearchBar } from '../../shared/search-bar/search-bar';
import { Slider } from './components/slider/slider';
import './main-page.css';

export const MainPage = () => {
  return (
    <div className="main">
      <div className="search-bar__contain">
        <SearchBar />
      </div>
      <Slider />
    </div>
  );
};
