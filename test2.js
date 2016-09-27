　　var str = "sid>40249968</sid";   
　　var regExp = /sid>([0-9]+)</;   
　　var res = regExp .exec(str);    
　　console.log(res);