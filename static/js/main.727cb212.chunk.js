(this["webpackJsonpapp-peliculas"]=this["webpackJsonpapp-peliculas"]||[]).push([[0],{10:function(e,t,c){e.exports={details:"MovieDetails_details__3vCMx",col:"MovieDetails_col__2seZ8",image:"MovieDetails_image__1Byud"}},12:function(e,t,c){e.exports={movie:"Movie_movie__12Fs6",image:"Movie_image__28Bjn",texto:"Movie_texto__ByAs0"}},19:function(e,t,c){e.exports={grids:"Movies_grids__xnjx3"}},24:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(17),a=c.n(s),o=(c(24),c(11)),r=c(12),j=c.n(r),l=c(8),d=c(1),h=function(e){var t=e.movie;return Object(d.jsx)("li",{className:j.a.movie,children:Object(d.jsxs)(l.b,{to:"/movieApp/".concat(t.id),children:[Object(d.jsx)("img",{className:j.a.image,width:230,height:345,alt:t.title,src:"https://image.tmdb.org/t/p/w300"+t.poster_path}),Object(d.jsx)("p",{className:j.a.texto,children:t.title})]})})},m=c(19),u=c.n(m);function b(e){return fetch("https://api.themoviedb.org/3"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRiZWFkMWM5MjJhYTA4NmFlOTZlMGI1Mzc2ZDdlYyIsInN1YiI6IjYwY2I1MWVjMjQ3NmYyMDA3OThmMjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RTcRcjh4RSgkjD0EDzIO89Rdgyi3hSN8rTId8bKZWIY","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()}))}var p=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){b("/discover/movie").then((function(e){n(e.results)})).catch((function(e){return console.log(e.message)}))}),[]),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:u.a.grids,children:c.map((function(e){return Object(d.jsx)(h,{movie:e},e.id)}))})})},v=c(2),O=c(10),x=c.n(O),f=function(){var e=Object(v.f)().movieId,t=Object(i.useState)(null),c=Object(o.a)(t,2),n=c[0],s=c[1];if(Object(i.useEffect)((function(){b("/movie/".concat(e)).then((function(e){s(e)})).catch((function(e){return console.log(e.message)}))}),[e]),!n)return null;var a="https://image.tmdb.org/t/p/w300".concat(n.poster_path);return Object(d.jsxs)("div",{className:x.a.details,children:[Object(d.jsx)("img",{src:a,alt:n.title,className:"".concat(x.a.col," ").concat(x.a.image)}),Object(d.jsxs)("div",{className:x.a.col,children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Title: "}),n.title]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Genres: "}),n.genres.map((function(e){return e.name})).join(", ")]}),Object(d.jsx)("p",{children:n.overview})]})]})},g=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)("div",{className:"moviesTitleContainer",children:Object(d.jsx)(l.b,{to:"/movieApp",children:Object(d.jsx)("h2",{className:"moviesTitle",children:"Movies"})})}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{path:"/movieApp/:movieId",children:Object(d.jsx)(f,{})}),Object(d.jsx)(v.a,{path:"/movieApp",children:Object(d.jsx)(p,{})})]})]})})};var _=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{})})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.727cb212.chunk.js.map