import{S as H,i as q,s as w,e as _,k as d,t as A,c,m as E,a as $,h as k,d as i,b as v,g as m,L as y,J as b,M as N,K as x,w as S,x as B,y as C,q as I,o as J,B as K}from"../chunks/vendor-e133cae4.js";function L(o){let t,r,a,n,f,l,u,h;return{c(){t=_("input"),r=d(),a=_("nav"),n=_("a"),f=A("Home"),this.h()},l(e){t=c(e,"INPUT",{}),r=E(e),a=c(e,"NAV",{});var s=$(a);n=c(s,"A",{"sveltekit:prefetch":!0,href:!0});var p=$(n);f=k(p,"Home"),p.forEach(i),s.forEach(i),this.h()},h(){v(n,"sveltekit:prefetch",""),v(n,"href",l="about/"+o[0])},m(e,s){m(e,t,s),y(t,o[0]),m(e,r,s),m(e,a,s),b(a,n),b(n,f),u||(h=N(t,"input",o[1]),u=!0)},p(e,[s]){s&1&&t.value!==e[0]&&y(t,e[0]),s&1&&l!==(l="about/"+e[0])&&v(n,"href",l)},i:x,o:x,d(e){e&&i(t),e&&i(r),e&&i(a),u=!1,h()}}}function M(o,t,r){let a="";function n(){a=this.value,r(0,a)}return[a,n]}class P extends H{constructor(t){super();q(this,t,M,L,w,{})}}function R(o){let t,r,a,n,f,l,u,h;return t=new P({}),{c(){S(t.$$.fragment),r=d(),a=_("a"),n=A("login!"),f=d(),l=_("a"),u=A("blah blah blah"),this.h()},l(e){B(t.$$.fragment,e),r=E(e),a=c(e,"A",{href:!0});var s=$(a);n=k(s,"login!"),s.forEach(i),f=E(e),l=c(e,"A",{href:!0});var p=$(l);u=k(p,"blah blah blah"),p.forEach(i),this.h()},h(){v(a,"href","/login"),v(l,"href","/blah")},m(e,s){C(t,e,s),m(e,r,s),m(e,a,s),b(a,n),m(e,f,s),m(e,l,s),b(l,u),h=!0},p:x,i(e){h||(I(t.$$.fragment,e),h=!0)},o(e){J(t.$$.fragment,e),h=!1},d(e){K(t,e),e&&i(r),e&&i(a),e&&i(f),e&&i(l)}}}class U extends H{constructor(t){super();q(this,t,null,R,w,{})}}export{U as default};