
var http=require('http');  
let start=12
let count=13
let url='http://api.douban.com/v2/movie/top250?'
url+='start='+start+'&count='+count
//get 请求外网  
http.get(url,function(req,res){  
    var html='';  
    req.on('data',function(data){  
        html+=data;  
    });  
    req.on('end',function(){  
        console.info(html);  
    });  
}); 

console.log(datas)