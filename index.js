function add(){
    var input=document.getElementById("text");
    var li=document.createElement("LI");
    li.innerHTML=input.value;
    input.value=""
    document.getElementById("list").appendChild(li);

}