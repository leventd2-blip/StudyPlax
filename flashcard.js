function nextCard(response) {
    console.log("Recorded response:", response);
    alert("Response registered: " + response.toUpperCase() + ". Loading next card...");
    window.location.reload();
}
