var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const l=u(t,n,e,o);return t[0](l)}}function u(t,e,o,l){return t[1]&&l?n(o.ctx.slice(),t[1](l(e))):o.ctx}function i(t,n,e,o,l,c,r){!function(t,n,e,o,l,c){if(l){const r=u(n,e,o,c);t.p(r,l)}}(t,n,e,o,function(t,n,e,o){if(t[2]&&o){const l=t[2](o(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|l[o];return t}return n.dirty|l}return n.dirty}(n,o,l,c),r)}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function a(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:m(t,o,n[o])}let g;function y(t){g=t}const b=[],_=[],x=[],v=[],k=Promise.resolve();let w=!1;function j(t){x.push(t)}let E=!1;const O=new Set;function A(){if(!E){E=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];y(n),N(n.$$)}for(y(null),b.length=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];O.has(n)||(O.add(n),n())}x.length=0}while(b.length);for(;v.length;)v.pop()();w=!1,E=!1,O.clear()}}function N(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const I=new Set;let L;function M(t,n){t&&t.i&&(I.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),L.c.push((()=>{I.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function S(t,n){const e={},o={},l={$$scope:1};let c=t.length;for(;c--;){const r=t[c],s=n[c];if(s){for(const t in r)t in s||(o[t]=1);for(const t in s)l[t]||(e[t]=s[t],l[t]=1);t[c]=s}else for(const t in r)l[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function T(t,n,o,r){const{fragment:s,on_mount:u,on_destroy:i,after_update:f}=t.$$;s&&s.m(n,o),r||j((()=>{const n=u.map(e).filter(c);i?i.push(...n):l(n),t.$$.on_mount=[]})),f.forEach(j)}function q(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,k.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(n,e,c,r,s,u,i,f=[-1]){const a=g;y(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||a.$$.root};i&&i(p.root);let $=!1;if(p.ctx=c?c(n,e.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=l)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](l),$&&B(n,t)),e})):[],p.update(),$=!0,l(p.before_update),p.fragment=!!r&&r(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();e.intro&&M(n.$$.fragment),T(n,e.target,e.anchor,e.customElement),A()}y(a)}class D{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("span"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function F(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("h5"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function G(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("h4"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function H(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("h3"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function J(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("h2"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function K(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("h1"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function Q(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("p"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function R(t){let e,o;const l=t[6].default,c=s(l,t,t[5],null);let r=[t[1],{class:t[2]}],u={};for(let t=0;t<r.length;t+=1)u=n(u,r[t]);return{c(){e=p("div"),c&&c.c(),h(e,u)},m(t,n){a(t,e,n),c&&c.m(e,null),o=!0},p(t,n){c&&c.p&&(!o||32&n)&&i(c,l,t,t[5],o?n:-1,null,null),h(e,u=S(r,[2&n&&t[1],(!o||4&n)&&{class:t[2]}]))},i(t){o||(M(c,t),o=!0)},o(t){P(c,t),o=!1},d(t){t&&d(e),c&&c.d(t)}}}function U(t){let n,e,o,c;const r=[R,Q,K,J,H,G,F,z],s=[];function u(t,n){return"div"===t[0]?0:"p"===t[0]?1:"h1"===t[0]?2:"h2"===t[0]?3:"h3"===t[0]?4:"h4"===t[0]?5:"h5"===t[0]?6:7}return n=u(t),e=s[n]=r[n](t),{c(){e.c(),o=$("")},m(t,e){s[n].m(t,e),a(t,o,e),c=!0},p(t,[c]){let i=n;n=u(t),n===i?s[n].p(t,c):(L={r:0,c:[],p:L},P(s[i],1,1,(()=>{s[i]=null})),L.r||l(L.c),L=L.p,e=s[n],e?e.p(t,c):(e=s[n]=r[n](t),e.c()),M(e,1),e.m(o.parentNode,o))},i(t){c||(M(e),c=!0)},o(t){P(e),c=!1},d(t){s[n].d(t),t&&d(o)}}}function V(t,e,o){let l,{$$slots:c={},$$scope:r}=e,{tag:s="span"}=e,{effect:u}=e,{class:i}=e;const a={};return t.$$set=t=>{o(7,e=n(n({},e),f(t))),"tag"in t&&o(0,s=t.tag),"effect"in t&&o(3,u=t.effect),"class"in t&&o(4,i=t.class),"$$scope"in t&&o(5,r=t.$$scope)},t.$$.update=()=>{Object.keys(e).forEach((t=>{"tag"!==t&&"effect"!==t&&"class"!==t&&o(1,a[t]=e[t],a)})),24&t.$$.dirty&&o(2,l=["skeleton-text",u&&`skeleton-effect-${u}`,i].filter((t=>!!t)).join(" "))},e=f(e),[s,a,l,u,i,r,c]}var W=class extends D{constructor(t){super(),C(this,t,V,U,r,{tag:0,effect:3,class:4})}};function X(t){let n;return{c(){n=$("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")},m(t,e){a(t,n,e)},d(t){t&&d(n)}}}function Y(t){let n,e,o;return e=new W({props:{effect:"wave",$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){var t;n=p("div"),(t=e.$$.fragment)&&t.c()},m(t,l){a(t,n,l),T(e,n,null),o=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(M(e.$$.fragment,t),o=!0)},o(t){P(e.$$.fragment,t),o=!1},d(t){t&&d(n),q(e)}}}return new class extends D{constructor(t){super(),C(this,t,null,Y,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
