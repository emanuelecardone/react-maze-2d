import './style.scss';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import Grid from '../Grid';
import changePosition from '../../utils/movement';
import defineBorders from '../../utils/borders';

const Game = () => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {displayStatus, levels, user: {currentLevel}} = gameData;
    const {borders, userPosition, cells: {tot, x, y}} = levels[currentLevel];
    let userTrack = 0;
    
    // Funzione cambio bordi
    const getBorders = () => {
        // Aggiornamento globale
        setGameData(
            {
                ...gameData,
                levels: [
                    levels[currentLevel] = {
                        ...levels[currentLevel],
                        borders: defineBorders(tot, x)
                    }
                ]
            }
        );
    }

    // Funzione movimento personaggio
    const moveCharacter = (e) => {
        userTrack = changePosition(e.key, userTrack, x);
        // Aggiornamento globale
        setGameData(
            {
                ...gameData,
                levels: [
                    levels[currentLevel] = {
                        ...levels[currentLevel],
                        userPosition: userTrack
                    }
                ]
            }
        );
    }

    // Questo useEffect toglie (per reset) e rimette l'evento per il movimento 
    // ad ogni cambio del display di game (più calcolo bordi livello attuale)
    useEffect(
        () => {
            window.removeEventListener('keyup', moveCharacter);
            if(displayStatus.game){
                window.addEventListener('keyup', moveCharacter);
                getBorders();
            }
        },
        [displayStatus.game]
    );

    // Il Game è la sezione del gioco vero e proprio
    return(
        <div className='game custom_section p-0'>
            <Grid cells={tot} />
        </div>
    );
}

export default Game;