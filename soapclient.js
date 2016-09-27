var net=require('net');
var IpAdress='10.221.40.46 ';   //公司
//var IpAdress='192.168.1.100 ';  //家
//var IpAdress='192.168.43.105';    //手机
Res='';	

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

function __Server0head(IpAdress,port){
	var Server0headstr = "POST / HTTP/1.1\r\n" + "Content-Type: text/xml; charset=utf-8\r\n" + "SOAPAction: \"\""
	Server0headstr = Server0headstr + "Host:" + IpAdress.toString() + ":" + port.toString() + "\r\n"
	Server0headstr = Server0headstr + "Content-Length: 272\r\n"
	Server0headstr = Server0headstr + "Expect: 100-continue\r\n"
	Server0headstr = Server0headstr + "\r\n"
	Server0headstr = Server0headstr + "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">"
	return Server0headstr 	
};

function wait(){
       if (Res=='') {    
              	console.log('error'); 
       	        wait();  	
       }
}

function login(){
	var logindata = __Server0head(IpAdress, 851) + "<login xmlns=\"CS8ServerV0\"><user>maintenance</user><pwd>spec_cal</pwd></login></s:Body></s:Envelope>"
	var res = SoapClient(IpAdress, logindata);
	setTimeout(function(){
      wait()
      console.log(Res[1]);
	},200)



}

login();