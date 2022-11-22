window.onload = function () {


    let image = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/-champion-_0.jpg`
    let iamge2 = `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/Aatrox.png`
    let filtrar = "All";

    document.getElementById("op-1").addEventListener('click', () => {
        filtrar = 'Fighter';
        document.getElementById("random-c").innerHTML = "Fighter";
    })
    document.getElementById("op-2").addEventListener('click', () => {
        filtrar = 'Tank';
        document.getElementById("random-c").innerHTML = "Tank";
    })
    document.getElementById("op-3").addEventListener('click', () => {
        filtrar = 'Assassin';
        document.getElementById("random-c").innerHTML = "Assassin";
    })
    document.getElementById("op-4").addEventListener('click', () => {
        filtrar = 'Support';
        document.getElementById("random-c").innerHTML = "Support";
    })
    document.getElementById("op-5").addEventListener('click', () => {
        filtrar = 'Mage';
        document.getElementById("random-c").innerHTML = "Mage";
    })
    document.getElementById("op-6").addEventListener('click', () => {
        filtrar = 'Marksman';
        document.getElementById("random-c").innerHTML = "Marksman";
    })
    document.getElementById("op-0").addEventListener('click', () => {
        filtrar = 'All';
        document.getElementById("random-c").innerHTML = "Rol";
    })

    document.getElementById("boton-buscar").addEventListener('click', () => {
        let url = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json`
        fetch(url)
            .then(response => response.json())
            .then(obj => {
                let data = obj['data']
                let clave;
                let campeon = 1;

                if (filtrar == 'All') {
                    for (clave in data) {
                        campeon++
                    }
                } else {
                    for (clave in data) {
                        for (let i = 0; i < data[clave].tags.length; i++) {
                            if (`${filtrar}` == data[clave].tags[i]) {
                                campeon++;
                            }
                        }
                    }
                }

                var x = Math.ceil(Math.random() * campeon);
                let camepeonget = 1;
                if (filtrar == 'All') {
                    for (clave in data) {
                        if(x==camepeonget){
                            //procesamiento de datos
                            console.log(clave)
                            console.log(data[clave])
                            document.getElementById("titulo-campeon").innerHTML=clave;
                            document.getElementById("imagen-campeon").src=`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${clave}.png`
                            document.getElementById("historia-campeon").innerHTML=data[clave].blurb;
                        }
                        camepeonget++
                    }
                } else {
                    for (clave in data) {
                        for (let i = 0; i < data[clave].tags.length; i++) {
                            if (`${filtrar}` == data[clave].tags[i]) {
                                
                                if(x==camepeonget){
                                    console.log(clave)
                                    //procesamiento de datos:
                                    document.getElementById("imagen-campeon").src=`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${clave}.png`
                                    document.getElementById("titulo-campeon").innerHTML=clave;
                                    document.getElementById("historia-campeon").innerHTML=data[clave].blurb;


                                }
                                camepeonget++;
                            }
                        }
                    }
                }
            })
            .catch(error => {
                console.log("error");
            })

    })



}