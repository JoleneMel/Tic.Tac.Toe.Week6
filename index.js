console.log($('body'));

let square = $('.square');
console.log(square);

let ticGird = $('#tic.Grid');
const squares = Array.from(document.getElementsByClassName("square"));
//have ids for each of them
console.log(squares.id);
let playerO = 'O';
let playerX = 'X';
let ticroundtxt = document.getElementById('ticroundtxt');

//to start w/O
let currentPlayer = playerO;

const startGame = () => {

//to make square clickable
    squares.forEach(square => {
        square.addEventListener('click', squareClicked);
    });

    function squareClicked(e) {
        //target = squares id
        const id = e.target.id;
        // if(!squares[id]) {
        //to change the square to currentPlayer
        squares[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        //if player has won then the game will cease 
        if(winOccurs(currentPlayer)) {
            //txt is cleared for turn order
            ticroundtxt.innerHTML = '';
            return;
        }
        //to rotate the player order
        currentPlayer = currentPlayer === playerO ? playerX : playerO;
        //to reflect the turn order 
        ticroundtxt.innerHTML = `${currentPlayer}'s turn`;
    // }else if(!winOccurs(currentPlayer) && )
    }
}

const winOccurs = (currentPlayer) => {
    if (squares[0] === currentPlayer) {
      (squares[1] && squares[2] === currentPlayer); {
        $('#winnerIsBanner').removeClass('hideMe');
        winnerIsBanner.innerHTML = `${currentPlayer} has won the top row!!!`
        return true;
    }
}
}


//     if (squares[3] && squares[4] && squares[5] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the middle row!!!`
//         return true;
//     }
//     if (squares[6] && squares[7] && squares[8] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the bottom row!!!`
//         return true;
//     }
//     if (squares[0] && squares[3] && squares[6] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the left row!!!`
//         return true;
//     }
//     if (squares[1] && squares[4] && squares[7] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the vertical row!!!`
//         return true;
//     }
//     if (squares[2] && squares[5] && squares[8] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('d-none');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the vertical left row!!!`
//         return true;
//     }
//     if (squares[0] && squares[4] && squares[8] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the left diagonal row!!!`
//         return true;
//     }
//     if (squares[2] && squares[5] && squares[8] === currentPlayer) {
//         $('#winnerIsBanner').removeClass('hideMe');
//         winnerIsBanner.innerHTML = `${currentPlayer} has won the right row!!!`
//         return true;
//     } 
// };

// }

startGame ();