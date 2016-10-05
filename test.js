var parseString = require('xml2js').parseString;
var xml = HTTP/1.1 100 Continue

HTTP/1.1 200 OK
Server: gSOAP/2.7
Content-Type: text/xml; charset=utf-8
Content-Length: 698
Connection: keep-alive

<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SCSV0="CS8ServerV0"><SOAP-ENV:Header><SCSV0:sessionId>42540328</SCSV0:sessionId></SOAP-ENV:Header><SOAP-ENV:Body><SCSV0:getRobotJointPosResponse><pos><item>3.1415926535897931</item><item>-0.19285613928945064</item><item>0.57692358300009172</item><item>-0.36405079206246926</item><item>1.2480510300815018</item><item>0.30536124638179357</item></pos></SCSV0:getRobotJointPosResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>

;
　　var reg = /<?(*)>/;   

res = reg.exec(xml.toString());
 console.log(res); 
//parseString(xml, function (err, result) {
//    console.dir(JSON.stringify(result));
//});