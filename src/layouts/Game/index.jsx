import './style.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';

const Game = () => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;

    // Il Game è la sezione del gioco vero e proprio
    return(
        <div className='game custom_section hustify-content-center'>
            <h2 className='game_title text-uppercase'>game</h2>
            <p>Qui andrà la griglia di gioco</p>
        </div>
    );
}

export default Game;