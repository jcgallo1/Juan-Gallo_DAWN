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
        document.getElementById("contendor-g").style.visibility='visible';
        console.log(document.getElementById("contendor-g").style.visibility)
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
                            document.getElementById("texto-div").innerHTML=`Type:  ${data[clave].partype}`;
                            document.getElementById("apodo-campeon").innerHTML=data[clave].title;
                            document.getElementById("tags-campeon").innerHTML="Tags: ";
                            for(let i=0 ; i< data[clave].tags.length ; i++){
                                document.getElementById("tags-campeon").innerHTML+=data[clave].tags[i] +" ";
                                }
                            
                        
                            document.getElementById("th1").innerHTML=`
                            <th scope="row">Damage</th>
                            <td style="--size: calc( ${data[clave].stats.attackdamage} / 100 )"> ${data[clave].stats.attackdamage} </td>`
                            document.getElementById("th2").innerHTML=`
                            <th scope="row">Armor</th>
                            <td style="--size: calc( ${data[clave].stats.armor} / 100 )"> ${data[clave].stats.armor} </td>`
                            document.getElementById("th3").innerHTML=`
                            <th scope="row">move</th>
                            <td style="--size: calc( ${data[clave].stats.movespeed} / 1000 )"> ${data[clave].stats.movespeed} </td>`
                            document.getElementById("th4").innerHTML=`
                            <th scope="row">Hp</th>
                            <td style="--size: calc( ${data[clave].stats.hp} / 1000 )"> ${data[clave].stats.hp} </td>`
                            document.getElementById("th5").innerHTML=`
                            <th scope="row">Mp</th>
                            <td style="--size: calc( ${data[clave].stats.mp  } / 1000 )"> ${data[clave].stats.mp} </td>`  
                            
                            document.getElementById("th10").innerHTML=`
                            <th scope="row">attack</th> <td style="--size:${data[clave].info.attack/10};"></td>`
                            document.getElementById("th20").innerHTML=`
                            <th scope="row">defense</th> <td style="--size:${data[clave].info.defense/10};"></td>`
                            document.getElementById("th30").innerHTML=`
                            <th scope="row">difficulty</th> <td style="--size:${data[clave].info.difficulty/10};"></td>`
                            document.getElementById("th40").innerHTML=`
                            <th scope="row">magic</th> <td style="--size:${data[clave].info.magic/10};"></td>`
                            //Carrosuel de imagenes
                            document.getElementById("imagen-c1").src=`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_0.jpg`
                            document.getElementById("imagen-c2").src=`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_1.jpg`
                            document.getElementById("imagen-c3").src=`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_3.jpg`
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
                                    document.getElementById("texto-div").innerHTML=`Type:  ${data[clave].partype}`;
                                    document.getElementById("apodo-campeon").innerHTML=data[clave].title
                                    document.getElementById("tags-campeon").innerHTML="Tags: ";
                                    for(let i=0 ; i< data[clave].tags.length ; i++){
                                        document.getElementById("tags-campeon").innerHTML+=data[clave].tags[i] +" ";
                                    }

                                    document.getElementById("th1").innerHTML = `
                                    <th scope="row">Damage</th>
                                      <td style="--size: calc( ${data[clave].stats.attackdamage} / 100 )"> ${data[clave].stats.attackdamage} </td>`
                                    document.getElementById("th2").innerHTML = `
                                    <th scope="row">Armor</th>
                                        <td style="--size: calc( ${data[clave].stats.armor} / 100 )"> ${data[clave].stats.armor} </td>`
                                    document.getElementById("th3").innerHTML = `
                                    <th scope="row">move</th>
                                        <td style="--size: calc( ${data[clave].stats.movespeed} / 1000 )"> ${data[clave].stats.movespeed} </td>`
                                    document.getElementById("th4").innerHTML = `
                                    <th scope="row">Hp</th>
                                        <td style="--size: calc( ${data[clave].stats.hp} / 1000 )"> ${data[clave].stats.hp} </td>`
                                    document.getElementById("th5").innerHTML = `
                                        <th scope="row">Mp</th>
                                     <td style="--size: calc( ${data[clave].stats.mp} / 1000 )"> ${data[clave].stats.mp} </td>`

                                    document.getElementById("th10").innerHTML = `
                                        <th scope="row">attack</th> <td style="--size:${data[clave].info.attack / 10};"></td>`
                                    document.getElementById("th20").innerHTML = `
                                        <th scope="row">defense</th> <td style="--size:${data[clave].info.defense / 10};"></td>`
                                    document.getElementById("th30").innerHTML = `
                                        <th scope="row">difficulty</th> <td style="--size:${data[clave].info.difficulty / 10};"></td>`
                                    document.getElementById("th40").innerHTML = `
                                        <th scope="row">magic</th> <td style="--size:${data[clave].info.magic / 10};"></td>`
                                    //Carrosuel de imagenes
                                    document.getElementById("imagen-c1").src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_0.jpg`
                                    document.getElementById("imagen-c2").src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_1.jpg`
                                    document.getElementById("imagen-c3").src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${clave}_3.jpg`
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