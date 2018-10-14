let navbarMenu = document.querySelector(".navbar-nav").getElementsByTagName("li");
let sectionTitle = document.querySelector("#sectionTitle");
let removecCells = document.querySelector(".removecells");
let index, table = document.querySelector("#table");
let lastCell = table.rows[0].cells.length - 1;

for(let i = 1 ; i < table.rows.length ; i++){
    table.rows[i].cells[lastCell].onclick = function(){
        let c = confirm("Do you want to delet this row")
        if (c === true){
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }
    };
}
for(i = 0 ; i < navbarMenu.length ; i++){
    navbarMenu[i].addEventListener("click",selectItem);
}

function selectItem(){
    sectionTitle.innerHTML = this.innerHTML;
};

