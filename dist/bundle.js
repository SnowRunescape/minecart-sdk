(()=>{"use strict";var e={395:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;const s=r(275);t.API=async(e,t="GET",r={})=>{const o=new URL(`${s.MINECART_API}${e}`);Object.entries(r).forEach((([e,t])=>{o.searchParams.append(e,String(t))}));const a=await fetch(o);if(!a.ok)throw new Error(`Failed to fetch. Status: ${a.status}`);return await a.json()}},439:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cart=void 0;const s=r(275),o=r(395),a=r(912);t.cart={getCart:()=>a.storage.get(s.MINECART_LOCALSTORAGE_KEY)||{username:null,items:[]},setUsername(e){const t=this.getCart();t.username=e,a.storage.set(s.MINECART_LOCALSTORAGE_KEY,t)},addProduct(e,t=1){const r=this.getCart(),o=r.items.find((t=>t.id===e));o?o.amount=t:r.items.push({id:e,amount:t}),a.storage.set(s.MINECART_LOCALSTORAGE_KEY,r)},updateAmountProduct(e,t){const r=this.getCart(),o=r.items.find((t=>t.id===e));o?(o.amount=t,a.storage.set(s.MINECART_LOCALSTORAGE_KEY,r)):console.error(`Product with ID ${e} not found.`)},removeProduct(e){const t=this.getCart();t.items=t.items.filter((t=>t.id!==e)),a.storage.set(s.MINECART_LOCALSTORAGE_KEY,t)},finishOrder(e){const t=this.getCart();return(0,o.API)("/shop/goToPayment","POST",{gateway:e,username:t.username,items:t.items}).redirect}}},91:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categories=void 0;const s=r(395);t.categories={all:async()=>(0,s.API)("/shop/categories","GET")}},275:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MINECART_LOCALSTORAGE_KEY=t.MINECART_API=void 0,t.MINECART_API="https://api.minecart.com.br",t.MINECART_LOCALSTORAGE_KEY="MINECART"},461:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gateways=void 0;const s=r(395);t.gateways={all:async()=>(0,s.API)("/shop/gateways")}},607:(e,t,r)=>{t.E=void 0;const s=r(527),o=r(461),a=r(91),n=r(689),c=r(923),i=r(439),u=r(643),d=r(904),l=r(820);t.E={store:s.store,news:u.news,rules:d.rules,team:l.team,categories:a.categories,servers:n.servers,products:c.products,gateways:o.gateways,cart:i.cart},window.minecart=t.E},643:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.news=void 0;const s=r(395);t.news={async all(){try{return await(0,s.API)("/shop/news")}catch(e){return console.error("Error fetching news:",e.message),[]}}}},923:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.products=void 0;const s=r(395);t.products={async all(e={}){try{return await(0,s.API)("/shop/products","GET",e)}catch(e){return console.error("Error fetching products:",e.message),[]}}}},904:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rules=void 0;const s=r(395);t.rules={async all(){try{return await(0,s.API)("/shop/rules")}catch(e){return console.error("Error fetching rules:",e.message),[]}}}},689:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.servers=void 0;const s=r(395);t.servers={async all(){try{return await(0,s.API)("/shop/servers")}catch(e){return console.error("Error fetching servers:",e.message),[]}}}},912:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.storage=void 0,t.storage={get:e=>{const t=localStorage.getItem(e);if(t)try{return JSON.parse(t)}catch(e){}return null},set:(e,t)=>localStorage.setItem(e,JSON.stringify(t))}},527:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;const s=r(395);t.store={async get(){try{return await(0,s.API)("/shop")}catch(e){return console.error("Error fetching store:",e.message),[]}}}},820:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.team=void 0;const s=r(395);t.team={async all(){try{return await(0,s.API)("/shop/team")}catch(e){return console.error("Error fetching team:",e.message),[]}}}}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}(607)})();