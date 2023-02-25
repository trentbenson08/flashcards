var card_position = 0;


function main(){
    
    let flashcards;
    // fetches json.data and puts the data through loadCards()
    fetch('data.json').then((response) => {
        return response.json();
    }).then(json => { 
        flashcards = json
        loadCards(json)
    }).catch((error) => {
        console.error('Something went wrong with retrieving flashcard data.');
        console.error(error);
    });
    
    // event listner for onscreen buttons puts event info through handleInput()
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {handleInput(e, card_position, flashcards)});
    })



}

function loadCards(cards){
    console.log(cards)

    const infoDisplay = document.querySelector('#set-info>p');
    infoDisplay.textContent = cards.default.length;

    updateDisplay(cards)
}

function updateDisplay(cards){
    const prompt = document.querySelector('#prompt>p');
    prompt.textContent = cards.default[card_position].prompt;
    const answer = document.querySelector('#answer>p');
    answer.textContent = cards.default[card_position].answer;
}

function revealAnswer(){
    const answer = document.querySelector('#answer>p');
    console.log(answer)
    answer.classList.toggle('hidden');
}

function handleInput(event, pos, deck){
    let input = event.target.getAttribute('data-val')
    switch(input){
        case 'ans': 
            revealAnswer();
            break;
        case 'forward':
            card_position++;
            updateDisplay(deck, pos);
            break;
        case 'back':
            card_position--;
            updateDisplay(deck, pos)
            break;
    }
}


main();