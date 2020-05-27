<?php

    $name = $_POST['userName'];
    $phone = $_POST['userPhone'];
    $email = $_POST['userEmail'];

    // подключаем файлы с библиотеки
    required 'phpmailer/'