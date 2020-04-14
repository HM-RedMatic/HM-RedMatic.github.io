(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{249:function(t,n,e){"use strict";e.r(n);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=e(6),r=Object(s.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h3",{attrs:{id:"sticky-unreach-geratekommunikation-war-gestort-meldungen-bestatigen-und-zahlen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sticky-unreach-geratekommunikation-war-gestort-meldungen-bestatigen-und-zahlen","aria-hidden":"true"}},[t._v("#")]),t._v(' STICKY_UNREACH ("Gerätekommunikation war gestört") Meldungen bestätigen und zählen')]),t._v(" "),e("p",[t._v("Dieser Flow bestätigt auftretende STICK_UNREACH Servicemeldungen sofort und erhöht dabei einen Zähler im Flow Context.")]),t._v(" "),e("p",[t._v("Ein "),e("em",[t._v("RPC Event")]),t._v(' Node abboniert alle Events mit dem Datenpunkt "STICKY_UNREACH", ein Switch Node leitet die Nachricht nur weiter wenn '),e("code",[t._v("msg.payload")]),t._v(" "),e("code",[t._v("true")]),t._v(" ist. In einem "),e("code",[t._v("Function")]),t._v(" Node wird der Zähler im Flow Context erhöht und ein Homematic-Script erzeugt und an einen "),e("code",[t._v("CCU Script")]),t._v(" Node übergeben.")]),t._v(" "),e("p",[e("img",{attrs:{src:"images/sticky.png",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"function-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function-node","aria-hidden":"true"}},[t._v("#")]),t._v(" Function Node")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// Increment Counter")]),t._v("\nflow"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datapointName"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flow"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datapointName"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("0")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Alarm Receipt")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    payload"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token template-string"}},[e("span",{attrs:{class:"token string"}},[t._v('`\n        var dpAl = dom.GetObject("AL-')]),e("span",{attrs:{class:"token interpolation"}},[e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("msg"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{attrs:{class:"token string"}},[t._v(".")]),e("span",{attrs:{class:"token interpolation"}},[e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("msg"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datapoint"),e("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{attrs:{class:"token string"}},[t._v('");\n        dpAl.AlReceipt();\n    `')])]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("h4",{attrs:{id:"flow-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-json","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow JSON")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[{"id":"43a10cf7.cf3834","type":"ccu-rpc-event","z":"d93ee77.7acbf18","name":"RPC event STICKY_UNREACH","iface":"BidCos-RF","ccuConfig":"38263145.35ea0e","rooms":"","roomsRx":"str","functions":"","functionsRx":"str","device":"","deviceRx":"str","deviceName":"","deviceNameRx":"str","deviceType":"","deviceTypeRx":"str","channel":"","channelRx":"str","channelName":"","channelNameRx":"str","channelType":"MAINTENANCE","channelTypeRx":"str","datapoint":"STICKY_UNREACH","datapointRx":"str","change":false,"working":false,"cache":true,"topic":"${CCU}/${Interface}/${channelName}/${datapoint}","x":170,"y":480,"wires":[["af7f9b44.a56258"]]},{"id":"af7f9b44.a56258","type":"switch","z":"d93ee77.7acbf18","name":"is true","property":"payload","propertyType":"msg","rules":[{"t":"true"}],"checkall":"true","repair":false,"outputs":1,"x":410,"y":480,"wires":[["6bed755f.3ae26c"]]},{"id":"6bed755f.3ae26c","type":"function","z":"d93ee77.7acbf18","name":"AlReceipt, Count","func":"// Increment Counter\\nflow.set(msg.datapointName, (flow.get(msg.datapointName) || 0) + 1);\\n\\n// Alarm Receipt\\nreturn {\\n    payload: `\\n        var dpAl = dom.GetObject(\\"AL-${msg.channel}.${msg.datapoint}\\");\\n        dpAl.AlReceipt();\\n    `\\n};","outputs":1,"noerr":0,"x":210,"y":560,"wires":[["f5c844da.8aa028"]]},{"id":"f5c844da.8aa028","type":"ccu-script","z":"d93ee77.7acbf18","name":"","script":"","ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/","x":450,"y":560,"wires":[[]]},{"id":"da42b94a.e3f4c8","type":"comment","z":"d93ee77.7acbf18","name":"STICKY_UNREACH Meldungen bestätigen und zählen","info":"","x":260,"y":420,"wires":[]},{"id":"38263145.35ea0e","type":"ccu-connection","z":"","name":"localhost","host":"localhost","regaEnabled":true,"bcrfEnabled":true,"iprfEnabled":true,"virtEnabled":true,"bcwiEnabled":true,"cuxdEnabled":false,"regaPoll":true,"regaInterval":"30","rpcPingTimeout":"60","rpcInitAddress":"127.0.0.1","rpcServerHost":"127.0.0.1","rpcBinPort":"2047","rpcXmlPort":"2048","contextStore":"default"}]\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])},[],!1,null,null,null);r.options.__file="Flow-Sticky.md";n.default=r.exports}}]);