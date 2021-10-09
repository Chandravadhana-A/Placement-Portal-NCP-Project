var tabButtons = document.querySelectorAll(".tabs button");
var tabPanels = document.querySelectorAll(".tab-panels");

function showPanel(index)
{
    tabButtons.forEach(function(node){
        node.style.borderBottom = "4px solid #ffffff";
    });

    tabButtons[index].style.borderBottom = "4px solid #363740";

    tabPanels.forEach(function(node){
        node.style.display = "none";
    });

    tabPanels[index].style.display = "flex";
}

showPanel(0);