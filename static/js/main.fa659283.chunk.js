(this.webpackJsonpgrooving=this.webpackJsonpgrooving||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(9),c=a.n(i),l=(a(15),a(2)),o=a(3),u=a(1),p=a(4),h=a(5),d=(a(16),a(17),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleKeyPress=function(e){"Enter"===e.key&&n.search()},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("input",{onKeyPress:this.handleKeyPress,onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),s.a.createElement("button",{className:"SearchButton",onClick:this.search},"Search"))}}]),a}(s.a.Component)),m=(a(18),a(19),a(20),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.preview=n.preview.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"preview",value:function(){this.props.preview(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?s.a.createElement("div",{class:"trackButton"},s.a.createElement("button",{className:"Track-action",onClick:this.removeTrack,id:"minus"},"\u2212")):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"trackButton"},s.a.createElement("button",{className:"Track-action",id:"plus",onClick:this.addTrack},"\uff0b")),s.a.createElement("div",{class:"trackButton"},s.a.createElement("button",{className:"Track-action",onClick:this.preview},"\u27a4")))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Track"},s.a.createElement("div",{className:"Track-information"},s.a.createElement("h3",null,this.props.track.name),s.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),a}(s.a.Component)),y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return s.a.createElement(m,{track:t,key:t.id,previewUrl:e.props.previewUrl,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval,preview:e.props.preview})})))}}]),a}(s.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).dis=n.dis.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"dis",value:function(e){var t=document.querySelector(".playlist"),a=document.querySelector(".App"),n=document.querySelector("h1"),r=document.querySelector(".Playlist1"),s=document.querySelector(".SearchBar");e.target.parentNode.style="display: none;",t.style="display: initial; width: 25%",a.style="padding-left: 30%",n.style="left: -7%",r.style="margin-left: 3%; margin-right: 3%;",s.style="margin-top: 60%;"}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"SearchResults"},s.a.createElement("button",{className:"disButton",onClick:this.dis},"Show Playlists"),s.a.createElement("h2",null,"Results"),s.a.createElement(y,{tracks:this.props.searchResults,previewUrl:this.props.previewUrl,onAdd:this.props.onAdd,preview:this.props.preview})))}}]),a}(s.a.Component),f=(a(21),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Playlist1"},s.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),s.a.createElement(y,{tracks:this.props.playlistTracks,isRemoval:!0,onRemove:this.props.onRemove}),s.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),a}(s.a.Component)),k=a(6),b=a.n(k),g=a(7),j={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("5ac18e2dcacf4b9fba01cb5bc3be2240","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000");window.location=r},logout:function(){var e=window.open("https://www.spotify.com/logout/","Spotify Logout","width=700,height=500,top=40,left=40");setTimeout((function(){e.close(),window.location.reload()}),1200)},search:function(e){return Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=j.getAccessToken(),t.next=3,fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(a)}});case 3:return n=t.sent,t.next=6,n.json();case 6:if((r=t.sent).tracks){t.next=9;break}return t.abrupt("return",[]);case 9:return t.abrupt("return",r.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})));case 10:case"end":return t.stop()}}),t)})))()},previewTrack:function(e){return Object(g.a)(b.a.mark((function t(){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=j.getAccessToken(),t.next=3,fetch("https://api.spotify.com/v1/tracks/".concat(e,"?market=US"),{headers:{Authorization:"Bearer ".concat(a)}});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,console.log(r.preview_url),t.abrupt("return",r.preview_url);case 9:case"end":return t.stop()}}),t)})))()},getPlaylists:function(){return Object(g.a)(b.a.mark((function e(){var t,a,n,r,s,i,c,l,o,u,p;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getAccessToken(),a={Authorization:"Bearer ".concat(t)},e.next=4,fetch("https://api.spotify.com/v1/me",{headers:a});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,s=r.id,e.next=11,fetch("https://api.spotify.com/v1/users/".concat(s,"/playlists"),{headers:a});case 11:return i=e.sent,e.next=14,i.json();case 14:if((c=e.sent).items){e.next=18;break}return console.log("no saved playlists"),e.abrupt("return");case 18:return l=[],o=[],u=[],p=c.items.map((function(e){var t=[],a=e.id,n=e.name,r=e.tracks.href;return t.push(n,a,r),l.push(t),e.tracks.href})),e.next=24,Promise.all(p.map(function(){var e=Object(g.a)(b.a.mark((function e(a){var n,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,r=[],e.next=6,n.json();case 6:s=e.sent,i=s.items.map((function(e){return e.track.name})),r.push(n.url,i),o.push(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 24:return l.forEach((function(e){var t=[],a=e[2],n=o.filter((function(e){return e[0]===a}));t.push(e,n[0][1]),u.push(t)})),e.abrupt("return",u);case 26:case"end":return e.stop()}}),e)})))()},savePlaylist:function(e,t){return Object(g.a)(b.a.mark((function a(){var n,r,s,i,c,l,o,u;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t.length){a.next=2;break}return a.abrupt("return");case 2:return n=j.getAccessToken(),r={Authorization:"Bearer ".concat(n)},a.next=6,fetch("https://api.spotify.com/v1/me",{headers:r});case 6:return i=a.sent,a.next=9,i.json();case 9:return c=a.sent,s=c.id,a.next=13,fetch("https://api.spotify.com/v1/users/".concat(s,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})});case 13:return l=a.sent,a.next=16,l.json();case 16:return o=a.sent,u=o.id,a.abrupt("return",fetch("https://api.spotify.com/v1/users/".concat(s,"/playlists/").concat(u,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})}));case 19:case"end":return a.stop()}}),a)})))()},deletePlaylist:function(e){var t=j.getAccessToken(),a={Authorization:"Bearer ".concat(t)};return fetch("https://api.spotify.com/v1/playlists/".concat(e,"/followers"),{headers:a,method:"DELETE"})}},O=j,w=(a(23),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"preview"})}}]),a}(s.a.Component)),E=(a(24),a(25),a(26),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).deletePlaylist=n.deletePlaylist.bind(Object(u.a)(n)),n.showDelete=n.showDelete.bind(Object(u.a)(n)),n.goBack=n.goBack.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"deletePlaylist",value:function(){this.props.delete(this.props.playlistId)}},{key:"showDelete",value:function(e){e.target.style="display:none",e.target.previousSibling.style="display: flex;",e.target.nextSibling.style="display: flex"}},{key:"goBack",value:function(e){e.target.style="display:none",e.target.previousSibling.style="display: flex",e.target.previousSibling.previousSibling.style="display: none"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.props.playlists.map((function(t,a){return 0===a?s.a.createElement("div",{key:t[0]+1,className:"playDiv"},s.a.createElement("h2",{key:t[0]+2,className:"playlistNames"},t[0]),s.a.createElement("button",{key:t[0]+3,className:"fdBut",id:"fdbut",onClick:e.deletePlaylist},"Delete"),s.a.createElement("button",{key:t[0]+4,className:"dBut",onClick:e.showDelete},"-"),s.a.createElement("button",{className:"bBut",onClick:e.goBack},"\u276f")):s.a.createElement("ul",{key:e.props.playlistId,className:"playlistTracks"},t.map((function(e,t){return s.a.createElement("li",{key:t},e)})))})))}}]),a}(s.a.Component)),T=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"playlistTracks"},this.props.playlists.map((function(t,a){return s.a.createElement(E,{playlists:t,delete:e.props.delete,playlistId:t[0][1],key:a})})))}}]),a}(s.a.Component),N=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).disPlay=n.disPlay.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.loadPlaylists()}},{key:"disPlay",value:function(e){e.target.parentNode.style="display: none;";var t=document.querySelector(".SearchResults"),a=document.querySelector(".App"),n=document.querySelector("h1");t.style="display: flex; ",a.style="padding-left: 0",n.style="left: 0"}},{key:"render",value:function(){return s.a.createElement("div",{className:"playlist"},s.a.createElement("button",{className:"playlistBut",onClick:this.disPlay},"Show Results"),s.a.createElement(T,{playlists:this.props.playlists,delete:this.props.delete}))}}]),a}(s.a.Component),P=(a(27),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).logout=n.logout.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"logout",value:function(){this.props.logout()}},{key:"render",value:function(){return s.a.createElement("button",{className:"logout",onClick:this.logout},"Log-Out")}}]),a}(s.a.Component)),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"playlist",playlistTracks:[],playlists:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n.preview=n.preview.bind(Object(u.a)(n)),n.loadPlaylist=n.loadPlaylist.bind(Object(u.a)(n)),n.forgetPlaylist=n.forgetPlaylist.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks,a=this.state.searchResults;if(!t.find((function(t){return t.id===e.id}))){t.push(e);var n=a.indexOf(e);a.splice(n,1),this.setState({searchResults:a}),this.setState({playlistTracks:t})}}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks,a=this.state.searchResults;a.unshift(e),t=t.filter((function(t){return t.id!==e.id})),console.log(t),this.setState({searchResults:a}),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));O.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]}),e.loadPlaylist()}))}},{key:"search",value:function(e){var t=this;O.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"preview",value:function(e){var t=e.id,a=document.querySelector(".preview");O.previewTrack(t).then((function(e){a.style="display:flex;",a.innerHTML=e?'<object type="text/html" data="'.concat(e,'" ></object>'):"<p> No preview available for this track </p>"}))}},{key:"loadPlaylist",value:function(){var e=this;O.getPlaylists().then((function(t){e.setState({playlists:t})}))}},{key:"forgetPlaylist",value:function(e){var t=this;O.deletePlaylist(e).then((function(){t.loadPlaylist()}))}},{key:"logout",value:function(){O.logout()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Gr",s.a.createElement("span",{className:"highlight"},"oo"),"ving"),s.a.createElement(N,{loadPlaylists:this.loadPlaylist,delete:this.forgetPlaylist,playlists:this.state.playlists}),s.a.createElement("div",{className:"App"},s.a.createElement(v,{className:"App-playlist",searchResults:this.state.searchResults,onAdd:this.addTrack,preview:this.preview}),s.a.createElement("div",{className:"midDiv"},s.a.createElement(d,{onSearch:this.search,searchTerm:this.state.searchTerm}),s.a.createElement(w,null)),s.a.createElement(f,{className:"App-playlist",playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}),s.a.createElement(P,{logout:this.logout})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fa659283.chunk.js.map