import './style.scss';
import Button from '../../components/Button';
import { useContext, useState } from 'react';
import { DataContext } from '../../App';

const GameOver = () => {

    // Il button "next" viene mostrato se non ci si trova all'ultimo livello
    

    // Il gameover dà la possibilità di rigiocare il livello appena finito
    // oppure di passare al successivo
    return(
        <div className='gameover custom_section'>
            <h2 className='gamover_title'>You won! Congrats!</h2>
            <div className='buttons_wrapper d-flex justify-content-center align-items-center'>
                <Button message='Restart' sections={['gameOver', 'game']} />
                <Button message='next' sections={['gameOver', 'game']} change={true} />
            </div>
        </div>
    );
}

export default GameOver;