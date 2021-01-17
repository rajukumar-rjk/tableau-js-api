
var viz;

window.onload= function() {

    var vizDiv = document.getElementById('dashboard');
    var vizURL = 'https://public.tableau.com/views/DashboardtotestwithTableauJavaScriptAPI/allloans?:language=en&:display_count=y&:origin=viz_share_link';
    var options = {
        width: '1000px',
        height: '900px',
        hideToolbar: true,
        hideTabs: true
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
};

function loadView(sheetName) {
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync(sheetName);
}


function show(filterName, values) {
    console.log(filterName, values)
    var sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync(filterName, values, tableau.FilterUpdateType.REPLACE);
}


$('.option').click(function (){
    $('.option').removeClass('active');
    $(this).addClass('active');
})

$(document).ready(function (){
    $(".hint").popover({
        placement: "right",
        trigger: 'hover'
    });
})
