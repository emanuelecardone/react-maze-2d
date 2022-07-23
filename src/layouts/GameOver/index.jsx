import './style.scss';
import Button from '../../components/Button';

const GameOver = () => {

    // Il gameover dà la possibilità di rigiocare il livello appena finito
    // oppure di passare al successivo
    return(
        <div className='gameover custom_section'>
            <h2 className='gamover_title'>You won! Congrats!</h2>
            <div className='buttons_wrapper d-flex justify-content-center align-items-center'>
                <Button message='Restart' sections={['gameOver', 'game']} />
                {/* Next ancora da fare */}
                <Button message='(soon)' sections={['gameOver', 'game']} />
            </div>
        </div>
    );
}

export default GameOver;