var index_array,
    array_key,
    data_js,
    i;

$("#LIST button").click(function(event){       /*List*/
  event.preventDefault();
  $.ajax({             
    dataType :'json',
    method:"post",
    type : "post",
    url:"./list",
    success:function(data_js){ 
      $(".list_data").empty();
      array_key= Object.keys(data_js.students);
      index_array = array_key.length;
      for(i=1 ; i<index_array ; i++){
        $(".list_data").append("\""+array_key[i]+"\":\""+data_js.students[array_key[i]]+"\"<br>");
      }
    }
  });
});

$("#search_ID button").click(function(event){       /*SearCH*/
  event.preventDefault();
  $.ajax({                     
    method:"get",
    url:"./search",
    data:{
      ID:$("#search_ID input[name='ID']").val(),
    },
    success:function(data){
      $("#search_result").text(data);
    }
  });
});

$("#add_NEW button").click(function(event){       /*ADD NEW*/ 
  event.preventDefault();
  $.ajax({
    method:"get",
    url:"./ADD",
    data:{
      sname:$("#add_NEW input[name='sname']").val(),
      ID   :$("#add_NEW input[name='ID']   ").val()
    },
    success:function(data){

      $("#add_NEW_content").text(data);
      index_array++;
    }
  });
});

$("#delete button").click(function(event){       /*DElete*/ 
  event.preventDefault();

  $.ajax({
    method:"get",
    url:"./delete",
    data:{
      ID   :$("#delete input[name='ID']   ").val()
    },
    success:function(data){
      $("#delete_data").text(data);
      index_array--;
    }
  });
});

