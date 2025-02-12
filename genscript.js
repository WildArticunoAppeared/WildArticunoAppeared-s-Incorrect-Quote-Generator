//Pronouns. Capitalised starts at index 7.
let malep = ["he", "his", "him", "his", "himself"];
let femalep = ["she", "her", "her", "hers", "herself"];
let otherp = ["they", "their", "them", "theirs", "themselves"];
//Init
let n1 = "Person A";
let p1 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n2 = "Person B";
let p2 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n3 = "Person C";
let p3 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n4 = "Person D";
let p4 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n5 = "Person E";
let p5 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n6 = "Person F";
let p6 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n7 = "Person G";
let p7 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n8 = "Person H";
let p8 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n9 = "Person I";
let p9 = ["Plural","they", "their", "them", "theirs", "themselves"];
let n10 = "Person J";
let p10 = ["Plural","they", "their", "them", "theirs", "themselves"];
let choice = [1,0];
let enablednumbers = [1,2,3,4,5,6,7,9,10];
let quote = "Your quote here.";
let noswearing = false;
let censoredquotes = [];
let swearquotes = [[21,33],[],[],[],[],[],[],[],[],[]]; //noswearing
let filters = [false, false, false, false, false];
let crudequotes = [[],[6,28,51,57],[],[],[],[],[],[],[],[]]; //Filter Index: 0
let shipquotesmoderate = [[],[8,47,86,96],[12,15],[1],[],[],[],[],[],[]]; //Shipping Level
let shipquotesstrict = [[37,59,62,73],[18,25,31,32,38,41,71,97],[10,16],[],[1],[],[],[],[],[]]; //Shipping Level
let suicidequotes = [[40],[],[],[],[],[],[],[],[],[]]; //Filter Index: 1
let drugquotes = [[],[69,99],[],[],[],[],[],[],[],[]]; //Filter Index: 2
let sexualquotes = [[],[59,80],[15],[],[],[],[],[],[],[]]; //Filter Index: 3
let mentalquotes = [[44],[102,104],[],[],[],[],[],[],[],[]]; //Filter Index: 4

function generateQuote() {
    choice[0] = -1;
    choice[1] = -1;
    if (enablednumbers.length == 0) {
        document.getElementById("quoteout").innerHTML = getQuote([11,0]);
        return;
    }
    while (enablednumbers.includes(parseInt(choice[0])) == false) {
        choice[0] = Math.floor(Math.random() * 10) + 1;
    }
    getCensoredQuotes();
    switch(parseInt(choice[0])) {
        case 1:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 76);
            }
        break;
        case 2:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 105);
            }
        break;
        case 3:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 33);
            }
        break;
        case 4:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 13);
            }
        break;
        case 5:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 7);
            }
        break;
        case 6:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 1);
            }
        break;
        case 7:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 1);
            }
        break;
        case 8:
            choice[0] = 7;
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 1);
            }
        break;
        case 9:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 1);
            }
        break;
        case 10:
            while (censoredquotes.includes(parseInt(choice[1])) || choice[1] < 0) {
                choice[1] = Math.floor(Math.random() * 1);
            }
        break;
    }
    applyNames();
}

function applyNames() {
    p1 = getPronouns(1);
    n1 = document.getElementById("name1").value;
    p2 = getPronouns(2);
    n2 = document.getElementById("name2").value;
    p3 = getPronouns(3);
    n3 = document.getElementById("name3").value;
    p4 = getPronouns(4);
    n4 = document.getElementById("name4").value;
    p5 = getPronouns(5);
    n5 = document.getElementById("name5").value;
    p6 = getPronouns(6);
    n6 = document.getElementById("name6").value;
    p7 = getPronouns(7);
    n7 = document.getElementById("name7").value;
    p8 = getPronouns(8);
    n8 = document.getElementById("name8").value;
    p9 = getPronouns(9);
    n9 = document.getElementById("name9").value;
    p10 = getPronouns(10);
    n10 = document.getElementById("name10").value;
    document.getElementById("quoteout").innerHTML = getQuote(choice);
    //document.getElementsByClassName("na1").innerHTML = document.getElementById("name1").value;
    
}

function applyPreset(character) {
    switch(character) {
        case 1:
            switch(document.getElementById("preset1").value) {
                case "male":
                    document.getElementById("c1p1").value = "he";
                    document.getElementById("c1p2").value = "his";
                    document.getElementById("c1p3").value = "him";
                    document.getElementById("c1p4").value = "his";
                    document.getElementById("c1p5").value = "himself";
                    document.getElementById("1sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c1p1").value = "she";
                    document.getElementById("c1p2").value = "her";
                    document.getElementById("c1p3").value = "her";
                    document.getElementById("c1p4").value = "hers";
                    document.getElementById("c1p5").value = "herself";
                    document.getElementById("1sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c1p1").value = "they";
                    document.getElementById("c1p2").value = "their";
                    document.getElementById("c1p3").value = "them";
                    document.getElementById("c1p4").value = "theirs";
                    document.getElementById("c1p5").value = "themself";
                    document.getElementById("1sp").checked = true;
                    break;
            }
            break;
        case 2:
            switch(document.getElementById("preset2").value) {
                case "male":
                    document.getElementById("c2p1").value = "he";
                    document.getElementById("c2p2").value = "his";
                    document.getElementById("c2p3").value = "him";
                    document.getElementById("c2p4").value = "his";
                    document.getElementById("c2p5").value = "himself";
                    document.getElementById("2sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c2p1").value = "she";
                    document.getElementById("c2p2").value = "her";
                    document.getElementById("c2p3").value = "her";
                    document.getElementById("c2p4").value = "hers";
                    document.getElementById("c2p5").value = "herself";
                    document.getElementById("2sp").checked = "false";
                    break;
                case "other":
                    document.getElementById("c2p1").value = "they";
                    document.getElementById("c2p2").value = "their";
                    document.getElementById("c2p3").value = "them";
                    document.getElementById("c2p4").value = "theirs";
                    document.getElementById("c2p5").value = "themself";
                    document.getElementById("2sp").checked = "true";
                    break;
            }
            break;
        case 3:
            switch(document.getElementById("preset3").value) {
                case "male":
                    document.getElementById("c3p1").value = "he";
                    document.getElementById("c3p2").value = "his";
                    document.getElementById("c3p3").value = "him";
                    document.getElementById("c3p4").value = "his";
                    document.getElementById("c3p5").value = "himself";
                    document.getElementById("3sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c3p1").value = "she";
                    document.getElementById("c3p2").value = "her";
                    document.getElementById("c3p3").value = "her";
                    document.getElementById("c3p4").value = "hers";
                    document.getElementById("c3p5").value = "herself";
                    document.getElementById("3sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c3p1").value = "they";
                    document.getElementById("c3p2").value = "their";
                    document.getElementById("c3p3").value = "them";
                    document.getElementById("c3p4").value = "theirs";
                    document.getElementById("c3p5").value = "themself";
                    document.getElementById("3sp").checked = false;
                    break;
            }
            break;
        case 4:
            switch(document.getElementById("preset4").value) {
                case "male":
                    document.getElementById("c4p1").value = "he";
                    document.getElementById("c4p2").value = "his";
                    document.getElementById("c4p3").value = "him";
                    document.getElementById("c4p4").value = "his";
                    document.getElementById("c4p5").value = "himself";
                    document.getElementById("4sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c4p1").value = "she";
                    document.getElementById("c4p2").value = "her";
                    document.getElementById("c4p3").value = "her";
                    document.getElementById("c4p4").value = "hers";
                    document.getElementById("c4p5").value = "herself";
                    document.getElementById("4sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c4p1").value = "they";
                    document.getElementById("c4p2").value = "their";
                    document.getElementById("c4p3").value = "them";
                    document.getElementById("c4p4").value = "theirs";
                    document.getElementById("c4p5").value = "themself";
                    document.getElementById("4sp").checked = true;
                    break;
            }
            break;
        case 5:
            switch(document.getElementById("preset5").value) {
                case "male":
                    document.getElementById("c5p1").value = "he";
                    document.getElementById("c5p2").value = "his";
                    document.getElementById("c5p3").value = "him";
                    document.getElementById("c5p4").value = "his";
                    document.getElementById("c5p5").value = "himself";
                    document.getElementById("5sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c5p1").value = "she";
                    document.getElementById("c5p2").value = "her";
                    document.getElementById("c5p3").value = "her";
                    document.getElementById("c5p4").value = "hers";
                    document.getElementById("c5p5").value = "herself";
                    document.getElementById("5sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c5p1").value = "they";
                    document.getElementById("c5p2").value = "their";
                    document.getElementById("c5p3").value = "them";
                    document.getElementById("c5p4").value = "theirs";
                    document.getElementById("c5p5").value = "themself";
                    document.getElementById("5sp").checked = true;
                    break;
            }
            break;
        case 6:
            switch(document.getElementById("preset6").value) {
                case "male":
                    document.getElementById("c6p1").value = "he";
                    document.getElementById("c6p2").value = "his";
                    document.getElementById("c6p3").value = "him";
                    document.getElementById("c6p4").value = "his";
                    document.getElementById("c6p5").value = "himself";
                    document.getElementById("6sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c6p1").value = "she";
                    document.getElementById("c6p2").value = "her";
                    document.getElementById("c6p3").value = "her";
                    document.getElementById("c6p4").value = "hers";
                    document.getElementById("c6p5").value = "herself";
                    document.getElementById("6sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c6p1").value = "they";
                    document.getElementById("c6p2").value = "their";
                    document.getElementById("c6p3").value = "them";
                    document.getElementById("c6p4").value = "theirs";
                    document.getElementById("c6p5").value = "themself";
                    document.getElementById("6sp").checked = true;
                    break;
            }
            break;
        case 7:
            switch(document.getElementById("preset7").value) {
                case "male":
                    document.getElementById("c7p1").value = "he";
                    document.getElementById("c7p2").value = "his";
                    document.getElementById("c7p3").value = "him";
                    document.getElementById("c7p4").value = "his";
                    document.getElementById("c7p5").value = "himself";
                    document.getElementById("7sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c7p1").value = "she";
                    document.getElementById("c7p2").value = "her";
                    document.getElementById("c7p3").value = "her";
                    document.getElementById("c7p4").value = "hers";
                    document.getElementById("c7p5").value = "herself";
                    document.getElementById("7sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c7p1").value = "they";
                    document.getElementById("c7p2").value = "their";
                    document.getElementById("c7p3").value = "them";
                    document.getElementById("c7p4").value = "theirs";
                    document.getElementById("c7p5").value = "themself";
                    document.getElementById("7sp").checked = true;
                    break;
            }
            break;
        case 8:
            switch(document.getElementById("preset8").value) {
                case "male":
                    document.getElementById("c8p1").value = "he";
                    document.getElementById("c8p2").value = "his";
                    document.getElementById("c8p3").value = "him";
                    document.getElementById("c8p4").value = "his";
                    document.getElementById("c8p5").value = "himself";
                    document.getElementById("8sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c8p1").value = "she";
                    document.getElementById("c8p2").value = "her";
                    document.getElementById("c8p3").value = "her";
                    document.getElementById("c8p4").value = "hers";
                    document.getElementById("c8p5").value = "herself";
                    document.getElementById("8sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c8p1").value = "they";
                    document.getElementById("c8p2").value = "their";
                    document.getElementById("c8p3").value = "them";
                    document.getElementById("c8p4").value = "theirs";
                    document.getElementById("c8p5").value = "themself";
                    document.getElementById("8sp").checked = false;
                    break;
            }
            break;
        case 9:
            switch(document.getElementById("preset9").value) {
                case "male":
                    document.getElementById("c9p1").value = "he";
                    document.getElementById("c9p2").value = "his";
                    document.getElementById("c9p3").value = "him";
                    document.getElementById("c9p4").value = "his";
                    document.getElementById("c9p5").value = "himself";
                    document.getElementById("9sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c9p1").value = "she";
                    document.getElementById("c9p2").value = "her";
                    document.getElementById("c9p3").value = "her";
                    document.getElementById("c9p4").value = "hers";
                    document.getElementById("c9p5").value = "herself";
                    document.getElementById("9sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c9p1").value = "they";
                    document.getElementById("c9p2").value = "their";
                    document.getElementById("c9p3").value = "them";
                    document.getElementById("c9p4").value = "theirs";
                    document.getElementById("c9p5").value = "themself";
                    document.getElementById("9sp").checked = true;
                    break;
            }
            break;
        case 10:
            switch(document.getElementById("preset10").value) {
                case "male":
                    document.getElementById("c10p1").value = "he";
                    document.getElementById("c10p2").value = "his";
                    document.getElementById("c10p3").value = "him";
                    document.getElementById("c10p4").value = "his";
                    document.getElementById("c10p5").value = "himself";
                    document.getElementById("10sp").checked = false;
                    break;
                case "female":
                    document.getElementById("c10p1").value = "she";
                    document.getElementById("c10p2").value = "her";
                    document.getElementById("c10p3").value = "her";
                    document.getElementById("c10p4").value = "hers";
                    document.getElementById("c10p5").value = "herself";
                    document.getElementById("10sp").checked = false;
                    break;
                case "other":
                    document.getElementById("c10p1").value = "they";
                    document.getElementById("c10p2").value = "their";
                    document.getElementById("c10p3").value = "them";
                    document.getElementById("c10p4").value = "theirs";
                    document.getElementById("c10p5").value = "themself";
                    document.getElementById("10sp").checked = true;
                    break;
            }
            break;
    }
}

function getPronouns(character) {
    switch(character) {
        case 1:
            if (document.getElementById("1sp").checked == false) {
                return ["Single", document.getElementById("c1p1").value, document.getElementById("c1p2").value, document.getElementById("c1p3").value, document.getElementById("c1p4").value, document.getElementById("c1p5").value];
            } else {
                return ["Plural", document.getElementById("c1p1").value, document.getElementById("c1p2").value, document.getElementById("c1p3").value, document.getElementById("c1p4").value, document.getElementById("c1p5").value];
            }
        case 2:
            if (document.getElementById("2sp").checked == false) {
                return ["Single", document.getElementById("c2p1").value, document.getElementById("c2p2").value, document.getElementById("c2p3").value, document.getElementById("c2p4").value, document.getElementById("c2p5").value];
            } else {
                return ["Plural", document.getElementById("c2p1").value, document.getElementById("c2p2").value, document.getElementById("c2p3").value, document.getElementById("c2p4").value, document.getElementById("c2p5").value];
            }
        case 3:
            if (document.getElementById("3sp").checked == false) {
                return ["Single", document.getElementById("c3p1").value, document.getElementById("c3p2").value, document.getElementById("c3p3").value, document.getElementById("c3p4").value, document.getElementById("c3p5").value];
            } else {
                return ["Plural", document.getElementById("c3p1").value, document.getElementById("c3p2").value, document.getElementById("c3p3").value, document.getElementById("c3p4").value, document.getElementById("c3p5").value];
            }
        case 4:
            if (document.getElementById("4sp").checked == false) {
                return ["Single", document.getElementById("c4p1").value, document.getElementById("c4p2").value, document.getElementById("c4p3").value, document.getElementById("c4p4").value, document.getElementById("c4p5").value];
            } else {
                return ["Plural", document.getElementById("c4p1").value, document.getElementById("c4p2").value, document.getElementById("c4p3").value, document.getElementById("c4p4").value, document.getElementById("c4p5").value];
            }
        case 5:
            if (document.getElementById("5sp").checked == false) {
                return ["Single", document.getElementById("c5p1").value, document.getElementById("c5p2").value, document.getElementById("c5p3").value, document.getElementById("c5p4").value, document.getElementById("c5p5").value];
            } else {
                return ["Plural", document.getElementById("c5p1").value, document.getElementById("c5p2").value, document.getElementById("c5p3").value, document.getElementById("c5p4").value, document.getElementById("c5p5").value];
            }
        case 6:
            if (document.getElementById("6sp").checked == false) {
                return ["Single", document.getElementById("c6p1").value, document.getElementById("c6p2").value, document.getElementById("c6p3").value, document.getElementById("c6p4").value, document.getElementById("c6p5").value];
            } else {
                return ["Plural", document.getElementById("c6p1").value, document.getElementById("c6p2").value, document.getElementById("c6p3").value, document.getElementById("c6p4").value, document.getElementById("c6p5").value];
            }
        case 7:
            if (document.getElementById("7sp").checked == false) {
                return ["Single", document.getElementById("c7p1").value, document.getElementById("c7p2").value, document.getElementById("c7p3").value, document.getElementById("c7p4").value, document.getElementById("c7p5").value];
            } else {
                return ["Plural", document.getElementById("c7p1").value, document.getElementById("c7p2").value, document.getElementById("c7p3").value, document.getElementById("c7p4").value, document.getElementById("c7p5").value];
            }
        case 8:
            if (document.getElementById("8sp").checked == false) {
                return ["Single", document.getElementById("c8p1").value, document.getElementById("c8p2").value, document.getElementById("c8p3").value, document.getElementById("c8p4").value, document.getElementById("c8p5").value];
            } else {
                return ["Plural", document.getElementById("c8p1").value, document.getElementById("c8p2").value, document.getElementById("c8p3").value, document.getElementById("c8p4").value, document.getElementById("c8p5").value];
            }
        case 9:
            if (document.getElementById("9sp").checked == false) {
                return ["Single", document.getElementById("c9p1").value, document.getElementById("c9p2").value, document.getElementById("c9p3").value, document.getElementById("c9p4").value, document.getElementById("c9p5").value];
            } else {
                return ["Plural", document.getElementById("c9p1").value, document.getElementById("c9p2").value, document.getElementById("c9p3").value, document.getElementById("c9p4").value, document.getElementById("c9p5").value];
            }
        case 10:
            if (document.getElementById("10sp").checked == false) {
                return ["Single", document.getElementById("c10p1").value, document.getElementById("c10p2").value, document.getElementById("c10p3").value, document.getElementById("c10p4").value, document.getElementById("c10p5").value];
            } else {
                return ["Plural", document.getElementById("c10p1").value, document.getElementById("c10p2").value, document.getElementById("c10p3").value, document.getElementById("c10p4").value, document.getElementById("c10p5").value];
            }
    }
}

function getQuote(choices) {
    switch(parseInt(choices[0])) {
        default:
            switch(parseInt(choices[1])) {
                default: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> God has let me live another day and I'm going to make it everyone's problem.";
                case 1: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", sobbing:</b> I was having a baller day until the memories resurfaced."
                case 2: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Why is it always something?\nLike it's literally always flippin' something... I can't go a week without there being something!"
                    } else {
                        return "<b>" + n1 + ":</b> Why is it always something?\nLike it's literally always fucking something... I can't go a week without there being something!"
                    }
                case 3: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I care + I asked + smile about it + stay glad + W + not basic + skill + touched grass + rational + you rose up + no hate + triggeredn't + you got a wonderful life + okay :) + not cringe + nice job + based + grammar good + you're good + have a good day."
                case 4: // Credit: Nyctomatter, Luke Correia
                    return "<b>" + n1 + ":</b> If I <i>actually</i> \"spoke my mind\", I'd " + document.getElementById("garbled").innerHTML;
                case 5: // Credit: Nyctomatter, Luke Correia
                    return "<b>" + n1 + ":</b> Don't let anyone ruin your day! <br><b>" + n1 + ":</b> It's <i><b>your</i></b> day!<br><b>" + n1 + ":</b> Ruin it yourself."
                case 6: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", lying injured on the ground:</b> I got too silly."
                case 7: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "*" + n1 + " is playing Pokémon when a Pidgey escapes " + p1[2] + " Poké Ball.*<br><b>" + n1 + ":</b> Who do you think you are?"
                case 8:
                    return "<b>" + n1 + ":</b> Getting all my boys mood rings so I know when my homies need a hug."
                case 9: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> No, they're not \"symptoms of depression\", they're blues clues."
                case 10: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> In this essay, I won't.<br><b>" + n1 + ":</b> Curse you for coming to my TED Talk."
                    } else {
                        return "<b>" + n1 + ":</b> In this essay, I won't.<br><b>" + n1 + ":</b> Fuck you for coming to my TED Talk."
                    }
                case 11:
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I hate it when people call fidgety stuff a \"nervous habit\". I'm bouncing my leg because I'm bored, not because I'm a scared little wimp!"
                    } else {
                        return "<b>" + n1 + ":</b> I hate it when people call fidgety stuff a \"nervous habit\". I'm bouncing my leg because I'm bored, not because I'm a scared little bitch!"
                    }
                case 12: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> My neighbours hate me...<br><b>" + n1 + ":</b> Or so I assume, anyway.<br><b>" + n1 + ":</b> I don't talk to them, they're people."
                case 13: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> They call me 7 Knives... because that's knives it takes me to cook things because I keep putting 'em in the sink without thinking about it."
                case 14: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", looking at " + p1[2] + " reflection in the mirror:</b> I'm so relevant and beautiful."
                case 15: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> How much dirt do you have to throw in the ocean to make a new country?"
                case 16: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "*The phone is ringing.*<br><b>" + n1 + ":</b> No."
                case 17: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Daylight Savings? You're telling me daylight saved this time?"
                case 18: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ", softly:</b> For heaven's sake..."
                    } else {
                        return "<b>" + n1 + ", softly:</b> For fuck's sake..."
                    }
                case 19: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "*" + n1 + " watches a kid fall over.*<br><b>" + n1 + ", under " + p1[2] + " breath:</b> Get rekt."
                case 20: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I expect I'll be able to solve a lot of problems once my baby brain falls out and my adult brain grows in."
                case 21: //Filter: Quotes about swearing ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "Two consecutive videos on " + n1 + "'s channel:<br><b>" + n1 + ":</b> What does fuck mean?<br><b>" + n1 + ":</b> Fuck whoever disliked my video!"
                case 22: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Don't bring anything to a knife fight!<br><b>" + n1 + ":</b> In fact, don't even go - everyone there has knives!"
                case 23: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Imagine how smart I would seem if I was in kindergarten knowing everything I know now! I'd be a genius!"
                case 24: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I love it when teachers put question marks on my tests because I'm just like \"Yeah, same!\""
                case 25: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'm not having a Baja Blast right now...<br><b>" + n1 + ":</b> I'm having a Crunch Wrap Supreme-ly difficult time."
                case 26: // Credit: Common meme.
                    return "<b>" + n1 + ":</b> It's " + n1 + "-in' time!<br>*" + n1 + " proceeds to " + n1 + " all over the place.*"
                case 27: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> The risk I took was calculated. But man, am I bad at maths..."
                case 28: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Don't ask me what the heck I'm talking about. I don't know, okay? I'm just the vessel. The message has been gifted. I've moved on."
                    } else {
                        return "<b>" + n1 + ":</b> Don't ask me what the fuck I'm talking about. I don't know, okay? I'm just the vessel. The message has been gifted. I've moved on."
                    }
                case 29: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Welcome to my yeet and greet!<br><b>" + n1 + ":</b> I say hello, then I throw you across the room!"
                case 30: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Does anyone actually know what to do when people are singing happy birthday to you?"
                case 31: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I would fight myself if I could..."
                case 32: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Okay, I'mma fight these thoughts...<br><b>" + n1 + ", not even five minutes later:</b> Damn! Brain got hands!"
                case 33: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Sometimes I'm tired of being nice. One day, your femur <i>will</i> be mine!"
                case 34: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", lying face-down on the floor:</b> Everything is totally fine."
                case 35: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'm too soft for this world...<br><b>" + n1 + ":</b> It hurts my hand to open water bottles..."
                case 36: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", with tears in " + p1[2] + " eyes:</b> Time to make a joke!"
                case 37: //Filter: Quotes about shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Don't date me unless you want to be amazed by the amount of movies and shows I've just never seen."
                case 38: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Time for some ominous positivity!<br><b>" + n1 + ":</b> You will be okay. You have no choice.<br><b>" + n1 + ":</b> Everything will turn out fine. You cannot stop it.<br><b>" + n1 + ":</b> You will succeed. It is inevitable.<br><b>" + n1 + ":</b> Better days are already coming. It is too late now."
                case 39: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Manga lied to me! I never see bad boy types picking up stray kittens, therefore revealing their soft side! It's always <i>me</i> picking up the cats!<br><b>" + n1 + ":</b><br><b>" + n1 + ":</b> Maybe... I'm the bad boy?"
                case 40: //Filter: Quotes about suicide ..... Credit: Me lol. I made this one up myself.
                    return "<b>" + n1 + ":</b> Suicide hotlines? I don't need any suicide hotlines... I'm so scared of dying that I can't even <i>try</i> to kill myself!"
                case 41: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> My neck... my back...<br><b>" + n1 + ":</b> My constant anxiety attacks!"
                case 42: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'm about to utter some strong language!<br><b>" + n + ":</b> Flexing! Muscles! Sit-ups! Abs! Lifting weights! Push-ups! Physical activity! Running! Football! Biceps!"
                case 43: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", sobbing:</b> I got one miss on a rhythm game!"
                case 44: // Filter: Mental Health ..... Credit: Me lol. I made this one myself.
                    return "<b>" + n1 + ":</b> How about feeding the starving children in Africa instead of using their plight to guilt-trip me over my mental illness!"
                case 45: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> The term \"struggle with depression\" would almost seem to imply that I am bad at depression. But I am, in fact, very proficient at being depressed."
                case 46: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Right now, I'm trying to maintain my swagful whimsy and optimism in the face of an anti-whimsy society."
                case 47: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I eat 15 apples for breakfast then drive myself to the hospital just to watch the doctors get blasted into the walls because they can't withstand my aura!"
                case 48: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> It's okay to be a complete butthole when people deserve it. Stop being so nice all the time!"
                    } else {
                        return "<b>" + n1 + ":</b> It's okay to be a complete bitch when people deserve it. Stop being so nice all the time!"
                    }
                case 49: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> When the puzzle says 3-5 years, but you eat the whole thing in just 10 minutes."
                case 50: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I'm the shyest attention seeker ever!<br><b>" + n1 + ":</b> I want attention! If you're not busy... and you want to... It's okay if you don't."
                    } else {
                        return "<b>" + n1 + ":</b> I'm the shyest attention whore ever!<br><b>" + n1 + ":</b> I want attention! If you're not busy... and you want to... It's okay if you don't."
                    }
                case 51: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> My toxic trait is simply not doing things if I don't want to do them.<br><b>" + n1 + ":</b> ...I am suffering academically."
                case 52: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> When we finally kill the gods, neither hell nor heaven will be waiting for them because they created those to imprison <i>us.</i>"
                case 53: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> When we finally kill the gods, neither hell nor heaven will be waiting for them because they created those to imprison <i>us.</i><br><b>" + n1 + ", five minutes later:</b> Nevermind what I said five minutes ago, I just burnt my eggs and got mad. Sorry."
                case 54: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Some of you just need to eat a warm butter croissant and settle down a little..."
                case 55: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> We take stuffed animals <i>very</i> seriously in this house."
                case 56: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", putting a regular-sized carrot inside a bag of baby carrots:</b> They need adult supervision!"
                case 57: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I have a bad habit of calling things \"loathsome\" if they mildly inconvenience me...<br><b>" + n1 + ":</b> Which usually isn't that bad, but today I spilt my drink and said \"loatsome juice\" under my breath without realising that's not a normal thing to say.<br><b>" + n1 + ":</b> And everyone started laughing."
                case 58: //Filter: Quotes about shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Sorry I called you a freaking idiot. I was trying to flirt."
                    } else {
                        return "<b>" + n1 + ":</b> Sorry I called you a fucking idiot. I was trying to flirt."
                    }
                case 59: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I am straight up not Livin' la Vida Loca right now..."
                case 60: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Walking downhill is so embarrassing like oooh look at me doing a little trot like a stupid dang horse. I'd rather be dead."
                    } else {
                        return "<b>" + n1 + ":</b> Walking downhill is so embarrassing like oooh look at me doing a little trot like a stupid fucking horse. I'd rather be dead."
                    }
                case 61: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Happy No Knowledge November! I simply do not want to know anymore! I've thought enough! I do not think, therefore I do not am."
                case 62: //Filter: Shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Here's a cute date idea; We go to a botanical garden, you point out a flower and I immediately eat it!"
                case 63: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Dermatologists HATE " + p1[3] + "! Scientists FEAR " + p1[3] + "! Hardened soldiers TREMBLE under " + p1[2] + " gaze! God DID NOT CREATE " + p1[3].toUpperCase() + " and " + p1[1] + " WILL TEAR THROUGH REALITY'S FABRIC!"
                case 64: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I hate when people ask me \"What did you do today?\"! Listen, I woke up at noon and then it was 5 PM, okay? I don't know!"
                case 65: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> My personality issues can be directly traced to the fact that I couldn't do the monkey bars as a child."
                case 66: // Credit: Found on Discord
                    return "<b>" + n1 + ":</b> Do not interact with me if you hate Windows XP and 7. You are not joymaxxing or whimsypilled!"
                case 67: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", holding a gun:</b> Oh, this? It heals, but in reverse!"
                case 69: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", sobbing:</b> I'm not even a third wheel because I don't have two friends..."
                case 70: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", struggling to stay awake:</b> I'm like... four days past my bedtime..."
                case 71: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Please do not interact with me if you're me from the mirror world.<br><b>" + n1 + " from the mirror world:</b> Hi.<br><b>" + n1 + ":</b> Why you-"
                case 72: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I am NOT adorable! I am pure terror! I MAKE PEOPLE SHAKE IN FEAR!"
                case 73: // Filter: Shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Shut up.<br><b>" + n1 + ":</b> Not in a rude way. Just shut up in a gentle way...<br><b>" + n1 + ":</b> Shut up... darling...?"
                case 74: // Credit: Me lol. I made this one myself
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Yikes... I swear at least half of these stories are about people who pry too hard and get all shocked and disgusted when they succssfully force the answer out of whoever they're being a meanie to."
                    } else {
                        return "<b>" + n1 + ":</b> Yikes... I swear at least half of these stories are about people who pry too hard and get all shocked and disgusted when they succssfully force the answer out of whoever they're being a dick to."
                    }
                case 75: //Filter: Quotes about Swearing ..... Credit: Angry Video Game Nerd
                    return "<b>" + n1 + ":</b> Man, it's just a pile of cunt, fuck, shit, fuck... cunt... Fuck.<br><b>" + n1 + ":</b> Goddamn it. I just said \"Fuck!\" from the bottom of my heart and I said every curse that there is. There's nothin' left.<br><b>" + n1 + ":</b> So you know what? Somebody's gotta invent a new curse word.<br><b>" + n1 + ":</b> ...I think I got it. These things... these <i>fucking</i> things... are [CENSORED]!<br><b>"
                
            }
        case 2:
            switch(parseInt(choices[1])) {
                default: // Credit: personsonable (Tumblr)
                    if (noswearing == true) {
                        return "<b>" + n1 + ", pointing " + p1[2] + " weapon at " + n2 + ":</b> Tell me the name of God you fungal piece of crap!<br><b>" + n2 + ":</b> Do you feel your heart burning? Can you feel the struggle within? The fear within me is beyond anything your soul can make. You cannot kill me in a way that matters.<br><b>" + n1 + ", with tears streaming down " + p1[2] + " face:</b> I'M NOT FREAKING SCARED OF YOU!"
                    } else {
                        return "<b>" + n1 + ", pointing " + p1[2] + " weapon at " + n2 + ":</b> Tell me the name of God you fungal piece of shit!<br><b>" + n2 + ":</b> Do you feel your heart burning? Can you feel the struggle within? The fear within me is beyond anything your soul can make. You cannot kill me in a way that matters.<br><b>" + n1 + ", with tears streaming down " + p1[2] + " face:</b> I'M NOT FUCKING SCARED OF YOU!"
                    }
                case 1: // Credit: Perchance Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> " + n2 + ", you need to react when people cry!<br><b>" + n2 + ":</b> I did. I rolled my eyes."
                case 2: // Credit: Meme from Puss in Boots: The Last Wish
                    return "<b>" + n1 + ", angrily pointing at " + n2 + ":</b> You're horrible! You're an irredeemable monster!<br><b>" + n2 + ":</b> Woah, woah, what took you so long, <i>idiot!?</i>"
                case 3: // Credit: Nyctomatter
                    return "<b>" + n1 + ":</b> We have come for your sanity!<br><b>" + n2 + ":</b> GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD -"
                case 4: // Credit: Katraccon (Behind the GIFs)
                    return "<b>" + n1 + ", staggering through the snow:</b> This is it. I'm lost. I'm freezing. I'm going to die out here... <br>*" + n1 + " collapses*<br><b>" + n1 + ":</b> " + n2 + "... I'm sorry...<br><b>" + n2 + ", in the distance:</b> HEY! " + n1.toUpperCase() + "! COME ON, WE'RE GOING HOME NOW!<br><b>" + n1 + ":</b> *instantly gets back up and runs towards " + n2 + "*"
                case 5: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "*" + n1 + " and " + n2 + " are texting each other* <br><b>" + n1 + ":</b> Your such a jerk!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> OMG your so annoying!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> Stop doing that. Your making me mad!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> Fine! I'm gonna slap you're face!<br><b>" + n2 + ":</b> Your*"
                case 6: //Filter: Crude ..... Credit: Admiral Adorable's OMORI Meme Dubs, personsonable (Tumblr)
                    return "*There's an image of Pickle Rick but with Johnny Test's face* <br><b>" + n1 + ":</b> This image has given me the ability to kill!<br><b>" + n2 + ":</b> Heheh, Johnny Testickle.<br><b>" + n1 + ":</b> Guess who's first!"
                case 7: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Why did the chicken cross the road?<br><b>" + n2 + ":</b> Why?<br><b>" + n1 + ":</b> To get to the idiot's house.<br><b>" + n1 + ":</b> Knock knock.<br><b>" + n2 + ":</b> Who's there?<br><b>" + n1 + ":</b> The chicken.<br><b>" + n2 + ":</b> Listen up you absolute jerk-"
                    } else {
                        return "<b>" + n1 + ":</b> Why did the chicken cross the road?<br><b>" + n2 + ":</b> Why?<br><b>" + n1 + ":</b> To get to the idiot's house.<br><b>" + n1 + ":</b> Knock knock.<br><b>" + n2 + ":</b> Who's there?<br><b>" + n1 + ":</b> The chicken.<br><b>" + n2 + ":</b> Listen up you motherfucker-"
                    }
                case 8: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> " + n2 + ", I love you.<br><b>" + n2 + ":</b> <i>Yikes.</i>"
                case 9: // Credit: Admiral Adorable's OMORI Meme Dubs, Perchance Incorrect Quotes Generator
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Here you go, " + n2 + ", a nice, hot cup of coffee!<br><b>" + n2 + ":</b> It's cold.<br><b>" + n1 + ":</b> A nice cup of coffee.<br><b>" + n2 + ":</b> It's horrible!<br><b>" + n1 + ":</b> A cup of coffee.<br><b>" + n2 + ":</b> I'm not sure if this even <i>is</i> coffee!<br><b>" + n1 + ":</b> C U P<br><b>" + n2 + ":</b> YOU SERVED THIS IN A FLIPPIN' BOWL!"
                    } else {
                        return "<b>" + n1 + ":</b> Here you go, " + n2 + ", a nice, hot cup of coffee!<br><b>" + n2 + ":</b> It's cold.<br><b>" + n1 + ":</b> A nice cup of coffee.<br><b>" + n2 + ":</b> It's horrible!<br><b>" + n1 + ":</b> A cup of coffee.<br><b>" + n2 + ":</b> I'm not sure if this even <i>is</i> coffee!<br><b>" + n1 + ":</b> C U P<br><b>" + n2 + ":</b> YOU SERVED THIS IN A FUCKING BOWL!"
                    }
                case 10: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> How long does your ideal hug last?<br><b>" + n2 + ":</b> 38-45 minutes.<br><b>" + n1 + ":</b> That's really impractical.<br><b>" + n2 + ":</b> You said ideal, not realistic!"
                case 11: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Who's going to tell met that tea tastes different when you put it in hot water?<br><b>" + n2 + ":</b> Y-You were putting it in cold water!?<br><b>" + n1 + ":</b><br><b>" + n2 + ":</b> " + n1 + ", answer the question, " + n1 + "."
                case 12: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Your room is such a mess!<br><b>" + n2 + ":</b> This is my design."
                case 13: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Does the phrase \"messed up and evil\" imply that you can be messed up and good?<br><b>" + n2 + ":</b> Yes.<br><b>" + n1 + ":</b> Examples?<br><b>" + n2 + ":</b> Me."
                    } else {
                        return "<b>" + n1 + ":</b> Does the phrase \"fucked up and evil\" imply that you can be fucked up and good?<br><b>" + n2 + ":</b> Yes.<br><b>" + n1 + ":</b> Examples?<br><b>" + n2 + ":</b> Me."
                    }
                case 14: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I will cast a spell to make you have a good day!<br>*" + capitalise(p1[1]) + checkPlurality(p1, " casts", " cast") + " the spell.*<br><b>" + n2 + ":</b> Burn the witch!"
                case 15: // Credit: dennys-at-3-am (Tumblr, formerly Kel Yourself)
                    return "<b>" + n1 + ":</b> The year is 2030. Cake art is so realistic that literally anything could be cake. The uncertainty has gripped the world in fear. I go to hug " + n2 + " for comfort. " + capitalise(p2[1]) + checkPlurality(p2, " is", " are") + " cake.<br><b>" + n1 + ":</b> I sob in despair as I eat my cake " + n2 + ". " + capitalise(p2[1]) + checkPlurality(p2, " is", " are") + " delicious."
                case 16: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I just came up with a really good four word cooking horror story but I don't know if you guys are ready for it.<br><b>" + n1 + ":</b> Two cups vanilla extract.<br><b>" + n2 + ":</b> MY GOODNESS!!!"
                    } else {
                        return "<b>" + n1 + ":</b> I just came up with a really good four word cooking horror story but I don't know if you guys are ready for it.<br><b>" + n1 + ":</b> Two cups vanilla extract.<br><b>" + n2 + ":</b> JESUS CHRIST!!!"
                    }
                case 17: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You can control white people by giving them cheese.<br><b>" + n2 + ":</b> Cheese is so good, though!<br><b>" + n1 + ":</b> I got one!"
                case 18: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Excuse me, " + n2 + ", but have you ever been arrested?<br><b>" + n2 + ":</b> Yeah. How could you tell?<br><b>" + n1 + ":</b> I was gonna say it's illegal to be that cute, but now I'm curious.<br><b>" + n2 + ":</b> Aggravated assault."
                case 19: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> " + capitalise(p2[1]) + checkPlurality(p2, "'s", "'re") + " out there making owl noises.<br><b>" + n2 + ":</b> Who?"
                case 20: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'm busy now. I just ate glass by accident.<br><b>" + n2 + ":</b> You <i>what!?</i><br><b>" + n1 + ":</b> Please leave me alone, I ate glass!"
                case 21: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> If there's a \"heavens no\" and a \"hell yes\", why isn't there a \"purgatory maybe\"?<br><b>" + n2 + ": PURGHAPS.</b>"
                case 22: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> What if the 'g' in \"gif\" is silent?<br><b>" + n2 + ":</b> Go the heck to sleep...<br><b>" + n1 + ":</b> What gif I don't want to?"
                    } else {
                        return "<b>" + n1 + ":</b> What if the 'g' in \"gif\" is silent?<br><b>" + n2 + ":</b> Go the fuck to sleep...<br><b>" + n1 + ":</b> What gif I don't want to?"
                    }
                case 23: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I have a headache...<br>*One Google search later...*<br><b>" + n1 + ":</b> Google says I'm gonna die!<br><b>" + n2 + ":</b> Why is Google sending you death threats for having a headache?"
                case 24: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Black and green is radioactive, black and blue is futuristic, black and red is edgy and black and yellow...<br><b>" + n2 + ":</b> According to all known laws of aviation-<br><b>" + n1 + ":</b> I hate you so much..."
                case 25: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Wait, people actually tell their crushes that they like them?<br><b>" + n2 + ":</b> Well, what to <i>you</i> do, " + n1 + "?<br><b>" + n1 + ":</b> I just die. What kind of question is that?"
                case 26: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I'm so freaking furious! I just realised they're called pancakes because they're cakes you make in a frying pan! Darn English!<br><b>" + n2 + ":</b> Waterfall.<br><b>" + n1 + ":</b> Oh my flippin' goodness I'm furious!"
                    } else {
                        return "<b>" + n1 + ":</b> I'm so fucking pissed! I just realised they're called pancakes because they're cakes you make in a frying pan! Fuck English!<br><b>" + n2 + ":</b> Waterfall.<br><b>" + n1 + ":</b> Oh my fucking God I'm furious!"
                    }
                case 27: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Why is everything blue?<br><b>" + n2 + ":</b> Could you perhaps elaborate?<br><b>" + n1 + ":</b> Everything is blue. I see no need for elaboration."
                case 28: //Filter: Crude ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> PTSD? You got Pussy Taste Speldiferous Disorder?<br><b>" + n2 + ":</b> I don't even know to respond.<br><b>" + n2 + ":</b><br><b>" + n2 + ":</b> You know what? Yes, I <i>do</i> have Pussy Taste Speldiferous Disorder."
                case 29: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> How about respecting worms?<br><b>" + n2 + ", picking a worm up from the footpath and putting it in the mud:</b> A soggy boy is a happy boy."
                case 30: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I'm so upset...<br><b>" + n2 + ":</b> Why? What happened?<br><b>" + n1 + ":</b> Shut the heck up.<br><b>" + n2 + ":</b> Well curse you then. You can stay upset. In fact, I hope your day gets <i>worse!</i>"
                    } else {
                        return "<b>" + n1 + ":</b> I'm so upset...<br><b>" + n2 + ":</b> Why? What happened?<br><b>" + n1 + ":</b> Shut the fuck up.<br><b>" + n2 + ":</b> Well fuck you then. You can stay upset. In fact, I hope your day gets <i>worse!</i>"
                    }
                case 31: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> You're my dream, " + n2 + "...<br><b>" + n2 + ":</b> No I'm not. Shut up!<br><b>" + n1 + ":</b> I never said what kind of dream, though.<br><b>" + n1 + ":</b> You absolute nightmare."
                    } else {
                        return "<b>" + n1 + ":</b> You're my dream, " + n2 + "...<br><b>" + n2 + ":</b> No I'm not. Shut up!<br><b>" + n1 + ":</b> I never said what kind of dream, though.<br><b>" + n1 + ":</b> You fucking nightmare."
                    }
                case 32: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What movie is this?<br><b>" + n2 + ":</b> \"I Love You, Man\".<br><b>" + n1 + ":</b> I love you too, but seriously, what's the movie called?<br><b>" + n2 + ":</b> \"I LOVE YOU, MAN\"!<br><b>" + n1 + ":</b> I LOVE YOU TOO, BRO!"
                case 33: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Are you ready for tomorrow's history test?<br><b>" + n2 + ":</b> Yeah.<br><b>" + n1 + ":</b> What ended in 1896?<br><b>" + n2 + ":</b> Uh... 1895!<br><b>" + n1 + ":</b> Yeah, you're totally ready."
                case 34: // Credit: Meme, Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> It costs $400 to see a therapist.<br><b>" + n1 + ":</b> But it's free to just tell yourself, \"It be like that sometimes.\"<br><b>" + n2 + ":</b> What!? No-"
                case 35: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Aren't you supposed to be asleep?<br><b>" + n2 + ":</b> I'm supposed to be a lot of things, but I live to disappoint."
                case 36: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> You messed up!<br><b>" + n2 + ":</b> I don't know what you're referring to, but probably."
                    } else {
                        return "<b>" + n1 + ":</b> You fucked up!<br><b>" + n2 + ":</b> I don't know what you're referring to, but probably."
                    }
                case 37: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Sorry I just rear-ended you, " + n2 + "... but I just hate you so flippin' much!"
                    } else {
                        return "<b>" + n1 + ":</b> Sorry I just rear-ended you, " + n2 + "... but I just hate you so fucking much!"
                    }
                case 38: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I thought \"happiness\" started with a 'h'... so why does mine start with 'u'?<br><b>" + n2 + ":</b> I think you have dyslexia..."
                case 39: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> So, let's start by talking about the emotions you guys are feeling right now.<br><b>" + n2 + ":</b> Stabbing.<br><b>" + n1 + ":</b> Stabbing isn't an emotion. It's more of an activity that I hope you don't do to me.<br><b>" + n1 + ":</b> See an emotion is more of a feeling-<br><b>" + n2 + ":</b> Well maybe I feel stabby!"
                case 40: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Could you possibly get any more annoying?<br><b>" + n2 + ":</b> Easily!"
                case 41: // Credit: Meme
                    return "<b>" + n1 + ":</b> ♪ Can we pretend that aeroplanes in the night sky are like shooting stars? ♫<br><b>" + n2 + ":</b> ♫ I could really use a wish right now, wish right now, wish right now... ♪"
                case 42: // Credit: Zarla (Tumblr/DeviantArt)
                    return "<b>" + n1 + ":</b> ZZZZZZWZWZWZZZAAZWHHHHZZZZZAAZWWAAZKADJASKLJAAKSALFJSDKLJSDK<br><b>" + n2 + ", afraid, with tears in " + p2[2] + " eyes:</b> Don't say that..."
                case 43: // Credit: Me, lol. I made this one myself.
                    if (noswearing == true) {
                        return "After a stage play in which the dog's fate is left unknown:<br><b>" + n1 + ", holding back tears:</b> H-Hey, what happened to the dog?<br><b>" + n2 + ", who had played the dog as well as one of the villains:</b> Well, I'm the one who played the dog so...<br><b>" + n1 + ":</b> I don't care about you. Or Dreadnaught! I saw " + p2[3] + " alive and well at the end. And you're in front of me and you're okay! But what about the dog? What happened to the dog!?<br><b>" + n2 + ":</b> Does it really matter what happened to the dog?<br><b>" + n1 + ", visibly sobbing and grabbing " + n2 + " by the collar:</b> If none of you buttholes can tell me what happened to the <i>flippin'</i> dog, I'm gonna kill every last one of you and make sure no one ever finds out what happened to you."
                    } else {
                        return "After a stage play in which the dog's fate is left unknown:<br><b>" + n1 + ", holding back tears:</b> H-Hey, what happened to the dog?<br><b>" + n2 + ", who had played the dog as well as one of the villains:</b> Well, I'm the one who played the dog so...<br><b>" + n1 + ":</b> I don't care about you. Or Dreadnaught! I saw " + p2[3] + " alive and well at the end. And you're in front of me and you're okay! But what about the dog? What happened to the dog!?<br><b>" + n2 + ":</b> Does it really matter what happened to the dog?<br><b>" + n1 + ", visibly sobbing and grabbing " + n2 + " by the collar:</b> If none of you assholes can tell me what happened to the <i>fucking</i> dog, I'm gonna kill every last one of you and make sure no one ever finds out what happened to you."
                    }
                case 44: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral? Are we going to Golden Corral?<br><b>" + n2 + ":</b> Yeah... unless you wanna go somewhere else...<br><b>" + n1 + ": No.</b>"
                case 45: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What should I eat for lunch?<br><b>" + n2 + ":</b> Poison."
                case 46: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I am 41 Cheetos tall!<br><b>" + n2 + ":</b> Why were you measuring yourself in Cheetos?<br><b>" + n1 + ":</b> We were out of Doritos..."
                case 47: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'd love to ask you out, but you think I'm ugly.<br><b>" + n2 + ":</b> Who told you that I think you're ugly?<br><b>" + n1 + ":</b> You don't think I'm ugly?<br><b>" + n2 + ":</b> Actually I do, I just wanna know who told you."
                case 48: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Why can't you hear a pterodactyl going to the bathroom?<br><b>" + n2 + ":</b> *sighs* Because the 'p' is silent?<br><b>" + n1 + ":</b> No.<br><b>" + n1 + ":</b> Because it's dead."
                case 49: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Holy crap, did that just happen!?<br><b>" + n2 + ":</b> No, you moron.<br><b>" + n1 + ":</b> I'm not Mormon, you freak!"
                    } else {
                        return "<b>" + n1 + ":</b> Holy shit, did that just happen!?<br><b>" + n2 + ":</b> No, you moron.<br><b>" + n1 + ":</b> I'm not Mormon, you fuck!"
                    }
                case 50: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Throwing away batteries feels so bad. I feel like I should eat them.<br><b>" + n2 + ":</b> Don't do that. That's bad for <i>their</i> health! In fact, it's basically animal abuse! Microwave them instead - they can play in there for <i>minutes!</i><br><b>" + n1 + ":</b> Okay...<br>Not even a minute later...<br><b>" + n1 + ", watching the batteries spark and smoke in the microwave:</b> Hey I don't think they're playing in there...!"
                case 51: //Filter: Crude ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> The disconnect between academic and folk understandings of terms and concepts will always cause problems so long as there is a divide between the public and adacemia.<br><b>" + n2 + ":</b> Penis vs Cock!<br><b>" + n1 + ":</b> I think you understand this better than I do."
                case 52: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Okay, so I've been thinking about this for a while... it kinda keeps me up at night and I just have to know...<br><b>" + n1 + ":</b> D-Do you know the Muffin Man?<br><b>" + n2 + ":</b> *Stumbles in terror.*"
                case 53: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I bet those colours only shrimp can see absoutely suck.<br><b>" + n2 + ":</b> Jealousy isn't the way, bro..."
                    } else {
                        return "<b>" + n1 + ":</b> I bet those colours only shrimp can see suck major ass.<br><b>" + n2 + ":</b> Jealousy isn't the way, bro..."
                    }
                case 54: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I adore the catfish episodes when it turns out to be the actual person.<br><b>" + n2 + ":</b> I hate those episodes! I only watch for the deceit and lies..."
                case 55: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Do centaurs slap their backsides to go faster?<br><b>" + n2 + ":</b> Why won't you just die!?"
                    } else {
                        return "<b>" + n1 + ":</b> Do centaurs slap their asses to go faster?<br><b>" + n2 + ":</b> Why won't you fucking die!?"
                    }
                case 56: // Credit: Me, lol. I made this one myself! (Based on the Windows 1x/2x "BSOD")
                    if (noswearing == true) {
                        return "<b>" + n1 + ", on " + p1[3] + " hands and knees:</b> Incorrect DOS version$$ÏU‹ì☻´	ÅV☻Í!☻‹å]Â<br><b>" + n2 + ":</b> Yikes! Are you okay, " + n1 + "???<br><b>" + n1 + ", throwing up:</b> ☻R‰G☻ŽØ‰O☻+ÈIÆ☻M‰O☻ÇG☻ÿß‰G☻+ÇHÆ☻M‰_☻‰G☻!"
                    } else {
                        return "<b>" + n1 + ", on " + p1[3] + " hands and knees:</b> Incorrect DOS version$$ÏU‹ì☻´	ÅV☻Í!☻‹å]Â<br><b>" + n2 + ":</b> Shit! Are you okay, " + n1 + "???<br><b>" + n1 + ", throwing up:</b> ☻R‰G☻ŽØ‰O☻+ÈIÆ☻M‰O☻ÇG☻ÿß‰G☻+ÇHÆ☻M‰_☻‰G☻!"
                    }
                case 57: //Filter: Crude ..... Credit: Meme
                    return "<b>" + n1 + ":</b> I can still hear " + p2[2] + " voice...<br><b>" + n2 + ":</b> Gay. Gay. Homosexual. Gay."
                case 58: // Credit: Perchance Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> Truth or dare?<br><b>" + n2 + ":</b> Truth.<br><b>" + n1 + ":</b> How many hours have you slept this week?<br><b>" + n2 + ":</b> ...Dare.<br><b>" + n1 + ":</b> Go to sleep.<br><b>" + n2 + ":</b> I don't like this game."
                case 59: //Filter: Sexual ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return n1 + " and " + n2 + " are texting each other:<br><b>" + n1 + ":</b> Hello<br><b>" + n2 + ":</b> Are you alone?<br><b>" + n1 + ":</b> Yeah, wassup?<br><b>" + n2 + ":</b> Well, I'm in the shower. Wanna help me out?<br><b>" + n1 + ":</b> Is this your first time taking a shower!?"
                case 60: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", visibly nervous:</b> H-hi everyone... erm, I'm r-really um... shy... there's so many people...<br><b>" + n2 + ": I will protect you!</b>"
                case 61: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", about " + n2 + "'s pet:</b> What breed is he?<br><b>" + n2 + ":</b> Just a little boy."
                case 62: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Who else is in the mood to barefoot over the moors in a blood-red ballgown with anguish in your heart and wet leaves in your hair while the wind blows moodily and dramatically?<br><b>" + n2 + ":</b> Can we all get McDonalds afterwards?<br><b>" + n1 + ":</b> We all deserve it so yes, absolutely! My treat."
                case 63: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I wanna strangle you so bad!<br><b>" + n2 + ":</b> Oh, please. You aren't tall enough.<br><b>" + n1 + ":</b> You've sunk low enough for me to reach."
                case 64: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Ugh, all I've done today is sleep.<br><b>" + n1 + ":</b> I woke up at noon, ate lasagna and went back to sleep right after.<br><b>" + n2 + ":</b> Heh, Method Actor Garfield Cosplayer.<br><b>" + n1 + ":</b> SHUT UP!!! SHUT UP!!! SHUT UP!!! SHUT UP!!!"
                case 65: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ", throwing flower petals at " + n2 + ":</b> Be my friend!"
                case 66: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> If you listen closely to dishwashers, you can hear the slurping sound of the hundreds of tongues inside cleaning off the dishes.<br><b>" + n2 + ":</b> I'm not a violent person, but I'm about to be!"
                case 67: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I think we can be evil, as a treat!<br><b>" + n2 + ":</b> We?<br><b>" + n1 + ":</b> Yes, we."
                case 68: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You call it \"really bad at darts\", I call it \"freestyle acupuncture\"!<br><b>" + n2 + ":</b> Mate, I'm gonna have to ask you to leave the pub."
                case 69: //Filter: Drugs ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I love weed and I'm only ten.<br><b>" + n2 + ":</b> You're so young and that's against the law. Why do you do that?<br><b>" + n1 + ":</b> I am a savage."
                case 70: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Gimme some messed-up animal facts!<br><b>" + n2 + ":</b> My hamster bites me even though I'm so nice to him..."
                    } else {
                        return "<b>" + n1 + ":</b> Gimme some fucked-up animal facts!<br><b>" + n2 + ":</b> My hamster bites me even though I'm so nice to him..."
                    }
                case 71: //Filter: Shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    "<b>" + n1 + ":</b> Someone bond over Sonic with me!<br><b>" + n2 + ", with a couple of milkshakes from Sonic Drive-In:</b> I got us some shakes!<br><b>" + n1 + ":</b> This isn't a blue hedgehog but I accept and love it anyways. Thank you!"
                case 72: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Can someone do me a solly? (Short for solid)<br><b>" + n2 + ":</b> Yeah, I'll do you a solidamious. (Long for solid)"
                case 73: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What are your thoughts on girls with glasses?<br><b>" + n2 + ":</b> ...I'm glad they can see."
                case 74: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I love the phrase \"methinks\" Me does think! Thinketh me do!<br><b>" + n2 + ":</b> Methinks therefore me am.<br><b>" + n1 + ":</b> Oh, you!"
                case 75: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You asked if I could help you study?<br><b>" + n2 + ":</b> Yeah.<br><b>" + n1 + ":</b> What classes do you struggle with?<br><b>" + n2 + ":</b> The Bourgeoisie."
                case 76: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I'm pretty sure 90% of my friends dislike me.<br><b>" + n2 + ":</b> Me.<br><b>" + n1 + ":</b> I was the one who brought it up, so it's me, not you!<br><b>" + n2 + ":</b> You dumbbutt, I mean <i>I'm</i> your friend and I hate you! This is why we hate you!"
                    } else {
                        return "<b>" + n1 + ":</b> I'm pretty sure 90% of my friends dislike me.<br><b>" + n2 + ":</b> Me.<br><b>" + n1 + ":</b> I was the one who brought it up, so it's me, not you!<br><b>" + n2 + ":</b> You dumb bitch, I mean <i>I'm</i> your friend and I hate you! This is why we hate you!"
                    }
                case 77: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I'm pretty smart!<br><b>" + n2 + ":</b> Spell \"orange\".<br><b>" + n1 + ":</b> The fruit or the colour?<br><b>" + n2 + ":</b> "
                case 78: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Trust your mother's opinion on people.<br><b>" + n2 + ":</b> Um, she married my dad..."
                case 79: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What's one aspect of Minecraft you wish would be different?<br><b>" + n2 + ":</b> I wish you could give an enderman a flower so they could be your friend.<br><b>" + n1 + ":</b> Awww!"
                case 80: //Filter: Sexual ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You flirt and kiss and for what? Sex!? Love??? Pathetic!<br><b>" + n2 + ":</b> To level my Charisma stat!<br><b>" + n1 + ":</b> Ah, a gamer. You may pass."
                case 81: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> You'd be stupid to lay a hand on me.<br><b>" + n2 + ":</b> Oh, you'd be surprised by how much stupid shit I do."
                case 82: // Credit: ScatterPatter's Incorrrect Quotes Generator
                    return "<b>" + n1 + ":</b> *Runs towards " + n2 + " with open arms*<br><b>" + n2 + ":</b> *Moves out of the way*<br><b>" + n1 + ":</b> Hey, why'd you move!?<br><b>" + n2 + ":</b> I thought you were going to attack me.<br><b>" + n1 + ":</b> I was going to <i>hug</i> you!<br><b>" + n2 + ":</b> Why would you hug me?<br><b>" + n1 + ":</b> WHY WOULD I ATTACK YOU!?"
                case 83: // Credit: Perchance Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> I could kill you if I wanted.<br><b>" + n2 + ":</b> Yeah? So could any other human being. So can a dog. So can a dedicated duck. You aren't special."
                case 84: // Credit: Perchance Incorrect Quote Generator
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Your future self is talking smack about you right now.<br><b>" + n2 + ":</b> Joke's on " + p2[1] + ", I'll ruin " + p2[3] + " damn life."
                    } else {
                        return "<b>" + n1 + ":</b> Your future self is talking shit about you right now.<br><b>" + n2 + ":</b> Joke's on " + p2[1] + ", I'll ruin " + p2[3] + " fucking life."
                    }
                case 85: // Credit: Perchance Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> Remember, if you die in the simulation-<br><b>" + n2 + ":</b> Yeah, yeah, I know. If you die in the simulation, you die in real life.<br><b>" + n1 + ":</b> What!? No! You just need to reset the simulation with the termnal! What is WRONG with you!?"
                case 86: //Filter: Shipping
                    return "<b>" + n1 + ":</b> You're the love of my life and my best friend. I would do anything for you!<br><b>" + n2 + ":</b> I want you to eat three meals a day and have a decent sleep schedule.<br><b>" + n1 + ":</b> Absolutely not."
                case 87: // Credit: Meme
                    return "<b>" + n1 + ":</b> Someone will die...<br><b>" + n2 + ":</b> Of fun!"
                case 88: // Credit: Perchance Incorrect Quotes Generator
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I will fight anyone who insults " + n2 + ".<br><b>" + n2 + ":</b> But I'm a stupid freaking piece of crap.<br><b>" + n1 + ":</b> ALRIGHT, " + n2.toUpperCase() + ", SQUARE UP!"
                    } else {
                        return "<b>" + n1 + ":</b> I will fight anyone who insults " + n2 + ".<br><b>" + n2 + ":</b> But I'm a stupid fucking piece of shit.<br><b>" + n1 + ":</b> ALRIGHT, " + n2.toUpperCase() + ", SQUARE UP!"
                    }
                case 89: // Credit: Meme
                    if (noswearing == true) {
                        return "<b>" + n1 + ", about " + n2 + " :</b> " + p2[1] + checkPlurality(p2, "'s", "'re") + " behind me, making that bloody face again. I don't even have to turn around to know it. Gosh darn it. I hate that gosh darned stupid face " + p2[1] + " make" + checkPlurality(p2, "s", "") + ". Gosh freaking darnit."
                    } else {
                        return "<b>" + n1 + ", about " + n2 + " :</b> " + p2[1] + checkPlurality(p2, "'s", "'re") + " behind me, making that fucking face again. I don't even have to turn around to know it. God damn it. I hate that goddamned stupid face " + p2[1] + " make" + checkPlurality(p2, "s", "") + ". God fucking damnit."
                    }
                case 90: // Credit: Me, lol! I made this one myself.
                    return "*" + n1 + " pings everyone in the server with an important message.*<br><b>" + n2 + ":</b> WHY DID YOU PING ME AT 3 AM!?<br><b>" + n1 + ":</b> WHY ARE YOU ALLOWING DISCORD NOTIFICATIONS AT 3 AM!?"
                case 91: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What are your adjectives?<br><b>" + n2 + ":</b> You mean my pronouns?<br><b>" + n1 + ":</b> I already know what your pronouns are. What are your adjectives?<br><b>" + n2 + ":</b> Uh, I dunno. What are yours?<br><b>" + n1 + ":</b> NOISY AND CHAOTIC!<br><b>" + n2 + ":</b> Wow, I've never had something go from making no sense to complete sense so fast..."
                case 92: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ", at " + n2 + "'s bedside at 3AM:</b> Pretty messed up that we depict the moon as a girl and the sun as a boy. They're just floating rocks in space.<br><b>" + n1 + ":</b> " + n2 + "? Wake up, " + n2 + ".<br><b>" + n1 + ":</b> Listen, they're sexless!<br><b>" + n2 + ":</b> The sun isn't a rock go back to sleep."
                    } else {
                        return "<b>" + n1 + ", at " + n2 + "'s bedside at 3AM:</b> Pretty fucked up that we depict the moon as a girl and the sun as a boy. They're just floating rocks in space.<br><b>" + n1 + ":</b> " + n2 + "? Wake up, " + n2 + ".<br><b>" + n1 + ":</b> Listen, they're sexless!<br><b>" + n2 + ":</b> The sun isn't a rock go back to sleep."
                    }
                case 93: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Why the fuck are you here!?<br><b>" + n2 + ":</b> I'm sorry... do you want me to leave?<br><b>" + n1 + ":</b> ...No."
                    } else {
                        return "<b>" + n1 + ":</b> Why the fuck are you here!?<br><b>" + n2 + ":</b> I'm sorry... do you want me to leave?<br><b>" + n1 + ":</b> ...No."
                    }
                case 94: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> " + n2 + "... I burnt the water.<br><b>" + n2 + ":</b> " + n1 + ", how the HECK did you burn the water!?"
                    } else {
                        return "<b>" + n1 + ":</b> " + n2 + "... I burnt the water.<br><b>" + n2 + ":</b> " + n1 + ", how the FUCK did you burn the water!?"
                    }
                case 95: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> If what " + n2 + " says is wrong, I will simply reshape reality so that what " + p2[1] + " said is correct."
                case 96: // Filter: Shipping (Moderate) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> " + n2 + " and I are no longer dating.<br><b>" + n2 + ":</b> " + n1 + ", that's a <i>horrible</i> way of telling people that we're married!"
                case 97: // Filter: Shipping (Strict) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Wait... you like me? For my personality?<br><b>" + n2 + ":</b> I know, I was surprised, too!"
                case 98: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> The guy about to invent mayonnaise: \"Damn, I wish this sandwich tasted bad.\"<br><b>" + n2 + ":</b> Clearly you've never had mayonnaise on pizza before.<br><b>" + n1 + ":</b> I've never throttled someone to death with my bare hands either, but unlike what you said, that can change any second."
                case 99: // Filter: Drugs ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What are you doing this weekend?<br><b>" + n2 + ":</b> Drugs, probably."
                case 100: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> :(<br><b>" + n2 + ":</b> Turn that frown upside-down!<br><b>" + n1 + ":</b> ):<br><b>" + n1 + ":</b> Listen here you little snipe-"
                    } else {
                        return "<b>" + n1 + ":</b> :(<br><b>" + n2 + ":</b> Turn that frown upside-down!<br><b>" + n1 + ":</b> ):<br><b>" + n1 + ":</b> Listen here you little shit-"
                    }
                case 101: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I hate to disagree with you.<br><b>" + n2 + ":</b> Oh, please, you <i>love</i> to disagree with me more than anything. It's your favourite thing in the world!"
                case 102: //Filter: Mental Health ..... Credit: Me lol. I made this one myself.
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I did it. I finally did it. I fed all the starving children, cured all the diseases, stopped all those natural disasters and helped that woman get her purse back.<br><b>" + n1 + ":</b> Maybe now " + n2 + " will be more considerate regarding my mental illness...<br><b>" + n2 + ":</b> But there's still someone who has it worse than you.<br><b>" + n1 + ":</b><br><b>" + n1 + ":</b> Who the heck is it?<br><b>" + n2 + ":</b> Me. My fingernail's chipped.<br><b>" + n1 + ":</b> LISTEN HERE YOU LITTLE-"
                    } else {
                        return "<b>" + n1 + ":</b> I did it. I finally did it. I fed all the starving children, cured all the diseases, stopped all those natural disasters and helped that woman get her purse back.<br><b>" + n1 + ":</b> Maybe now " + n2 + " will be more considerate regarding my mental illness...<br><b>" + n2 + ":</b> But there's still someone who has it worse than you.<br><b>" + n1 + ":</b><br><b>" + n1 + ":</b> Who the fuck is it?<br><b>" + n2 + ":</b> Me. My fingernail's chipped.<br><b>" + n1 + ":</b> YOU FUCKING SHITLOAD OF FUCK-"
                    }
                case 103: // Credit: Microsoft Windows error message
                    return n1 + " has caused a General Protection Fault in module " + n2 + " at 6969:0420."
                case 104: //Filter: Mental Health ..... Credit: Me lol. I made this one myself.
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Prepare yourself, " + n2 + ", for I am going to read your mind!<br><b>" + n2 + ":</b> Noooo! Don't do it! PLEASE DON'T!<br><b>" + n1 + ":</b> What!? Are you scared that I'm gonna find out some embarassing secret of yours? Or that you've been very, very bad?<br><b>" + n2 + ":</b> It's not that, I SWEAR-<br><b>" + n1 + ":</b> Okay, so what? Let me-<br><b>" + n1 + ":</b> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-<br><b>" + n2 + ":</b> *sighs* Gosh freaking dang it..."
                    }   else {
                        return "<b>" + n1 + ":</b> Prepare yourself, " + n2 + ", for I am going to read your mind!<br><b>" + n2 + ":</b> Noooo! Don't do it! PLEASE DON'T!<br><b>" + n1 + ":</b> What!? Are you scared that I'm gonna find out some embarassing secret of yours? Or that you've been very, very bad?<br><b>" + n2 + ":</b> It's not that, I SWEAR-<br><b>" + n1 + ":</b> Okay, so what? Let me-<br><b>" + n1 + ":</b> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA-<br><b>" + n2 + ":</b> *sighs* God fucking damnit..."
                    }
            }
        case 3:
            switch(parseInt(choices[1])) {
                default: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Do you know what bees make?<br><b>" + n2 + ":</b> Honey.<br><b>" + n1 + ":</b> Yes dear?<br><br><b>" + n1 + ":</b> Do you know what bees make?<br><b>" + n3 + ":</b> Some stupid and annoying sound. What do you want?<br><b>"
                case 1: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What pronouns should we use for you?<br><b>" + n2 + ":</b> For me? I am but a little flower.<br><b>" + n3 + "</b> For example, Stuart Little is mouse-shaped, but he is human. He would be permitted to partake in the Body of Christ.<br><b>" + n2 + ": Hello?</b>"
                case 2: // Credit: Admiral Adorable's OMORI Meme Dubs, Meme
                    if (noswearing == true) {
                        return "The Squad's opinions on mental illness:<br><b>" + n1 + ":</b> My mental illness is somehow my fault.<br><b>" + n2 + ":</b> Mental illness can happen to anyone because the human body is a broken mess.<br><b>" + n3 + ":</b> God had to nerf me because I was too powerful!"
                    } else {
                        return "The Squad's opinions on mental illness:<br><b>" + n1 + ":</b> My mental illness is somehow my fault.<br><b>" + n2 + ":</b> Mental illness can happen to anyone because the human body is a fucked up mess.<br><b>" + n3 + ":</b> God had to nerf me because I was too powerful!"
                    }
                case 3: // Credit: dennys-at-3-am (Tumblr, formerly Kel Yourself)
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Screw this! *uncats your girl*<br><b>" + n2 + ":</b> Screw YOU! *unboys your cat*<br><b>" + n3 + ":</b> That's called neutering."
                    } else {
                        return "<b>" + n1 + ":</b> Fuck this! *uncats your girl*<br><b>" + n2 + ":</b> Fuck YOU! *unboys your cat*<br><b>" + n3 + ":</b> That's called neutering."
                    }
                case 4: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I lived, dawg.<br><b>" + n2 + ":</b> I loved, dawg.<br><b>" + n3 + ":</b> I laughed, dawg."
                    } else {
                        return "<b>" + n1 + ":</b> I lived, bitch.<br><b>" + n2 + ":</b> I loved, bitch.<br><b>" + n3 + ":</b> I laughed, bitch."
                    }
                case 5: // Credit: dennys-at-3-am (Tumblr, formerly Kel Yourself)
                    return "<b>" + n1 + ":</b> If you wake up much earlier than normal, you feel secret emotions.<br><b>" + n2 + ":</b> One time, I woke up at 7am and stared at the sunrise for like an hour. I don't know what those emotions were but they sure were a lot.<br><b>" + n3 + ":</b> If you stay up late enough, you feel the same emotions, but the bad version of them."
                case 6: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Ew, I hate bugs. They're so gross.<br><b>" + n2 + ":</b> What did you say about bugs!?<br><b>" + n2 + ":</b> " + n3 + ", hold my flower!<br><b>" + n3 + ", taking " + n2 + "'s flower:</b> Kick " + p1[3] + " butt, " + n2 + "! I've got your flower!"
                    } else {
                        return "<b>" + n1 + ":</b> Ew, I hate bugs. They're so gross.<br><b>" + n2 + ":</b> What did you say about bugs!?<br><b>" + n2 + ":</b> " + n3 + ", hold my flower!<br><b>" + n3 + ", taking " + n2 + "'s flower:</b> Kick " + p1[3] + " ass, " + n2 + "! I've got your flower!"
                    }
                case 7: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Don't you miss " + n2 + "?<br><b>" + n3 + ":</b> Nope, not at all!<br><b>" + n1 + ":</b> Take off your sunglasses.<br>*" + n3 + " takes off " + p3[2] + " sunglasses, revealing that " + p3[1] + " " + checkPlurality(p3, "is", "are") + " in tears."
                case 8:
                    return "*" + n1 + " posts two selfies of " + p1[1] + "self in the pool.<br><b>" + n1 + ":</b> Out here living my best life!<br><b>" + n2 + ":</b> " + n3 + " is drowning!<br><b>" + n1 + ":</b> This isn't about " + p3[3] + "."
                case 9: // Credit: Meme
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> I am the Sand Guardian! Guardian of the sand!<br><b>" + n2 + ":</b> Poseidon quivers before " + p1[3] + "!<br><b>" + n1 + ", at " + n3 + " in the distance:</b> RACK OFF!"
                    } else {
                        return "<b>" + n1 + ":</b> I am the Sand Guardian! Guardian of the sand!<br><b>" + n2 + ":</b> Poseidon quivers before " + p1[3] + "!<br><b>" + n1 + ", at " + n3 + " in the distance:</b> FUCK OFF!"
                    }
                case 10: //Filter: Shipping (Strict) ..... Credit: Me, lol. I made this one myself!
                    return "<b>" + n1 + ":</b> I ship " + n2 + " and " + n3 + "...<br><b>" + n2 + " and " + n3 + ":</b> Please no-<br><b>" + n1 + ":</b> With therapy!<br><b>" + n2 + " and " + n3 + ":</b> ..."
                case 11: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Never was there a tale of more woe, than that of Juliet and her Romeo.<br><b>" + n2 + ":</b> Never was there a tale of more strife, than Macbeth and his stabby knife.<br><b>" + n3 + ":</b> Never was there a tale of more sad, than Hamlet and his spooky dad."
                case 12: //Filter: Shipping (Moderate) ..... Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You're so lovely! I love you sooooo much!<br><b>" + n2 + ":</b> Ah, I feel so shy and embarrassed!<br><b>" + n3 + ":</b> You two have been married for nearly 30 years!"
                case 13: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Anyone wanna get in an argument with me?<br><b>" + n2 + ":</b> " + n3 + " isn't even that good.<br><b>" + n1 + ":</b> I was just kidding, but you know what? Damn you for real!"
                    } else {
                        return "<b>" + n1 + ":</b> Anyone wanna get in an argument with me?<br><b>" + n2 + ":</b> " + n3 + " isn't even that good.<br><b>" + n1 + ":</b> I was just kidding, but you know what? Fuck you for real!"
                    }
                case 14: // Credit: ScatterPatter's Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> " + n2 + ", I'll need you to keep an eye on " + n3 + " today. " + capitalise(p3[1]) + checkPlurality(p3, "'s", "'re") + " going to say the wrong thing to the wrong person and get punched.<br><b>" + n2 + ":</b> Sure! I'd love to see " + n3 + " get punched!<br><b>" + n2 + ":</b> Try again.<br><b>" + n2 + ":</b> *sigh* I will stop " + n3 + " from getting punched..."
                case 15: //Filters: Shipping (Moderate), Sexual ..... Credit: Meme
                    return "<b>" + n1 + ":</b> Sorry I'm late, I was doing stuff.<br><b>" + n2 + ":</b> I'm \"stuff\".<br><b>" + n1 + ":</b> OMG " + n2 + ", noooooo!<br><b>" + n3 + ":</b> Heheh, you were banging " + n2 + "!"
                case 16: //Filters: Shipping (Strict)
                    return "<b>" + n1 + ":</b> " + n2 + " and I are having a baby.<br><b>" + n3 + ":</b> That's gre-<br><b>" + n1 + ", slamming adoption papers on the table:</b> It's you! Sign here!"
                case 17: // Credit: Meme
                    return "<b>" + n1 + ":</b> What would you like to have for lunch, " + n2 + "?<br><b>" + n3 + ", in " + n2 + "'s head:</b> THE SOULS OF THE INNOCENT!<br><b>" + n2 + ":</b> A bagel.<br><b>" + n3 + ":</b> WHAT!? NO!<br><b>" + n2 + ":</b> Two bagels."
                case 18: // Credit: incorrect-omori-quotes (Tumblr)
                    return "<b>" + n1 + ":</b> ...So, this is your house.<br><b>" + n2 + ":</b> Yeah.<br><b>" + n1 + ", looking at " + n2 + "'s bedroom:</b> And... you sleep here?<br><b>" + n2 + ":</b> When the night critters allow me to.<br><b>" + n1 + ":</b> What night critters?<br><b>" + n2 + ":</b> " + n3 + "."
                case 19: // Credit: SwiftKill, Bo En (Twitter), u/Indie_Maite (Reddit)
                    return "<b>" + n1 + ":</b> ♫ Close...<br><b>" + n2 + ":</b> ...your mouth.<br><b>" + n1 + ":</b> Aw...<br><b>" + n3 + ":</b> ♪ You'll be here soon-"
                case 20: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> " + n2 + ", " + n3 + " keeps bullying me at school.<br><b>" + n2 + ":</b> Ask your teacher for help.<br>The next day...<br><b>" + n1 + ", to " + p1[2] + " teacher:</b> Can you please help me beat up " + n3 + "?"
                case 21: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> " + n2 + ", we need that!<br><b>" + n2 + ", holding " + n3 + " over a rubbish bin:</b> No we don't.<br><b>" + n1 + ":</b> Gimme that-<br><b>" + n2 + ":</b> No, it's garbage!"
                case 22: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ", pointing to " + n3 + "'s empty room:</b> YOU LET " + n3.toUpperCase + " ESCAPE!<br><b>" + n2 + ":</b> I WAS ON BREAK!"
                case 23: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> Without ugly, there would be no beauty in this world.<br><b>" + n2 + ":</b> Thank you for your sacrifice, " + n3 + "."
                case 24: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> All I did was kill " + n3 + ". Is that really such a crime?<br><b>" + n2 + ":</b><br><b>" + n2 + ":</b> Yes!?"
                case 25: // Credit: TC-96 (Tumblr)
                    return "<b>" + n1 + ":</b> Ugh! " + n2 + ", " + n3 + " has been so MEAN to me! " + capitalise(p3[1]) + checkPlurality(p3, "'s", "'re") + " always hitting and kicking me all the time. Make it stop!<br><b>" + n2 + ", looking at " + n3 + ":</b> Nah mate, I get it."
                case 26: // Credit: Me lol. I made this one myself.
                    return "<b>" + n1 + ":</b> Stop trying to kill me! Leave me alone! I just don't want to get killed, okay?!<br><b>" + n2 + ":</b> But if I don't kill you... " + n3 + " will kill <i>me!</i><br><b>" + n1 + ":</b><br><br><b>" + n3 + ", walking up to " + n1 + " and " + n2 + ":</b> Ah, " + n2 + ", I see you've-<br><b>" + n1 + ":</b> If you dare lay a hand on " + n2 + " you're DEAD!"
                case 27: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> Nice rock.<br><b>" + n2 + ":</b> Thanks. " + n3 + " gave it to me.<br><b>" + n3 + ":</b> I <i>threw</i> it at you!<br><b>" + n2 + ":</b> " + checkPlurality(p3, "Isn't ", "Aren't") + p3[1] + " the sweetest?"
                case 28: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> *spouting some rather stupid nonsense*<br><b>" + n2 + ":</b> Shut up! I'd rather <i>die</i> than listen to you!<br><b>" + n3 + ", walking up behind " + n2 + ":</b> No, you wouldn't."
                case 29: // Credit: Based on a meme video
                    return "<b>" + n1 + ":</b> ♫ Can we get much higher? ♫<br><b>" + n2 + ":</b> ♪ So hiiiiigh ♫<br><b>" + n1 + ":</b> ♪ Oh oh o-<br><b>" + n3 + ":</b> ♪ Ooooh the misery... ♫<br><b>" + n1 + " and "+ n2 + ":</b><br><b>" + n2 + ":</b> ♫ Oh oh ooooh... ♪"
                case 30: // Credit: Admiral Adorable's OMORI Meme Dubs, Perchance Incorrect Quotes Generator
                    if (noswearing == true) {
                        return "*" + n1 + " and " + n2 + " find " + n3 + " on the ground with " + p3[2] + " eyes closed.<br><b>" + n1 + ":</b> Hey, is " + n3 + " sleeping or dead?<br><b>" + n2 + ":</b> Hopefully dead. I hated " + p3[2] + " guts.<br><b>" + n3 + ", getting up:</b> Okay first of all, curse you-"
                    } else {
                        return "*" + n1 + " and " + n2 + " find " + n3 + " on the ground with " + p3[2] + " eyes closed.<br><b>" + n1 + ":</b> Hey, is " + n3 + " sleeping or dead?<br><b>" + n2 + ":</b> Hopefully dead. I hated " + p3[2] + " guts.<br><b>" + n3 + ", getting up:</b> Okay first of all, fuck you-"
                    }
                case 31: // Credit: ScatterPatter's Incorrect Quote Generator
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> What happens if I press the accelerator and brake at the same time?<br><b>" + n2 + ":</b> The car takes a screenshot!<br><b>" + n3 + ":</b> For the last time, get the heck out."
                    } else {
                        return "<b>" + n1 + ":</b> What happens if I press the accelerator and brake at the same time?<br><b>" + n2 + ":</b> The car takes a screenshot!<br><b>" + n3 + ":</b> For the last time, get the fuck out."
                    }
                case 32: // Credit: ScatterPatter's Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> Here's a fun Christmas idea: We hang mistletoe, but instead of kissing, you have to FIGHT whoever else is under it.<br><b>" + n2 + ":</b> " + n1 + ", no.<br><b>" + n3 + ":</b> Mistlefoe!<br><b>" + n2 + ":</b> Please stop encouraging " + p3[3] + "."
                
            }
        case 4:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>" + n1 + ":</b> *screams* <br><b>" + n2 + ":</b> *screams louder to establish dominance* <br><b>" + n3 + ":</b> Should we do something?<br><b>" + n4 + ":</b> Nah, I wanna see who wins."
                case 1: // Credit: Admiral Adorable's OMORI Meme Dubs
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Yesterday, " + n2 + " called me cute.<br><b>" + n3 + ":</b> " + capitalise(p2[1]) + " called me pretty. Why don't they use fancy words?<br><br><b>" + n2 + ", texting " + n4 + ":</b> How do you spell gorgoeuos?<br><b>" + n4 + ":</b> I have no hecking idea."
                    } else {
                        return "<b>" + n1 + ":</b> Yesterday, " + n2 + " called me cute.<br><b>" + n3 + ":</b> " + capitalise(p2[1]) + " called me pretty. Why don't they use fancy words?<br><br><b>" + n2 + ", texting " + n4 + ":</b> How do you spell gorgoeuos?<br><b>" + n4 + ":</b> I have no fucking idea."
                    }
                case 2: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What's the hardest thing for you to say?<br><b>" + n2 + ":</b> I need help.<br><b>" + n3 + ":</b> I was wrong.<br><b>" + n4 + ":</b> Worcestershire sauce."
                case 3: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Why do you want to bite people?<br><b>" + n2 + ":</b> Because they deserve it!<br><b>" + n3 + ":</b> Aim for the jugular!<br><b>" + n4 + ":</b> " + n3.toUpperCase() + "...!"
                case 4: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> When will Ted himself... finally show up to the Talk?<br><b>" + n2 + ":</b> The final boss!<br><b>" + n3 + ":</b> You guys know that TED Talks stands for \"Technology, Education and Design Talks\", right?<br><b>" + n4 + ":</b> I will not let Ted hide behind these lies any longer!"
                case 5: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> What kind of power move could I make towards my new therapist?<br><b>" + n2 + ":</b> Get a notepad and take notes whenever they take notes!<br><b>" + n3 + ":</b> Eat the paper at the end of the session!<br><b>" + n4 + ":</b> This is why you're all in therapy."
                case 6: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> You've heard of \"be gay, do crimes\", now get ready for \"be trans, throw hands\"!<br><b>" + n2 + ":</b> Be queer, instill fear!<br><b>" + n3 + ":</b> Be bi, go for the eye!<br><b>" + n4 + ":</b> Be ace, punch face!"
                case 7: // Credit: Meme
                    return "<b>" + n1 + ":</b> It's okay to ask for help.<br><b>" + n2 + ":</b> You're not a burden.<br><b>" + n3 + ":</b> Murder is okay.<br><b>" + n4 + ":</b> Your feelings matter."
                case 8: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Yeah, I'm a she/they! (un-she/theys my katana and slices you in half!)<br><b>" + n2 + ":</b> I've been he/it.<br><b>" + n3 + ":</b> I now pronouns you dead.<br><b>" + n4 + ":</b> Was/were!"
                case 9: // Credit: Meme
                    return "<b>" + n1 + ":</b> WAKE ME UP-<br><b>" + n2 + ":</b> Before you go-go!<br><b>" + n3 + ":</b> When September ends...<br><b>" + n4 + ":</b> WAKE ME UP INSIDE!"
                case 10: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> Hello guys!<br><br><b>" + n1 + ":</b> ...All your bones are wet!<br><b>" + n2 + ", " + n3 + " and " + n4 + ":</b> Why the hell would you say that!?<br><b>" + n1 + ":</b> None of you said hello back."
                case 11: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> I think 11 should be pronounced \"onety-one\".<br><b>" + n2 + ":</b> Yeah! Now we just need \"twoty-two\"!<br><b>" + n3 + ":</b> Threety-three!<br><b>" + n4 + ":</b> Fourty-four!<br><b>" + n4 + ":</b> ...Oh wait."
                case 12: // Credit: ScatterPatter's Incorrect Quotes Generator
                    return "<b>" + n1 + ":</b> I currently have seven empty notebooks and I have no clue what to put in them. Suggestions?<br><b>" + n2 + ":</b> Put spaghetti in it.<br><b>" + n1 + ":</b> I'm currently taking suggestions from literally anyone but you.<br><b>" + n3 + ":</b> Put spaghetti in it.<br><b>" + n1 + ":</b> I'm currently taking suggestions from literally anyone but you two.<br><b>" + n4 + ":</b> Put spaghetti in it.<br><b>" + n1 + ":</b> I am no longer taking suggestions."
                
            }
        case 5:
            switch(parseInt(choices[1])) {
                default: // Credit: Jeaney Collects
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> Are Wii gonna have a problem?<br><b>" + n2 + ":</b> You best Switch up that attitude!<br><b>" + n3 + ":</b> You're playing a dangerous Game, Boy!<br><b>" + n4 + ":</b> Don't Nintendo Sixty-Force me to use this!<br><b>" + n1 + ":</b> I'mma mess you up!<br>*Some un-NES-essary violence later...*<br><b>" + n5 + ":</b> WII-U WII-U WII-U WII-U-"
                    } else {
                        return "<b>" + n1 + ":</b> Are Wii gonna have a problem?<br><b>" + n2 + ":</b> You best Switch up that attitude!<br><b>" + n3 + ":</b> You're playing a dangerous Game, Boy!<br><b>" + n4 + ":</b> Don't Nintendo Sixty-Force me to use this!<br><b>" + n1 + ":</b> I'mma fuck you up!<br>*Some un-NES-essary violence later...*<br><b>" + n5 + ":</b> WII-U WII-U WII-U WII-U-"
                    }
                case 1: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> Let's play Kiss Marry Kill!<br><b>" + n1 + ":</b> First, who would you kill?<br><b>" + n2 + ":</b> *points at " + n5 + ".<br><b>" + n3 + ":</b> *points at " + n5 + ".<br><b>" + n4 + ":</b> *points at " + n5 + ".<br><b>" + n5 + ":</b> *shrugs* I would kill me, too."
                case 2: // Credit: Perchance Incorrect Quote Generator
                    return "<b>" + n1 + ":</b> Why aren't there friend pick up lines? Pick up lines for making friends, like-<br><b>" + n1 + ", to " + n2 + ":</b> Hey, that's a cool outfit. You know where it would look better? Nowhere else, because you're an awesome individual!<br><b>" + n3 + ", to " + n4 + ":</b> Be my friend or I'll set your entire family on fire!<br><b>" + n5 + ":</b> There are two types of people."
                case 3: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "The Squad's reactions to being told that they suck at a video game:<br><b>" + n1 + ":</b> Please be nice to me... I'm trying!<br><b>" + n2 + ":</b> Sorry, I don't play this game much.<br><b>" + n3 + ":</b> You're uninvited from my birthday party!<br><b>" + n4 + ":</b> Sorry, it's just so hard to play with your mum sitting on my face.<br><b>" + n5 + ":</b> Your IP and GT have been sent to Microsoft's fraud department along with a recommendation to impose a $10,000 fine and up to six months in jail."
                case 4: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "The Squad's reactions to being invited to a cult:<br><b>" + n1 + ":</b> No!? What the fuck is wrong with you!?<br><b>" + n2 + ":</b> Thanks for the offer, but please don't ever talk to me again.<br><b>" + n3 + ":</b> What do you have to offer?<br><b>" + n4 + ":</b> Where do I sign up?<br><b>" + n5 + ":</b> Sorry, but I already have one."
                case 5: // Credit: Admiral Adorable's OMORI Meme Dubs, Meme
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> If you bite it and you die, it's poisonous. If it bites you and you die, it's venomous.<br><b>" + n2 + ":</b> What if it bites me and <i>it</i> dies?<br><b>" + n1 + ":</b> It means <i>you're</i> poisonous. Jeez, " + n2 + ", learn how to read!<br><b>" + n3 + ":</b> What if it bites itself and I die?<br><b>" + n1 + ":</b> That's voodoo.<br><b>" + n4 + ":</b> What if it bites me and someone else dies?<br><b>" + n1 + ":</b> That's correlation, not causation.<br><b>" + n5 + ":</b> What if we bite each other and neither of us die?<br><b>" + n1 + ":</b> That's kinky."
                    } else {
                        return "<b>" + n1 + ":</b> If you bite it and you die, it's poisonous. If it bites you and you die, it's venomous.<br><b>" + n2 + ":</b> What if it bites me and <i>it</i> dies?<br><b>" + n1 + ":</b> It means <i>you're</i> poisonous. Jesus, " + n2 + ", learn how to read!<br><b>" + n3 + ":</b> What if it bites itself and I die?<br><b>" + n1 + ":</b> That's voodoo.<br><b>" + n4 + ":</b> What if it bites me and someone else dies?<br><b>" + n1 + ":</b> That's correlation, not causation.<br><b>" + n5 + ":</b> What if we bite each other and neither of us die?<br><b>" + n1 + ":</b> That's kinky."
                    }
                case 6: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> She was poetry, but he couldn't read.<br><b>" + n2 + ":</b> His name was Jarred, he was ninteen.<br><b>" + n3 + ":</b> When his parents built a very strange machine.<br><b>" + n4 + ":</b> ♪ Watch that scene, dig in the dancing queen! ♪<br><b>" + n5 + ":</b> Eyyyyyy, macarena!<br><b>" + n1 + ":</b> Horrible job everyone..."
            }
        case 6:
            switch(parseInt(choices[1])) {
                default: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "*A child starts crying in public.<br><b>" + n1 + ":</b> *tries to make the child laugh*<br><b>" + n2 + ":</b> *tries playing with the child to calm them down*<br><b>" + n3 + ":</b> *gives advice to the parents*<br><b>" + n4 + ":</b> *cries with the child*<br><b>" + n5 + ":</b> *ignores the child*<br><b>" + n6 + ":</b> *is the reason why the child is crying*"
                
            }
        case 7:
            switch(parseInt(choices[1])){
                default: // Credit: Admiral Adorable's OMORI Meme Dubs
                    return "<b>" + n1 + ":</b> *Gets in " + p1[2] + " little clown car.*<br><b>" + n2 + ":</b> *Gets in with " + p1[3] + ".*<br><b>" + n3 + ":</b> *Gets in with " + p1[3] + ".*<br><b>" + n4 + ":</b> *Gets in with " + p1[3] + ".*<br><b>" + n5 + ":</b> *Gets in with " + p1[3] + ".*<br><b>" + n6 + ":</b> *Gets in with " + p1[3] + ".*<br><b>" + n7 + ":</b> *Gets in with " + p1[3] + ".*"
                
            }
        case 9:
            switch(parseInt(choices[1])) {
                default: // Credit: Meme, Admiral Adorable's OMORI Meme Dubs
                    return "<b>The Squad giving mental health advice:<br>" + n1 + ":</b> Talk about your feelings<br><b>" + n2 + ":</b> Keep active<br><b>" + n3 + ":</b> Eat an potato<br><b>" + n4 + ":</b> Recite a dark spell<br><b>" + n5 + ":</b> Throw your phone in the lake<br><b>" + n6 + ":</b> Kiss a bird gently<br><b>" + n7 + ":</b> Scowl<br><b>" + n8 + ":</b> Make fun of someone you don't like<br><b>" + n9 + ":</b> Lie down in the dirt and let the earth slowly reclaim you."
            }
        case 10:
            switch(parseInt(choices[1])) {
                default: // Credit: Me lol. I made this one myself.
                    if (noswearing == true) {
                        return "<b>" + n1 + ":</b> THE FLOOR IS LAVA!!!<br><b>" + n2 + ":</b> Oh no! *jumps on a bench*<br><b>" + n3 + ", climbing up a tree:</b> Crap! Crap! Crap!<br><b>" + n4 + ", sitting on the roof:</b> Well, this sucks...<br><b>" + n5 + ", sitting on a chair with " + p5[2] + " feet up:</b> Whatever...<br><b>" + n6 + ", sitting on a pillow on the floor:</b> Surely this counts as being safe, right?<br><b>" + n7 + ", squatting atop the fridge:</b> Not again!<br><b>" + n8 + ":</b> Yikes! *clings to the ceiling like Spider-Man.*<br><b>" + n9 + ", floating in mid-air:</b> Heh, you're all noobs.<br><b>" + n10 + ", lying on the floor:</b> Guess I'll die...<br><b>" + n3 + ", " + n4 + " and " + n7 + ":</b> " + n10 + ", what the HECK!?"
                    } else {
                        return "<b>" + n1 + ":</b> THE FLOOR IS LAVA!!!<br><b>" + n2 + ":</b> Oh no! *jumps on a bench*<br><b>" + n3 + ", climbing up a tree:</b> Shit! Shit! Shit!<br><b>" + n4 + ", sitting on the roof:</b> Well, this sucks...<br><b>" + n5 + ", sitting on a chair with " + p5[2] + " feet up:</b> Whatever...<br><b>" + n6 + ", sitting on a pillow on the floor:</b> Surely this counts as being safe, right?<br><b>" + n7 + ", squatting atop the fridge:</b> Not again!<br><b>" + n8 + ":</b> Yikes! *clings to the ceiling like Spider-Man.*<br><b>" + n9 + ", floating in mid-air:</b> Heh, you're all noobs.<br><b>" + n10 + ", lying on the floor:</b> Guess I'll die...<br><b>" + n3 + ", " + n4 + " and " + n7 + ":</b> " + n10 + ", what the FUCK!?"
                    }

            }
        case 11:
            return "ERROR: You have not enabled any number of characters! Please enable at least one number of characters and try again."

    }
}

function toggleCensors() {
    noswearing = document.getElementById("swearing").checked;
    filters[0] = document.getElementById("crudeitems").checked;
    filters[1] = document.getElementById("suicide").checked;
    filters[2] = document.getElementById("drugs").checked;
    filters[3] = document.getElementById("sexual").checked;
    filters[4] = document.getElementById("mentalillness").checked;
    return;
}

function getCensoredQuotes() {
    censoredquotes = [];
    if (noswearing == true) {
        for (let i = 0; i < swearquotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(swearquotes[parseInt(choice[0]) - 1][i]);
        }
    }
    if (filters[0] == true) {
        for (let i = 0; i < crudequotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(crudequotes[parseInt(choice[0]) - 1][i]);
        }
    }
    if (document.getElementsByName("shippinglevel")[1].checked == true) {
        for (let i = 0; i < shipquotesmoderate[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(shipquotesmoderate[parseInt(choice[0]) - 1][i]);
        }
    }
    if (document.getElementsByName("shippinglevel")[2].checked == true) {
        for (let i = 0; i < shipquotesmoderate[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(shipquotesmoderate[parseInt(choice[0]) - 1][i]);
        }
        for (let i = 0; i < shipquotesstrict[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(shipquotesstrict[parseInt(choice[0]) - 1][i]);
        }
    }
    if (filters[1] == true) {
        for (let i = 0; i < suicidequotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(suicidequotes[parseInt(choice[0]) - 1][i]);
        }
    }
    if (filters[2] == true) {
        for (let i = 0; i < drugquotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(drugquotes[parseInt(choice[0]) - 1][i]);
        }
    }
    if (filters[3] == true) {
        for (let i = 0; i < sexualquotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(sexualquotes[parseInt(choice[0]) - 1][i]);
        }
    }
    if (filters[4] == true) {
        for (let i = 0; i < mentalquotesquotes[parseInt(choice[0]) - 1].length; i++) {
            censoredquotes.push(mentalquotesquotes[parseInt(choice[0]) - 1][i]);
        }
    }
}

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function editEnabledNumbers(changed) {
    elementname = changed + "p";
    if (document.getElementById(elementname).checked == true) {
        enablednumbers.push(changed);
    } else {
        enablednumbers.splice(enablednumbers.indexOf(changed),1);
    }
}

function checkPlurality(character, single, plural) { //character = character pronoun array, single = singular string, plural = plural string
    if (character[0] == "Single") {
        return single;
    } else {
        return plural;
    }
}

function toggleCustomise(val) {
    htmlclassname = "customise" + val
    selected = document.getElementsByClassName(htmlclassname);

    if (selected[0].classList.contains("closed") == true) {
        selected[0].classList.remove("closed");
        selected[1].classList.remove("closed");
    } else {
        selected[0].classList.add("closed");
        selected[1].classList.add("closed");
    }
}
