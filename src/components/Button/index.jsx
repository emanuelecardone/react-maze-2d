import PropTypes from 'prop-types';
import './style.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';

const Button = ({message, sections}) => {

    const datas = useContext(DataContext);
    const [gameData, setGameData] = datas;

    // Il button deve cambiare l'oggetto status che si trova in App
    // Solo il componente con valore "true" sarà stampato
    const changeStatus = () => {

        // La funzione fa un oggetto copia del display e prende i valori di sections
        // Il primo diventa false, il secondo true e poi il setGameData aggiorna copiando il newDisplay
        const newDisplay = {...gameData.displayStatus}
        newDisplay[`${sections[0]}`] = false;
        newDisplay[`${sections[1]}`] = true;
        setGameData(
            {
                ...gameData,
                displayStatus: {...newDisplay}
            }
        );
    }

    return(
        <a onClick={changeStatus} href="#" className='btn game_btn'>{message}</a>
    );
}

Button.propTypes = {
    message: PropTypes.string.isRequired
}

export default Button;