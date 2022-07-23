import './style.scss';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import changePosition from '../../utils/movement';
import defineBorders from '../../utils/borders';

const Game = () => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {displayStatus, levels, user: {currentLevel}} = gameData;
    const {borders, userPosition, cells: {tot, x, y}} = levels[currentLevel];
    let userTrack = userPosition;
    let bordersTrack = borders;
    
    // Funzione cambio bordi
    const getBorders = () => {
        // Funzione presa da utils
        bordersTrack = defineBorders(tot, x); 
        // Aggiornamento globale
        setGameData(
            {
                ...gameData,
                levels: [
                    ...levels,
                    levels[currentLevel] = {
                        ...levels[currentLevel],
                        borders: bordersTrack
                    }
                ]
            }
        );
        console.log(gameData);
    }

    // Funzione movimento personaggio
    const moveCharacter = (e) => {
        // Funzione presa da utils
        userTrack = changePosition(e.key, userTrack, x);
        // Aggiornamento globale
        setGameData(
            {
                ...gameData,
                levels: [
                    ...levels,
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
        <div className='game custom_section'>
            <div className='grid w-100 h-100'>

            </div>
        </div>
    );
}

export default Game;