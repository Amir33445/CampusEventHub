fetch("events.json")
.then(response => response.json())
.then(events => {

    const container =
    document.getElementById("events-container");

    events.forEach(event => {

        container.innerHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>Category: ${event.category}</p>
            </div>
        `;
    });

});

searchInput.addEventListener("input", () => {
    displayEvents();
});

categoryFilter.addEventListener("change", () => {
    displayEvents();
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
