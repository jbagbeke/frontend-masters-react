import { createRoot } from 'react-dom/client';
// import Pet from "./Pet";
import SearchParams from '../SearchParams';

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
    // <div>
    //   <h1>Adopt Me!</h1>

    //   <div>
    //     <Pet animal="Goat" name="Leggy" breed="Local"/>
    //     <Pet animal="Cow" name="Blacky" breed="Beefy"/>
    //     <Pet animal="Chicken" name="Kukuruku" breed="Hybrid"/>
    //   </div>
    // </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
