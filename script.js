// Search Button Functionality
document.getElementById("searchBtn").addEventListener("click", function() {
    var query = document.getElementById("searchInput").value;
    if (query) {
        window.location.href = "https://www.google.com/search?q=" + query;
    }
});

// I'm Feeling Lucky Button
document.getElementById("luckyBtn").addEventListener("click", function() {
    window.location.href = "https://www.google.com/doodles";
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Autocomplete Functionality
document.getElementById("searchInput").addEventListener("input", function() {
    var query = this.value;
    var autocompleteBox = document.getElementById("autocomplete-box");

    if (query.length < 2) {
        autocompleteBox.style.display = "none";
        return;
    }

    // Fetch Google Autocomplete API (JSONP method)
    var script = document.createElement("script");
    script.src = https;//suggestqueries.google.com/complete/search?client=firefox&q=${query}&callback=showSuggestions;
    document.body.appendChild(script);
});

// Function to show autocomplete suggestions
function showSuggestions(data) {
    var suggestions = data[1];
    var autocompleteBox = document.getElementById("autocomplete-box");

    autocompleteBox.innerHTML = "";
    if (suggestions.length === 0) {
        autocompleteBox.style.display = "none";
        return;
    }

    suggestions.forEach(function(suggestion) {
        var div = document.createElement("div");
        div.textContent = suggestion;
        div.addEventListener("click", function() {
            document.getElementById("searchInput").value = suggestion;
            autocompleteBox.style.display = "none";
        });
        autocompleteBox.appendChild(div);
    });

    autocompleteBox.style.display = "block";
}

// Hide autocomplete when clicking outside
document.addEventListener("click", function(event) {
    var autocompleteBox = document.getElementById("autocomplete-box");
    if (!event.target.closest(".search-box")) {
        autocompleteBox.style.display = "none";
    }
});