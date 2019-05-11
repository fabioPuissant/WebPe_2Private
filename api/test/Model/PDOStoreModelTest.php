<?php
/**
 * Created by PhpStorm.
 * User: 11701379
 * Date: 10/05/2019
 * Time: 18:40
 */

namespace Model;


class PDOStoreModelTest
{
    public function setUp(){
        $user= "student";
        $password= "root";
        $database= "StudentDB";
        $server= "192.168.33.22";
        $this->connection = new \PDO("mysql:host=$server;dbname=$database", $user, $password);
        $this->connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        $this->connection->exec("DROP TABLE IF EXISTS testStoreDb");
        $this->connection->exec("CREATE TABLE testStoreDb(
        id INT,
        name VARCHAR(25),
        phone varchar (25),
        email varchar (35),
        street VARCHAR (35),
        city VARCHAR (35),
        zip VARCHAR (5)
        PRIMARY KEY (id)
)");
        $stores = self::providerStores();
        foreach ($stores as $store ){
            $this->connection->exec("INSERT INTO testStoreDb(id, name, phone, email, street, city, zip) 
             VALUES(" . $store["id"] . ", " . $store["name"] . ", " . $store["phone"] . ", " . $store["email"].
            ", " . $store["street"] . ", " . $store["city"] . ", " . $store["zip"] . ")");
        }
    }

    public function tearDown(){
        $this->connection = null;
    }

    public function providerStores(){
        return array(
            array("id"=> 1, "name"=> "Delhaize", "phone" => "+81458978201", "email"=> "info@delhaize.com",
                "street"=> "Steenweg op Loon", "city"=> "Hoepertingen", "zip" => "3840"),
            array("id"=> 2, "name"=> "Carrefour", "phone" => "++24578954", "email"=> "info@carrefour.com",
                "street"=> "Kerkstraat", "city"=> "Sint-Truiden", "zip" => "3800"),
            array("id"=> 3, "name"=> "Colruyt", "phone" => "+31456825", "email"=> "info@colruyt.com",
                "street"=> "sesame street", "city"=> "LaLa-Land", "zip" => "0000"),
            array("id"=> 4, "name"=> "Bartsmit", "phone" => "+3222222", "email"=> "info@bartsmit.com",
                "street"=> "Botermarkt", "city"=> "Hasselt", "zip" => "1200"),
            array("id"=> 5, "name"=> "ToyChamp", "phone" => "+321111111", "email"=> "info@toychamp.com",
                "street"=> "visserstraat", "city"=> "Brussels", "zip" => "5000"),
        );
    }

    public function test_ListAllStores_storesDataBase_arrayStores(){
        $storeModelPdo = new PDOStoreModel($this->connection);

        $actual = $storeModelPdo->ListAllStores();
        $expected = $this->providerStores();

        $this->assertEquals('array', gettype($actual));
        $this->assertEquals(count($expected), count($actual));
        foreach ($actual as $store){
            $this->assertContains($store, $expected);
        }
    }


}