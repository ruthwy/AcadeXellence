<?php
include("db.php");
header('Access-Control-Allow-Origin: https://axs2459.uta.cloud');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
$id=$_REQUEST['q'];
$sql="select * from signup where id='$id'";
$trp = mysqli_query($conn,$sql);
$rows = array();
while($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}
//echo "<script>window.location.href='https://axs2459.uta.cloud/editForm/'</script>"; 
print json_encode($rows);

?>