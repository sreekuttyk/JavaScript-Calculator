function buttonclick(val){
    document.getElementById("input").value+=val

}
function clearscreen(){
    document.getElementById("input").value=""
}
function equalclick(){
    var text=document.getElementById("input").value
    var result=eval(text)
    document.getElementById('input').value=result
}