var net=require('net');
var IpAdress='10.221.40.46 ';
var port="851";
Res='';	

function SoapClient(IpAdress,SendMess){

var client=net.connect({port:851,host:IpAdress},function()
{
 client.write(SendMess);

});
	client.on('data', function(data) {
 //   var str=data.toString();  
 //   var regExp =/sid>([0-9])</;   
　//  　var res = regExp .exec(str); 
  //   var pus =0; 
 //    var currentDate = new Date();
     console.log(data.toString());

		client.end();
	});

};

//function __Server0head(IpAdress,port){
//	var Server0headstr = "POST / HTTP/1.1\r\n" + "Content-Type: text/xml; charset=utf-8\r\n" + "SOAPAction: \"\""
//	Server0headstr = Server0headstr + "Host:" + IpAdress.toString() + ":" + port.toString() + "\r\n"
//	Server0headstr = Server0headstr + "Content-Length: 272\r\n"
//	Server0headstr = Server0headstr + "Expect: 100-continue\r\n"
//	Server0headstr = Server0headstr + "\r\n"
//	Server0headstr = Server0headstr + "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">"
//	return Server0headstr 	
//};

function __Server123headSession(IpAdress,port,servertype){

    var __sessionId=3;
   
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


function PowerOn(IpAdress,port,action){
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

	var strdata = __Server123headSession(IpAdress,port,"3")+"<setPower xmlns=\"urn:CS8ServerV3\"><power xmlns=\"\">"+vardata+"</power></setPower></s:Body></s:Envelope>\r\n";
    strdata=strdata+"--uuid:+id=1--";
    var res = SoapClient(IpAdress, strdata);

}

PowerOn('10.221.40.46','851',true);