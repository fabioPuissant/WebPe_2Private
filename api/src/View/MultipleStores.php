<?php
/**
 * Created by PhpStorm.
 * User: 11701379
 * Date: 22/05/2019
 * Time: 22:16
 */

namespace View;


class MultipleStores
{
    public function show(array $data)
    {
        header("Content-Type: application/json");
        http_response_code($data["statuscode"]);
        $stores = $data["stores"];
        print(json_encode($stores));
    }
}