const boardArray = [['', '', ''],
                    ['', '', ''],
                    ['', '', '']];

let comMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const userTurn = () => {
    while(true) {
        let userInput = window.prompt('Please enter your position (x Turn):');
        let position = parseInt(userInput, 10);
        let row, column;
       if (isNaN(position) || position < 0 || position > 8) {
        console.log("Invalid input. Provide another input");
        }
        else if (position > 5) {
            row = 2;
            column = userInput%3
            if (makeSelection(row, column, position) > 0){
                break;
            }
        }
        else if (position > 2) {
            row = 1;
            column = userInput%3;
            if (makeSelection(row, column, position) > 0){
                break;
            }
        }
        else{
            row = 0;
            column = userInput%3
            if (makeSelection(row, column, position) > 0){
                break;
            }
        }
    }
}

const makeSelection = (x, y, position) => {
    if (boardArray[x][y] === '') {
        boardArray[x][y] = 'x';
        updateComMoves(position);
        console.log(boardArray);
        return 1;
    }
    else{
        console.log('Position Taken. Provide another input.')
        return -1;
    } 
}

const compTurn = () => {
    let row, column;
    const arrLastIndex = comMoves.length - 1;
    const cTurn = Math.floor(Math.random() * (arrLastIndex + 1));
    updateComMoves(cTurn);

    if (cTurn > 5) {
        row = 2;
    }
    else if (cTurn > 2) {
        row = 1
    }
    else{
        row = 0;
    }
    column = cTurn%3;

    boardArray[row][column] = 'o';
    console.log(boardArray);
}

const updateComMoves = (userin) => {
    comMoves = comMoves.filter(element => element != userin);
    console.log(comMoves)
}

const drawCheck = () => {
    let check = true;
    for (let i = 0; i < boardArray.length; i++) {
        for (let j = 0; j < boardArray[0].length; j++) {
            if (boardArray[i][j] === '') {
                check = false; 
            }
        }
    }
    return check;
}

const checkWinner = () => {
    for (let i = 0; i < boardArray.length; i++) {
        if (boardArray[i][0] === 'x' && boardArray[i][1] === 'x' && boardArray[i][2] === 'x') {
            console.log('x is the winner');
            return true;
        }
        else if (boardArray[i][0] === 'o' && boardArray[i][1] === 'o' && boardArray[i][2] === 'o') {
            console.log('o is the winner');
            return true;
        }
        else if (boardArray[0][i] === 'x' && boardArray[1][i] === 'x' && boardArray[2][i] === 'x') {
            console.log('x is the winner');
            return true;
        }
        else if (boardArray[0][i] === 'o' && boardArray[1][i] === 'o' && boardArray[2][i] === 'o') {
            console.log('o is the winner');
            return true;
        }
    }
    if (boardArray[0][0] === 'o' && boardArray[1][1] === 'o' && boardArray[2][2] === 'o') {
        console.log('o is the winner')
        return true;
    }
    else if (boardArray[0][0] === 'x' && boardArray[1][1] === 'x' && boardArray[2][2] === 'x') {
        console.log('x is the winner')
        return true;
    }
    else if (boardArray[0][2] === 'x' && boardArray[1][1] === 'x' && boardArray[2][0] === 'x') {
        console.log('x is the winner')
        return true;
    }
    else if (boardArray[0][2] === 'o' && boardArray[1][1] === 'o' && boardArray[2][0] === 'o') {
        console.log('o is the winner')
        return true;
    }
}


