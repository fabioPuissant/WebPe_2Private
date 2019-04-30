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
}

function handleGetAllStores() {
    storeController.listStores();
}