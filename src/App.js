import './style/style.scss';
import Container from "./layouts/Container";
import { useState } from "react";
import { createContext } from "react";
import defineBorders from './utils/borders';

const DataContext = createContext();
const DataProvider = DataContext.Provider;

function App() {
  
  // Questo oggetto gestirà tutti i data del gioco 
  const datas = {
    // Questo deciderà quale layout sarà stampato da app
    displayStatus: {
      welcome: true,
      tutorial: false,
      game: false,
      gameOver: false
    },
    // info sui livelli
    // I bordi di ogni lato saranno riempiti sotto
    levels: {
      list: [
        {
        id: 1,
        cells: {
          tot: 100,
          x: 10,
          y: 10
        },
        walls: [1,5,7,8,9,13,15,19,20,21,22,23,25,26,27,40,41,42,44,45,46,47,49,57,59,60,62,63,64,66,67,68,69,72,76,81,82,84,85,86,88,92,98,],
        borders: {},
        start: 0,
        end: 99,
        userPosition: null
      },
      {
        id: 2,
        cells: {
          tot: 100,
          x: 10,
          y: 10
        },
        walls: [],
        borders: {},
        start: 30,
        end: 40,
        userPosition: null
      }
    ]
    },
    // Oggetto info utente
    user: {
      currentLevel: 0
    }
  }

  // Funzione bordi
  datas.levels.list.forEach((level) => {
    level.borders = defineBorders(level.cells.tot, level.cells.x);
    level.userPosition = level.start
  });

  const [gameData, setGameData] = useState(datas);

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
