"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54976],{26168:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(11504);var n=a(65456),i=a(54596),r=a(96516),o=a(55808),s=a(88936),l=a(77508),c=a(11248),d=a(56565),g=a(18300),p=a(40480),u=a(17624);function m(e){const t=(0,p.Q)(e);return(0,u.jsx)(g.c,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.c)(),{blogDescription:n,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.U7,{title:l,description:n}),(0,u.jsx)(c.c,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,u.jsxs)(s.c,{sidebar:n,children:[(0,u.jsx)(d.c,{items:a}),(0,u.jsx)(l.c,{metadata:t})]})}function f(e){return(0,u.jsxs)(r.cr,{className:(0,n.c)(o.W.wrapper.blogPages,o.W.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(m,{...e}),(0,u.jsx)(b,{...e})]})}},77508:(e,t,a)=>{a.d(t,{c:()=>o});a(11504);var n=a(57932),i=a(31152),r=a(17624);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(i.c,{permalink:a,title:(0,r.jsx)(n.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.c,{permalink:o,title:(0,r.jsx)(n.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},56565:(e,t,a)=>{a.d(t,{c:()=>o});a(11504);var n=a(26064),i=a(17056),r=a(17624);function o(e){let{items:t,component:a=i.c}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.E,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},40480:(e,t,a)=>{a.d(t,{Q:()=>d,C:()=>g});var n=a(89908),i=a(54596),r=a(90232);var o=a(26064);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(p);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:u({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,i.c)(),{withBaseUrl:a}=(0,n.E)(),{metadata:{blogDescription:r,blogTitle:o,permalink:d}}=e,g=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:r}=e,{date:o,title:d,description:g,lastUpdatedAt:p}=r,u=n.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,b=p?s(p):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...c(u,a,d),...m?{keywords:m}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.c)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,o.g)(),{siteConfig:d}=(0,i.c)(),{withBaseUrl:g}=(0,n.E)(),{date:p,title:u,description:m,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,k=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:u,name:u,description:m,datePublished:p,...j?{dateModified:j}:{},...l(a.authors),...c(f,g,u),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function u(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);