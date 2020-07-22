value=document.getElementById("list");
function add(){

    // li tags creation;
    var  inp=document.getElementById("value");
    if(inp.value==""){
        alert("please enter your todo")
    }
    else{
    var li=document.createElement("li");
    litext=document.createTextNode(inp.value);
    li.appendChild(litext);
    value.appendChild(li);
    inp.value="";
    console.log(li);
    // delete btn make;
    var del_btn=document.createElement("button");
var deltext=document.createTextNode("delete");
del_btn.setAttribute("class","del");
// del_btn.setAttribute("src","https://mpng.subpng.com/20191102/zut/transparent-bin-icon-delete-icon-remove-icon-5dbe1082968a29.4612454215727371546166.jpg")
del_btn.setAttribute("onclick","delete2(this)");
del_btn.appendChild(deltext);
li.appendChild(del_btn);
// create edit button;
var edit_btn=document.createElement("button");
var edit_text=document.createTextNode("edit");
edit_btn.setAttribute("class","del");
edit_btn.setAttribute("onclick","edit2(this)");
edit_btn.appendChild(edit_text);
li.appendChild(edit_btn);
var line=document.createElement("hr");
var edit_text3=document.createTextNode();
line.appendChild();
li.appendChild(line);
    }

}


function delete2(e){
e.parentNode.remove();

}
function del_all(){
    value.innerHTML="";
}

function edit2(e){
    var val=e.parentNode.firstChild.nodeValue;
    editval=prompt("enter edit val",val);
    // var ed=document.createElement("input");
    // var ed_text=document.createTextNode(val);
    // ed.appendChild(ed_text);
    e.parentNode.firstChild.nodeValue=editval;

}
function color(){
    var  inp=document.getElementById("value");
    inp.style.backgroundColor="lightblue"
    inp.style.color="white";
}



