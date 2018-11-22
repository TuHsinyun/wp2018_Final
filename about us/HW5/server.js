const express = require('express'); /*Load the express*/
const app =express(); //define a express function 
const port = 11999;
var fs =require('fs'),
    display = fs.readFileSync('data.json','utf8'),
    data_js = JSON.parse(display);

app.listen(11999,function(){
});
app.use(express.static(__dirname +'/public'));

app.post('/list' , function(req,res){         /*LIST*/
  res.send(data_js);
});

app.get('/search' ,function(req,res){        /*SEARCH*/
  var search_ID = req.query.ID;
  var search_result = data_js.students[search_ID];
  res.send("Student's name is "+search_result);
});

app.get('/ADD' ,function(req,res){           /* ADD*/
  var add_ID = req.query.ID;
  data_js.students[add_ID] = req.query.sname;
  display = JSON.stringify(data_js);

  fs.writeFile('data.json',display,(err)=>{
    if(err) throw err ;  
    else return;
  });
  res.send(`${req.query.sname},${req.query.ID} Added!` );
});

app.get('/delete' ,function(req,res){       /*delete*/
  var delete_ID = req.query.ID;
  delete data_js.students[delete_ID];
  display= JSON.stringify(data_js);

  fs.writeFile('data.json',display,(err)=>{
    if(err) throw err;
    else return ;
  });
  res.send(delete_ID +' is deleted!');
});
