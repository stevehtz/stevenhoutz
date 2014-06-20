$(function(){
  var userFeed = new Instafeed({
      get: 'user',
      userId: 675024399,
      accessToken: '675024399.467ede5.d55a1314b5384b9a985c1dc53301e10b',
      template: '<a href="{{link}}"><img src="{{image}}" /></a>',
      target: 'instafeed'
  });
  userFeed.run();
});