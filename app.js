function change() {
    let veiculoVar = document.getElementById("carro").value
    let kmMesVar = document.getElementById("id_km").value
    let resultadoVeiculo = veiculoVar * kmMesVar
    document.getElementById("resultadoco2MesCarro").innerHTML = resultadoVeiculo
    let resultadoVeiculoANO = resultadoVeiculo * 12
    document.getElementById("resultadoco2ANOCarro").innerHTML = resultadoVeiculoANO

    let energiaMes = document.getElementById("id_energia").value
    let resultadoEnergyMes = energiaMes * 0.000051
    document.getElementById("resultadoEnergiaMes").innerHTML = resultadoEnergyMes
    let resultadoEnergyAno = resultadoEnergyMes * 12
    document.getElementById("resultadoEnergiaAno").innerHTML = resultadoEnergyAno

    let GasMes = document.getElementById("cozinha").value
    let resultadoGasMes = GasMes * 0.04
    document.getElementById("resultadoGasButanoMes").innerHTML = resultadoGasMes
    let resultadoGasANO = resultadoGasMes * 12
    document.getElementById("resultadoGasButanoAno").innerHTML = resultadoGasANO

    let totalMes = resultadoVeiculo + resultadoEnergyMes + resultadoGasMes
    document.getElementById("resultadoTotalMes").innerHTML = totalMes
    let totalAno = totalMes * 12
    document.getElementById("resultadoTotalAno").innerHTML = totalAno
    // pode colocar uma outra variavel que seja a soma das tres 
    //tipo let totalMes =
    // let totalAno=
    //e usa a ideia do monitor, que ele passou ontem no whatsap 
}
document.getElementById('formulario').addEventListener("submit", (e) => {
    e.preventDefault()
    window.location.href = "informacoes.html"
}
);