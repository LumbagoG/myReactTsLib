var c=Object.defineProperty;var a=(e,t)=>c(e,"name",{value:t,configurable:!0});import{j as l}from"./jsx-runtime.87efd77c.js";import{s as d}from"./styled-components.browser.esm.645203c9.js";import"./iframe.5a0e119c.js";const r=a(({children:e,disabled:t,onClick:i,...o})=>l("button",{disabled:t,onClick:a(s=>{t||i&&i(s)},"handleClick"),...o,children:e}),"CustomButton");try{r.displayName="CustomButton",r.__docgenInfo={description:"Button component",displayName:"CustomButton",props:{variant:{defaultValue:null,description:"Button variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const u=d(r)`
    background-color: ${e=>{var t;return e.disabled?"gray":(t=e.variant)!=null?t:"blue"}};
    border-radius: 6px;
    border: none;
    color: ${e=>e.variant&&e.variant===n.SUCCESS?"black":"white"};
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
`;var n=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning",e.DANGER="danger",e))(n||{});const y={title:"Design System/Button",component:u},h={args:{children:"primary"}},S={args:{children:"disabled",disabled:!0}},f={args:{children:"success bug",variant:n.SUCCESS}},C={args:{children:"click me",onClick:()=>alert("button clicked")}},_=["Default","Disabled","SuccessVariant","WithClickHandler"];export{h as Default,S as Disabled,f as SuccessVariant,C as WithClickHandler,_ as __namedExportsOrder,y as default};
//# sourceMappingURL=CustomButton.stories.0d77abbf.js.map
