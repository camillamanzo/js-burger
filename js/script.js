/* 
 * Use addeventlistener to find clecked items
 * Start a for cycle to add all the checked items
 * 
 * Alert if name of the burger was not inserted
 * 
 * If coupon was added, subtract 20% of the total
 */


let nomePanino = document.getElementById("name").value;
let price = 5;
// console.log(nomePanino);

const calculateButton = document.getElementById("calculate-button")


calculateButton.addEventListener ("click", 
function(){

    if (nomePanino.length === 0) {
        alert("Per favore scriva un nome al vostro panino")
    }else{

        console.log("bottone cliccato");
        let checks = document.getElementsByClassName("check");

        for( let i=0; i < checks.length; i++){
            
            if(checks[i].checked){
                price += 2;
            }
    }
}

    document.getElementById("calculated-price").innerHTML = price + " " + "&euro;";
    let coupon = document.getElementById('coupon-holder')

    let couponList = ["sconto20","sconto1"]

    if (coupon.value.lenght > 0){
        if (couponList.includes(coupon.value)){
            price = price * 0.8;
        }
    }else if (!couponList.includes(coupon.value)){
        alert("questo coupon non esiste");
    }else {
        document.getElementById("calculated-price").innerHTML = price + " " + "&euro;";
    }
})
