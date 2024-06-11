//Pronouns. Capitalised starts at index 7.
let malep = ["he", "him", "his", "his", "he's", "he'd", "he'll","He", "Him", "His", "His", "He's", "He'd", "He'll", "s", "is", "Is"]
let femalep = ["she", "her", "hers", "her", "she's", "she'd", "she'll","She", "Her", "Hers", "Her", "She's", "She'd", "She'll", "s", "is", "Is"]
let otherp = ["they", "them", "theirs", "their", "they're", "they'd", "they'll","They", "Them", "Theirs", "Their", "They're", "They'd", "They'll", "", "are", "Are"]
//Init
let n1 = "Person A";
let p1 = otherp;
let n2 = "Person B";
let p2 = otherp;
let n3 = "Person C";
let p3 = otherp;
let n4 = "Person D";
let p4 = otherp;
let n5 = "Person E";
let p5 = otherp;
let n6 = "Person F";
let p6 = otherp;
let n7 = "Person G";
let p7 = otherp;
let n8 = "Person H";
let p8 = otherp;
let n9 = "Person I";
let p9 = otherp;
let n10 = "Person J";
let p10 = otherp;
let choice = [1,0];
let quote = "Your quote here."

function applyNumber() {
    number = parseInt(document.getElementById("numberofpeople").value);
    switch(number) {
        case 1:
            document.getElementById("name2").disabled = true;
            document.getElementById("name3").disabled = true;
            document.getElementById("name4").disabled = true;
            document.getElementById("name5").disabled = true;
            document.getElementById("name6").disabled = true;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = true;
            document.getElementById("gen3").disabled = true;
            document.getElementById("gen4").disabled = true;
            document.getElementById("gen5").disabled = true;
            document.getElementById("gen6").disabled = true;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;
        break;
        case 2:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = true;
            document.getElementById("name4").disabled = true;
            document.getElementById("name5").disabled = true;
            document.getElementById("name6").disabled = true;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = true;
            document.getElementById("gen4").disabled = true;
            document.getElementById("gen5").disabled = true;
            document.getElementById("gen6").disabled = true;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;
        break;
        case 3:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = true;
            document.getElementById("name5").disabled = true;
            document.getElementById("name6").disabled = true;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = true;
            document.getElementById("gen5").disabled = true;
            document.getElementById("gen6").disabled = true;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;
        break;
        case 4:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = true;
            document.getElementById("name6").disabled = true;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = true;
            document.getElementById("gen6").disabled = true;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;
        break;
        case 5:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = true;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = true;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;            
        break;
        case 6:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = false;
            document.getElementById("name7").disabled = true;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = false;
            document.getElementById("gen7").disabled = true;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;            
        break;
        case 7:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = false;
            document.getElementById("name7").disabled = false;
            document.getElementById("name8").disabled = true;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = false;
            document.getElementById("gen7").disabled = false;
            document.getElementById("gen8").disabled = true;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;            
        break;
        case 8:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = false;
            document.getElementById("name7").disabled = false;
            document.getElementById("name8").disabled = false;
            document.getElementById("name9").disabled = true;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = false;
            document.getElementById("gen7").disabled = false;
            document.getElementById("gen8").disabled = false;
            document.getElementById("gen9").disabled = true;
            document.getElementById("gen10").disabled = true;
        break;
        case 9:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = false;
            document.getElementById("name7").disabled = false;
            document.getElementById("name8").disabled = false;
            document.getElementById("name9").disabled = false;
            document.getElementById("name10").disabled = true;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = false;
            document.getElementById("gen7").disabled = false;
            document.getElementById("gen8").disabled = false;
            document.getElementById("gen9").disabled = false;
            document.getElementById("gen10").disabled = true;
        break;
        case 10:
            document.getElementById("name2").disabled = false;
            document.getElementById("name3").disabled = false;
            document.getElementById("name4").disabled = false;
            document.getElementById("name5").disabled = false;
            document.getElementById("name6").disabled = false;
            document.getElementById("name7").disabled = false;
            document.getElementById("name8").disabled = false;
            document.getElementById("name9").disabled = false;
            document.getElementById("name10").disabled = false;
            document.getElementById("gen2").disabled = false;
            document.getElementById("gen3").disabled = false;
            document.getElementById("gen4").disabled = false;
            document.getElementById("gen5").disabled = false;
            document.getElementById("gen6").disabled = false;
            document.getElementById("gen7").disabled = false;
            document.getElementById("gen8").disabled = false;
            document.getElementById("gen9").disabled = false;
            document.getElementById("gen10").disabled = false;
        break;
    }
}

function generateQuote() {
    choice[0] = document.getElementById("numberofpeople").value;
    quote = getQuote(choice);
    switch(parseInt(choice[0])) {
        case 1:
            choice[1] = Math.floor(Math.random() * 16);
        break;
        case 2:
            choice[1] = Math.floor(Math.random() * 29);
        break;
        case 3:
            choice[1] = Math.floor(Math.random() * 6);
        break;
        case 4:
            choice[1] = Math.floor(Math.random() * 6);
        break;
        case 5:
            choice[1] = Math.floor(Math.random() * 3);
        break;
        case 7:
            choice[1] = Math.floor(Math.random() * 1);
        break;
        case 9:
            choice[1] = Math.floor(Math.random() * 1);
        break;
    }
    applyNames();
    //document.getElementById("quoteout").innerHTML = quote;
}

function applyNames() {
    p1 = getPronouns(document.getElementById("gen1").value);
    n1 = document.getElementById("name1").value;
    if (choice[0] >= 2) {
        p2 = getPronouns(document.getElementById("gen2").value);
        n2 = document.getElementById("name2").value;
        if (choice[0] >= 3) {
            p3 = getPronouns(document.getElementById("gen3").value);
            n3 = document.getElementById("name3").value;
            if (choice[0] >= 4) {
                p4 = getPronouns(document.getElementById("gen4").value);
                n4 = document.getElementById("name4").value;
                if (choice[0] >= 5) {
                    p5 = getPronouns(document.getElementById("gen5").value);
                    n5 = document.getElementById("name5").value;
                    if (choice[0] >= 6) {
                        p6 = getPronouns(document.getElementById("gen6").value);
                        n6 = document.getElementById("name6").value;
                        if (choice[0] >= 7) {
                            p7 = getPronouns(document.getElementById("gen7").value);
                            n7 = document.getElementById("name7").value;
                            if (choice[0] >= 8) {
                                p8 = getPronouns(document.getElementById("gen8").value);
                                n8 = document.getElementById("name8").value;
                                if (choice[0] >= 9) {
                                    p9 = getPronouns(document.getElementById("gen9").value);
                                    n9 = document.getElementById("name9").value;
                                    if (choice[0] >= 10) {
                                        p10 = getPronouns(document.getElementById("gen10").value);
                                        n10 = document.getElementById("name10").value;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.getElementById("quoteout").innerHTML = getQuote(choice);
    //document.getElementsByClassName("na1").innerHTML = document.getElementById("name1").value;
    
}

function getPronouns(character) {
    switch(character) {
        case "male":
            return malep;
        case "female":
            return femalep;
        default:
            return otherp;
    }
}

function getQuote(choices) {
    switch(parseInt(choices[0])) {
        default:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>" + n1 + ":</b> God has let me live another day and I'm going to make it everyone's problem.";
                case 1:
                    return "<b>" + n1 + ", sobbing:</b> I was having a baller day until the memories resurfaced."
                case 2:
                    return "<b>" + n1 + ":</b> Why is it always something?\nLike it's literally always fucking something... I can't go a week without there being something!"
                case 3:
                    return "<b>" + n1 + ":</b> I care + I asked + smile about it + stay glad + W + not basic + skill + touched grass + rational + you rose up + no hate + triggeredn't + you got a wonderful life + okay :) + not cringe + nice job + based + grammar good + you're good + have a good day."
                case 4:
                    return "<b>" + n1 + ":</b> If I <i>actually</i> \"spoke my mind\", I'd " + document.getElementById("garbled").innerHTML;
                case 5:
                    return "<b>" + n1 + ":</b> Don't let anyone ruin your day! <br><b>" + n1 + ":</b> It's <i><b>your</i></b> day!<br><b>" + n1 + ":</b> Ruin it yourself."
                case 6:
                    return "<b>" + n1 + ", lying injured on the ground:</b> I got too silly."
                case 7:
                    return "*" + n1 + " is playing Pokémon when a Pidgey escapes " + p1[3] + " Poké Ball.*<br><b>" + n1 + ":</b> Who do you think you are?"
                case 8:
                    return "<b>" + n1 + ":</b> Getting all my boys mood rings so I know when my homies need a hug."
                case 9:
                    return "<b>" + n1 + ":</b> No, they're not \"symptoms of depression\", they're blues clues."
                case 10:
                    return "<b>" + n1 + ":</b> In this essay, I won't.<br><b>" + n1 + ":</b> Fuck you for coming to my TED Talk."
                case 11:
                    return "<b>" + n1 + ":</b> I hate it when people call fidgety stuff a \"nervous habit\". I'm bouncing my leg because I'm bored, not because I'm a scared little bitch!"
                case 12:
                    return "<b>" + n1 + ":</b> My neighbours hate me...<br><b>" + n1 + ":</b> Or so I assume, anyway.<br><b>" + n1 + ":</b> I don't talk to them, they're people."
                case 13: 
                    return "<b>" + n1 + ":</b> They call me 7 Knives... because that's knives it takes me to cook things because I keep putting 'em in the sink without thinking about it."
                case 14:
                    return "<b>" + n1 + ", looking at their reflection in the mirror:</b> I'm so relevant and beautiful."
                case 15:
                    return "<b>" + n1 + ":</b> How much dirt do you have to throw in the ocean to make a new country?"
                
            }
        case 2:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>" + n1 + ", pointing " + p1[3] + " weapon at " + n2 + ":</b> Tell me the name of God you fungal piece of shit!<br><b>" + n2 + ":</b> Do you feel your heart burning? Can you feel the struggle within? The fear within me is beyond anything your soul can make. You cannot kill me in a way that matters.<br><b>" + n1 + ", with tears streaming down " + p1[3] + " face:</b> I'M NOT FUCKING SCARED OF YOU!"
                case 1:
                    return "<b>" + n1 + ":</b> " + n2 + ", you need to react when people cry!<br><b>" + n2 + ":</b> I did. I rolled my eyes."
                case 2:
                    return "<b>" + n1 + ", angrily pointing at " + n2 + ":</b> You're horrible! You're an irredeemable monster!<br><b>" + n2 + ":</b> Woah, woah, what took you so long, <i>idiot!?</i>"
                case 3:
                    return "<b>" + n1 + ":</b> We have come for your sanity!<br><b>" + n2 + ":</b> GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD -"
                case 4:
                    return "<b>" + n1 + ", staggering through the snow:</b> This is it. I'm lost. I'm freezing. I'm going to die out here... <br>*" + n1 + " collapses*<br><b>" + n1 + ":</b> " + n2 + "... I'm sorry...<br><b>" + n2 + ", in the distance:</b> HEY! " + n1.toUpperCase() + "! COME ON, WE'RE GOING HOME NOW!<br><b>" + n1 + ":</b> *instantly gets back up and runs towards " + n2 + "."
                case 5:
                    return "*" + n1 + " and " + n2 + " are texting each other* <br><b>" + n1 + ":</b> Your such a jerk!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> OMG your so annoying!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> Stop doing that. Your making me mad!<br><b>" + n2 + ":</b> You're*<br><b>" + n1 + ":</b> Fine! I'm gonna slap you're face!<br><b>" + n2 + ":</b> Your*"
                case 6:
                    return "*There's an image of Pickle Rick but with Johnny Test's face* <br><b>" + n1 + ":</b> This image has given me the ability to kill!<br><b>" + n2 + ":</b> Heheh, Johnny Testickle.<br><b>" + n1 + ":</b> Guess who's first!"
                case 7:
                    return "<b>" + n1 + ":</b> Why did the chicken cross the road?<br><b>" + n2 + ":</b> Why?<br><b>" + n1 + ":</b> To get to the idiot's house.<br><b>" + n1 + ":</b> Knock knock.<br><b>" + n2 + ":</b> Who's there?<br><b>" + n1 + ":</b> The chicken.<br><b>" + n2 + ":</b> Listen up you motherfucker-"
                case 8:
                    return "<b>" + n1 + ":</b> " + n2 + ", I love you.<br><b>" + n2 + ":</b> <i>Yikes.</i>"
                case 9:
                    return "<b>" + n1 + ":</b> Here you go, " + n2 + ", a nice, hot cup of coffee!<br><b>" + n2 + ":</b> It's cold.<br><b>" + n1 + ":</b> A nice cup of coffee.<br><b>" + n2 + ":</b> It's horrible!<br><b>" + n1 + ":</b> A cup of coffee.<br><b>" + n2 + ":</b> I'm not sure if this even <i>is</i> coffee!<br><b>" + n1 + ":</b> C U P<br><b>" + n2 + ":</b> YOU SERVED THIS IN A FUCKING BOWL!"
                case 10:
                    return "<b>" + n1 + ":</b> How long does your ideal hug last?<br><b>" + n2 + ":</b> 38-45 minutes.<br><b>" + n1 + ":</b> That's really impractical.<br><b>" + n2 + ":</b> You said ideal, not realistic!"
                case 11:
                    return "<b>" + n1 + ":</b> Who's going to tell met that tea tastes different when you put it in hot water?<br><b>" + n2 + ":</b> Y-You were putting it in cold water!?<br><b>" + n1 + ":</b><br><b>" + n2 + ":</b> " + n1 + ", answer the question, " + n1 + "."
                case 12:
                    return "<b>" + n1 + ":</b> Your room is such a mess!<br><b>" + n2 + ":</b> This is my design."
                case 13:
                    return "<b>" + n1 + ":</b> Does the phrase \"fucked up and evil\" imply that you can be fucked up and good?<br><b>" + n2 + ":</b> Yes.<br><b>" + n1 + ":</b> Examples?<br><b>" + n2 + ":</b> Me."
                case 14:
                    return "<b>" + n1 + ":</b> I will cast a spell to make you have a good day!<br>*" + p1[7] + " cast" + p1[14] + " the spell.*<br><b>" + n2 + ":</b> Burn the witch!"
                case 15:
                    return "<b>" + n1 + ":</b> The year is 2030. Cake art is so realistic that literally anything could be cake. The uncertainty has gripped the world in fear. I go to hug " + n2 + " for comfort. " + p2[7] + " " + p2[15] + " cake.<br><b>" + n1 + ":</b> I sob in despair as I eat my cake " + n2 + ". " + p2[7] + " " + p2[15] + " delicious."
                case 16:
                    return "<b>" + n1 + ":</b> I just came up with a really good four word cooking horror story but I don't know if you guys are ready for it.<br><b>" + n1 + ":</b> Two cups vanilla extract.<br><b>" + n2 + ":</b> JESUS CHRIST!!!"
                case 17:
                    return "<b>" + n1 + ":</b> You can control white people by giving them cheese.<br><b>" + n2 + ":</b> Cheese is so good, though!<br><b>" + n1 + ":</b> I got one!"
                case 18:
                    return "<b>" + n1 + ":</b> Excuse me, " + n2 + ", but have you ever been arrested?<br><b>" + n2 + ":</b> Yeah. How could you tell?<br><b>" + n1 + ":</b> I was gonna say it's illegal to be that cute, but now I'm curious.<br><b>" + n2 + ":</b> Aggravated assault."
                case 19:
                    return "<b>" + n1 + ":</b> " + p2[11] + " out there making owl noises.<br><b>" + n2 + ":</b> Who?"
                case 20:
                    return "<b>" + n1 + ":</b> I'm busy now. I just ate glass by accident.<br><b>" + n2 + ":</b> You <i>what!?</i><br><b>" + n1 + ":</b> Please leave me alone, I ate glass!"
                case 21:
                    return "<b>" + n1 + ":</b> If there's a \"heavens no\" and a \"hell yes\", why isn't there a \"purgatory maybe\"?<br><b>" + n2 + ": PURGHAPS.</b>"
                case 22:
                    return "<b>" + n1 + ":</b> What if the 'g' in \"gif\" is silent?<br><b>" + n2 + ":</b> Go the fuck to sleep...<br><b>" + n1 + ":</b> What gif I don't want to?"
                case 23:
                    return "<b>" + n1 + ":</b> I have a headache...<br>*One Google search later...*<br><b>" + n1 + ":</b> Google says I'm gonna die!<br><b>" + n2 + ":</b> Why is Google sending you death threats for having a headache?"
                case 24:
                    return "<b>" + n1 + ":</b> Black and green is radioactive, black and blue is futuristic, black and red is edgy and black and yellow...<br><b>" + n2 + ":</b> According to all known laws of aviation-<br><b>" + n1 + ":</b> I hate you so much..."
                case 25:
                    return "<b>" + n1 + ":</b> Wait, people actually tell their crushes that they like them?<br><b>" + n2 + ":</b> Well, what to <i>you</i> do, " + n1 + "?<br><b>" + n1 + ":</b> I just die. What kind of question is that?"
                case 26:
                    return "<b>" + n1 + ":</b> I'm so fucking pissed! I just realised they're called pancakes because they're cakes you make in a frying pan! Fuck English!<br><b>" + n2 + ":</b> Waterfall.<br><b>" + n1 + ":</b> Oh my fucking God I'm furious!"
                case 27:
                    return "<b>" + n1 + ":</b> Why is everything blue?<br><b>" + n2 + ":</b> Could you perhaps elaborate?<br><b>" + n1 + ":</b> Everything is blue. I see no need for elaboration."
                case 28:
                    return "<b>" + n1 + ":</b> PTSD? You got Pussy Taste Speldiferous Disorder?<br><b>" + n2 + ":</b> I don't even know to respond.<br><b>" + n2 + ":</b><br><b>" + n2 + ":</b> You know what? Yes, I <i>do</i> have Pussy Taste Speldiferous Disorder."
                
            }
        case 3:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>" + n1 + ":</b> Do you know what bees make?<br><b>" + n2 + ":</b> Honey.<br><b>" + n1 + ":</b> Yes dear?<br><br><b>" + n1 + ":</b> Do you know what bees make?<br><b>" + n3 + ":</b> Some stupid and annoying sound. What do you want?<br><b>"
                case 1:
                    return "<b>" + n1 + ":</b> What pronouns should we use for you?<br><b>" + n2 + ":</b> For me? I am but a little flower.<br><b>" + n3 + "</b> For example, Stuart Little is mouse-shaped, but he is human. He would be permitted to partake in the Body of Christ.<br><b>" + n2 + ": Hello?</b>"
                case 2:
                    return "The Squad's opinions on mental illness:<br><b>" + n1 + ":</b> My mental illness is somehow my fault.<br><b>" + n2 + ":</b> Mental illness can happen to anyone because the human body is a fucked up mess.<br><b>" + n3 + ":</b> God had to nerf me because I was too powerful!"
                case 3:
                    return "<b>" + n1 + ":</b> Fuck this! *uncats your girl*<br><b>" + n2 + ":</b> Fuck YOU! *unboys your cat*<br><b>" + n3 + ":</b> That's called neutering."
                case 4:
                    return "<b>" + n1 + ":</b> I lived, bitch.<br><b>" + n2 + ":</b> I loved, bitch.<br><b>" + n3 + ":</b> I laughed, bitch."
                case 5:
                    return "<b>" + n1 + ":</b> If you wake up much earlier than normal, you feel secret emotions.<br><b>" + n2 + ":</b> One time, I woke up at 7am and stared at the sunrise for like an hour. I don't know what those emotions were but they sure were a lot.<br><b>" + n3 + ":</b> If you stay up late enough, you feel the same emotions, but the bad version of them."
            }
        case 4:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>" + n1 + ":</b> *screams* <br><b>" + n2 + ":</b> *screams louder to establish dominance* <br><b>" + n3 + ":</b> Should we do something?<br><b>" + n4 + ":</b> Nah, I wanna see who wins."
                case 1:
                    return "<b>" + n1 + ":</b> Yesterday, " + n2 + " called me cute.<br><b>" + n3 + ":</b> " + p2[7] + " called me pretty. Why don't they use fancy words?<br><br><b>" + n2 + ", texting " + n4 + ":</b> How do you spell gorgoeuos?<br><b>" + n4 + ":</b> I have no fucking idea."
                case 2:
                    return "<b>" + n1 + ":</b> What's the hardest thing for you to say?<br><b>" + n2 + ":</b> I need help.<br><b>" + n3 + ":</b> I was wrong.<br><b>" + n4 + ":</b> Worcestershire sauce."
                case 3:
                    return "<b>" + n1 + ":</b> Why do you want to bite people?<br><b>" + n2 + ":</b> Because they deserve it!<br><b>" + n3 + ":</b> Aim for the jugular!<br><b>" + n4 + ":</b> " + n3.toUpperCase() + "...!"
                case 4:
                    return "<b>" + n1 + ":</b> When will Ted himself... finally show up to the Talk?<br><b>" + n2 + ":</b> The final boss!<br><b>" + n3 + ":</b> You guys know that TED Talks stands for \"Technology, Education and Design Talks\", right?<br><b>" + n4 + ":</b> I will not let Ted hide behind these lies any longer!"
                case 5:
                    return "<b>" + n1 + ":</b> What kind of power move could I make towards my new therapist?<br><b>" + n2 + ":</b> Get a notepad and take notes whenever they take notes!<br><b>" + n3 + ":</b> Eat the paper at the end of the session!<br><b>" + n4 + ":</b> This is why you're all in therapy."
                
            }
        case 5:
            switch(parseInt(choices[1])) {
                case 1:
                    return "<b>" + n1 + ":</b> Let's play Kiss Marry Kill!<br><b>" + n1 + ":</b> First, who would you kill?<br><b>" + n2 + ":</b> *points at " + n5 + ".<br><b>" + n3 + ":</b> *points at " + n5 + ".<br><b>" + n4 + ":</b> *points at " + n5 + ".<br><b>" + n5 + ":</b> *shrugs* I would kill me, too."
                case 2:
                    return "<b>" + n1 + ":</b> Why aren't there friend pick up lines? Pick up lines for making friends, like-<br><b>" + n1 + ", to " + n2 + ":</b> Hey, that's a cool outfit. You know where it would look better? Nowhere else, because you're an awesome individual!<br><b>" + n3 + ", to " + n4 + ":</b> Be my friend or I'll set your entire family on fire!<br><b>" + n5 + ":</b> There are two types of people."
                default:
                    return "<b>" + n1 + ":</b> Are Wii gonna have a problem?<br><b>" + n2 + ":</b> You best Switch up that attitude!<br><b>" + n3 + ":</b> You're playing a dangerous Game, Boy!<br><b>" + n4 + ":</b> Don't Nintendo Sixty-Force me to use this!<br><b>" + n1 + ":</b> I'mma fuck you up!<br>*Some un-NES-essary violence later...*<br><b>" + n5 + ":</b> WII-U WII-U WII-U"
            }
        case 7:
            switch(parseInt(choices[1])){
                default:
                    return "<b>" + n1 + ":</b> *Gets in " + p1[3] + " little clown car.*<br><b>" + n2 + ":</b> Gets in with " + p1[1] + ".*<br><b>" + n3 + ":</b> Gets in with " + p1[1] + ".*<br><b>" + n4 + ":</b> Gets in with " + p1[1] + ".*<br><b>" + n5 + ":</b> Gets in with " + p1[1] + ".*<br><b>" + n6 + ":</b> Gets in with " + p1[1] + ".*<br><b>" + n7 + ":</b> Gets in with " + p1[1] + ".*"
                
            }
        case 9:
            switch(parseInt(choices[1])) {
                default:
                    return "<b>The Squad giving mental health advice:<br>" + n1 + ":</b> Talk about your feelings<br><b>" + n2 + ":</b> Keep active<br><b>" + n3 + ":</b> Eat an potato<br><b>" + n4 + ":</b> Recite a dark spell<br><b>" + n5 + ":</b> Throw your phone in the lake<br><b>" + n6 + ":</b> Kiss a bird gently<br><b>" + n7 + ":</b> Scowl<br><b>" + n8 + ":</b> Make fun of someone you don't like<br><b>" + n9 + ":</b> Lie down in the dirt and let the earth slowly reclaim you."
            }

    }
}