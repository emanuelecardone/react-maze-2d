'use strict';

// Funzione utilizzata da Game per il cambio movimento
export default function changePosition(key, currPosition, cellsX, borders, walls){

    let nextCell = currPosition;

    // Cambia userTrack che aggiorna il gameData
    // Oltre ai muri, il movimento è possibile se l'utente non si trova sui bordi e uscirebbe fuori
    switch(key){
        case 'w':
            if(!walls.includes(currPosition - cellsX) && !borders.up.includes(currPosition)){
                nextCell = currPosition - cellsX;
            }
            break;
        case 'd':
            if(!walls.includes(currPosition + 1) && !borders.right.includes(currPosition)){
                nextCell = currPosition + 1;
            }   
            break;
        case 's':
            if(!walls.includes(currPosition + cellsX) && !borders.down.includes(currPosition)){
                nextCell = currPosition + cellsX;
            } 
            break;
        case 'a':
            if(!walls.includes(currPosition - 1) && !borders.left.includes(currPosition)){
                nextCell = currPosition - 1;
            }
            break;
    }

    return nextCell;
}