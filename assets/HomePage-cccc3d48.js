import{j as e,u as o}from"./index-5ef018d8.js";const l="_image_1t7wc_1",g={image:l},n="/Lingo-school/assets/hero-min-1x-73a69664.jpg",x="/Lingo-school/assets/hero-min-2x-77bca6ab.jpg",d=()=>e.jsx(e.Fragment,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${n} 1x, ${x} 2x`,media:"(min-width: 320px)"}),e.jsx("img",{className:g.image,src:n,alt:"img-girl",width:"568",height:"530"})]})}),h="_heroText_m0egp_1",m="_title_m0egp_8",_="_language_m0egp_15",p="_text_m0egp_20",u="_link_m0egp_25",s={heroText:h,title:m,language:_,text:p,link:u},j=()=>{const a=o();return e.jsxs("div",{className:s.heroText,children:[e.jsxs("h1",{className:s.title,children:["Unlock your potential with the best",e.jsx("span",{className:s.language,children:" language"})," tutors"]}),e.jsx("p",{className:s.text,children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),e.jsx("a",{onClick:()=>a("/teachers"),className:s.link,children:"Get started"})]})},v="_heroWrapper_1ybrs_1",N="_advantages_1ybrs_6",b="_advantagesList_1ybrs_9",y="_advantageItem_1ybrs_19",L="_content_1ybrs_24",w="_text_1ybrs_30",t={heroWrapper:v,advantages:N,advantagesList:b,advantageItem:y,content:L,text:w},I=()=>{const a=[{id:"1",content:"32,000 +",text:"Experienced tutors"},{id:"2",content:"300,000 +",text:"5-star tutor reviews"},{id:"3",content:"120 +",text:"Subjects taught"},{id:"4",content:"200 +",text:"Tutor nationalities"}];return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:t.sectionHero,children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:t.heroWrapper,children:[e.jsx(j,{}),e.jsx(d,{})]})})}),e.jsx("section",{className:t.advantages,children:e.jsx("div",{className:"container",children:e.jsx("ul",{className:t.advantagesList,children:a.map(({id:c,content:i,text:r})=>e.jsxs("li",{className:t.advantageItem,children:[e.jsx("span",{className:t.content,children:i}),e.jsx("span",{className:t.text,children:r})]},c))})})})]})};export{I as default};