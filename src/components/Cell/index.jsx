import './style.scss';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import User from '../User';

const Cell = ({index}) => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {levels: {list}, user: {currentLevel}} = gameData;
    const {userPosition, start, end, walls, cells: {x,y}} = list[currentLevel];

    // Classe da dare alla cella in base a cosa contiente
    let cellStyle;
    if(walls.includes(index)){
        cellStyle = 'white';
    } else if(index === start){
        cellStyle = 'blue';
    } else if(index === end){
        cellStyle = 'lime';
    }

    // la cella stampa solo se la sua posizione è l'indice della cella
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

Cell.propTypes = {
    index: PropTypes.number.isRequired
}

export default Cell;