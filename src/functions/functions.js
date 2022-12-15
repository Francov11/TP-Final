let table = document.getElementById('data')
let addUser = document.getElementById('btnAddUser')

//Add user function
const addData = (userData) => {
    try{
        let tableRow = document.createElement("tr")

        let id = document.createElement("th");
        id.innerText = userData.id;
    
        let name = document.createElement("th");
        name.innerText = userData.name;
        name.classList.add("allowsEdit")
    
        let city = document.createElement("th");
        city.innerText = userData.city;
        city.classList.add("allowsEdit")
    
        let birthday = document.createElement("th");
        birthday.innerText = userData.birthday;
        birthday.classList.add("allowsEdit")
        
        let email = document.createElement("th");
        email.innerText = userData.email;
        email.classList.add("allowsEdit")
    
        let buttonEdit = document.createElement("button");
        buttonEdit.innerText = "Edit";
        buttonEdit.classList.add("boton");
    
        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";
        buttonDelete.classList.add("boton");
    
        table.appendChild(tableRow);
        tableRow.appendChild(id);
        tableRow.appendChild(name);
        tableRow.appendChild(city);
        tableRow.appendChild(birthday);
        tableRow.appendChild(email);
        tableRow.appendChild(buttonEdit);
        tableRow.appendChild(buttonDelete);
    
        buttonEdit.addEventListener("click", () => {
            let allowsEdit = buttonEdit.parentElement;
            allowsEdit = allowsEdit.childNodes
            if(buttonEdit.innerText == "Edit") {
                updateUser(allowsEdit);
                buttonEdit.innerText = "Save";
            } else {
                saveChanges(allowsEdit)
                buttonEdit.innerText = "Edit";
            }
        });
    
        buttonDelete.addEventListener("click", () => {
            tableRow.remove();
        })
    } catch (error) {
        console.log(error)
    }
}

//Update user funtion
const updateUser = (change) => {
    try {
        change.forEach(element => {
            if(element.className === "allowsEdit") {
                let celds = document.createElement("input");
                celds.value = element.innerText;
                element.replaceWith(celds);
                celds.classList.add("allowsEdit")  
            }
        }) 
    } catch (error) {
        console.log(error)
    }    
}

//Save changes of the update
const saveChanges = (change) => {
    try {
        change.forEach(element => {
            if(element.className === "allowsEdit") {
                let endCeld = document.createElement("th");
                endCeld.innerText = element.value;
                element.replaceWith(endCeld);  
                endCeld.classList.add("allowsEdit")                   
                };
            }); 
    } catch (error) {
        console.log(error)
    }  
};

//Upload data to Front
export const uploadData = (users) => {
    try {
        users.forEach(userData => addData(userData))
    } catch (error) {
        console.log(error)
    }  
}