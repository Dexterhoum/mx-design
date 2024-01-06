"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[973],{123:(e,n,c)=>{c.r(n),c.d(n,{default:()=>k});var t=c(2798),r=c(9641),i=c(7059),a=c(2983),p=c(6880),o=c(6623),m=c(1399),s=c(8918),u={code:"\nimport { Space, Switch } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch />\n    </Space>\n  );\n}",namespace:s.Bb},d={code:"\nimport { Space, Switch } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch checkedIcon={<IconSun />} uncheckedIcon={<IconMoon />} />\n      <Switch checkedElement={<IconSelect />} unCheckedElement={<IconClose />} />\n    </Space>\n  );\n}",namespace:s.JO},h={code:'\nimport { Space, Switch } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch checkedElement="ON" unCheckedElement="OFF" />\n      <Switch checkedElement="YES" unCheckedElement="NO" />\n    </Space>\n  );\n}',namespace:s.xv},S={code:"\nimport { Space, Switch } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch disabled />\n      <Switch checked disabled />\n    </Space>\n  );\n}",namespace:s.x9},l={code:'\nimport { Space, Switch } from \'@mx-design/web\';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch loading />\n      <Switch checked loading />\n      <Switch loading disabled />\n      <Switch checked loading disabled />\n      <Switch checkedElement="ON" unCheckedElement="OFF" loading />\n    </Space>\n  );\n}',namespace:s.gb},w={code:"\nimport { Space, Switch } from '@mx-design/web';\n\nfunction App() {\n  return (\n    <Space>\n      <Switch />\n      <Switch themeStyle={{ '--switch-size': '12px', '--switch-size-dot': '8px', '--switch-top': '2px' }} />\n    </Space>\n  );\n}",namespace:s.$u},f=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},u.namespace,u),S.namespace,S),d.namespace,d),h.namespace,h),l.namespace,l),w.namespace,w),b=c(5772);function O(e,n){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),c.push.apply(c,t)}return c}function g(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?O(Object(c),!0).forEach((function(n){(0,r.Z)(e,n,c[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):O(Object(c)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(c,n))}))}return e}const k=function(){var e=(0,m.b)({namespace:o.zn}),n=(0,i.Z)(e,1)[0],c=(0,a.useMemo)((function(){return Object.keys(n).map((function(e){return g(g({},n[e]),f[e])}))}),[n,f]),r=(0,a.useMemo)((function(){return c.map((function(e){return{title:e.title,href:"#".concat(e.namespace)}}))}),[c]);return a.createElement(p.Z,{titleList:r},c.map((function(e){return a.createElement(b.AN,(0,t.Z)({key:e.namespace},e))})))}}}]);