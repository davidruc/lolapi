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
                    <h2>${val[0]}</h2>
                    <img src="${val[1].image.full}" alt="" srcset="">
                    <h2>${val[1].image.full}</h2>
                    `, "text/html"

                )
                document.querySelector("#card").append(...doc.body.children)
        });
        })
    }
}