<?php
/**
 * Created by PhpStorm.
 * User: micha
 * Date: 2019/04/11
 * Time: 20:58
 */
namespace Model;

class PDOStoreModel implements \Model\StoreModel
{

    private $user = "root";
    private $password = "root";
    private $url = "mysql:host=192.168.33.22;dbname=WebPe";
    private $connection;
    /**
     * PDOStoreModel constructor.
     *
     * @param null $pdo
     */
    public function __construct(\PDO $connection)
    {
        $this->connection = $connection;
    }


    public function ListStoreById($id)
    {
        // TODO: Implement ListStoreById() method.
    }

    /**
     * @return array
     * this is the GET-Request
     */
    public function ListAllStores()
    {
        $statement = $this->connection->prepare("SELECT * FROM stores");
        $statement->execute();
        $statement->bindColumn(1, $id, \PDO::PARAM_INT);
        $statement->bindColumn(2, $name, \PDO::PARAM_STR);
        $statement->bindColumn(5, $street, \PDO::PARAM_STR);
        $statement->bindColumn(6, $city, \PDO::PARAM_STR);
        $statement->bindColumn(7, $zip, \PDO::PARAM_STR);

        $stores = [];
        while($statement->fetch(\PDO::FETCH_BOUND)) {
            $stores[] =["id" =>$id, "name" => $name, "street" => $street, "city" => $city, "zip" => $zip];
        }

        return $stores;
    }

    public function AddOrUpdateStore($store)
    {
        $statement = $this->pdo->prepare(
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

    public function UpdateStore()
    {
        // TODO: Implement UpdateStore() method.
    }

    public function DeleteStore()
    {
        // TODO: Implement DeleteStore() method.
    }

    public function AddStore()
    {
        // TODO: Implement AddStore() method.
    }
}
