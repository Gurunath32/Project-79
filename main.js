var menu_list_array = ["Tandoori Pizza","Sweet Corn Pizza","Double Cheese Margherita Pizza","Peri-Peri Chicken Pizza","Chicken Tikka Pizza"]

function getmenu() {
    var htmldata;
    htmldata="<ol class='menu_list'>"
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length; i++) {
        htmldata=htmldata+ 'li' +menu_list_array[1] + 'li'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function additem() {
    var htmldata;
    document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0; i<menu_list_array.length; i++) {
        htmldata=htmldata+"<div class='card'>" +"<img src=images/pizzaimg.png/>" +menu_list_array[1]+ "</div>"
        htmldata=htmldata+"</section>"
        document.getElementById("display_added_menu").innerHTML = htmldata;
    }
}