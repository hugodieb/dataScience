let id, name, age,
    profession, active = [],
    mainO = {};

let appContainer = document.getElementById("app");
let apptable = document.getElementById("tb");

function init() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(JSON.parse(this.responseText));
        display(myObj);
      }
    };
    xmlhttp.open("GET", "teste.json", true);
    xmlhttp.send();
}

function display(data) {
    let htmlString = "";
    let names = []
    data.forEach(resp => {
        return names.push(resp.NOME)
    })
    console.log(names.length);
    for (var i = 0; i < names.length; i++) {
        // htmlString+= "<div class='alert alert-success' role='alert'>" + names[i] + "</div>"
        htmlString+= "<tr> <th scope='row'>" + i + "</th> <td>" + names[i] + "</td> </tr>"
        console.log(htmlString);
    }
    apptable.insertAdjacentHTML('beforeend', htmlString);

}


window.onload = init;
