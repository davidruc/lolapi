export default{
    printData(){
        const ws = new Worker("./storage/myWs.js", {type:"module"});
        ws.postMessage({action:"getData"});
        ws.addEventListener("message",(e)=>{
            const arrays = Object.entries(e.data.info.data); 
            console.log(arrays.map(val => console.log(val[1])));
            arrays.map(val => {
            let doc = new DOMParser().parseFromString(
                
                    `
                    <div class="interior py-0 px-0 p-2 d-flex flex-column justify-content-center">
                    <img class="imgCard" src="http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${val[1].id}.png" alt="" srcset="">
                    <p class="text-white m-0 text-center ">${val[0]}</p>
                    </div>
                    `, "text/html"

                )
                document.querySelector("#card").append(...doc.body.children)
        });
        })
    }
}

/* <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${val[1].id}_0.jpg" alt="" srcset=""> */