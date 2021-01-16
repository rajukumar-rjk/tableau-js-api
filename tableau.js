
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Loan_16107817213780/Story1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

