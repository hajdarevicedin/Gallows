var word1;
var word2;
function getTheWord(){
    var neededWord = document.getElementById("word-input1").value;
    
	word1 = neededWord;
    document.getElementById("word-input1").value = "";
	
	wordlen = word1.length;
	for(let ii=0; ii<wordlen; ii++) {
		document.getElementById("wordfinder").innerHTML = document.getElementById("wordfinder").innerHTML + "*";	
	}
	
	word2 = document.getElementById("wordfinder").innerHTML;
}

function submitTheLetter() {
    var letter = document.getElementById("letter-input1").value;
	//var word2 = document.getElementById("wordfinder").innerHTML;
    var i=0;
    for(i in word1) {
        if(word1[i] == letter) {
            word2[i] = letter;
        }
    }
	
	document.getElementById("wordfinder").innerHTML = word2;
}