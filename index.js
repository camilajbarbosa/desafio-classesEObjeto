class heroe{
	constructor(nomeHeroe, idadeHeroe, tipoHeroe){
    	this.nomeHeroe = nomeHeroe
        this.idadeHeroe = idadeHeroe
        this.tipoHeroe = tipoHeroe
    }
    
    attackHeroe(tipoHeroe){
    	if(tipoHeroe === "mago"){
        return "magia"
		}else if(tipoHeroe === "guerreiro"){
        return "espada"
        }else if(tipoHeroe === "monge"){
        return "artes maciais"
        }else{
        return "shuriken"
        }
    }
      
    attack(){
    	let ataque = this.attackHeroe(this.tipoHeroe);
    	console.log(`O ${this.tipoHeroe} atacou usando ${ataque}`) 
    }
}

let primeiraLuta = new heroe("Chamex", 25, "mago")

primeiraLuta.attack()