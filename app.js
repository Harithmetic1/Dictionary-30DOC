



async function getWord(){
    let userInput = document.getElementById('searching').value;
let button = document.getElementById('button');
let definition = document.getElementById('meaning');
let definition2 = document.getElementById('meaning2');
let synonym = document.getElementById('synonyms');
let speechType = document.getElementById('partOS');
let hasCategory = document.getElementById('category');
let pronounciation = document.getElementById('pronounciation');
    const wordToGet = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${userInput}`, {
        "method": "GET",
        headers: {
            "Accept" : "application/json",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "603aacc8fdmsh635c8ac97c4601ep162408jsn4e746117190f"
        }
        
    }) 
    
    const gotWord = await wordToGet.json();
         console.log(gotWord);
         let define = gotWord["results"][0]["definition"];
         let synonym1 = gotWord["results"][0]["synonyms"]
         let speech = gotWord["results"][0]["partOfSpeech"];
         let categoryType = gotWord["results"][0]["typeOf"]
         let pronounce = gotWord["pronunciation"]["all"]
        //  let joke2 = gotWord["results"][1]["definition"];
         definition.innerHTML = "Definition : " + define;
         synonym.innerHTML = "Synonym : " + synonym1;
         speechType.innerHTML = "Part of Speech : " + speech;
         hasCategory.innerHTML = "Type of : " + categoryType;
         pronounciation.innerHTML= "Pronunciation : " + pronounce;

         

}
getWord();


