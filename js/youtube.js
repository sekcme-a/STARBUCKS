var tag = document.createElement('script'); //24

      tag.src = "https://www.youtube.com/iframe_api"; //24
      var firstScriptTag = document.getElementsByTagName('script')[0]; //24
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //24

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() { //24
        // <div id="player"></div>
        new YT.Player('player', { //24
          videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID //24
          playerVars: { //24
            autoplay: true, // 자동 재생 유무 //24
            loop: true, // 반복 재생 유무 //24
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록 //24
          }, //24
          events: { //24
            onReady: function (event){ //24
              event.target.mute() //음소거 //24
            } //24
          } //24
        }); //24
      }