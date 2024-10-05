"use strict";(self.webpackChunkerp_next_inventory_management=self.webpackChunkerp_next_inventory_management||[]).push([[669],{8009:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const s={sidebar_position:4},c="Opening Stock Balance and Reconciliation",a={id:"Opening Stock Balance and Reconciliation",title:"Opening Stock Balance and Reconciliation",description:"In this chapter, the focus is on opening stock balance and stock reconciliation within the ERPNext system. By the end, you should understand how to:",source:"@site/docs/Opening Stock Balance and Reconciliation.md",sourceDirName:".",slug:"/Opening Stock Balance and Reconciliation",permalink:"/ERPNext-Inventory-Management/docs/Opening Stock Balance and Reconciliation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Opening Stock Balance and Reconciliation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Warehouse Management",permalink:"/ERPNext-Inventory-Management/docs/Warehouse Management"},next:{title:"Stock Entry",permalink:"/ERPNext-Inventory-Management/docs/Stock Entry"}},r={},l=[];function d(e){const n={h1:"h1",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"opening-stock-balance-and-reconciliation",children:"Opening Stock Balance and Reconciliation"})}),"\n",(0,i.jsxs)(n.p,{children:["In this chapter, the focus is on ",(0,i.jsx)(n.strong,{children:"opening stock balance"})," and ",(0,i.jsx)(n.strong,{children:"stock reconciliation"})," within the ERPNext system. By the end, you should understand how to:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Add Opening Stock:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When migrating from legacy software, upload the closing stock as opening stock in ERPNext, using a cutoff date (e.g., if starting on April 1, the cutoff is March 31)."}),"\n",(0,i.jsx)(n.li,{children:'Ensure that items are configured properly in the item master, particularly checking the "maintained stock" box.'}),"\n",(0,i.jsxs)(n.li,{children:["Two methods to add opening stock:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Using Stock Entry"}),": Record item movement between warehouses. Specify the stock entry type (e.g., material receipt), target warehouse, item details (code, quantity, rate), and save the entry."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stock Reconciliation"}),': Set the purpose to "opening stock," select items, and submit.']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Conduct Stock Reconciliation:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A process that compares physical stock with system stock to correct discrepancies."}),"\n",(0,i.jsx)(n.li,{children:"Navigate to stock reconciliation, set the purpose, and enter the relevant details (item code, warehouse, quantity, valuation rate)."}),"\n",(0,i.jsx)(n.li,{children:"Adjustments are recorded in both stock and accounting ledgers, ensuring that post-reconciliation transactions do not alter previously set stock balances."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples and Practical Use Cases:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stock balances from prior transactions remain unchanged after reconciliation."}),"\n",(0,i.jsx)(n.li,{children:"Adjusting stock for serialized or batched items is possible through the reconciliation process, allowing for updates in quantities and valuation rates."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The chapter concludes with a note on further learning resources available on the ERPNext documentation site and previews the next chapter's topics on purchase receipts and landed cost vouchers."}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);