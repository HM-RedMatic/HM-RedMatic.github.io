(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{209:function(e,t,n){"use strict";n.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=n(6),i=Object(r.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[n("h1",{attrs:{id:"datenpunktstatus-von-mehreren-geraeten-gleichzeitig-abfragen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datenpunktstatus-von-mehreren-geraeten-gleichzeitig-abfragen","aria-hidden":"true"}},[e._v("#")]),e._v(" Datenpunktstatus von mehreren Geraeten gleichzeitig abfragen")]),e._v(" "),n("p",[e._v('Der folgende Beispielflow, ergibt am Ende als Payload ein bool "true" Ausgeben falls ein oder mehrere Lichter an sind, "false" falls alle aus sind.\n'),n("img",{attrs:{src:"https://user-images.githubusercontent.com/44581521/50928157-30cf1280-145a-11e9-9e73-df4739cd2a2a.png",alt:""}}),e._v(" "),n("img",{attrs:{src:"https://user-images.githubusercontent.com/44581521/50928365-c5d20b80-145a-11e9-868f-8d0d9793f200.png",alt:""}}),e._v(" "),n("img",{attrs:{src:"https://user-images.githubusercontent.com/44581521/50928621-76400f80-145b-11e9-9ac9-d818bcba06cb.png",alt:""}})]),e._v(" "),n("p",[n("code",[e._v('[{"id":"e6f9b982.598fb8","type":"ccu-rpc-event","z":"9804491c.a6e8b8","name":"","iface":"","ccuConfig":"38263145.35ea0e","rooms":"","roomsRx":"str","functions":"Licht","functionsRx":"str","device":"","deviceRx":"str","deviceName":"","deviceNameRx":"str","deviceType":"","deviceTypeRx":"str","channel":"","channelRx":"str","channelName":"","channelNameRx":"str","channelType":"","channelTypeRx":"str","datapoint":"^STATE$|^LEVEL$","datapointRx":"re","change":true,"working":true,"cache":true,"topic":"${CCU}/${Interface}/${channelName}/${datapoint}","x":140,"y":180,"wires":[["c7910200.404d3"]]},{"id":"c7910200.404d3","type":"combine-logic","z":"9804491c.a6e8b8","name":"","topic":"","operator":"or","defer":250,"timeout":0,"distinction":"topic","x":300,"y":180,"wires":[["9b156924.74c638"]]},{"id":"9b156924.74c638","type":"debug","z":"9804491c.a6e8b8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"true","x":440,"y":180,"wires":[]},{"id":"38263145.35ea0e","type":"ccu-connection","z":"","name":"localhost","host":"localhost","regaEnabled":true,"bcrfEnabled":true,"iprfEnabled":true,"virtEnabled":false,"bcwiEnabled":true,"cuxdEnabled":false,"regaPoll":true,"regaInterval":"30","rpcPingTimeout":"60","rpcInitAddress":"127.0.0.1","rpcServerHost":"127.0.0.1","rpcBinPort":"2047","rpcXmlPort":"2048","contextStore":"default"}]')])]),e._v(" "),n("p",[e._v("Wenn man den Status der Geräte bei einem bestimmten Event abfragen will (z.B. Wenn ich die Haustüre zuschließe und nicht alle Lampen ausgeschaltet sind, dann...), muss der Ausgang dieses Flows mit einem Change Node Verbindungen werden der das Ergebnis im Context (z.b. "),n("code",[e._v("global.lights")]),e._v(") speichert. In dem Flow der vom Öffnen der Haustüre angetriggert wird, kann man anschließend einen Switch Node verwenden der je nach Wert des vorher gespeicherten Ergebnisses die Nachricht weiterleitet oder nicht (oder an unterschiedliche Ausgänge weiterleitet).")])])},[],!1,null,null,null);i.options.__file="flow-geraete-abfragen.md";t.default=i.exports}}]);