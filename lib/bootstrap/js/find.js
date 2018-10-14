var http_request2=false;
  function send_request(url){//初始化，指定处理函数，发送请求的函数
    http_request2=false;
    //开始初始化XMLHttpRequest对象
    if(window.XMLHttpRequest){//Mozilla浏览器
     http_request2=new XMLHttpRequest();
     if(http_request2.overrideMimeType){//设置MIME类别
       http_request2.overrideMimeType("text/xml");
     }
    }
    else if(window.ActiveXObject){//IE浏览器
     try{
      http_request2=new ActiveXObject("Msxml2.XMLHttp");
     }catch(e){
      try{
      http_request2=new ActiveXobject("Microsoft.XMLHttp");
      }catch(e){}
     }
    }
    if(!http_request2){//异常，创建对象实例失败
     window.alert("创建XMLHttp对象失败！");
     return false;
    }
    http_request2.onreadystatechange=processrequest;
    //确定发送请求方式，URL，及是否同步执行下段代码
    http_request2.open("GET",url,true);
    http_request2.send(null);
  }
  //处理返回信息的函数
  function processrequest(){
   if(http_request2.readyState==4){//判断对象状态
     if(http_request2.status==200){//信息已成功返回，开始处理信息
      document.getElementById(reobj).innerHTML=http_request2.responseText;
     }//document.getElementById(reobj).innerHTML意思是获取id=reobj的值或者向id=reobj赋值
     else{//页面不正常
      alert("您所请求的页面不正常！");
     }
   }
  }
  function find(obj,url){
   document.getElementById(obj).innerHTML="正在读取数据...";
   reobj = obj;
   send_request(url);
   }