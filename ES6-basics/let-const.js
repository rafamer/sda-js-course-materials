const a = 1;
a = 2; // error


function varTest() {
  var x = 1;

  // nowy block
  if (true) {
    var x = 2;  // ta sama zmienna
    console.log(x);  // 2
  }

  console.log(x);  // 2
}

function letTest() {
  let x = 1;

  // nowy block
  if (true) {
    let x = 2;  // inna zmienna
    console.log(x);  // 2
  }

  console.log(x);  // 1
}

var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
  let item = document.createElement("li");
  item.appendChild(document.createTextNode("Item " + i));

  item.addEventListener('click', function () {
    console.log("Item " + i + " is clicked.");
  });

  list.appendChild(item);
}