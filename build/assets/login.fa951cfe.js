import{_ as C,d as F,v as V,z as x,q as I,r as S,b as s,c as D,e as q,j as a,f as e,g as t,p as E,l as U,B as N,m as g,E as v,A as T}from"./index.3fb8d147.js";const A=u=>(E("data-v-61f85819"),u=u(),U(),u),K={class:"login-wrap"},L={class:"vt-login"},$=A(()=>a("div",{class:"vt-title"},"TDP Cloud",-1)),j={class:"login-btn"},z=g("\u767B\u5F55"),M={class:"login-btn"},P=g("\u6CE8\u518C"),R=F({name:"login",setup(u){const k=V(),_=x(),l=I({username:"admin",password:"12345"}),w={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},d=S(null),p=()=>{d.value.validate(i=>{if(!i)return v.error("\u767B\u5F55\u5931\u8D25"),!1;T.user.login(l).then(o=>{v.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("vt_username",l.username),localStorage.setItem("vt_token",o.token),o.keyid>0?(localStorage.setItem("vt_keyid",o.keyid),_.push("/")):_.push("/user/secret")})})};return k.clearTabs(),(i,o)=>{const y=s("User"),c=s("el-icon"),r=s("el-button"),m=s("el-input"),f=s("el-form-item"),B=s("Lock"),b=s("router-link"),h=s("el-form");return D(),q("div",K,[a("div",L,[$,e(h,{ref_key:"login",ref:d,model:l,rules:w,"label-width":"0px",class:"vt-content"},{default:t(()=>[e(f,{prop:"username"},{default:t(()=>[e(m,{modelValue:l.username,"onUpdate:modelValue":o[0]||(o[0]=n=>l.username=n),placeholder:"\u7528\u6237\u540D"},{prepend:t(()=>[e(r,null,{default:t(()=>[e(c,null,{default:t(()=>[e(y)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(f,{prop:"password"},{default:t(()=>[e(m,{modelValue:l.password,"onUpdate:modelValue":o[1]||(o[1]=n=>l.password=n),type:"password",placeholder:"\u5BC6\u7801",onKeyup:o[2]||(o[2]=N(n=>p(),["enter"]))},{prepend:t(()=>[e(r,null,{default:t(()=>[e(c,null,{default:t(()=>[e(B)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),a("div",j,[e(r,{type:"primary",onClick:o[3]||(o[3]=n=>p())},{default:t(()=>[z]),_:1})]),a("div",M,[e(b,{to:"/user/register"},{default:t(()=>[e(r,null,{default:t(()=>[P]),_:1})]),_:1})])]),_:1},8,["model"])])])}}});var G=C(R,[["__scopeId","data-v-61f85819"],["__file","D:/Workspace/qcloud-tdp/tdp-cloud-ui/src/apps/user/login.vue"]]);export{G as default};