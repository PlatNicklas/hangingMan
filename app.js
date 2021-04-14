let guessed = '';
let maxWrong = 6;
let startWrong = 0;

let alphabetArr = new Array(27);

function start() {

};

let wordArr = [

];

class button {
    constructor(onclick, element, classAttribute, letter) {
        this.onclick = onclick;
        this.element = element;
        this.classAttribute = classAttribute;
        this.letter = letter;
    }
}

for (let i = 0; i < 26; i++) {
    alphabetArr = new button(document.createAttribute("onclick"), 
                             document.createElement("div"), 
                             document.createElement(),
                             string.fromCarCode(97 + i));
}

for (let i = 0; i < 26; i++) {
    alphabetAtt = new button(document.createAttribute("onclick"))
}