<?php

$name = $_POST['InputName'];
$email = $_POST['InputEmail'];
$details = $_POST['InputDetails'];

$to = 'shersch2@gmail.com';
$email_subject = 'Form response from Xinleichu.info';
$email_body = "
    You have received a new message from your website contact form.\r\n
    Here are the details:\r\n 
    Name: $name\r\n 
    Email: $email\r\n 
    Details: $details
";
$headers = "From: noreply@xinleichu.info\n";

mail($to, $email_subject, $email_body, $headers);
header('location: index.html');
return true;
?>