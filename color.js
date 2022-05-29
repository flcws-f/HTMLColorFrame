var color={
  ps:function(title,content){
      if(document.getElementById("dlg")){
        dlg.innerHTML=title+"<hr>"+content;
        dlg.style='position:fixed;left:0px;top:0px;background-color:white;width:100%;height:100%;';
        dlg.open='true';
        setTimeout("dlg.style='position:fixed;left:0px;top:0px;background-color:white;animation:small 0.5s forwards alternate;'",1000);
        setTimeout("dlg.removeAttribute('open');",1500);
      }
    else{
        body.innerHTML=body.innerHTML+"<dialog style='position:fixed;left:0px;top:0px;background-color:white;width:100%;height:100%;' id='dlg' open>"+title+"<hr>"+content+"</dialog>";
        setTimeout("dlg.style='position:fixed;left:0px;top:0px;background-color:white;animation:small 0.5s forwards alternate;'",1000);
        setTimeout("dlg.removeAttribute('open');",1500);
      }
    }
  }
