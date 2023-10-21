"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[226],{7226:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(2791),r=t(4942),s=t(1413),i=t(9439),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},l=t(3855),o=t(9939),u=function(e){return e.filter},d=function(e){return e.contacts.items},m=t(184),h=function(){var e=(0,l.I0)(),n=(0,l.v9)(d),t=(0,a.useState)({name:"",number:""}),u=(0,i.Z)(t,2),h=u[0],f=u[1],p=function(e){var n=e.target,t=n.name,a=n.value;if("number"===t){var i=a.replace(/\D/g,"").substring(0,10).replace(/^(\d{3})(\d{3})(\d{4})$/,"$1-$2-$3");f((0,s.Z)((0,s.Z)({},h),{},(0,r.Z)({},t,i)))}else f((0,s.Z)((0,s.Z)({},h),{},(0,r.Z)({},t,a)))};return(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=h.name,r=h.number,s=r.replace(/\D/g,"").length;""!==a.trim()&&""!==r.trim()?s<10?alert("Phone number must contain at least 10 digits"):n.some((function(e){return e.name===a}))?alert("".concat(a," is already in your contacts")):(e((0,o.uK)({id:c(),name:a,number:r})),f({name:"",number:""})):alert("Please fill in all fields")},className:"form-container",children:[(0,m.jsx)("h3",{children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zAZ\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:h.name,onChange:p,className:"input-field"}),(0,m.jsx)("h3",{children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. Minimum 10 digits required.",required:!0,value:h.number,onChange:p,className:"input-field"}),(0,m.jsx)("button",{type:"submit",className:"add-contact-button",children:"Add contact"})]})},f=function(){var e=(0,l.v9)(d),n=(0,l.v9)(u),t=(0,l.I0)();(0,a.useEffect)((function(){t((0,o.yF)())}),[t]);var r=e?e.filter((function(e){return e.name.toLowerCase().includes(n?n.toLowerCase():"")})):[];return(0,m.jsx)("ul",{className:"contacts-list",children:r.map((function(e){return(0,m.jsxs)("li",{className:"contact-card",children:[(0,m.jsxs)("p",{className:"contact-name",children:[(0,m.jsx)("strong",{children:"Name:"})," ",e.name,", ",(0,m.jsx)("br",{})]}),(0,m.jsxs)("p",{className:"contact-phone",children:[(0,m.jsx)("strong",{children:"Number:"})," ",e.number]}),(0,m.jsxs)("div",{className:"button-container",children:[(0,m.jsx)("button",{className:"edit-button",children:" Edit "}),(0,m.jsx)("button",{onClick:function(){return t((0,o.GK)(e.id))},className:"delete-button",children:" Delete "})]})]},e.id)}))})},p=t(6895),b=function(){var e=(0,l.v9)(u),n=(0,l.I0)();return(0,m.jsx)("div",{className:"form-container",children:(0,m.jsxs)("label",{children:["Find contacts by name:",(0,m.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,p.a)(e.target.value))},className:"input-field"})]})})},x=function(){return(0,m.jsxs)("div",{className:"contacts-container",children:[(0,m.jsx)("h2",{className:"page-title",children:"Contacts"}),(0,m.jsx)(h,{}),(0,m.jsx)("h3",{className:"list-title",children:"Contacts list"}),(0,m.jsx)(b,{}),(0,m.jsx)(f,{})]})}}}]);
//# sourceMappingURL=226.e064631f.chunk.js.map