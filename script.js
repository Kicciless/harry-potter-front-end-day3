const main=document.getElementById('main')
const character=document.querySelector('.character')
const searchInput=document.getElementById('search')

let characterArray=[]

getCharacters()

//JavaScript Promise (layout) is a synchronose operation  - fetch then then 
function getCharacters(){
    fetch("https://potterhead-api.vercel.app/api/characters")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showCharacters(data);
    })

}