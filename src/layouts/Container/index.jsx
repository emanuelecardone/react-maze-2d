import './style.scss';
import Welcome from "../Welcome";
import Tutorial from '../Tutorial';
import Game from '../Game';
import { useContext } from 'react';
import { DataContext } from '../../App';

const Container = () => {

    const datas = useContext(DataContext);
    // Destrutturazione per prendere solo display
    const [{displayStatus}] = datas;

    // Il GameContainer è usato come componente per comodità nel provider 
    // (cosi da non dover fare un provider per ogni if else che stampa)
    // Return in base al display
    if(displayStatus.welcome){
        return <Welcome />
    } else if(displayStatus.tutorial){
        return <Tutorial />
    } else if(displayStatus.game){
        return <Game />
    }
}

export default Container;