import './style.scss';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import changePosition from '../../utils/movement';

const Game = () => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {displayStatus, levels, user: {currentLevel}} = gameData;
    const {cells: {tot, x, y}} = levels[currentLevel];
    const {userPosition} = levels[currentLevel];
    let userTrack = userPosition;
    
    // Funzione per calcolare i bordi in base alla griglia attuale 
    // Prende il numero totale di celle, quello sull'asse x e asse y
    // Poi pusha ogni linea di bordi in un'array che aggiornerà il gameData di App
    const getBorders = () => {
        
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
    // ad ogni cambio del display di game
    useEffect(
        () => {
            window.removeEventListener('keyup', moveCharacter);
            if(displayStatus.game){
                window.addEventListener('keyup', moveCharacter);
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