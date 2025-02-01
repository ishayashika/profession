document.body.style.backgroundColor="black";
let heading=document.getElementById("heading");
heading.style.marginTop="20px";
heading.style.color="white";
row=document.getElementsByClassName("row")[0];
row.style.color="white";
submit_btn=document.getElementById("submit_btn");
submit_btn.style.backgroundColor="white";
button.style.color="black";
add_emp=document.getElementById("add_emp");
add_emp.style.color="white";
data_emp=document.getElementById("data_emp");
data_emp.style.color="white";

demo=document.getElementById("demo");
let employees=[];
let id=1;

function addUser(){
    let name=document.getElementById("full_name");
    let profession=document.getElementById("profession");
    let age=document.getElementById("age");

    let name_=name.value.trim();
    let profession_=profession.value.trim();
    let age_=age.value.trim();

    if(name.value !== "" && profession.value !== "" && age.value !== ""){
        demo.textContent="Success : Message Added";
        demo.style.color="green";
    }else{
        demo.textContent="Error :Please Make sure All the field before adding in an emplyee";
        demo.style.color="red";
        return;
    }

    let employee={
        id:id,
        name:name_,
        profession:profession_,
        age:parseInt(age_)
    };
    id++;
    employees.push(employee);

    name.value="";
    profession.value="";
    age.value="";

    data_store_card();
}

function data_store_card(){
    let data_emp=document.getElementById("data_emp");//place where table will get display
    data_emp.innerHTML="";//before adding new data, clear the table


        let table=document.createElement("table");//created table using dom
        table.style.width="100%";//give width to the table
        table.style.borderCollapse="collapse";
        table.style.color="white";
        table.style.marginTop="20px";

        let thead = document.createElement("thead");//created table head using dom
        let headerRow = document.createElement("tr");//created row using dom

        let headers = ["ID", "Name", "Profession", "Age", "Actions"];//define heading of each column
        headers.forEach(headerText => {
            let th = document.createElement("th");
            th.textContent = headerText;
            th.style.border = "1px solid white";//give border to the table header
            th.style.padding = "10px";
            th.style.textAlign = "left";
            th.style.backgroundColor = "#333";
            headerRow.appendChild(th);//append each header to the header row
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        let tbody = document.createElement("tbody");

        employees.forEach((item) => {
        let row = document.createElement("tr");

        // Add employee data to the row
        Object.values(item).forEach(value => {
            let td = document.createElement("td");
            td.textContent = value;
            td.style.border = "1px solid white";
            td.style.padding = "10px";
            row.appendChild(td);
            
        });

        let tdAction = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.onclick = function () { 
            deleteUser(item.id); // Call delete function with the employee's ID
        };

        tdAction.appendChild(deleteBtn);
        row.appendChild(tdAction);
        tbody.style.border = "1px solid white";
        tbody.style.padding = "10px";
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    data_emp.appendChild(table);
}

function deleteUser(empId) {
    employees = employees.filter(emp => emp.id !== empId); // Remove the employee from array
    data_store_card(); // Refresh the table to reflect changes
}
