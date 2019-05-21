"use strict";

import StoreController from './Controller/StoreController.js';
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

    let btnGETStores = document.getElementById("button_get_all_stores");
    btnGETStores.addEventListener("click", handleGetAllStores);
	
	let buttonGetStoreGET = document.getElementById('button_get_store');
    buttonGetStoreGET.addEventListener("click", handleGetStore);

    let buttonPostStore = document.getElementById('btn_post');
    buttonPostStore.addEventListener("click", handlePostStore);

    let buttonPutStore = document.getElementById("btn_save");
    buttonPutStore.addEventListener("click", handlePutStore);
}

function handleGetAllStores() {
    storeController.listStores();
}

function handleGetStore() {
    let id = document.getElementById("idGetInput").value;
    emptyTable();
    storeController.listStore(id);
}


function handlePutStore() {
    let url = 'http://localhost:3000/persons/';
    let id = document.getElementById("inputIdPUT").value;
    let newName = document.getElementById("inputNamePUT").value;

    let newPhone = document.getElementById("inputPhonePUT").value;
    let newCity = document.getElementById("inputCityPUT").value;
    let newZip = document.getElementById("inputZipPUT").value;
    storeController.saveStore(id, newName, newPhone, newCity, newZip);


}

function handlePostStore() {
    let name = document.getElementById("inputNamePOST").value;
    let phone = document.getElementById("inputPhonePOST").value;
    let city = document.getElementById("inputCityPOST").value;
    let zip = document.getElementById("inputZipPOST").value;

    storeController.addStore(name, phone, city, zip);
}

function emptyTable() {
    document.getElementById("storeTableBody").innerHTML ="";
}
