<html>
<head>
  <title>Sending Email!</title>
  <meta http-equiv="refresh" content="3;url=https://www.suriosity.com/" />
</head>
<body>
<?php
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['telephone'];
    $message = $_POST['comments'];

    if (strlen($firstName . $lastName) < 1) {
      echo "No name provided. Mail will be discarded.";
    } else {
      $finalMessage = "Sender: " . $firstName . " " . $lastName;
      $finalMessage .= "\nEmail: " . $email;
      $finalMessage .= "\nTelephone: " . $phone;
      $finalMessage .= "\nMessage Content: " . $message;

      mail('suriosity@gmail.com', "Contact Message From Website", $finalMessage);
      echo "Thank you for contacting me, I will get back to you shortly!";
    }
?>

<div>You will be redirected back to the home-page in 3 seconds!!</div>

</body>