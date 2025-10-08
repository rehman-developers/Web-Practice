// fetch_product_details.php
<?php
include 'config.php'; // Include database connection

$item_code = $_GET['item_code'];

$query = "SELECT * FROM products WHERE item_code = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('s', $item_code);
$stmt->execute();
$result = $stmt->get_result();

$product = $result->fetch_assoc();
echo json_encode($product);
?>