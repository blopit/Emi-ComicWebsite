<?php
$servername = "ding4me.com";
$username = "blopit";
$password = "MPoppy123";
$dbname = "ding4me";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM post";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc())
    {
        $json[]= array(
            'title' => $row['title'],
            'subtitle' => $row['subtitle'],
            'content ' => $row['content']
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
} else {
    echo "0 results";
}
$conn->close();
exit;
?>