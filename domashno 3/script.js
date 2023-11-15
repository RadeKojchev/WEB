const wordsToGuess=["club","computer","project","water","window","feedback","beautiful","market","student",
"backpack","lucky","music","guitar","football","hangman","waterfall","geography","movie","alphabet","letter"];


const value = Math.floor( 1 + Math.random() * 19 ); 
const wordToGuess=wordsToGuess[value]; 
const size=wordToGuess.length;

const pictureToHang=["HANGMANHEAD.png","HANGMANBODY.png","HANGMANLEFTHAND.png","HANGMANHANDS.png","HANGMANLEFTLEG.png","HANGMANFULL.png"];

let wrongGuess=0;   
let correctGuess=0; 

$(document).ready(function(){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    keyboardLetters="";
    for(i=0;i<26;i++){
        keyboardLetters+="<div class=\"letterKeyboard\">"+alphabet[i].toUpperCase()+"</div>";
        if(i==12){
            keyboardLetters+="<br>";    
        }
    }
    $("#keyboard").html(keyboardLetters);
    wordBlanks="";
    for(i=0;i<size;i++){
        wordBlanks+="<div class=\"wordBlanks\">"+"__"+"</div>";
    }
    $("#word").html(wordBlanks);

    $(".letterKeyboard").on("click",function(){
        let letter=$(this).text().toLowerCase();
        checkGuess(letter);
    })

    $("body").on("keyup",function(event){
        keyAscii=event.which;
        if((keyAscii>64) && (keyAscii<91)){ 
            letter=String.fromCharCode(keyAscii)
            checkGuess(letter.toLowerCase());
            nthChild=keyAscii-65;
        }
    })

    $("#restartGameButton").on("click",function(){
        location.reload();
    })
});

function checkGuess(letter){
    nthChild=letter.toUpperCase().charCodeAt(0);

    if($("#keyboard").find("div").eq(nthChild-65).attr("class")!="alreadyClicked"){
        flag=0; 
        for(i=0;i<size;i++){
            if(letter==wordToGuess[i]){
                if(document.getElementsByClassName("wordBlanks")[i].innerHTML!=letter.toUpperCase()){
                    document.getElementsByClassName("wordBlanks")[i].innerHTML=letter.toUpperCase()
                    correctGuess++;
                }
                flag=1;
            }
        }
        if(flag==0){
            $("#hangedPicture").attr("src",pictureToHang[wrongGuess]);
            wrongGuess++;
            if(wrongGuess==6){
                for(i=0;i<size;i++){    
                    document.getElementsByClassName("wordBlanks")[i].innerHTML=wordToGuess[i].toUpperCase();                    
                }
                document.getElementById("textAboutGame").innerHTML = "You lost  Press restart game to try again"
                $("#restartGame").attr("style","display:block");
            }
        }
        if(correctGuess==size){
            document.getElementById("textAboutGame").innerHTML = "CONGRATULATIONS!!! YOU WON!!! Press restart game to play again"
            $("#restartGame").attr("style","display:block");
        }
        $("#keyboard").find("div").eq(nthChild-65).attr("class","alreadyClicked");
    }
}function timer (){
    let [seconds, minutes, hours] = [0,0,0];
let display = document.getElementById("display");
    seconds ++;
}