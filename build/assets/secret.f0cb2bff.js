import{_ as C,d as x,j as I,k,g as F,a as s,c as g,b as e,w as t,A as p,o as A,u as K,e as r,h as S,E as h,l as E}from"./index.48b366c5.js";const N=r("div",{class:"clearfix"},[r("span",null,"\u5BC6\u94A5\u5217\u8868")],-1),U=S(" \u5220\u9664 "),L=r("div",{class:"clearfix"},[r("span",null,"\u6DFB\u52A0\u5BC6\u94A5")],-1),M=S("\u4FDD\u5B58"),$=x({__name:"secret",setup(j){const i=I(),d=k(()=>i.secretList),m=()=>{p.user.fetchSecrets().then(c=>{i.setSecrets(c)})},l=F({describe:"",secretId:"",secretKey:""}),D=()=>{p.user.createSecret(l).then(c=>{h.success(c.result),l.describe="",l.secretId="",l.secretKey="",m()})},v=c=>{E.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F","\u63D0\u793A",{type:"warning"}).then(()=>{const o=d.value[c];p.user.deleteSecret(o.ID).then(a=>{d.value.splice(c,1),h.success(a.result)})})};return m(),(c,o)=>{const a=s("el-table-column"),y=s("Delete"),V=s("el-icon"),f=s("el-button"),B=s("el-table"),b=s("el-card"),_=s("el-input"),u=s("el-form-item"),w=s("el-form");return A(),g("div",null,[e(b,{shadow:"hover",class:"mgb10"},{header:t(()=>[N]),default:t(()=>[e(B,{data:K(d),style:{width:"100%"}},{default:t(()=>[e(a,{prop:"ID",label:"\u5E8F\u53F7",width:"80"}),e(a,{prop:"Describe",label:"\u522B\u540D",width:"160"}),e(a,{prop:"SecretId",label:"Secret Id"}),e(a,{prop:"SecretKey",label:"Secret Key"}),e(a,{label:"\u64CD\u4F5C",width:"180",align:"center"},{default:t(n=>[e(f,{link:"",type:"danger",onClick:q=>v(n.$index)},{default:t(()=>[e(V,null,{default:t(()=>[e(y)]),_:1}),U]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(b,{shadow:"hover"},{header:t(()=>[L]),default:t(()=>[e(w,{"label-width":"90px"},{default:t(()=>[e(u,{label:"\u522B\u540D"},{default:t(()=>[e(_,{modelValue:l.describe,"onUpdate:modelValue":o[0]||(o[0]=n=>l.describe=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"SecretId"},{default:t(()=>[e(_,{modelValue:l.secretId,"onUpdate:modelValue":o[1]||(o[1]=n=>l.secretId=n)},null,8,["modelValue"])]),_:1}),e(u,{label:"SecretKey"},{default:t(()=>[e(_,{modelValue:l.secretKey,"onUpdate:modelValue":o[2]||(o[2]=n=>l.secretKey=n)},null,8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(f,{type:"primary",onClick:D},{default:t(()=>[M]),_:1})]),_:1})]),_:1})]),_:1})])}}});var W=C($,[["__file","D:/Workspace/qcloud-tdp/tdp-cloud-ui/src/apps/user/secret.vue"]]);export{W as default};
