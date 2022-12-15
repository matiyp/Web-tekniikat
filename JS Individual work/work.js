//Lisätään divin alle uusi elementti, jossa h3 otsikkona .getFullYear + "(" + name + ")"
//lisätään samaan elementtiin tekstinä Note:ssa oleva teksti
//lisätään yllämainitut nappia painamalla
//jos "important" checkbox = true, lisätään class elementti .important, jolloin elementti saa punaiset reunukset

document.getElementById("submit").addEventListener("click", addNote);

/**
 * 
 * @param {Event} Event 
 */
function addNote(Event){
    let textNote = document.getElementById("note").value;

    let author = document.getElementById("name").value;

    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let formattedToday = dd + '/' + mm + '/' + yyyy;

    let createDiv = document.createElement("div");
    let printName = createDiv.appendChild(document.createElement("h3"));
    printName.appendChild(document.createTextNode(formattedToday + " ("+author+")"));
    createDiv.appendChild(document.createTextNode(textNote));
    document.getElementById("main").appendChild(createDiv);

    let checkBox = document.getElementById("addTag")

    if(checkBox.checked == true){
        createDiv.classList.add("important")
    }else{
        createDiv.classList.remove("important")
    }
}
