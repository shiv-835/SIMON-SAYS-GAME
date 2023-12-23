let gameSeq = []
let userSeq = []
let started = false
let level = 0
let btns = ['pink','blue','green','yellow']
let allbtns = document.querySelectorAll('.btn')

let h2 = document.querySelector('h2')
document.addEventListener('keypress',function(){
    if (started == false){
        console.log('started')
        started = true
        
        levelUp()
    }
})

function btnFlash (btn) {
    btn.classList.add('flash')
    setTimeout(function () {
        btn.classList.remove('flash')
    },250)
}
function userFlash (btn) {
    btn.classList.add('userflash')
    setTimeout(function () {
        btn.classList.remove('userflash')
    },250)
}
function levelUp() {
    userSeq = []
    level++
    h2.innerText = `LEVEL ${level}`
    let randomIdx = Math.floor(Math.random()*3)
    let randomColor = btns[randomIdx]
    let randomBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor)
    btnFlash(randomBtn)
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b><br>Press any key to restart`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(() => {  
            document.querySelector('body').style.backgroundColor = 'white'
        }, 150);
        reset()

    }
}

function btnPress() {
    let btn = this
    userFlash(btn)

    let userColor = btn.getAttribute('id')
    userSeq.push(userColor)

    checkAns(userSeq.length - 1)
}

for (btn of allbtns){
    btn.addEventListener('click',btnPress)
}

function reset() {
    started = false
    gameSeq = []
    userSeq = []
    level = 0
}