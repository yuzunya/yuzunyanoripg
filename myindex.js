function play_se(){
    var warning = new Audio('Warning-Siren01-2.mp3');
    
    warning.play();
   
    navigator.vibrate([200,100,200,100,200,100,200])
    }
    
    
    $(function(){
    //ページ読み込みが完了すると実行

    //ブラウザバック禁止
history.pushState(null,null,null);
$(window).on('popstate',function(e){
if(!e.orininalEvent.state){
  play_se();
  history.pushState(null,null,null)
  return;
}
});


    //モーダル表示
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
    $('#alert').modal('close');
    play_se();
    });
    
    
    //端末情報取得
    var device = navigator.userAgent.match(/Android|iPhone|ipad/);
    if(device == null){
      device = '端末';
    }
    $('#device').text(device);
    
    
    //カウントダウン処理
    var time = 200;
    setInterval(function(){
    time--;
    $('#timer').text(time);
    },1000);
    });
