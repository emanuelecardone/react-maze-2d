import './style.scss';
import Button from '../../components/Button';

const Tutorial = () => {

    // Il Tutorial deve cambiare mostrare il p con un breve testo e il pulsante stampa game
    return(
        <div className='tutorial custom_section'>
            <p className='tutorial_text'>Move around the map and find your way to the end, use W A S D to move your character. <br/> 
            There are currently N levels in the game</p>
            <Button message='Play' sections={['tutorial', 'game']} />
        </div>
    );
}

export default Tutorial;