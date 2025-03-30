let InpText = document.getElementById("InpText");
let container = document.getElementById("container");
let EditButton = document.querySelectorAll(".E-btn1");
let DeleteButton = document.getElementsByClassName("E-btn2");

let AddBtn = document.getElementById("ADD");

function AddFunction()
{
    if(InpText.value !== "")
        {
            // create the part of list
        let ListX = document.createElement("div");
        let ParaG = document.createElement("p");
        let EditBtn = document.createElement("button");
        let DeleBtn = document.createElement("button");

        // add buttons and paragraph in list
        ListX.appendChild(ParaG);
        ListX.appendChild(EditBtn);
        ListX.appendChild(DeleBtn);

        // provide the class
        ListX.classList.add("List-0");
        EditBtn.classList.add("E-btn1");
        DeleBtn.classList.add("E-btn2");

        // set the values
        ParaG.innerText = InpText.value;
        EditBtn.innerText = "Edit";
        DeleBtn.innerText = "Delete";

        // add the new list in container
        container.appendChild(ListX);

        InpText.value = "";
    }
}

document.addEventListener("keydown",(e)=>{
    if(e.key == "Enter")
    {
        AddFunction();
    }
})

AddBtn.addEventListener("click",()=>{
    AddFunction();
})

//this is main thing 
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("E-btn1")) {
        // Edit button clicked
        let ParaTag = e.target.previousElementSibling;
        InpText.value = ParaTag.innerText;
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("E-btn2")) {
        // Delete button clicked
        e.target.parentElement.remove();
    }
});

