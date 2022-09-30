<?php

    require_once("../utils/connection.php");

    try{
        $mysql = new connection();
        $con = $mysql->get_connection();

        $title = $_GET["title"];
        $artist = $_GET["artist"];
        $album = $_GET["album"];

        if($title == null || $artist == null || $album == null){
            echo json_encode(array("status" => "error", "message" => "Incomplete data."));
        }else{
            $statement = $con->prepare("CALL createSong(?,?,?)");
            $statement->bind_param("sss", $title, $artist, $album);
            $statement->execute();

            if($con->affected_rows > 0){
                echo json_encode(array("status" => "ok", "message" => "Song created!"));
                
            }
        }

        $statement->close();
        $con->close();

    }catch(Exception $e){
        echo json_encode(array("status" => "error", "message" => $e->getMessage()));
    }finally{
        
    }
    
?>