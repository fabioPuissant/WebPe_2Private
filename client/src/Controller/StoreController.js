"use strict";

export default class StoreController {
    constructor(storeModel,storesView, errorView)
    {
        this.storeModel = storeModel;
        this.storesView = storesView;
        this.errorView = errorView;
    }

    listStores()
    {
        let promise = this.storeModel.listStores()
            .then(
                (stores) => {
                this.storesView.show({stores: stores});
                }
            )
            .catch(
                error => {
                this.errorView.show({error: error.message()});
                }
            )
    }

    addStoreByName(id, name) {
        let promise = this.storeModel.add(id, name);
        promise.then( (person) => {
            this.personView.show({person: person});
        }).catch(error => {
            this.errorView.show({error: error.message});
        });
    }
}