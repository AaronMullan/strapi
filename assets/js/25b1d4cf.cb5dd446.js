"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const o={title:"useFetchClient",slug:"/hooks/use-fetch-client",description:"API reference for the useFetchClient hook in Strapi",tags:["hooks","axios","data"]},r=void 0,s={unversionedId:"core/hooks/use-fetch-client",id:"core/hooks/use-fetch-client",title:"useFetchClient",description:"API reference for the useFetchClient hook in Strapi",source:"@site/docs/core/hooks/use-fetch-client.mdx",sourceDirName:"core/hooks",slug:"/hooks/use-fetch-client",permalink:"/hooks/use-fetch-client",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/core/hooks/use-fetch-client.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"axios",permalink:"/tags/axios"},{label:"data",permalink:"/tags/data"}],version:"current",frontMatter:{title:"useFetchClient",slug:"/hooks/use-fetch-client",description:"API reference for the useFetchClient hook in Strapi",tags:["hooks","axios","data"]},sidebar:"docs",previous:{title:"Relations",permalink:"/content-manager/relations"},next:{title:"Linking the Strapi Design System",permalink:"/core/admin/link-strapi-design-system"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"Implementation details",id:"implementation-details",level:2},{value:"Base URL",id:"base-url",level:3},{value:"Interceptors",id:"interceptors",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Further Reading",id:"further-reading",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Authentication problems",id:"authentication-problems",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The following example shows a basic way to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFetchClient")," hook to make a get request to a Strapi backend endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import {useState} from "react"\nimport useFetchClient from \'@strapi/admin/admin/src/hooks/useFetchClient\';\n\nconst Component = () => {\n    const [items, setItems] = useState([]);\n    const { get } = useFetchClient();\n    const requestURL = "/some-endpoint";\n\n    const handleGetData = async () => {\n        const { data } = await get(requestURL);\n        setItems(data.items);\n    }\n\n    return(\n        <div>\n            <div>\n                {\n                    items && items.map(item => <h2 key={item.uuid}>{item.name}</h2>))\n                }\n            </div>\n            <button onClick={handleGetData}>Show Items</button>\n        </div>\n    )\n}\n')),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"Essentially, this is an abstraction around the axios instance exposed by a hook. It provides a simple interface to handle API calls to the Strapi backend.\nIt handles request cancellations inside the hook with an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},(0,i.kt)("inlineCode",{parentName:"a"},"AbortController")),". This is typically triggered when the component is unmounted so all the requests that it is currently making are aborted."),(0,i.kt)("p",null,"The hook exposes four methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"get(url, config)"),": requires a relative url (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") and makes a ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," request to the Strapi backend with an optional configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," passed as second parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"post(url, data, config)"),": requires a relative url (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") and makes a ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," request with the required data ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," to the Strapi backend with the optional configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," passed as third parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"put(url, data, config)"),": requires a relative url (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") and makes a ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," request with the required data ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," to the Strapi backend with the optional configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," passed as third parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"del(url, config)"),": requires a relative url (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") and makes a ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," request to the Strapi backend with an optional configuration ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," passed as second parameter.")),(0,i.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,i.kt)("p",null,"The following information is the internal additions we've added to the axios instance via two request interceptors. As well as an explanation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl"),"."),(0,i.kt)("h3",{id:"base-url"},"Base URL"),(0,i.kt)("p",null,"The default URL will be the one defined in the environment variable: ",(0,i.kt)("inlineCode",{parentName:"p"},"STRAPI_ADMIN_BACKEND_URL"),"."),(0,i.kt)("h3",{id:"interceptors"},"Interceptors"),(0,i.kt)("h4",{id:"request"},"Request"),(0,i.kt)("p",null,"The request interceptor adds the following parameters to the header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n    Authorization: `Bearer <AUTH_TOKEN>`,\n    Accept: 'application/json',\n    'Content-Type': 'application/json',\n}\n")),(0,i.kt)("h4",{id:"response"},"Response"),(0,i.kt)("p",null,"If everything works correctly, the response is returned as it comes from the backend. However, if it contains a ",(0,i.kt)("strong",{parentName:"p"},"status code of 401")," the authentication details will be removed from\nthe application storage and the window will be reloaded."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Have this in mind if using this hook in pages where the auth token is not available, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"login"),", because it will create an infinite loop. See the ",(0,i.kt)("a",{parentName:"p",href:"#troubleshooting"},"Troubleshooting")," section for more information.")),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/instance"},"axios instance API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://axios-http.com/docs/cancellation"},"AbortController"))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"authentication-problems"},"Authentication problems"),(0,i.kt)("p",null,"Trying to access a protected route from a context where the auth token is not available may lead to an infinite loop due to the response interceptor that\nreloads the page when obtaining a 401 response. One option to avoid this from happening is to not consider a 401 response as an error, see below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  data: { data: properties },\n} = await get(`/protected-endpoint`, {\n  validateStatus: (status) => status < 500,\n});\n")))}u.isMDXComponent=!0}}]);