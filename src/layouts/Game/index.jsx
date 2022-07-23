import './style.scss';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import Grid from '../Grid';
import changePosition from '../../utils/movement';

const Game = () => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;
    const {displayStatus, levels: {list}, user: {currentLevel}} = gameData;
    const {borders, walls, end, start, userPosition, cells: {tot, x, y}} = list[currentLevel];

    let userTrack = start;
    // Per non permettere il movimento utente in quel secondo che passa fino alla schermata gameover
    let gameOverDelay = false;
    // Clock gameover
    let gameOverClock;

    // Funzione che controlla la cella attuale (per il gameOver)
    // Per 1s impedisce il movimento, poi stampa il gameOver
    const checkCell = () => {
        if(userTrack === end){
            gameOverDelay = true;
            gameOverClock = setTimeout(() => {
                setGameData(
                    {
                        ...gameData,
                        displayStatus: {
                            ...displayStatus,
                            game: false,
                            gameOver: true
                        }
                    }
                );
            }, 1000);
        }
    }

    // Funzione movimento personaggio
    const moveCharacter = (e) => {
        // Questa if evita il movimento per 1s fino al gameover
        if(!gameOverDelay){
            userTrack = changePosition(e.key, userTrack, x, borders, walls);
            // Aggiornamento globale
            setGameData(
                {
                    ...gameData,
                    list: [
                        list[currentLevel] = {
                            ...list[currentLevel],
                            userPosition: userTrack
                        }
                    ]
                }
            );
            checkCell();
        }
    }

    // Reset per il gameover
    const resetGame = () => {
        gameOverDelay = false;
        userTrack = start;
        // Lega la posizione di partenza dell'user a quella start
        setGameData(
            {
                ...gameData,
                list: [
                    list[currentLevel] = {
                        ...list[currentLevel],
                        userPosition: list[currentLevel].start
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
                resetGame();
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