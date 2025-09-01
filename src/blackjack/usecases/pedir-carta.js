/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo [10C, 4S, 2H, ...] 
 * @returns {String} retorna una carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    
    return carta;
}



