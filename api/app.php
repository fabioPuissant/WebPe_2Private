<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 22:10
 */
namespace api;

$storeController = new \Model\StoreController();

$router = new AltoRouter();
$router.setBasePath("/api");

$router->map(
"GET",
    "stores/",
    function () use($storeController) {
        $storeController->listStores();
    }
);
