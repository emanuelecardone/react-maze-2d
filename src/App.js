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
      },
      // Array con le info sui livelli
      levels: [
        {
          id: 1,
          cells: {
            tot: 100,
            x: 10,
            y: 10
          },
          walls: [],
          // I bordi di ogni lato saranno riempiti da una funzione in app
          borders: {},
          start: 0,
          end: 99,
          userPosition: 0,
          unlocked: true
        }
      ],
      // Oggetto info utente
      user: {
        currentLevel: 0
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
