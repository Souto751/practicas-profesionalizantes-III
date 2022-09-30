<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id = $_GET["id"];

        $statement = $con->prepare("CALL deleteSOng(?)");
        $statement->bind_param("i", $id);
        $statement->execute();

        if($con->affected_rows == 1){
            echo json_encode(array("status" => "ok", "message" => "Song deleted!"));
            
        }else{
            echo json_encode(array("status" => "error", "message" => "No data."));
        }

        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array("status" => "error", "message" => $e->getMessage()));
    }
    
?>