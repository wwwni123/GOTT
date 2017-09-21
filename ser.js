var http=require("http")
var fs=require("fs")
var url=require("url")
var mime=require("./NEW-API/mime.js")
var path=require("path")
var qs=require("querystring")
http.createServer(function(req,res){
    if (req.method=="GET") {
        //GET请求参数，包含在url中，可直接解析
        var q=url.parse(req.url,true).query
        console.log(q)
    }else if (req.method=="POST") {
        var str=""
        req.on("data",function(a){
            str+=a
        })
        req.on("end",function(){
            var postdata=qs.parse(str)
            console.log(postdata)
        })
    }
    var pathn=url.parse(req.url).pathname
    if (pathn=="/") {
        resdata("./index.html",res)   
    }else{
        resdata("."+pathn,res)
    }
}).listen(6565)
console.log("启动服务成功")
//声明一个函数，读取文件返回
function resdata(path1,res){
    fs.readFile(path1,function(err,data){
        if (err) {
            console.error(err)
        }else{
            console.log("读取文件成功")
            //取文件路径扩展名
            var extn=path.extname(path1).slice(1)
            var ctype=mime.types[extn]
            //设置响应头，Content-Type,允许跨域请求
            res.writeHead(200,
            {"Content-Type":ctype+";charset=utf-8","Access-Control-Allow-Origin":"*"})
            res.write(data)
            res.end()
            
        }
    })
}
