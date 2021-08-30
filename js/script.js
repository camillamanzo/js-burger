/* 
 * Use addeventlistener to find clecked items
 * Start a for cycle to add all the checked items
 * 
 * Alert if name of the burger was not inserted
 * 
 * If coupon was added, subtract 20% of the total
 */


const calculateButton = document.getElementById("calculate-button")

calculateButton.addEventListener("click", function(){
    let price = 5;
    // console.log("bottone cliccato");

    let checks = document.getElementsByClassName("check");

    for( let i=0; i < checks.length; i++){
        if(checks[i].checked){
            price += 2;
        }
    }
    document.getElementById("calculated-price").innerHTML = price + " " + "&euro;";
    console.log(price)
})
