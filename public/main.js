console.log('connection successful!')

const button = document.querySelector('button')
const whyBtn = document.querySelector('.why')
const whyList = document.querySelector('.list')

const createDisplay = (list) => {
    let newList = list.map((x,i) => `<span id='${i}'>${x}</span>`)
    console.log(newList)
    whyList.innerHTML = ""
    whyList.innerHTML = newList.join('')
}

button.addEventListener('click', () => {
    alert('Good choice!')
})

const reasons = ['Squirtle squad goals', 'Part of a gang', 'Not afraid to be silly', 'evolves into a turtle tank', 'Evolves into Mercury, the god of speed!', 'Original starter', 'Will beat Typhlosion any day', 'Will beat charmander any day',  'On the box. Thyphlosion is not'  ]

let display = []

function why(evt){
    while(display.length <= 5){
        let randomIndex = Math.floor(Math.random() * reasons.length);
        let randomReason = reasons[randomIndex];
        display.push(randomReason)
        let set = new Set(display);
        display = [...set];
        createDisplay(display)

    }
        
}            
            
whyBtn.addEventListener('click', why);           



