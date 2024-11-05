function fieldCheck(e){
    e.preventDefault();

    const userName = document.getElementById("userName").value 
    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value
    const message = document.getElementById("message")

    if(userName.length >= 3){
        if(userEmail.includes("@" ) && userEmail.includes(".")){
            if(userPassword.length >= 6){
                window.location.href = "https://www.google.com.ua/?hl=uk";
            }else {
                message.textContent = "Пароль містить не менше 6 символів"
            }
        }else {
            message.textContent = "Email не містить символ @ та крапку після неї"
        }
    }else {
        message.textContent = "Ім'я містить не менше 3 символів"
    }
}