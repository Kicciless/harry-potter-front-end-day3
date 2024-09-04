const main=document.getElementById('main')
const character=document.querySelector('.character')
const searchInput=document.getElementById('search')

let characterArray=[]

searchInput.addEventListener("input",(e)=>{
    const value=e.target.value.toLowerCase();
    console.log(value)
    characterArray.forEach((character)=>{
        const inVisible=character.name.toLowerCase().includes(value);//makesure its one value together
        character.element.classList.toggle("hide",! inVisible);
    })
})

getCharacters()

//JavaScript Promise (layout) is a synchronose operation  - fetch then then 
function getCharacters(){
    fetch("https://harrypotter-backend-api-day2-cy3m.onrender.com/characters")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showCharacters(data);
    })

}

function showCharacters(data){
    main.innerHTML="";

    characterArray=data.map(character=>{
    const {name, image}=character; // object destrucring 

    const characterEl=document.createElement('div');
    characterEl.classList.add('character');
    characterEl.classList.add('font');

    characterEl.innerHTML=
    `<img src=${image} alt=${name} onerror="handleError(this);"/>
    <div class="character-info">
    <h3>${name}</h3>
    </div>`

    const characterBack=document.createElement('div');
    characterBack.classList.add('character');
    characterBack.classList.add('back');

    characterBack.innerHTML= `<h1> Back of the card </h1>`

    main.appendChild(characterEl);
    main.appendChild(characterBack);
    return{
        name:character.name,
        element:characterEl
    }
})

}

function handleError(imageElment){
    imageElment.src="images/wizard-icon.jpeg";
}