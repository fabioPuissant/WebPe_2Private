"use strict";

import StoreController from './Controller/StoreController';
import StoreModel from './Model/StoreModel';
import StoresView from './View/StoresView';
import ErrorView from './View/ErrorView';

let url = 'http://192.168.33.22/api/stores/';

let storesView;
let errorView;
let storeModel;
let storeController;

window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
    storesView = new storesView();
    errorView = new errorView();
    storeModel = new StoreModel(url);
    storeController = new StoreController(storeModel, storesView);

    let btnGETStores = document.getElementById("btngetstores");
    btnGETStores.addEventListener("click", handleGetAllStores);
	
	//<WESLEY
	let buttonGetAllPersons = document.getElementById('button_get_all_persons');
    buttonGetAllPersons.addEventListener("click", handleGetAllPersons);
    let buttonGetPersons = document.getElementById('button_get_person');
    buttonGetPersons.addEventListener("click", handleGetPerson);
    let buttonGetPersons2 = document.getElementById('button_get_person1');
    buttonGetPersons2.addEventListener("click", handleGetPersonPut);
    let buttonPutPerson = document.getElementById("btn_save");
    buttonPutPerson.addEventListener("click", handlePutPerson);
    let buttonPostPerson = document.getElementById("btn_post");
    buttonPostPerson.addEventListener("click", handlePostPerson);
	//WESLEY>
}

function handleGetAllStores() {
    storeController.listStores();
}
//<WESLEY	de fetch urls kloppen niet. Ik heb dit met een json file gedaan om te testen!!!
function handleGetAllPersons() {
    let url = 'http://localhost:3000/persons/';
    let output = document.getElementById("div_output"); //DIT WEGLATEN?????
    //makeElementEmpty(output);

    let table = document.getElementById("storeTableBody");
    emptyTable();
    fetch(url)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((persons) => {

            for (let person of persons) {

                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);

                cell1.innerHTML = person.id;
                cell2.innerHTML = person.name;
                cell3.innerHTML = "NEW ";
                cell4.innerHTML = "blalbalablabl";
                cell5.innerHTML = "NEW CELL1";
                cell6.innerHTML = "NEW CELL1";
                cell7.innerHTML = "NEW CELL1";
            }
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
}

function handleGetPerson() {
    let url = 'http://localhost:3000/persons/';
    let name = document.getElementById("nameInput").value;
    let output = document.getElementById("div_output");
    let table = document.getElementById("storeTableBody");
    emptyTable();
    fetch(`${url}?name=${name}`)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((persons) => {

            for (let person of persons) {

                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);

                cell1.innerHTML = person.id;
                cell2.innerHTML = person.name;
                cell3.innerHTML = " ";
                cell4.innerHTML = " ";
                cell5.innerHTML = " ";
                cell6.innerHTML = " ";
                cell7.innerHTML = " ";
            }
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
}
let putId ="";          //PUT HEB IK VOORLOPIG MET ID GEDAAN OMDAT MET DE NAAM WERKEN ERRORS GAF!
function handleGetPersonPut() {
    let url = 'http://localhost:3000/persons/';
    let name = document.getElementById("nameInputPut").value;
    let table = document.getElementById("storeTableBody");
    emptyTable();
    fetch(`${url}?name=${name}`)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((persons) => {

            for (let person of persons) {

                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);
                putId = person.id;
                cell1.innerHTML = person.id;
                cell2.innerHTML = person.name;
                cell3.innerHTML = " ";
                cell4.innerHTML = " ";
                cell5.innerHTML = " ";
                cell6.innerHTML = " ";
                cell7.innerHTML = " ";

                document.getElementById("inputNameEdit").value = person.name;
                document.getElementById("inputPhoneEdit").value = person.id;
                document.getElementById("inputEmailEdit").value = "Test";
                document.getElementById("inputStreetEdit").value = "Test";
                document.getElementById("inputCityEdit").value = "Test";
                document.getElementById("inputZipEdit").value = "Test";

            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function handlePutPerson() {
    let url = 'http://localhost:3000/persons/';
    let oldName = document.getElementById("nameInputPut").value;
    let newName = document.getElementById("inputNameEdit").value;

    let person = {name: newName};

    fetch(url + putId,          //DIT NOG AANPASSEN VOOR DE DATABASE
        {
            method: "PUT",
            body: JSON.stringify(person),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((person) => {
            let data = [];
            data.push([person.id, person.name]);
        })
        .catch((error) => {
            console.log(error);
        });

}

function handlePostPerson() {
    let url = 'http://localhost:3000/persons/';
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let street = document.getElementById("inputStreet").value;
    let city = document.getElementById("inputCity").value;
    let zip = document.getElementById("inputZip").value;

    let person = {name: name};  //DIT NOG AANPASSEN VOOR DE DATABASE
    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((person) => {
            let data = [];
            data.push([person.id, person.name]);
            let table = makeTable(data);
        })
        .catch((error) => {
            console.log(error);
        });

}


function emptyTable() {
    document.getElementById("storeTableBody").innerHTML ="";
}
//WESLEY>