
function main(){

    // fetches json.data and puts the data through loadCards()
    fetch('data.json').then((response) => {
        return response.json();
    }).then(json => {loadCards(json)}).catch((error) => {
        console.error('Something went wrong with retrieving flashcard data.');
        console.error(error);
    });
    
    // event listner for onscreen buttons puts event info through handleInput()
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {handleInput(e)});
    })



}

function loadCards(cards){
    const infoDisplay = document.querySelector('#set-info>p');
    console.log(infoDisplay, cards.default.length)
    infoDisplay.textContent = cards.default.length;
}

function handleInput(event){
    let input = event.target.getAttribute('data-val')
    console.log(input)
}



main();