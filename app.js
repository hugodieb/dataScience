let id, name, age,
    profession, active = [],
    mainO = {};


function init() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(JSON.parse(this.responseText));
        console.log(myObj)
        document.getElementyById("app").innerHTML = `
        ${obj.map(data => {
            return `
            <div class="alert alert-primary" role="alert">
                ${data.NOME}
            </div>
            `
        })}
        `
      }
    };
    xmlhttp.open("GET", "teste.json", true);
    xmlhttp.send();
}

function display(obj) {

}


window.onload = init;
