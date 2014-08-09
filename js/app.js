var client_id = 'a214c4836559c77';

$(document).on("click", "#upload-btn", function(){
  var preview = $('#preview');
  // get the input image
  var imgData = $('#upload-img')[0].files[0];
  $.ajax({
    url: 'https://api.imgur.com/3/image',
    type: 'POST',
    headers: {
        'Authorization': 'Client-ID '+ client_id
    },
    data: imgData,
    contentType: false,
    processData: false,
    success: function(result) {
      var id = result.data.id;
      $('.preview').css('display', 'block');
      preview.append("<a href='http://imgur.com/"+id+"'><img src='http://i.imgur.com/"+id+".png'></a>")
      console.log(id);
    }
  });
});

