var s=Object.defineProperty;var r=(e,t)=>s(e,"name",{value:t,configurable:!0});import{j as l}from"./jsx-runtime.931c7d46.js";import{a as d}from"./styled-components.browser.esm.5c367d4e.js";import"./iframe.d221d524.js";const n=r(({children:e,disabled:t,onClick:i,...o})=>l("button",{disabled:t,onClick:r(c=>{t||i&&i(c)},"handleClick"),...o,children:e}),"CustomButton");try{n.displayName="CustomButton",n.__docgenInfo={description:"Button component",displayName:"CustomButton",props:{variant:{defaultValue:null,description:"Button variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const u=d(n)`
    background-color: ${e=>{var t;return e.disabled?"gray":(t=e.variant)!=null?t:"blue"}};
    border-radius: 6px;
    border: none;
    color: ${e=>e.variant&&e.variant===a.SUCCESS?e.theme:"white"};
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
`;var a=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning",e.DANGER="danger",e))(a||{});const h={title:"Components/Button",component:u},y={args:{children:"primary",variant:a.PRIMARY}},C={args:{children:"disabled",disabled:!0}},f={args:{children:"success bug",variant:a.SUCCESS}},S={args:{children:"click me",onClick:()=>alert("button clicked")}},_=["Default","Disabled","SuccessVariant","WithClickHandler"];export{y as Default,C as Disabled,f as SuccessVariant,S as WithClickHandler,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=CustomButton.stories.13e5f282.js.map
