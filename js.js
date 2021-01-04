let leters = "abcdeusfghogknmljpqyvrtixz";

let letersarray = Array.from(leters);



var letterscontainer = document.querySelector(".letters");


letersarray.forEach(letter => {
    let box = document.createElement("span");
    box.textContent = letter;
    box.className = "letter-box"
    letterscontainer.appendChild(box)
})

let words = {
    counturies: ["egypt", "frence", "uSA", "sweed", "china", "russia", "india"],
    peaple: ["sisi", "trump", "enistaien", "steven hocking", "darwin", "amr diab"],
    movies: ["prestige", "the notebook", "fast and furious", "the vow", "love", "need for speed"],
    series: ["game of throns", "breaking bad", "prison break", "pecky plinders", "black miror"]
}


let allkeys = Object.keys(words);
let randompropnum = Math.floor(Math.random() * allkeys.length);
let randompropname = allkeys[randompropnum];

let radompropvalu = words[randompropname];

let randomevaluenum = Math.floor(Math.random() * radompropvalu.length);
let randomevaluevalue = radompropvalu[randomevaluenum];

document.querySelector(".category span").innerHTML = randompropname;



let letterguesconainer = document.querySelector(".letters-guess");

let lettergues = Array.from(randomevaluevalue);

lettergues.forEach(lett => {
    let span = document.createElement("span");

    if (lett === " ") {
        span.className = "whith-space"
    }
    letterguesconainer.appendChild(span);
})

let therongs = 0;
let thedrow = document.querySelector(".hangman-draw");

let guessspan = document.querySelectorAll(".letters-guess span");

document.addEventListener("click", function(e) {
    let thestates = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");

        var theclickedletter = e.target.innerHTML.toLowerCase();
        var thechosenletter = Array.from(randomevaluevalue.toLowerCase())


        thechosenletter.forEach((word, wordindex) => {
            if (theclickedletter == word) {
                thestates = true;
                guessspan.forEach((span, spanindex) => {
                    if (spanindex == wordindex) {
                        span.innerHTML = theclickedletter.toUpperCase();

                    }
                })

            }
        })
        if (thestates !== true) {
            therongs++;
            thedrow.classList.add(`rong-${therongs}`)
            document.getElementById("fail").play();
            console.log(therongs)

            if (therongs === 9) {
                document.querySelector(".letters").classList.add("finish");

                setTimeout(gameover, 1000)

            }

        } else {
            document.getElementById("success").play();
            console.log(therongs)
        }




    }




})

function gameover() {
    let div = document.createElement("div");
    let button = document.createElement("button");

    div.innerHTML = `            you failed :(                `;

    div.classList.add("over");
    button.textContent = "try again :)"
    button.classList.add("butt");
    div.appendChild(button);
    document.body.appendChild(div);

}

document.addEventListener("click", function(r) {
    if (r.target.className === "butt") {
        window.location = "file:///E:/learning/javascript/JS%20%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%20%D9%83%D8%A8%D9%8A%D8%B1%D9%87/Hangman%20Game/Hangman%20Game.html"
    }
})