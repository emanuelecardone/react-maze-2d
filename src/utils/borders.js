'use strict';

// Funzione per calcolare i bordi in base alla griglia attuale 
// Prende il numero totale di celle, quello sull'asse x e asse y
// Poi pusha ogni linea di bordi in un'array che aggiornerà il gameData di App
export default function defineBorders(cells, cellsX){
    const borders = {
        up: [],
        right: [],
        down: [],
        left: []
    }
    // Up
    for(let i = 0; i < cellsX; i++){
        borders.up.push(i);
    }
    // Right
    for(let i = cellsX - 1; i <= cells - 1; i = i + cellsX){
        borders.right.push(i);
    }
    // Down
    for(let i = cells - 1; i >= cells - cellsX; i--){
        borders.down.push(i);
    }
    // Left
    for(let i = cells - cellsX; i >= 0; i = i - cellsX){
        borders.left.push(i);
    }
    return borders;
}