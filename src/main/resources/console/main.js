var PluginUmami=function(M,y,I){"use strict";function TM(L){return L}var g="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMTQ0IDg3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij48cGF0aCBkPSJNMTAyOC4xNiwzMzkuMzMxYzE0OC4yNDksMCAyNjguNjA5LDEyMC4zNiAyNjguNjA5LDI2OC42MDljLTAsMTQ4LjI0OSAtMTIwLjM2LDI2OC42MDggLTI2OC42MDksMjY4LjYwOGMtMTQ4LjI0OSwwIC0yNjguNjA4LC0xMjAuMzU5IC0yNjguNjA4LC0yNjguNjA4Yy0wLC0xNDguMjQ5IDEyMC4zNTksLTI2OC42MDkgMjY4LjYwOCwtMjY4LjYwOVptMCwxMTkuMTUyYzgyLjQ4OCwwIDE0OS40NTcsNjYuOTY5IDE0OS40NTcsMTQ5LjQ1N2MtMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU3LDE0OS40NTZjLTgyLjQ4NywwIC0xNDkuNDU2LC02Ni45NjkgLTE0OS40NTYsLTE0OS40NTZjLTAsLTgyLjQ4OCA2Ni45NjksLTE0OS40NTcgMTQ5LjQ1NiwtMTQ5LjQ1N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxwYXRoIGQ9Ik0xODc0LjU4LDMzOS4zMzFjMTQ4LjI0OSwwIDI2OC42MDgsMTIwLjM2IDI2OC42MDgsMjY4LjYwOWMwLDE0OC4yNDkgLTEyMC4zNTksMjY4LjYwOCAtMjY4LjYwOCwyNjguNjA4Yy0xNDguMjQ5LDAgLTI2OC42MDksLTEyMC4zNTkgLTI2OC42MDksLTI2OC42MDhjMCwtMTQ4LjI0OSAxMjAuMzYsLTI2OC42MDkgMjY4LjYwOSwtMjY4LjYwOVptLTAsMTE5LjE1MmM4Mi40ODcsMCAxNDkuNDU2LDY2Ljk2OSAxNDkuNDU2LDE0OS40NTdjMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU2LDE0OS40NTZjLTgyLjQ4OCwwIC0xNDkuNDU3LC02Ni45NjkgLTE0OS40NTcsLTE0OS40NTZjMCwtODIuNDg4IDY2Ljk2OSwtMTQ5LjQ1NyAxNDkuNDU3LC0xNDkuNDU3WiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMik7Ii8+PHBhdGggZD0iTTEzMDkuMjcsMzc3LjU4NWMtMCwtMTAuMDgzIC03LjIyMiwtMTguNzE5IC0xNy4xNDYsLTIwLjUwNGMtMTkuNjE4LC0zLjUyOCAtNTEuOSwtOS4zMzQgLTc0LjE3MiwtMTMuMzRjLTYuMDczLC0xLjA5MiAtMTIuMzE4LDAuNTY0IC0xNy4wNTIsNC41MjJjLTQuNzM0LDMuOTU5IC03LjQ2OSw5LjgxMiAtNy40NjksMTUuOTgzYy0wLDkxLjM3NCAtMCw0MDcuMTUzIC0wLDQ5MS40NjljLTAsNS41MjUgMi4xOTUsMTAuODI0IDYuMTAyLDE0LjczMWMzLjkwNywzLjkwNyA5LjIwNiw2LjEwMiAxNC43MzEsNi4xMDJjMjAuOTg3LDAgNTMuMTg2LDAgNzQuMTczLDBjNS41MjUsMCAxMC44MjQsLTIuMTk1IDE0LjczMSwtNi4xMDJjMy45MDcsLTMuOTA3IDYuMTAyLC05LjIwNiA2LjEwMiwtMTQuNzMxYy0wLC04NC40MjUgLTAsLTQwMC4yODYgLTAsLTQ3OC4xM1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPjxwYXRoIGQ9Ik0xNTQyLjU5LDcyLjAzM2MwLC04LjI4OCAtMy4yOTIsLTE2LjIzNyAtOS4xNTMsLTIyLjA5N2MtNS44NiwtNS44NjEgLTEzLjgwOSwtOS4xNTMgLTIyLjA5NywtOS4xNTNjLTIzLjg2NywtMCAtNTYuNjA5LC0wIC04MC40NzcsLTBjLTguMjg4LC0wIC0xNi4yMzYsMy4yOTIgLTIyLjA5Nyw5LjE1M2MtNS44Niw1Ljg2IC05LjE1MywxMy44MDkgLTkuMTUzLDIyLjA5N2MwLDEzMS43OSAwLDY0MS40NzUgMCw3NzMuMjY1YzAsOC4yODggMy4yOTMsMTYuMjM3IDkuMTUzLDIyLjA5N2M1Ljg2MSw1Ljg2MSAxMy44MDksOS4xNTMgMjIuMDk3LDkuMTUzYzIzLjg2OCwwIDU2LjYxLDAgODAuNDc3LDBjOC4yODgsMCAxNi4yMzcsLTMuMjkyIDIyLjA5NywtOS4xNTNjNS44NjEsLTUuODYgOS4xNTMsLTEzLjgwOSA5LjE1MywtMjIuMDk3YzAsLTEzMS43OSAwLC02NDEuNDc1IDAsLTc3My4yNjVaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI0KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48Zz48cGF0aCBkPSJNNTA2LjQwOSw4MjIuMDYzYy0wLDEzLjgxNSA1LjQ5NCwyNy4wNjIgMTUuMjcxLDM2LjgyMWM5Ljc3Nyw5Ljc2IDIzLjAzNCwxNS4yMyAzNi44NDgsMTUuMjA2YzE4LjY3NCwtMC4wMzQgMzkuNzExLC0wLjA3MiA1OC4zNjksLTAuMTA1YzI4LjY5NiwtMC4wNTIgNTEuOTMyLC0yMy4zMjkgNTEuOTMyLC01Mi4wMjZsMCwtNzY5LjU4NmMwLC0xMy43OTggLTUuNDgxLC0yNy4wMzEgLTE1LjIzOCwtMzYuNzg4Yy05Ljc1NiwtOS43NTcgLTIyLjk5LC0xNS4yMzggLTM2Ljc4OCwtMTUuMjM4bC01OC4zNjgsLTBjLTEzLjc5OCwtMCAtMjcuMDMxLDUuNDgxIC0zNi43ODgsMTUuMjM4Yy05Ljc1Nyw5Ljc1NyAtMTUuMjM4LDIyLjk5IC0xNS4yMzgsMzYuNzg4Yy0wLDE1NS4yODYgLTAsNjE0LjI4MyAtMCw3NjkuNjlaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNjE2Ljc0NiwzMjIuNjYyYzEzLjgxMywwIDI3LjA2MSw1LjQ4NyAzNi44MjksMTUuMjU1YzkuNzY3LDkuNzY4IDE1LjI1NCwyMy4wMTUgMTUuMjU0LDM2LjgyOWMwLDEwNS4xODUgMCwzNDEuODc3IDAsNDQ3LjA2MmMwLDEzLjgxNCAtNS40ODcsMjcuMDYxIC0xNS4yNTQsMzYuODI5Yy05Ljc2OCw5Ljc2NyAtMjMuMDE2LDE1LjI1NSAtMzYuODI5LDE1LjI1NWMtMTguNjMyLC0wIC0zOS42MjIsLTAgLTU4LjI1NCwtMGMtMTMuODEzLC0wIC0yNy4wNjEsLTUuNDg4IC0zNi44MjgsLTE1LjI1NWMtOS43NjgsLTkuNzY4IC0xNS4yNTUsLTIzLjAxNSAtMTUuMjU1LC0zNi44MjljLTAsLTY4LjIyMyAtMCwtMTg3LjE1OSAtMCwtMjU1LjM4M2MtMCwtMTMuODEzIC01LjQ4NywtMjcuMDYxIC0xNS4yNTUsLTM2LjgyOGMtOS43NjcsLTkuNzY4IC0yMy4wMTUsLTE1LjI1NSAtMzYuODI4LC0xNS4yNTVjLTEyOS4yNDksLTAgLTQ1NC4zMjYsLTAgLTQ1NC4zMjYsLTBsMCwtMTkxLjY4bDYxNi43NDYsMFoiIHN0eWxlPSJmaWxsOiMwMDUxYjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTS0wLDgyMi4xMDFjMCwxMy44MTcgNS40OTcsMjcuMDY3IDE1LjI3NywzNi44MjdjOS43ODEsOS43NiAyMy4wNDMsMTUuMjI5IDM2Ljg2LDE1LjE5OWMxOC42NzUsLTAuMDQgMzkuNzEzLC0wLjA4NSA1OC4zNjgsLTAuMTI0YzI4LjY5LC0wLjA2MiA1MS45MTYsLTIzLjMzNyA1MS45MTYsLTUyLjAyN2MtMCwtMTU1LjIwNSAtMCwtNjE0LjUwOSAtMCwtNzY5LjcxNGMtMCwtMjguNjkgLTIzLjIyNiwtNTEuOTY1IC01MS45MTYsLTUyLjAyNmMtMTguNjU1LC0wLjA0IC0zOS42OTMsLTAuMDg1IC01OC4zNjgsLTAuMTI1Yy0xMy44MTcsLTAuMDI5IC0yNy4wNzksNS40MzkgLTM2Ljg2LDE1LjE5OWMtOS43OCw5Ljc2IC0xNS4yNzcsMjMuMDEgLTE1LjI3NywzNi44MjdsLTAsNzY5Ljk2NFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXIxIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuMTk4MTRlLTE0LC04NDguOTIxLDg0OC45MjEsNS4xOTgxNGUtMTQsMTMwOC44LDg3NS4zOTcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDUwYjU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwYjg3ZmQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjMiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1LjE5ODE0ZS0xNCwtODQ4LjkyMSw4NDguOTIxLDUuMTk4MTRlLTE0LDEzMDguOCw4NzUuMzk3KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA1MGI1O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMGI4N2ZkO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXI0IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjkxODg1ZS0xMyw0NzIuNDU5LC00NzMuODk1LC0zLjkwNjk4ZS0xMyw1ODcuNjE5LC0wLjg2MTY1MSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNDhhZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzU4MDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuNTE4NDhlLTE0LDg5OC41MDYsLTkwMS4yMzYsNS41MDE3NmUtMTQsMTYyLjQyMSwtMTIuMTMzNykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzBiODlmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNGViMjtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==";const n={class:"flex h-full"},O={class:"navbar fixed hidden h-full overflow-y-auto md:block"},x={class:"logo flex justify-center pt-5 pb-7"},d=["src"],u={class:"px-3"},o={class:"mr-3"},S=M.createElementVNode("span",{class:"flex-1 select-none text-base font-normal"},"\u641C\u7D22",-1),A={class:"text-sm"},Y={class:"current-profile"},r={key:0,class:"profile-avatar"},m={class:"profile-name"},k={class:"flex text-sm font-medium"},E={class:"flex"},b={class:"content w-full overflow-y-auto pb-12 mb-safe md:pb-0"},Z={key:0,class:"bottom-nav-bar fixed left-0 bottom-0 right-0 grid grid-cols-6 border-t-2 border-black drop-shadow-2xl mt-safe pb-safe md:hidden bg-secondary"},W=["onClick"],G={class:"flex w-full cursor-pointer items-center justify-center p-1 text-white"},U={class:"is-active is-active0 flex h-10 w-10 flex-col items-center justify-center"},p={class:"text-base"},V={class:"mt-0.5 text-xs"},Q={class:"flex w-full cursor-pointer items-center justify-center p-1 text-white"},h={class:"is-active is-active0 flex h-10 w-10 flex-col items-center justify-center"},R={class:"text-base"},P=M.createElementVNode("div",{class:"mt-0.5 text-xs"},"\u66F4\u591A",-1),B={class:"drawer-wrapper fixed top-0 left-0 z-[99999] flex h-full w-full flex-row items-end justify-center"},f={class:"drawer-content relative flex h-3/4 w-screen flex-col items-stretch overflow-y-auto rounded-t-md bg-white shadow-xl"},H={class:"drawer-body"};var v=M.defineComponent({__name:"BasicLayout",setup(L){const c=M.inject("menus"),T=M.inject("minimenus"),w=y.useRoute(),l=y.useRouter(),i=M.ref(!1),e=M.ref(!1),t=M.inject("currentUser"),NM=()=>{l.push({path:`/users/${t==null?void 0:t.metadata.name}/detail`})},jM=M.computed(()=>{var s;return JSON.parse(((s=t==null?void 0:t.metadata.annotations)==null?void 0:s["rbac.authorization.halo.run/role-names"])||"[]")[0]}),LM=M.inject("globalSearchVisible",M.ref(!1)),IM=/macintosh|mac os x/i.test(navigator.userAgent);return(s,j)=>{var D,C,z,a;return M.openBlock(),M.createElementBlock("div",n,[M.createElementVNode("aside",O,[M.createElementVNode("div",x,[M.createElementVNode("img",{src:M.unref(g),alt:"Halo Logo",style:{width:"78px"}},null,8,d)]),M.createElementVNode("div",u,[M.createElementVNode("div",{class:"flex cursor-pointer items-center rounded bg-gray-100 p-2 text-gray-400 transition-all hover:text-gray-900",onClick:j[0]||(j[0]=N=>LM.value=!0)},[M.createElementVNode("span",o,[M.createVNode(M.unref(I.IconSearch))]),S,M.createElementVNode("div",A,M.toDisplayString(`${M.unref(IM)?"\u2318":"Ctrl"}+K`),1)])]),M.createVNode(M.unref(I.VRoutesMenu),{menus:M.unref(c)},null,8,["menus"]),M.createElementVNode("div",Y,[(D=M.unref(t))!=null&&D.spec.avatar?(M.openBlock(),M.createElementBlock("div",r,[M.createVNode(M.unref(I.VAvatar),{src:(C=M.unref(t))==null?void 0:C.spec.avatar,alt:(z=M.unref(t))==null?void 0:z.spec.displayName,size:"md",circle:""},null,8,["src","alt"])])):M.createCommentVNode("",!0),M.createElementVNode("div",m,[M.createElementVNode("div",k,M.toDisplayString((a=M.unref(t))==null?void 0:a.spec.displayName),1),M.createElementVNode("div",E,[M.createVNode(M.unref(I.VTag),null,{leftIcon:M.withCtx(()=>[M.createVNode(M.unref(I.IconUserSettings))]),default:M.withCtx(()=>[M.createTextVNode(" "+M.toDisplayString(M.unref(jM)),1)]),_:1})])]),M.createElementVNode("div",{class:"profile-control cursor-pointer rounded p-1 transition-all hover:bg-gray-100",onClick:NM},[M.createVNode(M.unref(I.IconMore))])])]),M.createElementVNode("main",b,[s.$slots.default?M.renderSlot(s.$slots,"default",{key:0}):(M.openBlock(),M.createBlock(M.unref(y.RouterView),{key:1}))]),M.unref(T)?(M.openBlock(),M.createElementBlock("div",Z,[(M.openBlock(!0),M.createElementBlock(M.Fragment,null,M.renderList(M.unref(T),(N,tM)=>(M.openBlock(),M.createElementBlock("div",{key:tM,class:M.normalizeClass([{"bg-black":M.unref(w).path===(N==null?void 0:N.path)},"nav-item"]),onClick:eM=>M.unref(l).push(N==null?void 0:N.path)},[M.createElementVNode("div",G,[M.createElementVNode("div",U,[M.createElementVNode("div",p,[(M.openBlock(),M.createBlock(M.resolveDynamicComponent(N==null?void 0:N.icon)))]),M.createElementVNode("div",V,M.toDisplayString(N==null?void 0:N.name),1)])])],10,W))),128)),M.createElementVNode("div",{class:"nav-item",onClick:j[1]||(j[1]=N=>i.value=!0)},[M.createElementVNode("div",Q,[M.createElementVNode("div",h,[M.createElementVNode("div",R,[M.createVNode(M.unref(I.IconMore))]),P])])]),(M.openBlock(),M.createBlock(M.Teleport,{to:"body"},[M.withDirectives(M.createElementVNode("div",B,[M.createVNode(M.Transition,{"enter-active-class":"ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0",onBeforeEnter:j[3]||(j[3]=N=>e.value=!0),onAfterLeave:j[4]||(j[4]=N=>e.value=!1)},{default:M.withCtx(()=>[M.withDirectives(M.createElementVNode("div",{class:"drawer-layer absolute top-0 left-0 h-full w-full flex-none bg-gray-500 bg-opacity-75 transition-opacity",onClick:j[2]||(j[2]=N=>i.value=!1)},null,512),[[M.vShow,i.value]])]),_:1}),M.createVNode(M.Transition,{"enter-active-class":"transform transition ease-in-out duration-500 sm:duration-700","enter-from-class":"translate-y-full","enter-to-class":"translate-y-0","leave-active-class":"transform transition ease-in-out duration-500 sm:duration-700","leave-from-class":"translate-y-0","leave-to-class":"translate-y-full"},{default:M.withCtx(()=>[M.withDirectives(M.createElementVNode("div",f,[M.createElementVNode("div",H,[M.createVNode(M.unref(I.VRoutesMenu),{menus:M.unref(c),class:"p-0",onSelect:j[5]||(j[5]=N=>i.value=!1)},null,8,["menus"])])],512),[[M.vShow,i.value]])]),_:1})],512),[[M.vShow,e.value]])]))])):M.createCommentVNode("",!0)])}}}),J="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMTQ0IDg3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij48cGF0aCBkPSJNMTAyOC4xNiwzMzkuMzMxYzE0OC4yNDksMCAyNjguNjA5LDEyMC4zNiAyNjguNjA5LDI2OC42MDljLTAsMTQ4LjI0OSAtMTIwLjM2LDI2OC42MDggLTI2OC42MDksMjY4LjYwOGMtMTQ4LjI0OSwwIC0yNjguNjA4LC0xMjAuMzU5IC0yNjguNjA4LC0yNjguNjA4Yy0wLC0xNDguMjQ5IDEyMC4zNTksLTI2OC42MDkgMjY4LjYwOCwtMjY4LjYwOVptMCwxMTkuMTUyYzgyLjQ4OCwwIDE0OS40NTcsNjYuOTY5IDE0OS40NTcsMTQ5LjQ1N2MtMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU3LDE0OS40NTZjLTgyLjQ4NywwIC0xNDkuNDU2LC02Ni45NjkgLTE0OS40NTYsLTE0OS40NTZjLTAsLTgyLjQ4OCA2Ni45NjksLTE0OS40NTcgMTQ5LjQ1NiwtMTQ5LjQ1N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxwYXRoIGQ9Ik0xODc0LjU4LDMzOS4zMzFjMTQ4LjI0OSwwIDI2OC42MDgsMTIwLjM2IDI2OC42MDgsMjY4LjYwOWMwLDE0OC4yNDkgLTEyMC4zNTksMjY4LjYwOCAtMjY4LjYwOCwyNjguNjA4Yy0xNDguMjQ5LDAgLTI2OC42MDksLTEyMC4zNTkgLTI2OC42MDksLTI2OC42MDhjMCwtMTQ4LjI0OSAxMjAuMzYsLTI2OC42MDkgMjY4LjYwOSwtMjY4LjYwOVptLTAsMTE5LjE1MmM4Mi40ODcsMCAxNDkuNDU2LDY2Ljk2OSAxNDkuNDU2LDE0OS40NTdjMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU2LDE0OS40NTZjLTgyLjQ4OCwwIC0xNDkuNDU3LC02Ni45NjkgLTE0OS40NTcsLTE0OS40NTZjMCwtODIuNDg4IDY2Ljk2OSwtMTQ5LjQ1NyAxNDkuNDU3LC0xNDkuNDU3WiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMik7Ii8+PHBhdGggZD0iTTEzMDkuMjcsMzc3LjU4NWMtMCwtMTAuMDgzIC03LjIyMiwtMTguNzE5IC0xNy4xNDYsLTIwLjUwNGMtMTkuNjE4LC0zLjUyOCAtNTEuOSwtOS4zMzQgLTc0LjE3MiwtMTMuMzRjLTYuMDczLC0xLjA5MiAtMTIuMzE4LDAuNTY0IC0xNy4wNTIsNC41MjJjLTQuNzM0LDMuOTU5IC03LjQ2OSw5LjgxMiAtNy40NjksMTUuOTgzYy0wLDkxLjM3NCAtMCw0MDcuMTUzIC0wLDQ5MS40NjljLTAsNS41MjUgMi4xOTUsMTAuODI0IDYuMTAyLDE0LjczMWMzLjkwNywzLjkwNyA5LjIwNiw2LjEwMiAxNC43MzEsNi4xMDJjMjAuOTg3LDAgNTMuMTg2LDAgNzQuMTczLDBjNS41MjUsMCAxMC44MjQsLTIuMTk1IDE0LjczMSwtNi4xMDJjMy45MDcsLTMuOTA3IDYuMTAyLC05LjIwNiA2LjEwMiwtMTQuNzMxYy0wLC04NC40MjUgLTAsLTQwMC4yODYgLTAsLTQ3OC4xM1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPjxwYXRoIGQ9Ik0xNTQyLjU5LDcyLjAzM2MwLC04LjI4OCAtMy4yOTIsLTE2LjIzNyAtOS4xNTMsLTIyLjA5N2MtNS44NiwtNS44NjEgLTEzLjgwOSwtOS4xNTMgLTIyLjA5NywtOS4xNTNjLTIzLjg2NywtMCAtNTYuNjA5LC0wIC04MC40NzcsLTBjLTguMjg4LC0wIC0xNi4yMzYsMy4yOTIgLTIyLjA5Nyw5LjE1M2MtNS44Niw1Ljg2IC05LjE1MywxMy44MDkgLTkuMTUzLDIyLjA5N2MwLDEzMS43OSAwLDY0MS40NzUgMCw3NzMuMjY1YzAsOC4yODggMy4yOTMsMTYuMjM3IDkuMTUzLDIyLjA5N2M1Ljg2MSw1Ljg2MSAxMy44MDksOS4xNTMgMjIuMDk3LDkuMTUzYzIzLjg2OCwwIDU2LjYxLDAgODAuNDc3LDBjOC4yODgsMCAxNi4yMzcsLTMuMjkyIDIyLjA5NywtOS4xNTNjNS44NjEsLTUuODYgOS4xNTMsLTEzLjgwOSA5LjE1MywtMjIuMDk3YzAsLTEzMS43OSAwLC02NDEuNDc1IDAsLTc3My4yNjVaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI0KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48Zz48cGF0aCBkPSJNNTA2LjQwOSw4MjIuMDYzYy0wLDEzLjgxNSA1LjQ5NCwyNy4wNjIgMTUuMjcxLDM2LjgyMWM5Ljc3Nyw5Ljc2IDIzLjAzNCwxNS4yMyAzNi44NDgsMTUuMjA2YzE4LjY3NCwtMC4wMzQgMzkuNzExLC0wLjA3MiA1OC4zNjksLTAuMTA1YzI4LjY5NiwtMC4wNTIgNTEuOTMyLC0yMy4zMjkgNTEuOTMyLC01Mi4wMjZsMCwtNzY5LjU4NmMwLC0xMy43OTggLTUuNDgxLC0yNy4wMzEgLTE1LjIzOCwtMzYuNzg4Yy05Ljc1NiwtOS43NTcgLTIyLjk5LC0xNS4yMzggLTM2Ljc4OCwtMTUuMjM4bC01OC4zNjgsLTBjLTEzLjc5OCwtMCAtMjcuMDMxLDUuNDgxIC0zNi43ODgsMTUuMjM4Yy05Ljc1Nyw5Ljc1NyAtMTUuMjM4LDIyLjk5IC0xNS4yMzgsMzYuNzg4Yy0wLDE1NS4yODYgLTAsNjE0LjI4MyAtMCw3NjkuNjlaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNjE2Ljc0NiwzMjIuNjYyYzEzLjgxMywwIDI3LjA2MSw1LjQ4NyAzNi44MjksMTUuMjU1YzkuNzY3LDkuNzY4IDE1LjI1NCwyMy4wMTUgMTUuMjU0LDM2LjgyOWMwLDEwNS4xODUgMCwzNDEuODc3IDAsNDQ3LjA2MmMwLDEzLjgxNCAtNS40ODcsMjcuMDYxIC0xNS4yNTQsMzYuODI5Yy05Ljc2OCw5Ljc2NyAtMjMuMDE2LDE1LjI1NSAtMzYuODI5LDE1LjI1NWMtMTguNjMyLC0wIC0zOS42MjIsLTAgLTU4LjI1NCwtMGMtMTMuODEzLC0wIC0yNy4wNjEsLTUuNDg4IC0zNi44MjgsLTE1LjI1NWMtOS43NjgsLTkuNzY4IC0xNS4yNTUsLTIzLjAxNSAtMTUuMjU1LC0zNi44MjljLTAsLTY4LjIyMyAtMCwtMTg3LjE1OSAtMCwtMjU1LjM4M2MtMCwtMTMuODEzIC01LjQ4NywtMjcuMDYxIC0xNS4yNTUsLTM2LjgyOGMtOS43NjcsLTkuNzY4IC0yMy4wMTUsLTE1LjI1NSAtMzYuODI4LC0xNS4yNTVjLTEyOS4yNDksLTAgLTQ1NC4zMjYsLTAgLTQ1NC4zMjYsLTBsMCwtMTkxLjY4bDYxNi43NDYsMFoiIHN0eWxlPSJmaWxsOiMwMDUxYjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTS0wLDgyMi4xMDFjMCwxMy44MTcgNS40OTcsMjcuMDY3IDE1LjI3NywzNi44MjdjOS43ODEsOS43NiAyMy4wNDMsMTUuMjI5IDM2Ljg2LDE1LjE5OWMxOC42NzUsLTAuMDQgMzkuNzEzLC0wLjA4NSA1OC4zNjgsLTAuMTI0YzI4LjY5LC0wLjA2MiA1MS45MTYsLTIzLjMzNyA1MS45MTYsLTUyLjAyN2MtMCwtMTU1LjIwNSAtMCwtNjE0LjUwOSAtMCwtNzY5LjcxNGMtMCwtMjguNjkgLTIzLjIyNiwtNTEuOTY1IC01MS45MTYsLTUyLjAyNmMtMTguNjU1LC0wLjA0IC0zOS42OTMsLTAuMDg1IC01OC4zNjgsLTAuMTI1Yy0xMy44MTcsLTAuMDI5IC0yNy4wNzksNS40MzkgLTM2Ljg2LDE1LjE5OWMtOS43OCw5Ljc2IC0xNS4yNzcsMjMuMDEgLTE1LjI3NywzNi44MjdsLTAsNzY5Ljk2NFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXIxIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuMTk4MTRlLTE0LC04NDguOTIxLDg0OC45MjEsNS4xOTgxNGUtMTQsMTMwOC44LDg3NS4zOTcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDUwYjU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwYjg3ZmQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjMiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1LjE5ODE0ZS0xNCwtODQ4LjkyMSw4NDguOTIxLDUuMTk4MTRlLTE0LDEzMDguOCw4NzUuMzk3KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA1MGI1O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMGI4N2ZkO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXI0IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjkxODg1ZS0xMyw0NzIuNDU5LC00NzMuODk1LC0zLjkwNjk4ZS0xMyw1ODcuNjE5LC0wLjg2MTY1MSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNDhhZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzU4MDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuNTE4NDhlLTE0LDg5OC41MDYsLTkwMS4yMzYsNS41MDE3NmUtMTQsMTYyLjQyMSwtMTIuMTMzNykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzBiODlmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNGViMjtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",iM="",F=(L,c)=>{const T=L.__vccOpts||L;for(const[w,l]of c)T[w]=l;return T};const X=M.defineComponent({name:"DefaultView",setup(){return{logo:J}}}),_=(L=>(M.pushScopeId("data-v-5b80c6f8"),L=L(),M.popScopeId(),L))(()=>M.createElementVNode("div",{class:"title"},"Hello World",-1)),K=["src"];function $(L,c,T,w,l,i){const e=M.resolveDirective("permission");return M.openBlock(),M.createElementBlock(M.Fragment,null,[_,M.withDirectives(M.createElementVNode("img",{src:L.logo,alt:"logo"},null,8,K),[[e,["plugin:apples:view"]]])],64)}var q=F(X,[["render",$],["__scopeId","data-v-5b80c6f8"]]),lM="",MM={name:"PluginUmami",components:[],routes:[{path:"/hello-world",component:v,children:[{path:"",name:"HelloWorld",component:q,meta:{permissions:["plugin:apples:view"]}}]}],menus:[{name:"From PluginUmami",items:[{name:"HelloWorld",path:"/hello-world",icon:I.IconGrid}]}],extensionPoints:{},activated(){},deactivated(){}};return MM}(Vue,VueRouter,HaloComponents);
