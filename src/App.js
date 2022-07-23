import { Fragment } from "react";
import './style/style.scss';
import Container from "./layouts/Container";
import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();
const DataProvider = DataContext.Provider;

function App() {
  
  // Questo oggetto gestirà tutti i data del gioco 
  const [gameData, setGameData] = useState(
    {
      // Questo deciderà quale layout sarà stampato da app
      displayStatus: {
        welcome: true,
        tutorial: false,
        game: false
      }
    }
  );

  return(
    <div className='container h_80'>
      <div className='row row-cols-1 h-100'>
          <div className='col h-100'>
            <DataProvider value={[gameData, setGameData]}>
              <Container />
            </DataProvider>
          </div>
      </div>
    </div>
  );
}

export default App;
export { DataContext };
