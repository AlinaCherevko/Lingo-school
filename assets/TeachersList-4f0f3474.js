import{j as s,r as u,F as N,e as b,f,d as W,M as y,g as I,B as p,h as L}from"./index-301279e6.js";const $="_teacherItem_hgs92_1",k="_imgWrapper_hgs92_9",F="_textWrapper_hgs92_11",C="_languages_hgs92_15",w="_image_hgs92_20",R="_list_hgs92_27",T="_item_hgs92_32",B="_heart_hgs92_45",M="_favorite_hgs92_53",A="_price_hgs92_57",E="_languageWrapper_hgs92_60",O="_languageList_hgs92_64",S="_languageItem_hgs92_67",z="_name_hgs92_73",q="_optionsWrapper_hgs92_79",D="_button_hgs92_85",P="_btnList_hgs92_101",V="_levelItem_hgs92_106",a={teacherItem:$,imgWrapper:k,textWrapper:F,languages:C,image:w,list:R,item:T,heart:B,favorite:M,price:A,languageWrapper:E,languageList:O,languageItem:S,name:z,optionsWrapper:q,button:D,btnList:P,levelItem:V},G="_list_12v9n_1",U="_item_12v9n_7",Y="_wrapper_12v9n_9",H="_image_12v9n_13",J="_textWrapper_12v9n_25",K="_name_12v9n_31",Q="_ratingWrapper_12v9n_36",X="_rating_12v9n_36",Z="_comments_12v9n_45",ss="_button_12v9n_50",es="_btnList_12v9n_67",as="_levelItem_12v9n_72",l={list:G,item:U,wrapper:Y,image:H,textWrapper:J,name:K,ratingWrapper:Q,rating:X,comments:Z,button:ss,btnList:es,levelItem:as},ns=({item:e,setIsVisibleModal:n})=>{const c=()=>{n(!0)};return s.jsxs("div",{children:[s.jsx("ul",{className:l.list,children:e.reviews.map(t=>s.jsxs("li",{className:l.item,children:[s.jsxs("div",{className:l.wrapper,children:[s.jsx("div",{className:l.image,children:t.reviewer_name.charAt(0).toUpperCase()}),s.jsxs("div",{className:l.textWrapper,children:[s.jsx("span",{className:l.name,children:t.reviewer_name}),s.jsxs("div",{className:l.ratingWrapper,children:[s.jsx("img",{src:"/Lingo-school/star.svg",alt:"star",loading:"lazy"}),s.jsxs("span",{className:l.rating,children:[t.reviewer_rating,".0"]})]})]})]}),s.jsx("p",{className:l.comments,children:t.comment})]},t.comment))}),s.jsx("ul",{className:l.btnList,children:e.levels.map((t,m)=>s.jsx("li",{className:l.levelItem,children:t},m))}),s.jsx("button",{onClick:c,className:l.button,children:"Book trial lesson"})]})},ls=[{name:"name",label:"Full Name "},{name:"email",label:"Email"},{name:"phone",label:"Phone number"}],ts="_list_nn0qa_1",rs="_radioItem_nn0qa_7",is="_label_nn0qa_11",g={list:ts,radioItem:rs,label:is},cs=({onClose:e})=>{const[n,c]=u.useState(null),t=[{label:"Career and business"},{label:"Lesson for kids"},{label:"Living abroad"},{label:"Exams and coursework"},{label:"Culture, travel or hobby"}],m=r=>{c(r.target.value)},d=()=>{};return s.jsxs("div",{children:[s.jsx("ul",{className:g.list,children:t.map(r=>s.jsxs("li",{className:g.radioItem,children:[s.jsx("input",{type:"radio",id:r.label,name:"radioGroup",className:g.radio,value:r.label,checked:n===r.label,onChange:m}),s.jsx("label",{htmlFor:r.label,className:g.label,children:r.label})]},r.label))}),s.jsx(N,{title:"Book",handleClick:d,onClose:e,dataForm:ls})]})},os="_modal_ry7fu_1",ms="_title_ry7fu_9",gs="_text_ry7fu_15",ds="_imageWrapper_ry7fu_21",_s="_image_ry7fu_21",hs="_yourTeacher_ry7fu_32",ps="_name_ry7fu_38",us="_mainReason_ry7fu_43",i={modal:os,title:ms,text:gs,imageWrapper:ds,image:_s,yourTeacher:hs,name:ps,mainReason:us},xs=({item:e,onClose:n})=>s.jsxs("div",{className:i.modal,children:[s.jsx("h2",{className:i.title,children:"Book trial lesson"}),s.jsx("p",{className:i.text,children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),s.jsxs("div",{className:i.imageWrapper,children:[s.jsx("img",{className:i.image,src:e.avatar_url,alt:"teacher"}),s.jsxs("div",{children:[s.jsx("p",{className:i.yourTeacher,children:"Your teacher"}),s.jsxs("p",{className:i.name,children:[e.name," ",e.surname]})]})]}),s.jsx("h3",{className:i.mainReason,children:"What is your main reason for learning English?"}),s.jsx(cs,{onClose:n})]}),js=({item:e})=>{const{isAuth:n}=b(),c=f(),[t,m]=u.useState(!1),[d,r]=u.useState(!1),{favorite:j}=W(),_=j.some(o=>o.id===e.id),v=()=>{_===!0&&n===!0&&(c(I(e.id)),p.success("Deleted successfully")),_===!1&&n===!0&&(c(L(e)),p.success("Add successfully")),n===!1&&p.warning("Only for registered users!")},x=()=>{r(!1)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:a.teacherItem,children:[s.jsx("div",{className:a.imgWrapper,children:s.jsx("img",{className:a.image,src:e.avatar_url,alt:e.name})}),s.jsxs("div",{children:[s.jsxs("div",{className:a.textWrapper,children:[s.jsx("p",{className:a.languages,children:"Languages"}),s.jsxs("ul",{className:a.list,children:[s.jsxs("li",{className:a.item,children:[s.jsx("img",{src:"/Lingo-school/book-open.svg",alt:"book",width:"16px",height:"16px",loading:"lazy"}),"Lessons online"]}),s.jsxs("li",{className:a.item,children:["Lessons done: ",e.lessons_done]}),s.jsxs("li",{className:a.item,children:[s.jsx("img",{src:"/Lingo-school/star.svg",alt:"star",width:"16px",height:"16px",loading:"lazy"}),"Rating: ",e.rating]}),s.jsxs("li",{className:a.item,children:["Price / 1 hour:",s.jsxs("span",{className:a.price,children:[e.price_per_hour,"$"]})]})]}),s.jsx("img",{onClick:v,className:_&&n?`${a.heart} ${a.favorite}`:a.heart,src:"/Lingo-school/heart.svg",alt:"heart",loading:"lazy"})]}),s.jsxs("h2",{className:a.name,children:[e.name," ",e.surname]}),s.jsxs("div",{className:a.optionsWrapper,children:[s.jsxs("div",{className:a.languageWrapper,children:[s.jsx("span",{className:a.languages,children:"Speaks: "}),s.jsx("ul",{className:a.languageList,children:e.languages.map((o,h)=>s.jsxs("li",{className:a.languageItem,children:[o,h<e.languages.length-1&&", "]},o))})]}),s.jsxs("div",{className:a.languageWrapper,children:[s.jsx("span",{className:a.languages,children:"Lesson Info: "}),s.jsx("span",{className:a.languageItem,children:e.lesson_info})]}),s.jsxs("div",{className:a.languageWrapper,children:[s.jsx("span",{className:a.languages,children:"Conditions: "}),s.jsx("span",{className:a.languageItem,children:e.conditions})]})]}),t?s.jsx(ns,{item:e,setIsVisibleModal:r}):s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>m(!0),className:a.button,children:"Read more"}),s.jsx("ul",{className:a.btnList,children:e.levels.map((o,h)=>s.jsx("li",{className:a.levelItem,children:o},h))})]})]})]}),d&&s.jsx(y,{onClose:x,children:s.jsx(xs,{item:e,onClose:x})})]})},vs="_list_1sfh0_1",Ns={list:vs},fs=({data:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:Ns.list,children:Array.isArray(e)&&e.map(n=>s.jsx(js,{item:n},n.id))})});export{fs as T};
