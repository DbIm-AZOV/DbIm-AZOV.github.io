
function insert(num){
    
    document.form.textview.value+=num; 
    item= document.form.textview.value;
}
function clean(){
    document.form.textview.value="";
}
function plusmin(){
    
    document.form.textview.value.indexOf("-") == 0?
    document.form.textview.value=document.form.textview.value.replace('-',''):
    document.form.textview.value="-"+ document.form.textview.value;
}
function result(){
    if(document.form.textview.value){
        document.form.textview.value= eval(document.form.textview.value);
    }
    
}