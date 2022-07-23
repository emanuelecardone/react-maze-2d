import './style.scss';
import PropTypes from 'prop-types';
import Cell from '../../components/Cell';

const Grid = ({cells}) => {

    const cellsArray = [];
    for(let i = 0; i < cells; i++){
        cellsArray.push(<Cell index={i} key={'cell-' + i} />)
    }

    // Griglia di gioco che stampa le celle in base al livello attuale
    return (
        <div className='grid w-100 h-100 d-flex flex-wrap'>
            {cellsArray}
        </div>
    );
}

Grid.propTypes = {
    cells: PropTypes.number.isRequired
}

export default Grid;