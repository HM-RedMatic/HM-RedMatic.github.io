(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{224:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),e=Object(r.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"schalter-mit-status-als-badge-ersatz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schalter-mit-status-als-badge-ersatz","aria-hidden":"true"}},[t._v("#")]),t._v(" Schalter mit Status als Badge Ersatz")]),t._v(" "),a("h2",{attrs:{id:"generelles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generelles","aria-hidden":"true"}},[t._v("#")]),t._v(" Generelles")]),t._v(" "),a("p",[t._v('Häufig möchte man einen Schalter, der zum einen Informationen angibt (Anzahl offener Jalousien, Player on / off) und zum anderen auch "clickbar" ist. In Android / iPhones kann man das mit "badges" realisieren - in NodeRED Dashboard geht das mit dem Dashboard Button. Ich nutzte es um die Funktionen (Jalousien, Sicherheit/Fenster, Lichter, Heizung, Media auf einem Dashboard anzuzeigen und bei "click" dorthin zu springen (Detailseiten). Es sieht dann so aus:')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/17273119/60768123-83b01c80-a0c1-11e9-9b15-ef626cff7a8c.png",alt:"Aussehen"}})]),t._v(" "),a("h2",{attrs:{id:"benotigte-erweiterungen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benotigte-erweiterungen","aria-hidden":"true"}},[t._v("#")]),t._v(" Benötigte Erweiterungen")]),t._v(" "),a("p",[t._v("Keine.")]),t._v(" "),a("h2",{attrs:{id:"einstellungen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#einstellungen","aria-hidden":"true"}},[t._v("#")]),t._v(" Einstellungen")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/17273119/60768199-852e1480-a0c2-11e9-8afa-3e6ec2348007.png",alt:"Node Konfiguration"}})]),t._v(" "),a("p",[t._v("Hier ist die Node zum import.")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dc5a819e.5840b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"ui_button"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"z"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"95579ba8.e8979"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"BigBut Blinds"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"group"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"b6335921.23f268"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"order"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"width"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"height"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"passthru"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"label"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"<font size=6>{{msg.payload}}</font>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"tooltip"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"Jalousien"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"color"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"{{(msg.payload > 0 ?\\"CornflowerBlue \\":\\"Silver\\")}}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"bgcolor"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('" Gainsboro"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"fa-bars fa-3x"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"payload"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"payloadType"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"str"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"topic"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"x"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1025")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"y"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("415")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"wires"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"4ff658fe.0aa218"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"b6335921.23f268"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"ui_group"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"z"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"Funktionen"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"tab"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"bf6344f5.596528"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"order"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"disp"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"width"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"10"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"collapse"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"id"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"bf6344f5.596528"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"ui_tab"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"z"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"Übersicht"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"icon"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"dashboard"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"order"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"disabled"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"hidden"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])},[],!1,null,null,null);e.options.__file="Schalter-mit-Status-als-Badge-Ersatz.md";s.default=e.exports}}]);