import{_ as u,d as p,r,A as _,a as t,c as i,b as e,w as o,o as m,e as n}from"./index.48b366c5.js";const b=n("div",{class:"clearfix"},[n("span",null,"\u57DF\u540D\u5217\u8868")],-1),f=p({__name:"index",setup(h){const l=r({});return _.dnspod.describeDomainList().then(s=>{l.value=s}),(s,v)=>{const a=t("el-table-column"),d=t("el-table"),c=t("el-card");return m(),i("div",null,[e(c,{shadow:"hover"},{header:o(()=>[b]),default:o(()=>[e(d,{data:l.value.DomainList,style:{width:"100%"}},{default:o(()=>[e(a,{prop:"Name",label:"\u57DF\u540D"}),e(a,{prop:"Status",label:"\u72B6\u6001"}),e(a,{prop:"GradeTitle",label:"\u5957\u9910"}),e(a,{prop:"VipEndAt",label:"\u5957\u9910\u5230\u671F",width:"180"})]),_:1},8,["data"])]),_:1})])}}});var D=u(f,[["__file","D:/Workspace/qcloud-tdp/tdp-cloud-ui/src/apps/dnspod/index.vue"]]);export{D as default};
