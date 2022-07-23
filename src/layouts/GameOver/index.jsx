import './style.scss';
import Button from '../../components/Button';
import { useContext, useState } from 'react';
import { DataContext } from '../../App';

const GameOver = () => {

    const datas = useContext(DataContext);
    const [gameData] = datas;
    const {levels: {list}, user: {currentLevel}} = gameData;
    let nextLvButton;
    let finalMessage;
    // Il button "next" viene mostrato se non ci si trova all'ultimo livello
    if(currentLevel !== list.length - 1){
        nextLvButton = <Button message='next' sections={['gameOver', 'game']} change={true} />
        finalMessage = 'You won! Congrats!';
    } else{
        nextLvButton = null;
        finalMessage = 'Amazing, you completed the game!';
    }

    // Il gameover dà la possibilità di rigiocare il livello appena finito
    // oppure di passare al successivo
    return(
        <div className='gameover custom_section'>
            <h2 className='gamover_title'>{finalMessage}</h2>
            <div className='buttons_wrapper d-flex justify-content-center align-items-center'>
                <Button message='Restart' sections={['gameOver', 'game']} />
                {nextLvButton}
            </div>
        </div>
    );
}

export default GameOver;