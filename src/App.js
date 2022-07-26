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
          walls: [3,5,6,8,9,11,13,21,23,25,27,28,31,33,36,38,40,41,43,44,48,51,53,55,57,61,63,65,68,71,77,81,82,83,84,85,86,87,89],
          borders: {},
          start: 30,
          end: 50,
          userPosition: null
        },
        {
          id: 2,
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
          id: 3,
          cells: {
            tot: 120,
            x: 12,
            y: 10
          },
          walls: [6,13,14,15,16,19,20,21,22,25,29,37,39,41,43,44,46,49,51,52,53,54,58,61,65,68,69,70,73,75,77,78,83,85,86,91,92,94,100,101,102,104,106,108,110,111],
          borders: {},
          start: 59,
          end: 40,
          userPosition: null
        },
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
