"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74204],{10204:(e,n,t)=>{t.d(n,{c:()=>o});t(11504);var a=t(65456),i=t(76616),s=t(55808),l=t(90952),c=t(17624);function r(e){let{className:n}=e;return(0,c.jsx)(l.c,{type:"caution",title:(0,c.jsx)(i.GI,{}),className:(0,a.c)(n,s.W.common.unlistedBanner),children:(0,c.jsx)(i.oX,{})})}function o(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Qj,{}),(0,c.jsx)(r,{...e})]})}},54256:(e,n,t)=>{t.d(n,{c:()=>d});t(11504);var a=t(65456),i=t(76616),s=t(55808),l=t(90952),c=t(17624);function r(e){let{className:n}=e;return(0,c.jsx)(l.c,{type:"caution",title:(0,c.jsx)(i.kh,{}),className:(0,a.c)(n,s.W.common.draftBanner),children:(0,c.jsx)(i.Yv,{})})}var o=t(10204);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,c.jsxs)(c.Fragment,{children:[(t||a.unlisted)&&(0,c.jsx)(o.c,{}),a.draft&&(0,c.jsx)(r,{})]})}},58160:(e,n,t)=>{t.d(n,{c:()=>r});t(11504);var a=t(65456),i=t(50312),s=t(81096);const l={lastUpdated:"lastUpdated_JAkA"};var c=t(17624);function r(e){let{className:n,editUrl:t,lastUpdatedAt:r,lastUpdatedBy:o}=e;return(0,c.jsxs)("div",{className:(0,a.c)("row",n),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(i.c,{editUrl:t})}),(0,c.jsx)("div",{className:(0,a.c)("col",l.lastUpdated),children:(r||o)&&(0,c.jsx)(s.c,{lastUpdatedAt:r,lastUpdatedBy:o})})]})}},40652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(11504);var a=t(65456),i=t(96516),s=t(55808),l=t(81288),c=t(78480),r=t(69280),o=t(54256),d=t(58160);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(17624);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:v,description:x,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:N,wrapperClassName:b,hide_table_of_contents:L}=g,C=f.image??g.image,H=!!(v||j||p);return(0,u.jsx)(i.cr,{className:(0,a.c)(b??s.W.wrapper.mdxPages,s.W.page.mdxPage),children:(0,u.jsxs)(l.c,{children:[(0,u.jsx)(i.U7,{title:h,description:x,keywords:N,image:C}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.c)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.c)("col",!L&&"col--8"),children:[(0,u.jsx)(o.c,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(c.c,{children:(0,u.jsx)(n,{})})}),H&&(0,u.jsx)(d.c,{className:(0,a.c)("margin-top--sm",s.W.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:j,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(r.c,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},69280:(e,n,t)=>{t.d(n,{c:()=>o});t(11504);var a=t(65456),i=t(48720);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(17624);const c="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.c)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.c,{...t,linkClassName:c,linkActiveClassName:r})})}},48720:(e,n,t)=>{t.d(n,{c:()=>v});var a=t(11504),i=t(53912);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.y)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=r(c,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var m=t(45800),u=t(17624);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.c,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const v=(0,i.y)(),x=o??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(c&&r)return{linkClassName:c,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[c,r,x,g])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:c,...f})}},76616:(e,n,t)=>{t.d(n,{GI:()=>l,Qj:()=>r,Yv:()=>d,kh:()=>o,oX:()=>c});t(11504);var a=t(57932),i=t(18300),s=t(17624);function l(){return(0,s.jsx)(a.c,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,s.jsx)(a.c,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,s.jsx)(i.c,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(a.c,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.c,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);