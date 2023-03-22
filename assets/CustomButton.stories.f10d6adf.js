var c=Object.defineProperty;var r=(e,a)=>c(e,"name",{value:a,configurable:!0});import{s as l}from"./styled-components.browser.esm.6d50fa7e.js";import{j as d}from"./jsx-runtime.f731f180.js";import"./iframe.ae570bd3.js";const n=r(({children:e,disabled:a,onClick:i,variant:p=t.PRIMARY,...o})=>d("button",{disabled:a,onClick:r(s=>{a||i&&i(s)},"handleClick"),...o,children:e}),"CustomButton");try{n.displayName="CustomButton",n.__docgenInfo={description:"Button component",displayName:"CustomButton",props:{variant:{defaultValue:{value:"ECustomButtonVariants.PRIMARY"},description:"Button variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}}}}}catch{}const u=l(n)`
    background-color: var(--${e=>{var a;return e.disabled?"gray":(a=e.variant)!=null?a:"primary"}});
    border-radius: 6px;
    border: none;
    color: var(${e=>e.variant&&e.variant===t.SUCCESS?"--dark":"--light"});
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
`;var t=(e=>(e.PRIMARY="primary",e.SUCCESS="success",e.WARNING="warning",e.DANGER="danger",e))(t||{});const h={title:"Design System/Button",component:u},C={args:{children:"primary"}},S={args:{children:"disabled",disabled:!0}},f={args:{children:"success bug",variant:t.SUCCESS}},_={args:{children:"click me",onClick:()=>alert("button clicked")}},k=["Default","Disabled","SuccessVariant","WithClickHandler"];export{C as Default,S as Disabled,f as SuccessVariant,_ as WithClickHandler,k as __namedExportsOrder,h as default};
//# sourceMappingURL=CustomButton.stories.f10d6adf.js.map
