
const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
var cors = require('cors');
var mongoose = require("mongoose");
const app = express();


var nodemailer = require('nodemailer');
var router = express.Router();
app.use('/sayHello', router);
//router.post('/', handleSayHello);





app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// var port = process.env.PORT || 3000;
// var router = express.Router();
app.use(cors());
// app.use('/api', router);
// app.listen(port);
// console.log('REST API is runnning at ' + port);

mongoose.connect("mongodb+srv://tk9292:a1b2c3@cluster0.tvfxm.mongodb.net/bizz?retryWrites=true&w=majority",function(err,database){
//mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

//mongodb+srv://khalailyt:-PT/jK2B7$=aU)g,vwuU,xeE;=d7Uq@cluster0.9sq8m.mongodb.net/biz?retryWrites=true&w=majority
//mongodb+srv://tk9292:<password>@cluster0.tvfxm.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://tk9292:a1b2c3@cluster0.tvfxm.mongodb.net/bizz?retryWrites=true&w=majority

if(err)
console.log("Error"+err);
else{
    console.log("we are connected to database: "+database.name);
}

});

var Post= mongoose.model("Post",{

    name:String,
    subject:String,
    email:String,
    message: String

});
var Users= mongoose.model("Users",{

    userName:String,
    password:String

});



app.post("/posts",function(request,response){

    var posts= new Post(request.body);

    posts.save(function(err,post){

        if(err)
        {
            console.log("Error: "+err);
            response.status(500);
            response.send(err);
        }
        else {
            response.status(201);



            //function handleSayHello(req, res) {
                // Not the movie transporter!
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'asics17g@gmail.com', // Your email id
                        pass: 'rp9/w~Y2#IlQH|)^Uqv}&?GG:R%gBm' // Your password
                    }
                });

                  //  }
                    var text = 'Hello world from \n\n';
                    var mailOptions = {
                        from: 'asics17g@gmail.com', // sender address
                        to: 'asics17g@gmail.com', // list of receivers
                        subject: 'Email Example', // Subject line
                        text: text //, // plaintext body
                        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
                    };
                    transporter.sendMail(mailOptions, function(error, info){
                        if(error){
                            //console.log(error);
                            //response.json({yo: 'error'});
                            response.json({res: post, err: error});
                        }else{
                           // console.log('Message sent: ' + info.response);
                            //response.json({yo: info.response});
                            response.json({res: post, info: info});
                        };
                    });



                    //response.send(post);

        }



    });

});
app.post("/users",function(request,response){

    var users= new Users(request.body);
    users.save(function(err,user){
        if(err)
        {
            console.log("Error: "+err);
            response.status(500);
            response.send(err);
        }
        else {
            response.status(201);
            response.send(user);
        }
    });

});



app.get("/posts",function(request,response){
Post.find({},function(err,posts){

if(err)
{
    console.log("Error: "+err);
    response.status(500);
    response.send(err);
}
else{
 response.send(posts);

}


});


});
app.get("/users",function(request,response){
  Users.find({},function(err,users){
      if(err)
      {
          console.log("Error: "+err);
          response.status(500);
          response.send(err);
      }
      else{
      response.send(users);

      }
  });
});





/*
*/
app.use(express.static(__dirname + '/dist/biz'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/biz/index.html'));});
app.listen(process.env.PORT || 8080);
