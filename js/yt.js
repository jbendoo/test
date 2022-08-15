// You need an API key + YouTube Data V3 activation, to have a working AJAX response.

// Récupération des vidéos depuis l'API YouTube

$(function () {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      chart: 'chartUnspecified',
      channelId: 'UCgq_SIC_NbPFeD8kNPTeoPA',
      type: 'video',
      maxResults: 3,
      key: 'AIzaSyAmWTwHS7h8WzVn_72gtIdtOgRPP8tPYq0',

      order: 'date'
    }
  }).done(function (response) {

    // Récupérer id.videoId

    /*alert(response.items[0].snippet.title);
    alert(response.items[0].snippet.description);
    alert(response.items[0].snippet.thumbnails.default.url);*/

    let myFirstVideos = response.items[0].id.videoId;
    let mySecondVideos = response.items[1].id.videoId;
    let myThirdVideos = response.items[2].id.videoId;

    // Pousser le résultat obtenu dans un tableau

    let myArrayVideos = [];
    myArrayVideos.push(myFirstVideos, mySecondVideos, myThirdVideos);
    //let myArrayVideos = response.items;

    // Boucler sur le tableau et à chaque itération créer un nouveau clone avec un nouvel attribut src
    let iframePlayer = $('#mainPlayer');
    console.log(iframePlayer);
    var i = 1;

    myArrayVideos.forEach(function (item) {

      let clone = iframePlayer.clone();
      clone.removeClass('hide');
      clone.attr("src", 'https://www.youtube.com/embed/' + item);
      var divvedid = "#myVideo" + i;
      clone.appendTo(divvedid);
      ///////////////////////////////////////////////////////////



      i++;

    });
    for (var i = 0; i < 3; i++) {
      var id = '#info_yt_'+i ; 
      $(id).append(
        '<h5  class="category text-info">'+'...'
        + response.items[i].snippet.title.substr(0,30)+
        '</h5>' +
        '<p class="card-description">'
        + response.items[i].snippet.description + '</p>');
    }
    






  }).fail(function () {

    console.log('Error !');

  })
});

