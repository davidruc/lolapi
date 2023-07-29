
export default{
    printData(){
        const ws = new Worker("./storage/myWs.js", {type:"module"});
        ws.postMessage({action:"getData"});
        ws.addEventListener("message",(e)=>{
            const arrays = Object.entries(e.data.info.data); 
            /* console.log(arrays.map(val => console.log(val[1]))); */
            arrays.map(val => {
            let doc = new DOMParser().parseFromString(
                    `
                    <div class="interior py-0 px-0 p-2 d-flex flex-column justify-content-center">
                    <button id="${val[0]}" class="botons">
                    <img class="imgCard" src="http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${val[1].id}.png" alt="" srcset="">
                    <p class="text-white m-0 text-center ">${val[0]}</p>
                    </button>
                    </div>
                    `, "text/html"
                )
                document.querySelector("#card").append(...doc.body.children)
                
            });
            /* const dato = document.querySelector(`#${val[0]}`) */
        })
        setTimeout(() => {
            this.masinfo()
        }, 100);
        
    },
    masinfo(){
        const ws = new Worker("./storage/myWs.js", {type:"module"});
        ws.postMessage({action:"getData"});
        ws.addEventListener("message",(e)=>{
            const arrays = Object.entries(e.data.info.data); 
            const botones = document.querySelectorAll(".botons");
            console.log(botones);
            botones.forEach((val)=>{
                val.addEventListener("click", (e)=>{
                    console.log(val.id);
                    let plantilla = `
                    <div class=" py-0 px-0 p-2 d-flex flex-column justify-content-center">
                        <img class="champSplash" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${val.id}_0.jpg" alt="" srcset="">
                        <p class="text-white m-0 text-center ">$</p>
                    </div>
                    `;
                    document.querySelector(".masinformacion").innerHTML = plantilla
                })
            })
        })
    }
}

/* <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${val[1].id}_0.jpg" alt="" srcset=""> */