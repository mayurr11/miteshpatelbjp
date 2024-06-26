// $(document).ready(function() {
//     // Fetch data from data.js
//     $.getScript("js/data.js", function() {
//         var listContainer = $("#list-container");

//         data.forEach(function(item, index) {
//             var details = $("<details>");
//             var summary = $("<summary>").text(item.label);
//             var tableContainer = $("<div>").addClass("table-container");

//             var tableHTML = "<table><tr><th>Scheme</th><th>Ministry</th><th>Link</th></tr>";
//             item.tableData.forEach(function(row) {
//                 tableHTML += "<tr>";
//                 row.forEach(function(cell) {
//                     tableHTML += "<td>" + cell + "</td>";
//                 });
//                 tableHTML += "</tr>";
//             });
//             tableHTML += "</table>";

//             tableContainer.html(tableHTML);

//             details.append(summary);
//             details.append(tableContainer);

//             listContainer.append(details);
//         });

//         $("summary").click(function() {
//             var tableContainer = $(this).siblings(".table-container");
//             tableContainer.slideToggle();
//         });
//     });
// });

$(document).ready(function() {
    // Fetch data from data.js
    $.getScript("js/data.js", function() {
        var listContainer = $("#list-container");

        data.forEach(function(item, index) {
            var details = $("<details>");
            var summary = $("<summary>").text(item.label);
            var tableContainer = $("<div>").addClass("table-container");

            var tableHTML = "<table><tr><th>Scheme</th><th>Ministry</th><th>Link</th></tr>";
            item.tableData.forEach(function(row) {
                tableHTML += "<tr>";
                row.forEach(function(cell) {
                    tableHTML += "<td>" + cell + "</td>";
                });
                tableHTML += "</tr>";
            });
            tableHTML += "</table>";

            tableContainer.html(tableHTML);

            details.append(summary);
            details.append(tableContainer);

            listContainer.append(details);
        });

        $("summary").click(function() {
            var tableContainer = $(this).siblings(".table-container");
            tableContainer.slideToggle();
        });
    });
});
