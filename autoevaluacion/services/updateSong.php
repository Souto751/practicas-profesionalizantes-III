<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $id = $_GET["id"];
        $title = $_GET["title"];
        $artist = $_GET["artist"];
        $album = $_GET["album"];

        if($title == null || $id == null || $artist == null || $album == null){
            echo json_encode(array("status" => "error", "message" => "Incomplete data."));
        }else{
            $statement = $con->prepare("CALL updateSong(?,?,?,?)");
            $statement->bind_param("isss", $id, $title, $artist, $album);
            $statement->execute();

            if($con->affected_rows == 1){
                echo json_encode(array("status" => "ok", "message" => "Song updated!"));
                
            }else{
                echo json_encode(array("status" => "ok", "message" => "No data."));
            }
        }

        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array("status" => "error", "message" => $e->getMessage()));
    }
    
?>