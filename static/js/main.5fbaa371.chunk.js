(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),s=a(8),i=a(1),r=a(2),m=a(4),u=a(3),d=a(5),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={willWatch:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.deleteMovie,c=t.addMovieToWillWatch,l=t.deleteMovieFromWillWatch;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h6",{className:"card-title"},a.title),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),this.state.willWatch?o.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),l(a)}},"Will Watch"):o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),c(a)}},"Will Watch")),o.a.createElement("button",{type:"button",onClick:function(){n(a)}},"Delete")))}}]),t}(o.a.Component),p="https://api.themoviedb.org/3",h="3f4ca4f3a9750da53450646ced312397",b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){console.log("MovieTabs willReceiveProps"),console.log("nextProps sort_by",e.sort_by),console.log("prevProps sort_by",this.props.sort_by)}},{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(t){a(e)}},c=function(e){return"nav-link ".concat(t===e?"active":"")};return console.log("MovieTabs render"),o.a.createElement("ul",{className:"tabs nav nav-pills"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("div",{className:c("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("div",{className:c("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("div",{className:c("vote_average.desc"),onClick:n("vote_average.desc")},"Vote avetage desc")))}}]),t}(o.a.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getMovies=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(h,"&sort_by=").concat(e.state.sort_by)).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results})})},e.deleteMovie=function(t){console.log(t.id);var a=e.state.movies.filter(function(e){return e.id!==t.id});console.log(a),e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=Object(s.a)(e.state.moviesWillWatch);a.push(t),e.setState({moviesWillWatch:a})},e.deleteMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter(function(e){return e.id!==t.id});e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"revenue.desc"},console.log("App constructor"),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("App didMount"),this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){console.log("App didUpdate"),t.sort_by!==this.state.sort_by&&(console.log("App call api"),this.getMovies())}},{key:"render",value:function(){var e=this;return console.log("App render",this.state.sort_by),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col-9"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12"},o.a.createElement(b,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),o.a.createElement("div",{className:"row"},this.state.movies.map(function(t){return o.a.createElement("div",{className:"col-6 mb-4",key:t.id},o.a.createElement(v,{data:t,deleteMovie:e.deleteMovie,addMovieToWillWatch:e.addMovieToWillWatch,deleteMovieFromWillWatch:e.deleteMovieFromWillWatch}))}))),o.a.createElement("div",{className:"col-3"},o.a.createElement("h4",null,"Will Watch: ",this.state.moviesWillWatch.length," movies"),o.a.createElement("ul",{className:"list-group"},this.state.moviesWillWatch.map(function(e){return o.a.createElement("li",{key:e.id,className:"list-group-item"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.vote_average)))})))))}}]),t}(o.a.Component);a(15),a(16);l.a.render(o.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5fbaa371.chunk.js.map