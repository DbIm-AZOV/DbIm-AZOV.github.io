let item = "" 
firstnum = "",
secondnum = "" ,
resultnum = ""
num = "";


document.getElementById('percent').addEventListener("click", percent);
document.getElementById('clean').addEventListener("click", clean);
document.getElementById('plusmin').addEventListener("click", plusmin);
document.getElementById('divide').addEventListener("click", () => insert('/') );
document.getElementById('seven').addEventListener("click", () => insert('7'));
document.getElementById('eight').addEventListener("click", () => insert('8'));
document.getElementById('nine').addEventListener("click", () => insert('9'));
document.getElementById('times').addEventListener("click", () => insert('*'));
document.getElementById('four').addEventListener("click", () => insert('4'));
document.getElementById('five').addEventListener("click", () => insert('5'));
document.getElementById('six').addEventListener("click", () => insert('6'));
document.getElementById('minus').addEventListener("click", () => insert('-'));
document.getElementById('one').addEventListener("click", () => insert('1') );
document.getElementById('two').addEventListener("click", () => insert('2'));
document.getElementById('three').addEventListener("click", () => insert('3'));
document.getElementById('plus').addEventListener("click", () => insert('+'));
document.getElementById('zero').addEventListener("click", () => insert('0'));
document.getElementById('dot').addEventListener("click", () => insert('.'));
document.getElementById('result').addEventListener("click", result);

function percent(){
    item = eval(item) / 100;
    resultitem();
}

function resultitem(){
    document.form.textview.value = item;}

function insert(num){
    if (item == 0)  {
        item="";
        item+=num;
        resultitem();
    } else
    
    item+=num; 
    resultitem()
}
 function clean(){
    item = "0";
    resultitem();     
}

function plusmin(){    
    item.indexOf("-") == 0?
    item = item.replace('-',''):
    item = "-" + item;
    resultitem()
}
function result(){

    if(item){
        item = eval(item);
        resultnum = item;
    }
   
    resultitem()
    
}