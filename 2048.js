var board;
var score = 0;
var rows = 4;
var colums = 4;


window.onload = function() {
    setGame();
}


function setGame() {
    // board = [
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0]
    // ]

    board = [
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 0, 0, 0],
        [2, 4, 4, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < colums; c++) {

            let tile = document.createElement('div');
            tile.id = r.toString() + '-' + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById('board').append(tile);
        }
    }
}


function updateTile(tile, num) {
    tile.innerText = '';
    tile.classList.value = ''; //clear class list
    tile.classList.add('tile');
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add('x' + num.toString());
        } else {
            tile.classList.add('x8192');
        }
    }
}


document.addEventListener('keyup',(e) => {
    if (e.code == 'ArrowLeft'){
        slideLeft();
    }
})


function filterZero(row) {
    return row.filter(num => num != 0); //create new array without zeros
}


function slide(){
    row = filterZero(row);

    for (let i = 0; i < row.lenght - 1; i++) {
        if (row[i] == row[i+1]){
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }

    row = filterZero(row);

    while (row.lenght < colums) {
        row.psuh(0);
    }
    return row;

}

function slideLeft() {
    for (let r = 0; r < rows; r++){
        let row = board[r];
        row = slide(row);
        barod[r] = row;

        for (let c = 0; c < colums; c++) {

        }
    }
}