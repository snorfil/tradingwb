var lista = [];
var nombrePares = [];
var bnbData = [];
var btcData = [];
var ethData = [];
var usdtData = [];
async function pares(){
    var req = new XMLHttpRequest();
    var cadena;
    var id;
    
    await req.open('GET', 'https://api.binance.com/api/v3/ticker/price', false);

    req.send(null);
    if (req.status == 200)
        dump(req.responseText);
        let aux = JSON.parse(req.responseText);

    
    
        for (let i = 0; i < aux.length; i++) {

            cadena = aux[i]['symbol'];

            console.log(cadena);
            if(/^BNB/.test(cadena)){
                bnbData.push(cadena);
                id = "bnb_selector";
              
            }
            else if(/^BTC/.test(cadena))
            {
                btcData.push(cadena);
                id = "btc_selector";
            }
            else if(/^USDT/.test(cadena))
            {
                usdtData.push(cadena);
                id = "usdt_selector";
            }
            else if(/^ETH/.test(cadena))
            {
                ethData.push(cadena);
                id = "eth_selector";
            }

            setOptionOn(id,cadena)
                
           
        }
    
   
}
function setOptionOn(id,valor)
{
    let selectList = document.getElementById(id);
    let option = document.createElement("option");
    option.value = valor;
    option.text = valor;
    selectList.appendChild(option);
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
