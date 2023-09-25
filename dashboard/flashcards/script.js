// All below contains flashcards //
const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer")

// Array for Flashcards // 
let contentArray = localStorage.getItem('items') ?JSON.parse(localStorage.getItem('items')) : [];

// Reloads previous flashcards in previous session //
contentArray.forEach(divMaker)

// Each flashcard will be its own <div> element
function divMaker(text){
    // Implementing HTMl Elements 
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    // Attributing style elements for each DIV
    div.className = 'flashcard';
    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top:30px");

    // Question
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute("style", "text-align:center; display:none; color:red");

    // Answer Input
    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else
            h2_answer.style.display = "none"
    });
    
    flashcards.appendChild(div);
}

// Adds flashcards // 
function addFlashcard(){
    // storing user input // 
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }

    // Store info in Content Array, hence updating localStorage // 
    contentArray.push(flashcard_info)
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    // After input has been added, the text boxes are cleared to make it clean //
    question.value ='';
    answer.value = '';
}
// delete function clears all flashcards including session before //
function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    // Null array to clear // 
    contentArray = [];
}

// when pressing new card, it will reappear after being closed //  
function showCreateCardBox(){
    createBox.style.display = "block";

}
// Hides flashcard create box when pressing close // 
function hideCreateBox(){
    createBox.style.display = "none"
}