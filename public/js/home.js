
function readClicked(){
    $.ajax({
      url: "/read",
      type: "GET",
      data: {identifier:$("#identifier").val()},
      success: function(data){
        if (!data)
          alert("bad read");
        else if (data.retVal) {
          $("#name").val(data.retVal.name);
          alert("good read");
        } else
          alert("bad read");
      } ,     
      dataType: "json"
    });     
  return false;
}
function createClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {identifier:$("#identifier").val(),name:$("#name").val()},
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          alert("good create");
        else
          alert("bad create");
        } ,     
      dataType: "json"
    });     
  return false;
}
function updateClicked(){
    $.ajax({
      url: "/update",
      type: "PUT",            
      data: {identifier:$("#identifier").val(),name:$("#name").val()},
      success: function(data){
        if (!data)
          alert("bad update");
        else if (data.retVal)
          alert("good update");
        else
          alert("bad update");
      } ,     
      dataType: "json"
    });     
  return false;
}
function deleteClicked(){
    $.ajax({
      url: "/delete/" + Number($("#identifier").val()),
      type: "DELETE",
      success: function(data) { 
        if (!data)
          alert("bad delete");
        else if (data.retVal)
          alert("good delete");
        else
          alert("bad delete");
      } ,   
      dataType: "json"
    });  
    return false;             
}      
$(document).ready(function(){        
  $("#readButton").click(readClicked);
  $("#createButton").click(createClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);
}); 
