let images = [
    "Images/paper.png",
    "Images/rock.png",
    "Images/scissors.png"
]

let definition = {
    1: "Paper",
    2: "Rock",
    3: "Scissors"
}

let battle = {
    "Images/paper.png": "Rock",
    "Images/rock.png": "Scissors",
    "Images/scissors.png": "Paper"

}

let translate = {
    "Images/paper.png": "Paper",
    "Images/rock.png": "Rock",
    "Images/scissors.png": "Scissors"
}


function randomizer() {
    return Math.floor(Math.random() * (3));
}


function whoWon(candidate) {
    switch(candidate) {
        case "Images/paper.png":
            return battle[candidate];
        case "Images/rock.png":
            return battle[candidate];
        case "Images/scissors.png":
            return battle[candidate];
    }
}


function restartAnimation(id) {
    let element = document.getElementById(id);
    let parent = element.parentNode;
    parent.removeChild(element);

    let newElement = document.createElement("img");
    newElement.id = id;

    let beforeElement = document.getElementById("decision");
    parent.insertBefore(newElement, beforeElement.nextSibling);
}


function click(id) {
    document.getElementById(id).onclick = function() {
        let rand = randomizer();
        let image = images[rand];
        let computermatch = whoWon(image);
        let text = document.getElementById(id).textContent;

        restartAnimation("image");
        document.getElementById("image").src = image;
        
        if(translate[image] == text) {
            document.getElementById("decision").textContent = "TIE";
        }
        else if(computermatch ==  text) {
            document.getElementById("decision").textContent = "LOST";
            ++document.getElementById("rightCounter").textContent
        }
        else {
            document.getElementById("decision").textContent = "WON";
            ++document.getElementById("leftCounter").textContent
        }
    }
}


click("🪨");
click("📜");
click("✂️");