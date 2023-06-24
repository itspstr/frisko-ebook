// Sample eBook data
var ebooks = [
    { title: "eBook 1", url: "ebook1.html" },
    { title: "eBook 2", url: "ebook2.html" },
    { title: "eBook 3", url: "ebook3.html" }
];

// Function to populate the eBook list
function populateEbooks() {
    var ebookList = document.getElementById("ebookList");
    ebookList.innerHTML = "";

    for (var i = 0; i < ebooks.length; i++) {
        var ebook = ebooks[i];
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = ebook.url;
        link.textContent = ebook.title;
        listItem.appendChild(link);
        ebookList.appendChild(listItem);
    }
}

// Function to search eBooks
function searchEbooks() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value.toLowerCase();

    var filteredEbooks = ebooks.filter(function(ebook) {
        return ebook.title.toLowerCase().indexOf(searchTerm) !== -1;
    });

    // Populate the eBook list with search results
    var ebookList = document.getElementById("ebookList");
    ebookList.innerHTML = "";

    if (filteredEbooks.length > 0) {
        for (var i = 0; i < filteredEbooks.length; i++) {
            var ebook = filteredEbooks[i];
            var listItem = document.createElement("li");
            var link = document.createElement("a");
            link.href = ebook.url;
            link.textContent = ebook.title;
            listItem.appendChild(link);
            ebookList.appendChild(listItem);
        }
    } else {
        var message = document.createElement("li");
        message.textContent = "No eBooks found.";
        ebookList.appendChild(message);
    }
}

// Populate the eBook list on page load
populateEbooks();
