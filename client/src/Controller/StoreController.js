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
        let promise = this.storesModel.listStores()
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
}