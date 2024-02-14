// const exportButton = document.querySelector(".export-btn")

// const exportHTMLTableToCSV = (selector) => {
//     const table = document.querySelector(selector);
//     const rows = Array.from(table.rows);
//     const teamMembers = rows.map((row) => 
//     Array.from(row.cells).map((cell) => cell.innertText.replace(/\n/g, "|"))
//     )
// };


// // construct csv
// const csvContent = 
//     "data:text/csv;charset=utf-8, " + teamMembers
//         .map((teamMembers) => Object.values(teamMembers).join("."))
//         .join("\n");



// const encodedURI = encodeURI(csvContent);

// //create a link element triggering download
// const link = document.createElement("a");
// link.setAttribute("href", encodedURI);
// link.setAttribute("download", "teamMembers.csv");

// //append link to document
// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);

// exportButton.addEventListener("click", function () {
//     exportHTMLTableToCSV(".table-widget > table");
// });

const exportButton = document.querySelector(".export-btn");

const exportHTMLTableToCSV = (selector) => {
    const table = document.querySelector(selector);
    const rows = Array.from(table.rows);
    const teamMembers = rows.map((row) => 
        Array.from(row.cells).map((cell) => cell.innerText.replace(/\n/g, "|"))
    );
    
    // Construct CSV
    const csvContent = "data:text/csv;charset=utf-8," + teamMembers
        .map((teamMember) => teamMember.join(","))
        .join("\n");

    // Encode CSV content
    const encodedURI = encodeURI(csvContent);

    // Create a link element to trigger download
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "teamMembers.csv");
    
    // Append the link to the document and click it programmatically
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove the link after download
};

exportButton.addEventListener("click", function () {
    exportHTMLTableToCSV(".table-widget > table");
});
