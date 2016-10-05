　　var str ="<item>1.2</item><item>2</item><item>3</item><item>4</item><item>5</item><item>0</item></pos>"
  
    var str1=str.toString();
　　var reg = /<item>(\-?[0-9]+\.[0-9]+)<\/item>/g;   

res = reg.exec(str1);
 console.log(res); 