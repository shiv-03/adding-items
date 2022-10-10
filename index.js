let click = true
let count = 0
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
    li.setAttribute('class','list-group')
    li.setAttribute('id', count)
    li.innerHTML = input.value + `<span onclick=deleteFun(${count})>Delete</span>`
    input.value = ""
    count++
    document.getElementById("list").appendChild(li)
}

function deleteFun(id) {

    let list = document.getElementById("list")
    for(let i   = 0; i < list.children.length; i++) {
        if(list.children[i].getAttribute('id') == id) {
            list.removeChild(list.children[i]);
        }
    }

    if(list.children.length == 0) {
        list.innerHTML= '<li>This is a demo child 1</li>'
    }
}