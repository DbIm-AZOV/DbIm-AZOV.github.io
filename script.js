let item=""  ;
firstnum="",
secondnum="",
resultnum="";

function percent(){
    item=eval(item)/100;
    resultitem();
}

function resultitem(){
document.form.textview.value=item;}

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
    item="0";
    resultitem();
    
}
function plusmin(){
    
    item.indexOf("-") == 0?
    item=item.replace('-',''):
    item="-"+ item;
    resultitem()
}
function result(){

    if(item){
        item= eval(item);
        resultnum=item;
    }
   
    resultitem()
    
}