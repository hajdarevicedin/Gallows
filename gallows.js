var word1;

function getTheWord(){
    var neededWord = document.getElementById("word-input1").value;
    
    document.getElementById("word-input1").value = "";

    word1 = neededWord;
}

function submitTheLetter() {
    var letter = document.getElementById("letter-input1").value;

    let i=0;
    for(i in word1) {
        if(word1[i] == letter) {
            console.log("SUCCESS");
        } else console.log("FAIL");
    }
}