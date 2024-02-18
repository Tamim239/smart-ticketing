const seats = document.getElementsByClassName("seatNumber");
let seatPrice = 550;
let count = 0;
let seatDecrement = 40;
for (const seat of seats) {
    seat.addEventListener("click", function (event) {
        event.target.classList.add('bg-green-500');
        count++;
        seatDecrement--;
        //    create element
        const ticketName = event.target.innerText;
        const ticketPrice = seatPrice;
        console.log(ticketName, ticketPrice);
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





        textInner("seatDecrement", seatDecrement);
        textInner("count", count)
    })
}