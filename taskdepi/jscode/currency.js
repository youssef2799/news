async function currency(currencyyy,target,amount){
 var key = "82c34fc6c7b6a6ebc784244d";
 var currencyy = currencyyy
 var target = targett;
 var amount = amountt;
 var url = `https://v6.exchangerate-api.com/v6/${key}/pair/${currencyy}/${target}/${amount}`;
 console.log(url);
 var response = await fetch(url);
 var data = await response.json();
 console.log(data);
 var div = document.createElement("div");
 div.classList.add('col-6');
 var result = `<h4>basecode: ${data.base_code} </h4> 
 <h4>targetcode: ${data.target_code} </h4>
 <h4>Amount: ${amount}<h4>
 <h4>result: ${data.conversion_result}<h4>`;
 document.getElementById("currency").appendChild(div);
 div.innerHTML = result;
}
var currencyyy = "USD";
var targett = "EGP";
var amountt = 1;
currency(currencyyy,targett,amountt);
