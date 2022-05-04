var lista = [];
var nombrePares = [];
async function pares(){
    var req = new XMLHttpRequest();
    
    await req.open('GET', 'https://api.binance.com/api/v3/ticker/price', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
    
        for (let i = 0; i < aux.length; i++) {
            nombrePares.push(aux[i]['symbol'])  
        }

    //Create and append select list
    var selectList = document.getElementById("selector");
   
    // asignamos opciones al componente selector
    for (var i = 0; i < nombrePares.length; i++) {
        var option = document.createElement("option");
        option.value = nombrePares[i];
        option.text = nombrePares[i];
        selectList.appendChild(option);
    }

}

async function getDataOf(par){
    var req = new XMLHttpRequest();
    //var par = document.getElementsByTagName('h2')[0].innerText;
    await req.open('GET', 'https://api.binance.com/api/v3/klines?symbol='+par+'&interval=5m', false);
    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);
     
    
        for (let i = 0; i < aux.length; i++) {
            lista.push(aux[i][3])
            //lista_2.push(aux[i][5])
            
        }
    pintar() 
    //pintarPrueba()
}
