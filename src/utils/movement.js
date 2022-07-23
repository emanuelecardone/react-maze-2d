'use strict';

// Funzione utilizzata da Game per il cambio movimento
export default function changePosition(key, currPosition, cellsX){
    // Cambia userTrack che aggiorna il gameData
    switch(key){
        case 'w':
            return currPosition - cellsX;
        case 'd':
            return currPosition + 1;
        case 's':
            return currPosition += cellsX;
        case 'a':
            return currPosition - 1;
        default: return currPosition;
    }
}