function performSearch() {

    const searchInput = document.getElementById("searchInput");
    const results = document.getElementById("results");

    const query = searchInput.value.trim();

    if (query === "") {
        results.innerHTML = `
            <div class="welcome-card">
                <h2>⚠️ Enter a search topic</h2>
                <p>Please type something in the search box.</p>
            </div>
        `;
        return;
    }

    results.innerHTML = `
        <div class="result-card">
            <h3>🤖 AI Result for "${query}"</h3>
            <p>
                Here is an AI-generated overview related to your search.
                This interface demonstrates how an AI search system can
                present useful information in a simple and organized way.
            </p>
        </div>

        <div class="result-card">
            <h3>🔎 Related Information</h3>
            <p>
                Explore more information, concepts and related topics
                connected to "${query}".
            </p>
        </div>

        <div class="result-card">
            <h3>💡 AI Insight</h3>
            <p>
                AI can help users understand search topics quickly by
                summarizing and organizing relevant information.
            </p>
        </div>
    `;
}


// Allow Enter key to perform the search
document.getElementById("searchInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        performSearch();
    }

});
