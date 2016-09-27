var net=require('net');

var client=net.connect({port:2000,host:'10.221.40.46 '},function()
{
  // console.log("client connnected!");
 client.write("fadfa");

});

client.on('data',function(data)
{
   console.log(data.toString());
   client.end();
}
);

client.on('end',function(){
console.log('client disconnected');
});
