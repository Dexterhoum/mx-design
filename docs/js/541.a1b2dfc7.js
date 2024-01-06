"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[541],{3808:(n,t,e)=>{e.r(t),e.d(t,{default:()=>f});var o=e(2798),r=e(9641),i=e(7059),d=e(2983),p=e(6880),s=e(1399),l=e(8401),c={code:"\nimport { Dropdown, Message, Button } from '@mx-design/web';\n\nfunction App() {\n  const Message = useMessage();\n  const droplist = [\n    {\n      uid: 1,\n      title: 'ChengDu',\n      children: [\n        {\n          uid: 5,\n          title: 'XiAn'\n        },\n        {\n          uid: 6,\n          title: 'DongBei'\n        }\n      ]\n    },\n    {\n      uid: 2,\n      title: 'XiAn'\n    },\n    {\n      uid: 3,\n      title: 'DongBei'\n    },\n    {\n      uid: 4,\n      title: 'GuangXi'\n    }\n  ]\n  const clickHandler = (key) => {\n    Message.add({\n      type: 'success',\n      content: `选中【${key}】`\n    });\n  };\n\n  return (\n    <Space>\n      <Dropdown droplist={droplist} onClick={clickHandler}>\n        <Button>Hover me</Button>\n      </Dropdown>\n      <Button.Group>\n        <Button type=\"brand\">Publish</Button>\n        <Dropdown droplist={droplist} onClick={clickHandler}>\n          <Button type=\"brand\" icon={<IconArrowBottom />} />\n        </Dropdown>\n      </Button.Group>\n      <Dropdown droplist={droplist} disabled>\n        <Button>Hover me</Button>\n      </Dropdown>\n    </Space>\n  )\n}",namespace:l.Bb},a={code:"\nimport { Dropdown, Message, Button } from '@mx-design/web';\n\nfunction App() {\n  const Message = useMessage();\n  const droplist = [\n    {\n      uid: 1,\n      title: 'ChengDu',\n    },\n    {\n      uid: 2,\n      title: 'XiAn',\n    },\n    {\n      uid: 3,\n      title: 'DongBei',\n    },\n    {\n      uid: 4,\n      title: 'GuangXi',\n    }\n  ]\n\n  return (\n    <Space size='28px'>\n      <Dropdown trigger=\"click\" droplist={droplist}>\n        <Button>Click me</Button>\n      </Dropdown>\n      <Dropdown trigger=\"click\" droplist={droplist}>\n        <Button>Click me</Button>\n      </Dropdown>\n      <Dropdown trigger=\"context-menu\" droplist={droplist}>\n        <Button>Right Click</Button>\n      </Dropdown>\n    </Space>\n  )\n}",namespace:l.N0},u={code:'\nimport { Dropdown, Message, Button } from \'@mx-design/web\';\n\nfunction App() {\n  const Message = useMessage();\n  const droplist = [\n    {\n      uid: 1,\n      title: \'ChengDu\',\n    },\n    {\n      uid: 2,\n      title: \'XiAn\'\n    },\n    {\n      uid: 3,\n      title: \'DongBei\'\n    },\n    {\n      uid: 4,\n      title: \'GuangXi\'\n    }\n  ]\n  const clickHandler = (key) => {\n    Message.add({\n      type: \'success\',\n      content: `选中【${key}】`\n    });\n  };\n\n  return (\n    <Space direction="vertical" size="24px">\n      <Space size="24px">\n        <Dropdown placement="left" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Left</Button>\n        </Dropdown>\n        <Dropdown placement="left-start" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Left-start</Button>\n        </Dropdown>\n        <Dropdown placement="left-end" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Left-end</Button>\n        </Dropdown>\n        <Dropdown placement="right" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Right</Button>\n        </Dropdown>\n        <Dropdown placement="right-start" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Right-start</Button>\n        </Dropdown>\n        <Dropdown placement="right-end" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Right-end</Button>\n        </Dropdown>\n      </Space>\n      <Space size="24px">\n        <Dropdown placement="top" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Top</Button>\n        </Dropdown>\n        <Dropdown placement="top-start" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Top-start</Button>\n        </Dropdown>\n        <Dropdown placement="top-end" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Top-end</Button>\n        </Dropdown>\n        <Dropdown placement="bottom" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Bottom</Button>\n        </Dropdown>\n        <Dropdown placement="bottom-start" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Bottom-start</Button>\n        </Dropdown>\n        <Dropdown placement="bottom-end" droplist={droplist} onClick={clickHandler}>\n          <Button type="brand" status="default">Bottom-end</Button>\n        </Dropdown>\n      </Space>\n    </Space>\n  )\n}',namespace:l.Ly},m={code:"\nimport { Dropdown, Message, Button } from '@mx-design/web';\n\nfunction App() {\n  const Message = useMessage();\n  const droplist = [\n    {\n      uid: 1,\n      title: 'ChengDu',\n      divider: true,\n      children: [\n        {\n          uid: 5,\n          title: 'XiAn'\n        },\n        {\n          uid: 6,\n          title: 'DongBei'\n        }\n      ]\n    },\n    {\n      uid: 2,\n      title: 'XiAn',\n    },\n    {\n      uid: 3,\n      title: 'DongBei',\n      divider: true,\n    },\n    {\n      uid: 4,\n      title: 'GuangXi',\n      disabled: true\n    }\n  ]\n  const clickHandler = (key) => {\n    Message.add({\n      type: 'success',\n      content: `选中【${key}】`\n    });\n  };\n\n  return (\n    <Space>\n      <Dropdown droplist={droplist} onClick={clickHandler}>\n        <Button>Hover me</Button>\n      </Dropdown>\n    </Space>\n  )\n}",namespace:l.x9},B=(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},c.namespace,c),u.namespace,u),m.namespace,m),a.namespace,a),D=e(6623),g=e(5772);function w(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function k(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}const f=function(){var n=(0,s.b)({namespace:D.Ld}),t=(0,i.Z)(n,1)[0],e=(0,d.useMemo)((function(){return Object.keys(t).map((function(n){return k(k({key:n},t[n]),B[n])}))}),[t]),r=(0,d.useMemo)((function(){return e.map((function(n){return{title:n.title,href:"#".concat(n.key)}}))}),[e]);return d.createElement(p.Z,{titleList:r},e.map((function(n,t){return d.createElement(g.AN,(0,o.Z)({key:t},n))})))}}}]);