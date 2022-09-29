let click = true

function add() {
    let input = document.getElementById("text")
    
    if (input.value == "") {
        alert("Input field is empty")
        return
    }
    if (click) {
        document.getElementById('list').innerHTML = ''
    }
    click = false
    let li = document.createElement("li")
    li.innerHTML = input.value
    input.value = ""
    document.getElementById("list").appendChild(li)
}