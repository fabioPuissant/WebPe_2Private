<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:58
 */

namespace Model;

use PDO;

class PDOStoreModel implements \model\StoreModel
{

    private $user = "student";
    private $password = "root";
    private $url = "mysql:host=192.168.33.22;dbname=WebPe";
    private $connection;

    /**
     * PDOStoreModel constructor.
     *
     */
    public function __construct()
    {
        try {

            $this->connection = new PDO($this->url, $this->user, $this->password);

            $this->connection->setAttribute(
                \PDO::ATTR_ERRMODE,
                \PDO::ERRMODE_EXCEPTION
            );
        } catch (\Exception $e) {
           http_response_code(500);
            exit();
        }
    }

    public function ListStoreById($id)
    {
        $statement = $this->connection->prepare("SELECT * FROM stores WHERE id=" + $id);
        $statement->execute();
        $statement->bindColumn(1, $id, \PDO::PARAM_INT);
        $statement->bindColumn(2, $name, \PDO::PARAM_STR);
        $statement->bindColumn(3, $street, \PDO::PARAM_STR);
        $statement->bindColumn(4, $city, \PDO::PARAM_STR);
        $statement->bindColumn(5, $zip, \PDO::PARAM_STR);

        $stores = [];
        while ($statement->fetch(\PDO::FETCH_BOUND)) {
            $stores[] = ["id" => $id, "name" => $name, "street" => $street, "city" => $city, "zip" => $zip];
        }

        return $stores;
    }

    /**
     * @return array
     * this is the GET-Request
     */
    public function ListAllStores()
    {
        echo "ok3";
        $statement = $this->connection->prepare("SELECT * FROM stores");
        $statement->setFetchMode(PDO::FETCH_ASSOC);
        $statement->execute();
        $statement->bindColumn(1, $id, \PDO::PARAM_INT);
        $statement->bindColumn(2, $name, \PDO::PARAM_STR);
        $statement->bindColumn(3, $street, \PDO::PARAM_STR);
        $statement->bindColumn(4, $city, \PDO::PARAM_STR);
        $statement->bindColumn(5, $zip, \PDO::PARAM_STR);

        $stores = [];
        while ($statement->fetch(\PDO::FETCH_BOUND)) {

            $stores[] = ["id" => $id, "name" => $name, "street" => $street, "city" => $city, "zip" => $zip];
        }

        return $stores;
    }

    public function AddOrUpdateStore($store)
    {
        $statement = $this->connection->prepare(
            "INSERT INTO stores(name,street,city,zip) 
        VALUES(:name,:street,:city,:zip) ON DUPLICATE 
        KEY UPDATE id=:id, name=:name, street=:street, city=:city, zip=:zip"
        );
        $statement->bindParam(":name", $store->name, \PDO::PARAM_STR);
        $statement->bindParam(":street", $store->street, \PDO::PARAM_STR);
        $statement->bindParam(":city", $store->city, \PDO::PARAM_STR);
        $statement->bindParam(":zip", $store->zip, \PDO::PARAM_STR);
        $statement->execute();
    }
}
