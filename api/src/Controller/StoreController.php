<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:51
 */
namespace Controller;

use view;

class StoreController
{
    private $storeModel;
    private $jsonStoresView;
    private $jsonStoreView;

    /**
     * StoreController constructor.
     */
    public function __construct(StoreModel $storeModel, view $jsonStoresView, view $jsonStoreView)
    {
        $this->storeModel = $storeModel;
        $this->jsonStoresView = $jsonStoresView;
        $this->jsonStoreView = $jsonStoreView;
    }

    public function listStores() {
        $statuscode = 200;
        $stores = [];
        try {
            $stores = $this->storeModel->ListAllStores();
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        $this->jsonStoresView->show(["stores" => $stores, "statuscode => $statuscode"]);
    }

    public function AddStore($store) {
        $statuscode = 200;
        try {
            $this->AddOrUpdateStore($store);
        } catch (\InvalidArgumentException $exception) {
            $statuscode = 400;
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        return $this->JsonStoreView->show(["store" => $store, "statuscode" => $statuscode]);
    }
}