

const seats = document.querySelectorAll(".seatNumber");
let seatPrice = 550;
let count = 0;
let seatDecrement = 40;

for (const seat of seats) {
    seat.addEventListener("click", function select(event) {
        if(event.target.classList.contains('bg-green-500')){
            return ;
        }
        else if(event.target.classList.contains('selected') && count < 4){
            // check if seat selected
            
            event.target.classList.add("selected");
            event.target.classList.add('bg-green-500');
            event.target.pointerEvents = "none";
            count++;
            seatDecrement--;
            //    create element
            const ticketName = event.target.innerText;
            const ticketPrice = seatPrice;
            //    access display parent
            const showAmount = document.getElementById("showAmount")
            const div = document.createElement("div");
            const p = document.createElement("p");
            p.innerText = ticketName;
            const p2 = document.createElement("p");
            p2.innerText = ticketPrice;
            // append
            div.appendChild(p);
            div.appendChild(p2);
            showAmount.appendChild(div);
            // access total price
            const totalPrice = setTextParseInt("totalPrice");
            const sum = totalPrice + ticketPrice;
            // access grand total
            const grandTotal = setTextParseInt("grandTotal");
            const sum2 = grandTotal + ticketPrice;
            textInner("totalPrice", sum);
            textInner("grandTotal", sum2);
            textInner("seatDecrement", seatDecrement);
            textInner("count", count)
            disabledByBtn("applyBtn");
        }
       
        // if 4 seat i access disabled all seat
        if(count >= 4){
            for(const seat of seats){
                if(event.target.classList.contains("selected") === false){
                    seat.style.pointerEvents = 'none';
                } 
                else if(count === 4) {
                    enabledByBtn("applyBtn");
                }
                }
                
            }
       
    })
}

// access apply btn
const applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener("click", function () {
    //  coupon box access
    const couponBox = document.getElementById("couponBox");
    if (couponBox.value === "NEW15") {
        enabledByBtn("applyBtn");
        const seatTotalPrice = seatPrice * count;
        const discount = seatTotalPrice * .15;
        getAmountValue("showDiscount", discount);
        // grand total 
        const grand = seatTotalPrice - discount;
        textInner("grandTotal", grand);
        addHiddenById("inputBtn")
       

    }
    else if (couponBox.value === "Couple 20") {
        const seatTotalPrice = seatPrice * count;
        const discount = seatTotalPrice * .20;
        getAmountValue("showDiscount", discount);
        // grand total
        const grand = seatTotalPrice - discount;
        textInner("grandTotal", grand); 
        addHiddenById("inputBtn")
    }
    else{
        alert("invalid coupon")
    }

})

// next btn 
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function(event){
            addHiddenById("nav-section");
            addHiddenById("header-section");
            addHiddenById("bestOffer-section");
            addHiddenById("paribahan-Section");
            setHiddenRemoveClass("success");
})

    
