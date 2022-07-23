import './style.scss';
import Button from '../../components/Button';

const Welcome = () => {

    // Il Welcome deve cambiare mostrare solo il primo titolo e il pulsante stampa tutorial
    return(
        <div className='welcome custom_section'>
            <h2 className='main_title text-uppercase'>the maze 2d</h2>
            <Button message='Start' sections={['welcome', 'tutorial']} />
        </div>
    );
}

export default Welcome;