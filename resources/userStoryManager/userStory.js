ccm.component({name:"userStory",config:{html:[ccm.store,{local:"https://bkirsc2s.github.io/ccm-components/resources/userStoryManager/templates.json"}],key:"userStory",store:[ccm.store,{url:"ws://ccm2.inf.h-brs.de/index.js",store:"userStory"}],style:[ccm.load,"https://bkirsc2s.github.io/ccm-components/resources/userStoryManager/style.css"],user:[ccm.instance,"https://kaul.inf.h-brs.de/ccm/components/user2.js"]},Instance:function(){var e,t=this;t.init=function(r){t.store.onChange=function(){t.render()},e=1,r()},t.render=function(r){function c(e){t.store.set(e,function(){t.render()})}var n=ccm.helper.element(t);n.html(ccm.helper.html(t.html.get("main"))),t.store.get(t.key,function(s){function o(e){console.log(e);var s=ccm.helper.find(t,".userStorys");s.append(ccm.helper.html(t.html.get("usTable")));var o=ccm.helper.find(t,".usTable");o.append(ccm.helper.html(t.html.get("usTableHeader")));for(var l=0;l<e.storys.length;l++){var a=e.storys[l];o.append(ccm.helper.html(t.html.get("userStory"),{name:ccm.helper.val(a.name),text:ccm.helper.val(a.text),cost:ccm.helper.val(a.cost),project:ccm.helper.val(a.project),user:ccm.helper.val(a.user),id:l,clickDone:function(){$(this).parent().addClass("done"),e.storys[$(this).parent().attr("id")].done=!e.storys[$(this).parent().attr("id")].done,c(e)},clickDelete:function(){e.storys.splice($(this).parent().attr("id"),1),c(e)}})),a.done&&$(".userStory#"+l).addClass("done")}n.append(ccm.helper.html(t.html.get("input"),{usSubmit:function(){var r=ccm.helper.val(ccm.helper.find(t,"#usName").val().trim()),n=ccm.helper.val(ccm.helper.find(t,"#usText").val().trim()),s=ccm.helper.val(ccm.helper.find(t,"#usProj").val().trim()),o=ccm.helper.val(ccm.helper.find(t,"#usCost").val().trim());if(""!==r)return t.user.login(function(){e.storys.push({name:r,text:n,cost:o,project:s,user:t.user.data().key,done:!1}),c(e)}),!1},projSubmit:function(){var r=ccm.helper.val(ccm.helper.find(t,"#projName").val().trim()),n=ccm.helper.val(ccm.helper.find(t,"#projText").val().trim());if(""!==r)return e.projects.push({name:r,text:n}),c(e),!1}}));for(var m=ccm.helper.find(t,"#usProj"),l=0;l<e.projects.length;l++)m.append("<option>"+e.projects[l].name+"</option>");r&&r()}null===s?t.store.set({key:t.key,storys:[],projects:[]},o):o(s),ccm.helper.find(t,"th").click(function(){var r;switch($(this).attr("id")){case"name":r=function(t,r){return t.name>r.name?1*e:r.name>t.name?-1*e:0};break;case"descr":r=function(t,r){return t.text>r.text?1*e:r.text>t.text?-1*e:0};break;case"user":r=function(t,r){return t.user>r.user?1*e:r.user>t.user?-1*e:0}}s.storys.sort(r),e*=-1,t.render()})})}}});