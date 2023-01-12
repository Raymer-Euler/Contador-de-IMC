function calcula() {
    var txnom = window.document.getElementById("txtnom")
    var nom = String(txnom.value)
    var txalt = window.document.getElementById("txtalt")
    var alt = Number(txalt.value)/100
    var txpes = window.document.getElementById("txtpes")
    var pes = Number(txpes.value)
    var imc1 = pes/(alt**2)
    var imc = imc1.toFixed(2) //converter para duas casas decimais.
    var res = window.document.getElementById("res")
    if(pes==0 || alt==0){
        window.alert  ("❌[ERRO] preencha todos os campos vazios")
    }else if(imc<17){
        res.innerHTML = `${nom}, seu IMC é ${imc} Muito abaixo do peso! isso pode te levar a Insuficiência cardíaca é anemia, procure um médico. `
    } else if(imc<18.5){
        res.innerHTML = `${nom}, seu IMC é ${imc}Abaixo do peso! pode elevar problemas de saúde ligados a desnutrição.`
    }else if(imc<24.9){
        res.innerHTML = `${nom}, seu IMC é ${imc} peso normal! Saudável.`
    }else if(imc<29.9){
        res.innerHTML = `${nom}, seu IMC é ${imc} acima do peso pode elevar fadiga varizes é má circulação do sangue.`
    }else if(imc<34.9){
        res.innerHTML = `${nom}, seu IMC é ${imc} Obesidade I! procure um médico isso pode levar elevar diabétes, infarto, angina é aterosclerose.`
    }else if(imc<39.9){
        res.innerHTML = `${nom}, seu IMC é ${imc} Obesidade II (Severa)! procure um médico, pode elevar falta de ar é apneia do sono.`
    }else {
        res.innerHTML = `${nom}, seu IMC é ${imc} Obesidade II (Mórbida) Procure um médico, pode trazer centenas de problemas como: Infarto, refluxo, avc, dificuldade para locomoção.`
    }
}