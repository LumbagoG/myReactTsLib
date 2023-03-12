var o=Object.defineProperty;var t=(e,a)=>o(e,"name",{value:a,configurable:!0});import{s as c}from"./styled-components.browser.esm.1e294a68.js";import{j as l}from"./jsx-runtime.7da7409b.js";import"./iframe.c363a421.js";const n=t(({children:e,disabled:a,onClick:u,variant:p=r.PRIMARY,...i})=>l("button",{disabled:a,onClick:t(s=>{a||u&&u(s)},"handleClick"),...i,children:e}),"CustomButton");try{n.displayName="CustomButton",n.__docgenInfo={description:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043A\u043D\u043E\u043F\u043A\u0438",displayName:"CustomButton",props:{variant:{defaultValue:{value:"ECustomButtonVariants.PRIMARY"},description:"\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043A\u043D\u043E\u043F\u043A\u0438",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const d=c(n)`
    background-color: var(
        --${e=>{var a;return e.disabled?"gray":(a=e.variant)!=null?a:"primary"}}
    );
    border-radius: 6px;
    border: none;
    color: var(
        ${e=>e.variant&&e.variant===r.SUCCESS?"--dark":"--light"}
    );
    cursor: ${e=>e.disabled?"default":"pointer"};
    font-weight: 600;
    letter-spacing: 1px;
    opacity: ${e=>e.disabled?"0.6":"1"};
    outline: none;
    padding: 0.8rem;
    text-transform: uppercase;
    transition: 0.4s;

    &:not([disabled]) :hover {
        opacity: 0.8;
    }

    &:active {
        box-shadow: none;
    }
`;var r=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning",e.DANGER="danger",e))(r||{});const C={title:"Design System/Button",component:d},h={args:{children:"primary"}},S={args:{children:"disabled",disabled:!0}},f={args:{children:"success bug",variant:r.SUCCESS}},D={args:{children:"click me",onClick:()=>alert("button clicked")}},A=["Default","Disabled","SuccessVariant","WithClickHandler"];export{h as Default,S as Disabled,f as SuccessVariant,D as WithClickHandler,A as __namedExportsOrder,C as default};
//# sourceMappingURL=CustomButton.stories.828c7af0.js.map
