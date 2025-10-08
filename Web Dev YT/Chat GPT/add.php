// add_product.php
<?php
include 'config.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $item_code = $_POST['item_code'];
    $item_name = $_POST['item_name'];
    $unit_price = $_POST['unit_price'];

    $query = "INSERT INTO products (item_code, item_name, unit_price) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param('ssd', $item_code, $item_name, $unit_price);
    $stmt->execute();

    echo "Product added successfully";
}
?>