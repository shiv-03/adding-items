let click = true

function add() {
    let input = document.getElementById("text")
    if (click) {
        document.getElementById('list').innerHTML = ''
    }
    if (input.value == "") {
        alert("Input field is empty")
        return
    }
    click = false
    let li = document.createElement("li")
    li.innerHTML = input.value
    input.value = ""
    document.getElementById("list").appendChild(li)
}