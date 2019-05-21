<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/30
 * Time: 23:36
 */

class JsonStoreView implements view
{

    public function show(array $data)
    {
        header("Content-Type: application/json");
        http_response_code($data["statuscode"]);
        $store = $data["store"];
        print(json_encode($store));
    }
}
