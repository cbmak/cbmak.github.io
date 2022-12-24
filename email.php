<?php
if(isset($_POST['submit']) && !empty($_POST['submit'])):
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])):
        //your site secret key
        $secret = '6LegE5QUAAAAANNrfK1U2uPJSu-qdccjvGU9YM7t';
        //get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
        $responseData = json_decode($verifyResponse);
        if($responseData->success):
		$subject = $_REQUEST['subject']; // Subject of your email
		$to = 'rumenlishkoff@gmail.com';  //Recipient's E-mail
		$headers  = 'MIME-Version: 1.0';
		$headers .= "From: " . $_REQUEST['email']; // Sender's E-mail
		$headers .= 'Content-type: text/html; charset=iso-8859-1';
		$message .= 'Name: ' . $_REQUEST['name'];
		$message .= $_REQUEST['message'];
	
			// Transfer the value 'sent' to ajax function for showing success message.
			echo 'sent';
		

?>
