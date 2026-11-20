//your JS code here. If required.
function removeColor() {

    let colorSelect = document.getElementById("colorSelect");

    let selectedIndex = colorSelect.selectedIndex;

    colorSelect.remove(selectedIndex);

}