import{Q as u}from"./QImg.bccb1aad.js";import{Q as r}from"./QIcon.5ca772cc.js";import{Q as p}from"./QInput.2b55d701.js";import{Q as f}from"./QPage.9f43aec5.js";import{_ as h}from"./logo_1-1-text.e6389406.js";import{a0 as y,an as x,aJ as g,m as v,y as w,t as s,aK as b,av as q,v as E,C as t,d as e,D as i,z as c}from"./index.4d875d08.js";import"./focus-manager.db5612a5.js";const Q={class:"section_1 row justify-center",style:{padding:"50px 30px"}},C={class:"col-12 col-md-6 q-pa-md"},D={class:"column justify-between col-12 col-md-6 q-pa-md"},k={class:"row justify-between"},N={class:"bg-accent text-white q-px-sm rounded-borders q-mr-sm"},V={class:"q-mb-xl q-mt-md"},j={class:"text-grey"},z={style:{"font-size":"1.2rem"},class:"q-mt-xl q-px-lg pre col-12"},A={class:"footer"},B={class:"row justify-between footer_container q-px-xl"},T={class:"footer_map row items-center col-3"},U={class:"row"},S={class:"row col-6"},F=t("p",{class:"col-12"},"\u7DB2\u7AD9\u5C0E\u89BD",-1),I={class:"col-6 q-pl-md"},M=t("p",null,"\u652F\u63F4\u670D\u52D9",-1),R={class:"footer_center q-pa-md",style:{width:"170px"}},H=t("img",{style:{width:"100%"},src:h},null,-1),J={style:{width:"100%"},class:"text-center"},K={class:"subscribe column justify-center col-3",style:{"max-width":"300px"}},L=t("p",null,"\u8A02\u95B1\u96FB\u5B50\u5831\u5373\u6642\u638C\u63E1\u6D3B\u52D5\u6D88\u606F",-1),O=t("section",{class:"copyright row flex-center"}," \u6CF0\u5C71\u8077\u8A13\u524D\u7AEF\u7DB2\u9801\u5C08\u984C(\u50C5\u4F5C\u5B78\u8853\u4F7F\u7528) by SU-YU-ZHEN ",-1),et={__name:"EachArticle",setup(P){const d=b(),_=q(),o=y({_id:"",title:"",articleText:"",date:"",image:"",category:"",shortDesc:""});return(async()=>{try{const{data:l}=await x.get("/articles/"+d.params.id);o._id=l.result._id,o.title=l.result.title,o.articleText=l.result.articleText,o.date=l.result.date,o.image=l.result.image,o.shortDesc=l.result.shortDesc,o.category=l.result.category,document.title="MAUNA COFFEE - "+o.title}catch{g.exports.Swal.fire({width:"18rem",icon:"error",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557",iconColor:"#C5A768",confirmButtonColor:"#2b2b2b"}),_.go(-1)}})(),(l,n)=>{const a=E("router-link");return v(),w(f,null,{default:s(()=>[t("div",Q,[t("div",C,[e(u,{src:o.image,ratio:16/9},null,8,["src"])]),t("div",D,[t("div",k,[t("span",N,i(o.category),1),t("span",null,i(new Date(o.date).toLocaleString()),1),t("h4",V,i(o.title),1),t("p",j,i(o.shortDesc),1)])]),t("div",z,i(o.articleText),1)]),t("section",A,[t("div",B,[t("div",T,[t("div",U,[t("div",S,[F,e(a,{class:"col-6",to:"/"},{default:s(()=>[c("\u56DE\u9996\u9801")]),_:1}),e(a,{class:"col-6",to:"/menu"},{default:s(()=>[c("\u9910\u98F2\u4ECB\u7D39")]),_:1}),e(a,{class:"col-6",to:"/about"},{default:s(()=>[c("\u54C1\u724C\u6545\u4E8B")]),_:1}),e(a,{class:"col-6",to:"/"},{default:s(()=>[c("\u7DDA\u4E0AMENU")]),_:1}),e(a,{class:"col-6",to:"/products"},{default:s(()=>[c("\u8B1B\u5EA7\u6D3B\u52D5")]),_:1}),e(a,{class:"col-6",to:"/about/location"},{default:s(()=>[c("\u9580\u5E02\u4F4D\u5740")]),_:1}),e(a,{class:"col-6",to:"/articles"},{default:s(()=>[c("\u5C08\u6B04\u597D\u6587")]),_:1}),e(a,{to:"/myaccount/orders"},{default:s(()=>[c("\u6703\u54E1\u5C08\u5340")]),_:1})]),t("div",I,[M,e(a,{to:"/myaccount/orders"},{default:s(()=>[c("\u5831\u540D\u67E5\u8A62")]),_:1}),e(a,{to:"/service"},{default:s(()=>[c("\u5E38\u898B\u554F\u984C")]),_:1}),e(a,{to:"/service/contactus"},{default:s(()=>[c("\u806F\u7D61\u6211\u5011")]),_:1}),e(a,{to:"/"},{default:s(()=>[c("\u96B1\u79C1\u6B0A\u653F\u7B56")]),_:1})])])]),t("div",R,[H,t("div",J,[e(r,{name:"fa-brands fa-instagram",size:"1rem",class:"q-mr-sm"}),e(r,{name:"fa-brands fa-facebook",size:"1rem",class:"q-mr-sm"}),e(r,{name:"fa-brands fa-twitter",size:"1rem"})])]),t("div",K,[L,e(p,{dense:"",modelValue:l.text,"onUpdate:modelValue":n[0]||(n[0]=m=>l.text=m),placeholder:"your Email",type:"email","bg-color":"black",color:"accent","input-style":{color:"#E1BF77"}},{prepend:s(()=>[e(r,{name:"mail",class:"q-px-sm"})]),append:s(()=>[e(r,{name:"send",class:"cursor-pointer q-px-sm"})]),_:1},8,["modelValue"])])])]),O]),_:1})}}};export{et as default};