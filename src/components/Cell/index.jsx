import './style.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';
import User from '../User';

const Cell = ({index}) => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {levels, user: {currentLevel}} = gameData;
    const {userPosition, cells: {x,y}} = levels[currentLevel];

    const testFunc = () => {
        console.log(gameData);
    }

    // Per facilitare la build, se la cella non stampa l'user stampa l'index
    // In fase di gioco stampa solo l'utente se la sua posizione è l'indice della cella
    // Ogni cella prenderà width e height in base a x,y 
    // (in style.scss ci sono gli stili per ogni tipo di cella)
    if(userPosition === index){
        return <div onClick={testFunc} className={`cell cell-${x}-${y}`}><User /></div>
    }
    return <div onClick={testFunc} className={`cell cell-${x}-${y}`}><span>{index}</span></div>
}

export default Cell;