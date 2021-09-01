<?php 

$phone = $_POST['phone'];
$email = $_POST['email'];
$name = $_POST['name'];
$date = $_POST['date'];
$people = $_POST['people'];
$time = $_POST['time'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'churakov018@mail.ru';                 // Наш логин
$mail->Password = 'mTkX0RHGY8fyjAx9ZbXJ';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('churakov018@mail.ru', 'Portfolio');   // От кого письмо 
$mail->addAddress('chasovoyi018@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . '<br>
	Номер телефона: ' . $phone . ' <br>
    Date: ' . $date . '<br>
    Persons: ' . $people . '<br>
    Time: ' . $time . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>