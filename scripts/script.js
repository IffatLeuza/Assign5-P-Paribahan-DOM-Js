const allBtn = document.getElementsByClassName("seat-btn");

const seatClass= "Economy";
const price = convertedIntNum("seat-price");   //550 num


for( const btn of allBtn){

        // seatSelected ++;
    btn.addEventListener("click", function(event){

        const seatNum = event.target.innerText;
        event.target.setAttribute("disabled", false);  //btn will be deisabled once selected

        if(convertedIntNum("seat-selected") + 1 > 4 || convertedIntNum("current-seat") <= 0){
                     
             alert("you cant select more");
             return;
        }
        event.target.style.backgroundColor = "#1DD100";   

        updatedSeatLeft();
        updatedSeatSelected()
        
        // Updating "select your seat ul"
        const li = document.createElement("li");
        li.classList.add("seat-list");
        li.classList.add("flex");
        li.classList.add("justify-between");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatNum;
        p2.innerText = seatClass;
        p3.innerText = price;

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        const seatListUl = document.getElementById("seat-list-ul");
        seatListUl.appendChild(li);

        updatedTotalPrice(price);
        updatedGrandTotal();
       // seatIncrement();

                        
    })
       
        
    }
//   For loop ends 


function updatedTotalPrice(value){

    const totalPrice = convertedIntNum("total-price");   //num 0
    let priceCalculation = totalPrice + value;   // 0 + 550
    document.getElementById("total-price").innerText = priceCalculation ;
}

function updatedGrandTotal(parameter){
    const convertedTotal = convertedIntNum("total-price");   // total price as num

    if(parameter == undefined){
    document.getElementById("grand-total").innerText = convertedTotal;
    }
    else{
        const cuponValue = document.getElementById("coupon-field").value;
        if(cuponValue == "NEW15"){
            const discount = convertedTotal *.15;
            document.getElementById("grand-total").innerText = parseFloat(convertedTotal - discount).toFixed(2);
        }
        else if(cuponValue == "Couple 20"){
            const discount = convertedTotal *.2;
            document.getElementById("grand-total").innerText = parseFloat(convertedTotal - discount).toFixed(2);
        }
        else{
            alert("Wrong cupon code");
            return;
        }

    }
}

function updatedSeatLeft(){
    const convertedSeatLeft = convertedIntNum("current-seat");  //int seat num
    document.getElementById("current-seat").innerText = convertedSeatLeft - 1;
}

function updatedSeatSelected(){
    const convertedSeatSelected = convertedIntNum("seat-selected");  //int seat num
    document.getElementById("seat-selected").innerText = convertedSeatSelected + 1;
}



function convertedIntNum(id){
    let getInnerText = document.getElementById(id).innerText;
    return parseInt(getInnerText);
 }
