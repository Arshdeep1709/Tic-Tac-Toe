console.log('Welcome user');
let turn = 'X';
let isgameOver = false;

//function to change turn

const changeTurn = ()=>{
    if(turn === 'X'){
        turn = 'O';
    }
    else{
        turn = 'X';
    }
}
// function to check for a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach((e)=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== ''))){
            document.getElementsByClassName('info')[0].innerText = boxText[e[0]].innerText + ' Won';
            isgameOver = true;
        }
    })
     // Check for tie
    let filledBoxes = Array.from(boxText).filter(box => box.innerText !== '');
    if (filledBoxes.length === 9 && !isgameOver) {
        document.getElementsByClassName('info')[0].innerText = "It's a tie!";
        isgameOver = true;
    }

}
// Game logic

const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((box)=>{
    let boxText = box.querySelector('.box-text');
    box.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            checkWin();
            if(! isgameOver){
                changeTurn();
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

// click listener on reset button
const reset = document.getElementById('reset');

reset.addEventListener('click', ()=>{
   let boxText = document.querySelectorAll('.box-text'); 
   boxText.forEach((boxText)=>{
    boxText.innerText = '';
   })
   turn = 'X';
   isgameOver = false;
   document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;

})
