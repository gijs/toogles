"use strict";var tooglesApp=angular.module("tooglesApp",["ngSanitize"]).config(["$routeProvider",function(a){a.when("/browse",{templateUrl:"views/search.html",controller:"ListCtrl"}),a.when("/browse/:category",{templateUrl:"views/search.html",controller:"ListCtrl"}),a.when("/search/:query",{templateUrl:"views/search.html",controller:"ListCtrl"}),a.when("/view/:id",{templateUrl:"views/view.html",controller:"ViewCtrl"}),a.when("/user/:username",{templateUrl:"views/view.html",controller:"ViewCtrl"}),a.otherwise({redirectTo:"/browse"})}]);(function(a,b,c){"use strict";var d=a(document),e=b.Modernizr;a(document).ready(function(){a.fn.foundationAlerts?d.foundationAlerts():null,a.fn.foundationButtons?d.foundationButtons():null,a.fn.foundationAccordion?d.foundationAccordion():null,a.fn.foundationNavigation?d.foundationNavigation():null,a.fn.foundationTopBar?d.foundationTopBar():null,a.fn.foundationCustomForms?d.foundationCustomForms():null,a.fn.foundationMediaQueryViewer?d.foundationMediaQueryViewer():null,a.fn.foundationTabs?d.foundationTabs({callback:a.foundation.customForms.appendCustomMarkup}):null,a.fn.foundationTooltips?d.foundationTooltips():null,a.fn.foundationMagellan?d.foundationMagellan():null,a.fn.foundationClearing?d.foundationClearing():null,a.fn.placeholder?a("input, textarea").placeholder():null})})(jQuery,this),tooglesApp.controller("ListCtrl",["$scope","$http","$routeParams","$location","$rootScope",function(a,b,c,d,e){e.previous=d.path(),a.location=d;var f=24;window.searchCallback=function(b){a.videos?a.videos.push.apply(a.videos,b.feed.entry):a.videos=b.feed.entry},a.page=0,a.loadMore=function(){a.page=a.page+1,a.search()},a.categories=[{key:"Autos",title:"Autos & Vehicles"},{key:"Comedy",title:"Comedy"},{key:"Education",title:"Education"},{key:"Entertainment",title:"Entertainment"},{key:"Film",title:"Film & Animation"},{key:"Howto",title:"How To & Style"},{key:"Music",title:"Music"},{key:"News",title:"News & Politics"},{key:"People",title:"People & Blogs"},{key:"Animals",title:"Pets & Animals"},{key:"Tech",title:"Science & Technology"},{key:"Sports",title:"Sports"},{key:"Travel",title:"Travel & Events"}],a.search=function(){var d=a.page*f+1,e="https://gdata.youtube.com/feeds/api/standardfeeds/most_viewed?time=today&start-index="+d+"&max-results="+f+"&alt=json&callback=searchCallback";document.title="Toogles | Awesome goggles for YouTube";if(c.query!==undefined&&c.query!==""&&c.query!=="0"){document.title=c.query+" | Toogles",a.query=c.query;var e="https://gdata.youtube.com/feeds/api/videos?start-index="+d+"&max-results="+f+"&alt=json&q="+c.query+"&callback=searchCallback"}else if(c.category!==undefined){document.title=c.category+" | Toogles";var e="https://gdata.youtube.com/feeds/api/standardfeeds/most_viewed_"+c.category+"?time=today&start-index="+d+"&max-results="+f+"&alt=json&callback=searchCallback"}b.jsonp(e)},a.urlToID=function(a){var b=a.split("/");return b.pop()},a.search()}]),tooglesApp.controller("ViewCtrl",["$scope","$http","$routeParams","$location","$rootScope",function(a,b,c,d,e){a.location=d,a.showSidebar=!0,window.viewCallback=function(b){a.video=b.entry;var c=b.entry.media$group.media$description.$t,d=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;c=c.replace(d,"<a href='$1'>$1</a>"),c=c.replace(/\n/g,"<br />"),a.video.desc=c,a.video.authorname=b.entry.author[0].uri.$t.split("/").pop(),document.title=a.video.title.$t+" | Toogles"},a.urlToID=function(a){if(a){var b=a.split(":");return b.pop()}},a.goBack=function(){e.previous?history.back():d.path("/browse")};var f="https://gdata.youtube.com/feeds/api/videos/"+c.id+"?v=2&alt=json&callback=viewCallback";b.jsonp(f)}]),tooglesApp.directive("whenScrolled",function(){return function(a,b,c){var d=b[0];window.onscroll=function(){window.innerHeight+document.body.scrollTop>=document.body.offsetHeight&&a.$apply(c.whenScrolled)}}});