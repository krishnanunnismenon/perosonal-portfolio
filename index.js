const heading = document.getElementById('heading')
const junk = document.getElementById('junk')

const uselessButton = document.getElementById('uselessButton')
const uselessWords = document.getElementById('uselessWords')

const arrOfRandomQuotes = ['I told you that nobody cares😢', 'Are you sure you want to hear my thoughts😒', 'I think that you have a lot of spare time as well as no job😂',
    'Fine!!! If you press that button again face the consequences😑','Here we go man🤷‍♂️🤷‍♂️','','why you keep pressing ????🫥','I told Stop',"Aren't you embaressed",'Just','Just Kidding','Just Kidding, I','Just Kidding, I will','Just Kidding, I will share','Just Kidding, I will share my','Just Kidding, I will share my thought🤗🤗','','THERE ARE ONLY A VERY SMALL NUMBER OF THINGS THAT ARE WORTH FIGHTING FOR....❤️❤️','Finding those things may be the Hardest Part (just an opinion)🤞🤞'
]

let count = 0;
let randomCount = 0;
heading.addEventListener('click',()=>{
    if(count === 0){
        heading.append(' S')
        
        junk.append('(sry forgot to add the initial)')
        count++;
    }else if(count ===1){
        junk.innerText = '...'
        count++
    }else{
        heading.replaceWith("Hi, I'm Krishnanunni")
        
    }
})

uselessButton.addEventListener('click',()=>{
    if(randomCount===arrOfRandomQuotes.length-1){
        uselessWords.innerText = arrOfRandomQuotes[randomCount]
        const ranNum = Math.floor(Math.random()*1000000)
        uselessWords.style.color = `#${ranNum}`
        randomCount--
        return
    }
    const ranNum = Math.floor(Math.random()*1000000)
    uselessWords.innerText = arrOfRandomQuotes[randomCount]
    uselessWords.style.color = `#${ranNum}`
    randomCount++
})