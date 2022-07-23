import './style.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';
import User from '../User';

const Cell = ({index}) => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {levels, user: {currentLevel}} = gameData;
    const {userPosition, start, end, walls, cells: {x,y}} = levels[currentLevel];

    // Classe da dare alla cella in base a cosa contiente
    let cellStyle;
    if(walls.includes(index)){
        cellStyle = 'white';
    } else if(index === start){
        cellStyle = 'cyan';
    } else if(index === end){
        cellStyle = 'lime';
    }

    // Per facilitare la build, se la cella non stampa l'user stampa l'index
    // In fase di gioco stampa solo l'utente se la sua posizione è l'indice della cella
    // I muri saranno sappresentati da uno sfondo bianco
    // Ogni cella prenderà width e height in base a x,y 
    // (in style.scss ci sono gli stili per ogni tipo di cella)
    if(userPosition === index){
        return <div className={`cell cell-${x}-${y}`} style={{backgroundColor: cellStyle}}><User /></div>
    }
    return <div className={`cell cell-${x}-${y}`} style={{backgroundColor: cellStyle}}>
                {/* Span per sapere l'index delle celle nel building */}
                {/* <span>{index}</span> */}
            </div>
}

export default Cell;