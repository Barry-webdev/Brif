function validateForm(){
    const inputEmail = document.getElementById("email")
    const inputError = document.getElementById("email-error")
    if(inputEmail.value === ""){
        inputError.textContent = "Veuillez remplir tous les champs"
        inputError.style.textAlign = "center"
        inputError.style.color = "red"
        //inputError.style.fontSize = 20px
    }
    else if(inputEmail.value.length < 6 ){
        inputError.textContent = "Le nombre de carractère doit être superieure à 6"
        inputError.style.textAlign = "center"
        inputError.style.color = "red"
        //inputError.style.fontSize = 20px
    }
    else{
        inputEmail.value = ""
        alert("Votre message a été envoyer avec succès")
    }


    const inputMessage = document.getElementById("message")
    const inputerror = document.getElementById("message-error")
    if(inputMessage.value === ""){
        inputerror.textContent = "Veuillez remplir tous les champs"
        inputerror.style.textAlign = "center"
        inputerror.style.color = "rgb"
        //inputError.style.fontSize = 20px
    }
    else if(inputMessage.value.length < 100 ){
        inputerror.textContent = "Le nombre de carractère doit être superieure à 6"
        inputerror.style.textAlign = "center"
        inputerror.style.color = "red"
        //inputError.style.fontSize = 20px
    }
    else{
        inputMessage.value = ""
        alert("Votre message a été envoyer avec succès")
    }


    return false

}
