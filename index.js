let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelotity = Number(prompt("Informe a velocidade maxima da nave (km/s)"))
}

function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelotity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA" + 
              "\nVelociadd da Nave: " + spaceship.velocity + "km/s" +
              "Velociade máxima da Nave: " + spaceship.maxVelotity + "km/s")
    }
}

function stop(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocaidade da Nave: " 
    + spaceship.velocity +" km/s" + "\nMáxima da Nave: " + spaceship.maxVelotity + " km/s")
    spaceship.velocity = 0
}

function showMenu(){
    let choseOption
    do {
        choseOption = prompt("Você deseja: \n1 - Acelerar\n 2 - Parar")
        switch(choseOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida!")
        }
    } while(choseOption != "2") 
}

registerSpaceship()
showMenu()


