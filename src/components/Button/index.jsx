import PropTypes from 'prop-types';
import './style.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';

// Il change è per il gameover, se è true è perché l'utente ha premuto next level, 
// quindi deve cambiare il lv attuale
const Button = ({message, sections, change = false}) => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;

    // Il button deve cambiare l'oggetto status che si trova in App
    // Solo il componente con valore "true" sarà stampato
    const changeStatus = () => {

        // La funzione fa un oggetto copia del display e prende i valori di sections
        // Il primo diventa false, il secondo true e poi il setGameData aggiorna copiando il newDisplay
        const newDisplay = {...gameData.displayStatus}
        let newLevel = gameData.user.currentLevel;
        newDisplay[`${sections[0]}`] = false;
        newDisplay[`${sections[1]}`] = true;
        if(change){
            newLevel++;
        }
        setGameData(
            {
                ...gameData,
                displayStatus: {...newDisplay},
                user: {
                    currentLevel: newLevel
                }
            }
        );
    }

    return(
        <a onClick={changeStatus} href="#" className='btn game_btn'>{message}</a>
    );
}

Button.propTypes = {
    message: PropTypes.string.isRequired,
    sections: PropTypes.array.isRequired,
    change: PropTypes.bool
}

export default Button;