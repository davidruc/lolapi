let myWs = {
    getData(){
        async function lol() {
            try{
                const url = " https://ddragon.leagueoflegends.com/cdn/13.8.1/data/en_US/champion.json";
                const response = await fetch(url)
                const data = await response.json();
                return data;
            } catch(error){
                console.error(error);
            }
        } lol().then(data =>{
            self.postMessage({info: data})
        }
        )
    },

}
self.addEventListener("message",(e)=>{
    postMessage(myWs[`${e.data.action}`]());
})
