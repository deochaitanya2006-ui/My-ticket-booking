function searchTrain() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;

    if (from === "" || to === "" || date === "" || name === "") {
        alert("⚠️ Please fill all journey details.");
        return;
    }

    document.getElementById("trainBox").style.display = "block";
}

function bookTicket() {
    alert(
        "🎉 Ticket Booked Successfully!\n\n" +
        "Train: Vande Bharat Express\n" +
        "Status: Confirmed\n\n" +
        "on chaitanya deo's web page\n\n"+
        "HAVE A NICE DAY😊\n\n\n"+
        "Happy Journey 🚆"
    );
}
