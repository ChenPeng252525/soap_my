/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////client:windows   server:pc/////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = app;
var express = require('express');
var path = require('path');
var app=express();
var net=require('net');
//var IpAdress='10.221.40.46 ';   //公司
var IpAdress='192.168.1.100 ';  //家

//var IpAdress='192.168.43.105';  //手机
app.set('view engine','ejs');
//app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));

app.get('/',function(req,res){
  res.render('home.ejs',{name:'chenpeng'});
});


app.get('/login',function(req,res){
  res.render('login.ejs',{name:'chenpeng'});

Res='';	
Res1='';
Joint=[]; 
frame=[0,0,0,0,0,0];
tool=[0,0,0,0,0,0];



//**********************************************************************************************************//
//**************************************************login启动程序********************************************//
//**********************************************************************************************************//
function SoapClient(IpAdress,SendMess){
var client=net.connect({port:851,host:IpAdress},function()
{
 client.write(SendMess);

});
	client.on('data', function(data) {
　  　var regExp = /sid>([0-9]+)</; 
　  　Res = regExp .exec(data.toString()); 
    client.end();
	});

};

//**********************************************************************************************************//
//**************************************************login报文头********************************************//
//**********************************************************************************************************//
function __Server0head(IpAdress,port){
	var Server0headstr = "POST / HTTP/1.1\r\n" + "Content-Type: text/xml; charset=utf-8\r\n" + "SOAPAction: \"\""
	Server0headstr = Server0headstr + "Host:" + IpAdress.toString() + ":" + port.toString() + "\r\n"
	Server0headstr = Server0headstr + "Content-Length: 272\r\n"
	Server0headstr = Server0headstr + "Expect: 100-continue\r\n"
	Server0headstr = Server0headstr + "\r\n"
	Server0headstr = Server0headstr + "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">"
	return Server0headstr 	
};




//**********************************************************************************************************//
//*****************************************************主程序************************************************//
//**********************************************************************************************************//
function login(){
	var logindata = __Server0head(IpAdress, 851) + "<login xmlns=\"CS8ServerV0\"><user>maintenance</user><pwd>spec_cal</pwd></login></s:Body></s:Envelope>"
	var res = SoapClient(IpAdress, logindata);
}
login();
});

app.get('/OnPower',function(req,res){
  res.render('OnPower.ejs',{name:'chenpeng'});

//**********************************************************************************************************//
//**********************************************login等待处理程序********************************************//
//**********************************************************************************************************//
function wait(){
       if (Res=='') {    
                console.log('error'); 
                wait();   
       }
}


//**********************************************************************************************************//
//************************************************上电程序报文***********************************************//
//**********************************************************************************************************//
function __Server123headSession(IpAdress,port,servertype,SessionId){

    var __sessionId=SessionId;
    console.log(__sessionId);
  Server123headstr="POST /CS8ServerV"+servertype+" HTTP/1.1\r\n"+"MIME-Version: 1.0\r\n"+"Content-Type: multipart/related; type=\"application/xop+xml\";start=\"<http://tempuri.org/0>\"";
    Server123headstr=Server123headstr+"boundary=\"uuid:+id=1\"\r\n";
    Server123headstr=Server123headstr+"start-info=\"application/soap+xml\"; action=\"\"\r\n";
    Server123headstr=Server123headstr+"Host:"+IpAdress.toString()+":"+port.toString()+"\r\n";
    Server123headstr=Server123headstr+"Content-Length: 272\r\n";
    Server123headstr=Server123headstr+"Expect: 100-continue\r\n";
    Server123headstr=Server123headstr+"Connection: Keep-Alive\r\n";
    Server123headstr=Server123headstr+"\r\n\r\n";
    Server123headstr=Server123headstr+"--uuid:+id=1\r\n";
    Server123headstr=Server123headstr+"Content-ID: <http://tempuri.org/0>\r\n";
    Server123headstr=Server123headstr+"Content-Transfer-Encoding: 8bit\r\n";
    Server123headstr=Server123headstr+"Content-Type: application/xop+xml;charset=utf-8;type=\"application/soap+xml\"\r\n";
    Server123headstr=Server123headstr+"\r\n";
//*****************************************************************************************************************//
    Server123headstr=Server123headstr+"<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\"><s:Header><h:sessionId xmlns:h=\"CS8ServerV0\" xmlns=\"CS8ServerV0\">";
    Server123headstr=Server123headstr+__sessionId.toString()+"</h:sessionId></s:Header><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">";
    return Server123headstr;
}

//**********************************************************************************************************//
//**************************************************上电启动程序********************************************//
//**********************************************************************************************************//
function SoapClient1(IpAdress,SendMess){

var client=net.connect({port:851,host:IpAdress},function()
{
 client.write(SendMess);
});
  client.on('data', function(data) {
  client.end();
  });
};

   function PowerOn(IpAdress,port,action,SessionId){
  var strdata="";
  var vardata="true";
    if (action==true)
    {
      vardata="true"
    }
    else
    {
      vardata="false"
    }
  var strdata = __Server123headSession(IpAdress,port,"3",SessionId)+"<setPower xmlns=\"urn:CS8ServerV3\"><power xmlns=\"\">"+vardata+"</power></setPower></s:Body></s:Envelope>\r\n";
    strdata=strdata+"--uuid:+id=1--";
    var res = SoapClient1(IpAdress, strdata);
}
PowerOn('192.168.1.100 ','851',true,Res[1]);

  
})


app.get('/DisablePower',function(req,res){
  res.render('DisablePower.ejs',{name:'chenpeng'});

  //**********************************************************************************************************//
//**********************************************login等待处理程序********************************************//
//**********************************************************************************************************//
function wait(){
       if (Res=='') {    
                console.log('error'); 
                wait();   
       }
}


//**********************************************************************************************************//
//************************************************上电程序报文***********************************************//
//**********************************************************************************************************//
function __Server123headSession(IpAdress,port,servertype,SessionId){

    var __sessionId=SessionId;
    console.log(__sessionId);
  Server123headstr="POST /CS8ServerV"+servertype+" HTTP/1.1\r\n"+"MIME-Version: 1.0\r\n"+"Content-Type: multipart/related; type=\"application/xop+xml\";start=\"<http://tempuri.org/0>\"";
    Server123headstr=Server123headstr+"boundary=\"uuid:+id=1\"\r\n";
    Server123headstr=Server123headstr+"start-info=\"application/soap+xml\"; action=\"\"\r\n";
    Server123headstr=Server123headstr+"Host:"+IpAdress.toString()+":"+port.toString()+"\r\n";
    Server123headstr=Server123headstr+"Content-Length: 272\r\n";
    Server123headstr=Server123headstr+"Expect: 100-continue\r\n";
    Server123headstr=Server123headstr+"Connection: Keep-Alive\r\n";
    Server123headstr=Server123headstr+"\r\n\r\n";
    Server123headstr=Server123headstr+"--uuid:+id=1\r\n";
    Server123headstr=Server123headstr+"Content-ID: <http://tempuri.org/0>\r\n";
    Server123headstr=Server123headstr+"Content-Transfer-Encoding: 8bit\r\n";
    Server123headstr=Server123headstr+"Content-Type: application/xop+xml;charset=utf-8;type=\"application/soap+xml\"\r\n";
    Server123headstr=Server123headstr+"\r\n";
//*****************************************************************************************************************//
    Server123headstr=Server123headstr+"<s:Envelope xmlns:s=\"http://www.w3.org/2003/05/soap-envelope\"><s:Header><h:sessionId xmlns:h=\"CS8ServerV0\" xmlns=\"CS8ServerV0\">";
    Server123headstr=Server123headstr+__sessionId.toString()+"</h:sessionId></s:Header><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">";
    return Server123headstr;
}

//**********************************************************************************************************//
//**************************************************上电启动程序********************************************//
//**********************************************************************************************************//
function SoapClient1(IpAdress,SendMess){

var client=net.connect({port:851,host:IpAdress},function()
{
 client.write(SendMess);
});
  client.on('data', function(data) {
  client.end();
  });
};

   function DisablePower(IpAdress,port,action,SessionId){
  var strdata="";
  var vardata="true";
    if (action==true)
    {
      vardata="true"
    }
    else
    {
      vardata="false"
    }
  var strdata = __Server123headSession(IpAdress,port,"3",SessionId)+"<setPower xmlns=\"urn:CS8ServerV3\"><power xmlns=\"\">"+vardata+"</power></setPower></s:Body></s:Envelope>\r\n";
    strdata=strdata+"--uuid:+id=1--";
    var res = SoapClient1(IpAdress, strdata);
}
DisablePower('192.168.1.100','851',false,Res[1]);

}
)

app.get('/JointPos',checkJointin);
app.get('/JointPos',function(req,res){
res.render('JointPos.ejs',{joint1:Joint[0],joint2:Joint[1],joint3:Joint[2],joint4:Joint[3],joint5:Joint[4],joint6:Joint[5]});
});

app.get('/CartPos',checkCartin);


function checkCartin(req,res,next){ 
  function __Server0headsession(IpAdress,port,SessionId){
          Server0headstr="POST / HTTP/1.1\r\n"+"Content-Type: text/xml; charset=utf-8\r\n"+"SOAPAction: \"\"\r\n";
          Server0headstr=Server0headstr+"Host:"+IpAdress.toString()+":"+port.toString()+"\r\n";
          Server0headstr=Server0headstr+"Content-Length: 272\r\n";
          Server0headstr=Server0headstr+"Expect: 100-continue\r\n";
          Server0headstr=Server0headstr+"\r\n";
          Server0headstr=Server0headstr+"<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Header><h:sessionId xmlns:h=\"CS8ServerV0\" xmlns=\"CS8ServerV0\">"+SessionId.toString()+"</h:sessionId></s:Header><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">";
  }
  function getRobotCartPos(IpAdress,port,SessionId,frame,tool)
{
          strframetool="<frame>"+frame+"</frame>";
          strframetool=strframetool+"<tool>"+tool+"</tool>";
          strdata=__Server0headsession(IpAdress,port,SessionId)+"<getRobotJntCartPos xmlns=\"CS8ServerV0\"><robot xmlns=\"\">0</robot>"+strframetool+"</getRobotJntCartPos></s:Body></s:Envelope>";
          var res = SoapClient1(IpAdress, strdata);
          console.log
}

function SoapClient1(IpAdress,SendMess){
var client=net.connect({port:851,host:IpAdress},function()
{
  console.log(SendMess);
 client.write(SendMess);
});
  client.on('data', function(data) {
  console.log(data.toString());
  client.end();
  });
}

getRobotCartPos('192.168.1.100 ','851',Res[1],frame,tool);

}



function checkJointin(req,res,next){

  function getRobotJntCartPos(IpAdress,port,SessionId)
{
   console.log(SessionId);
   var strdata=__Server0headsession(IpAdress,port,SessionId)+"<getRobotJointPos xmlns=\"CS8ServerV0\"><robot xmlns=\"\">0</robot></getRobotJointPos></s:Body></s:Envelope>";
   var res = SoapClient1(IpAdress, strdata);
}

function __Server0headsession(IpAdress,port,SessionId){
  var __sessionId=SessionId;
  Server0headstr="POST / HTTP/1.1\r\n"+"Content-Type: text/xml; charset=utf-8\r\n"+"SOAPAction: \"\"\r\n";
  Server0headstr=Server0headstr+"Host:"+IpAdress.toString()+":"+port.toString()+"\r\n";
  Server0headstr=Server0headstr+"Content-Length: 272\r\n";
  Server0headstr=Server0headstr+"Expect: 100-continue\r\n";
  Server0headstr=Server0headstr+"\r\n";
  Server0headstr=Server0headstr+"<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Header><h:sessionId xmlns:h=\"CS8ServerV0\" xmlns=\"CS8ServerV0\">"+__sessionId.toString()+"</h:sessionId></s:Header><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">";
  return Server0headstr
}


function SoapClient1(IpAdress,SendMess){
var client=net.connect({port:851,host:IpAdress},function()
{
 client.write(SendMess);
});
  client.on('data', function(data) {
 var str1=data.toString();
　var reg = /<item>(\-?[0-9]+\.[0-9]+)<\/item>/g; 
 var i=0;
 while(res=reg.exec(str1)){
  Joint[i]=res[1];
  Joint[i]=Joint[i];
  i++; 
 }
  client.end();
  });
}

 function wait(){
       if (Joint[0]=='') {    
                console.log('error'); 
                wait();   
       }
}
  getRobotJntCartPos('192.168.1.100 ','851',Res[1]);
  setTimeout(function(){
     next();
  },200)
}










app.listen(3000);
