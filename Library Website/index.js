class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Row {
  clear() {
    let addbookForm = document.getElementById("addbookForm");
    addbookForm.reset();
  }
  addBook(Book) {
    let bookRow = document.getElementById("bookRow");
    let html = `<tr>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}</td>
                    </tr>`;
    bookRow.innerHTML += html;
  }
  validate(book) {
    if (book.name === "" || book.author === "") return false;
    return true;
  }
  showstatus(err, message) {
    let status = document.getElementById("status");
    let html = `<div class="alert alert-${err} alert-dismissible fade show" role="alert">
                <strong>Status!</strong>${message}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
    status.innerHTML = html;
    setTimeout(() => {
      status.innerHTML = "";
    }, 3000);
  }
}
let addbookForm = document.getElementById("addbookForm");
addbookForm.addEventListener("submit", createBookObject);

function createBookObject(e) {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type = "unknown";
  let maths = document.getElementById("Mathematics");
  let cs = document.getElementById("cs");
  let History = document.getElementById("History");
  if (History.checked) {
    type = History.value;
  } else if (maths.checked) {
    type = maths.value;
  } else if (cs.checked) {
    type = cs.value;
  }
  let book = new Book(bookName, author, type);
  console.log(book);
  let row = new Row();
  if (row.validate(book)) {
    row.addBook(book);
    row.clear();
    row.showstatus("success", " Successfully added new Book...!");
  } else {
    row.showstatus("error", " Something went wrong...!");
  }
}
