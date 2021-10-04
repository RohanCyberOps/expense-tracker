const nameEl = document.getElementById("name-el")
const dateEl = document.getElementById("date-el")
const amountEl = document.getElementById("amount-el")
const saveBtn = document.getElementById("save-btn")
const tbodyEl = document.getElementById("t-body")
let expenseData = []
let output =""





saveBtn.addEventListener("click", (e) => {

    let expenseobj = {
        name : nameEl.value,
        date : dateEl.value,
        amount : amountEl.value 
    }

    expenseData.push(expenseobj)

    
    localStorage.setItem("expenseData", JSON.stringify(expenseData))
    
    reset()
    e.preventDefault()
    render()
})

function reset(){
    nameEl.value = ""
    dateEl.value = ""
    amountEl.value=""
}

function render(){
    expenseData = JSON.parse(localStorage.getItem("expenseData"))
    output=""
    expenseData.forEach((data, index) => {
        output += `
            <tr>
                <td>${data.name}</td>
                <td>${data.date}</td>
                <td>${data.amount}</td>
                <td><i class="fa fa-bitbucket" style="font-size:20px" onclick=onDelete(${index})></i></td>
            </tr>
        `
        
    });
    
    tbodyEl.innerHTML = output

   
}
function onDelete(index){
    expenseData.splice(index, 1)
    localStorage.setItem("expenseData", JSON.stringify(expenseData))
    render()
}

render()