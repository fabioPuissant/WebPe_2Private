<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:51
 */
namespace Controller;

use Model\PDOStoreModel;

class StoreController
{
    private $storeModel;
    private $jsonStoresView;
    private $jsonStoreView;

    /**
     * StoreController constructor.
     * @param PDOStoreModel $storeModel
     */
    public function __construct(PDOStoreModel $storeModel)
    {

        $this->storeModel = $storeModel;
        $this->jsonStoresView = new JsonStoresView();

        $this->jsonStoreView = new JsonStoresView();
    }

    public function listStores()
    {
        $statuscode = 200;
        $stores = [];
        $problem = "";
        try {
            $stores = $this->storeModel->ListAllStores();
        } catch (\PDOException $exception) {
            $statuscode = 500;
            $problem = $exception;
        }
        $this->jsonStoresView->show(["stores" => $stores, "statuscode => $statuscode", "problem" => $problem]);
    }

    public function AddStore($store)
    {
        $statuscode = 200;
        try {
            $this->AddOrUpdateStore($store);
        } catch (\InvalidArgumentException $exception) {
            $statuscode = 400;
        } catch (\PDOException $exception) {
            $statuscode = 500;
        }
        return $this->jsonStoreView->show(["store" => $store, "statuscode" => $statuscode]);
    }

    public function AddOrUpdateStore($store)
    {
        $this->storeModel->AddOrUpdateStore($store);
    }
}
