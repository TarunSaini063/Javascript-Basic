showNotes();
console.log("Notes website")
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let titletxt = document.getElementById("titletxt");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let obj = {
        title: titletxt.value,
        text: addTxt.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    titletxt.value = "";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;

    });
    let noteslist = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteslist.innerHTML = html;
    }
    else noteslist.innerHTML = "First Add Notes";
}

function DeleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let searchvalue = searchTxt.value.toLowerCase();
    console.log(searchvalue);
    let noteslist = document.getElementsByClassName("noteCard");
    Array.from(noteslist).forEach(function (element) {
        let notestxt = element.getElementsByTagName("p")[0].innerHTML;
        if (notestxt.toLowerCase().includes(searchvalue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});