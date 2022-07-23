import './style.scss';
import Button from '../../components/Button';
import { useContext } from 'react';
import { DataContext } from '../../App';

const Tutorial = () => {

    const datas = useContext(DataContext);
    const [gameData] = datas;
    const {levels: {list}} = gameData;

    // Il Tutorial deve cambiare mostrare il p con un breve testo e il pulsante stampa game
    return(
        <div className='tutorial custom_section'>
            <h2 className='text-uppercase'>tutorial</h2>
            <p className='tutorial_text'>Move around the map and find your way to the end, use W A S D to move your character. <br/> 
            There are currently {list.length} levels in the game</p>
            <Button message='Play' sections={['tutorial', 'game']} />
        </div>
    );
}

export default Tutorial;