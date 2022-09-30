<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $title = $_GET["title"];
        $artist = $_GET["artist"];
        $album = $_GET["album"];

        if($title == null) {$title = " ";}
        if($artist == null) {$artist = " ";}
        if($album == null) {$album = " ";}

        $statement = $con->prepare("CALL getSong(?,?,?)");
        $statement->bind_param("sss", $title, $artist, $album);
        $statement->execute();

        $result = $statement->get_result();

        $array = array();

        if($con->affected_rows > 0){
            while($data = $result->fetch_assoc()){
                array_push($array, $data);
            }
            echo json_encode(array("status" => "ok", "data" => $array));
            
        }else{
            echo json_encode(array("status" => "ok", "message" => "No data.", "data" => array()));
        }
        
        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array("status" => "error", "message" => $e->getMessage()));
    }

?>