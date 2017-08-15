let express=require('express');
let bodyParser=require('body-parser');
let app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000);
let ad=require('./home/ad');
//广告接口
app.get('/api/ad',(req,res)=>{
    res.send(ad)
});
let list=require('./home/list');
//获取列表 需要传递城市,页码
app.use(express.static('../dist'));
app.get('/api/list/:city/:page',(req,res)=>{
       res.send(list)
});
let info=require('./detail/info');
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info)
});
let comment=require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment)
});

//订单列表 用户名

let orderList=require('./orderlist/orderList');
app.get('/api/orderlist/:username',(req,res)=>{
    res.send(orderList)
});
//提交评论
app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'})
});













