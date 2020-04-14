(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{197:function(e,a,t){"use strict";t.r(a);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=t(6),s=Object(n.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[t("p",[e._v("Nutzung des kostenlosen/spendenfinanzierten Service "),t("a",{attrs:{href:"https://red.cb-net.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node-RED Smart Home Control"),t("OutboundLink")],1),e._v(" zur Anbindung an Alexa (und Google Assistant bzw. Google Home).")]),e._v(" "),t("h1",{attrs:{id:"einrichtung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#einrichtung","aria-hidden":"true"}},[e._v("#")]),e._v(" Einrichtung")]),e._v(" "),t("ol",[t("li",[e._v("Account Anlegen auf https://red.cb-net.co.uk/new-user und Email Verifizierung durchführen.")]),e._v(" "),t("li",[e._v("In Alexa App den Skill "),t("code",[e._v("Node-RED Smart Home Control")]),e._v(" von cb-net hinzufügen und mit den in Schritt 1 verwendeten Zugangsdaten verbinden.")]),e._v(" "),t("li",[e._v("Über den Node-RED Palette Manager die Nodes "),t("code",[e._v("node-red-contrib-alexa-smart-home")]),e._v(" installieren (siehe "),t("a",{attrs:{href:"https://github.com/rdmtc/RedMatic/wiki/Node-Installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zusätzliche Nodes installieren"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("h1",{attrs:{id:"gerate-anlegen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gerate-anlegen","aria-hidden":"true"}},[e._v("#")]),e._v(" Geräte Anlegen")]),e._v(" "),t("p",[e._v('Jedes Gerät das man verwenden möchte muss unter https://red.cb-net.co.uk/devices angelegt werden. Danach muss man Alexa mit der Aufforderung "Suche Geräte" (oder über die App) diese neuen Geräte einbinden lassen.')]),e._v(" "),t("h1",{attrs:{id:"beispielflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beispielflows","aria-hidden":"true"}},[e._v("#")]),e._v(" Beispielflows")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Fensterkontakt"}},[e._v("Fensterkontakt")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Schaltaktor"}},[e._v("Schaltaktor")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Rollladen"}},[e._v("Rollladen")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Dimmer"}},[e._v("Dimmer")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Thermostat"}},[e._v("Thermostat")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Keymatic"}},[e._v("Keymatic")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Szenen"}},[e._v("Szenen")])])]),e._v(" "),t("h2",{attrs:{id:"fensterkontakt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fensterkontakt","aria-hidden":"true"}},[e._v("#")]),e._v(" Fensterkontakt")]),e._v(" "),t("p",[e._v('Als Alexa Gerät wird ein "Contact Sensor" verwendet:')]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk0.png",alt:""}})]),e._v(" "),t("p",[e._v("Ein "),t("em",[e._v("CCU Value")]),e._v(" Node wird auf den Datenpunkt "),t("code",[e._v("STATE")]),e._v(" des Kanals 1 des Fensterkontakts konfiguriert:")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk1.png",alt:""}})]),e._v(" "),t("p",[e._v("Dieser Node gibt je nach Zustand des Fensterkontakts bool "),t("code",[e._v("true")]),e._v(" oder "),t("code",[e._v("false")]),e._v(" als "),t("code",[e._v("msg.payload")]),e._v(" aus. Der Alexa Service erwartet jedoch folgende "),t("code",[e._v("msg")]),e._v(": "),t("code",[e._v('{"acknowledge": true, "payload": {"state": {"contact": "DETECTED"}}}')]),e._v(" bzw. "),t("code",[e._v('{"acknowledge": true, "payload": {"state": {"contact": "NOT_DETECTED"}}}')]),e._v(", es ist also eine Transformation der Nachricht notwendig damit diese vom Alexa Node genutzt werden kann. Dies kann mit einem Switch und 2 Change Nodes durchgeführt werden:")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk3.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk4.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk5.png",alt:""}})]),e._v(" "),t("p",[e._v("Am Ende des Flows kommt der Node "),t("em",[e._v("alexa smart home v3 state")]),e._v(" zum Einsatz:")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/tfk2.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"flow-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-json","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow JSON")]),e._v(" "),t("p",[e._v("Import siehe https://github.com/rdmtc/RedMatic/wiki/Flow-Import")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{"id":"bb53c7a1.97ef48","type":"ccu-value","z":"6946acad.eb0ca4","name":"","iface":"BidCos-RF","channel":"JEQ0001234:1 Fenster Hobbyraum","datapoint":"STATE","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":true,"ccuConfig":"","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":140,"y":100,"wires":[["9ca4689c.4bce18"]]},{"id":"59e1c4a.2fe113c","type":"alexa-smart-home-v3-state","z":"6946acad.eb0ca4","conf":"","device":"10277","name":"Fenster Hobbyraum","x":800,"y":100,"wires":[]},{"id":"9ca4689c.4bce18","type":"switch","z":"6946acad.eb0ca4","name":"true / false","property":"payload","propertyType":"msg","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":350,"y":100,"wires":[["57e1e99e.5fc1f8"],["7bb89d62.7f3b04"]]},{"id":"57e1e99e.5fc1f8","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\\"state\\":{\\"contact\\":\\"DETECTED\\"}}","tot":"json"},{"t":"set","p":"acknowledge","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":540,"y":80,"wires":[["59e1c4a.2fe113c"]]},{"id":"7bb89d62.7f3b04","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\\"state\\":{\\"contact\\":\\"NOT_DETECTED\\"}}","tot":"json"},{"t":"set","p":"acknowledge","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":540,"y":120,"wires":[["59e1c4a.2fe113c"]]}]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"schaltaktor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schaltaktor","aria-hidden":"true"}},[e._v("#")]),e._v(" Schaltaktor")]),e._v(" "),t("p",[e._v("... todo")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/schaltaktor2.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"images/alexa/schaltaktor1.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"flow-json-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-json-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow JSON")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{"id":"819a38a8.d26cd8","type":"alexa-smart-home-v3","z":"6946acad.eb0ca4","conf":"e904a268.f4155","device":"10274","acknowledge":true,"name":"Licht Werkstatt","topic":"","x":120,"y":140,"wires":[["7622c428.dad7ac"]]},{"id":"7622c428.dad7ac","type":"switch","z":"6946acad.eb0ca4","name":"\\"ON\\"/\\"OFF\\"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"ON","vt":"str"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":310,"y":140,"wires":[["af3ee014.ef269"],["fe2b057b.2cd088"]]},{"id":"af3ee014.ef269","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":510,"y":120,"wires":[["25df98dd.64fad8"]]},{"id":"fe2b057b.2cd088","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":510,"y":160,"wires":[["25df98dd.64fad8"]]},{"id":"25df98dd.64fad8","type":"ccu-value","z":"6946acad.eb0ca4","name":"","iface":"HmIP-RF","channel":"000D1709A5915B:10 Licht Werkstatt","datapoint":"STATE","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":true,"ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":730,"y":140,"wires":[["b6884af3.03f4d8"]]},{"id":"e503e79e.7e0df8","type":"alexa-smart-home-v3-state","z":"6946acad.eb0ca4","conf":"e904a268.f4155","device":"10274","name":"Licht Werkstatt","x":760,"y":240,"wires":[]},{"id":"b6884af3.03f4d8","type":"switch","z":"6946acad.eb0ca4","name":"true / false","property":"payload","propertyType":"msg","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":330,"y":240,"wires":[["4ce3d9ad.cecb08"],["ac028995.e9e1a8"]]},{"id":"4ce3d9ad.cecb08","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\\"state\\":{\\"power\\":\\"ON\\"}}","tot":"json"},{"t":"set","p":"acknowledge","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":520,"y":220,"wires":[["e503e79e.7e0df8"]]},{"id":"ac028995.e9e1a8","type":"change","z":"6946acad.eb0ca4","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"{\\"state\\":{\\"power\\":\\"OFF\\"}}","tot":"json"},{"t":"set","p":"acknowledge","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":520,"y":260,"wires":[["e503e79e.7e0df8"]]}]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"rollladen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollladen","aria-hidden":"true"}},[e._v("#")]),e._v(" Rollladen")]),e._v(" "),t("p",[e._v("... todo")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/rollladen2.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"images/alexa/rollladen1.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"flow-json-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-json-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow JSON")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{"id":"9ab1c36b.2091","type":"alexa-smart-home-v3","z":"f1e20418.913b28","conf":"e904a268.f4155","device":"10300","acknowledge":true,"name":"Rollladen Garten","topic":"","x":200,"y":120,"wires":[["2357a43.9631b5c"]]},{"id":"e7fdd3a8.f0b7","type":"alexa-smart-home-v3-state","z":"f1e20418.913b28","conf":"e904a268.f4155","device":"10300","name":"Rollladen Garten","x":1110,"y":120,"wires":[]},{"id":"2357a43.9631b5c","type":"range","z":"f1e20418.913b28","minin":"0","maxin":"100","minout":"0","maxout":"1","action":"scale","round":false,"property":"payload","name":"","x":370,"y":120,"wires":[["a7eb4b0e.7c1018"]]},{"id":"9f85c155.ac90d","type":"range","z":"f1e20418.913b28","minin":"0","maxin":"1","minout":"0","maxout":"100","action":"scale","round":false,"property":"payload","name":"","x":760,"y":120,"wires":[["3fdfd4c9.6da09c"]]},{"id":"a7eb4b0e.7c1018","type":"ccu-value","z":"f1e20418.913b28","name":"","iface":"BidCos-RF","channel":"GEQ0005911:1 Rollladen Garten:1","datapoint":"LEVEL","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":true,"ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":550,"y":120,"wires":[["9f85c155.ac90d"]]},{"id":"3fdfd4c9.6da09c","type":"template","z":"f1e20418.913b28","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\"state\\":{\\"rangeValue\\": {{payload}} }}","output":"json","x":920,"y":120,"wires":[["e7fdd3a8.f0b7"]]}]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"dimmer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dimmer","aria-hidden":"true"}},[e._v("#")]),e._v(" Dimmer")]),e._v(" "),t("p",[e._v("... todo")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/dimmer2.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"images/alexa/dimmer1.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"flow-json-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-json-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow JSON")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{"id":"5f79eef7.9d0a8","type":"function","z":"6003067c.4bfd58","name":"","func":"return {\\n    acknowledge: true, \\n    payload: {\\n        state: {\\n            brightness: msg.payload * 100,\\n            power: msg.payload ? \'ON\' : \'OFF\'\\n        }\\n    }\\n};","outputs":1,"noerr":0,"x":890,"y":100,"wires":[["2e890ea4.cad0e2"]]},{"id":"2e890ea4.cad0e2","type":"alexa-smart-home-v3-state","z":"6003067c.4bfd58","conf":"e904a268.f4155","device":"10289","name":"Licht Treppenhaus","x":1050,"y":100,"wires":[]},{"id":"73927e05.51bac","type":"alexa-smart-home-v3","z":"6003067c.4bfd58","conf":"e904a268.f4155","device":"10289","acknowledge":true,"name":"Licht Treppenhaus","topic":"","x":130,"y":100,"wires":[["4476d633.969928"]]},{"id":"4476d633.969928","type":"switch","z":"6003067c.4bfd58","name":"","property":"command","propertyType":"msg","rules":[{"t":"eq","v":"TurnOn","vt":"str"},{"t":"eq","v":"TurnOff","vt":"str"},{"t":"eq","v":"SetBrightness","vt":"str"}],"checkall":"true","repair":false,"outputs":3,"x":300,"y":100,"wires":[["467572e3.dd0cec"],["636572c3.6a488c"],["6ce74694.81c0f8"]],"outputLabels":["TurnOn","TurnOff","SetBrightness"]},{"id":"467572e3.dd0cec","type":"change","z":"6003067c.4bfd58","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"0.9","tot":"num"}],"action":"","property":"","from":"","to":"","reg":false,"x":510,"y":60,"wires":[["538a3ab8.bc8824"]]},{"id":"636572c3.6a488c","type":"change","z":"6003067c.4bfd58","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"0","tot":"num"}],"action":"","property":"","from":"","to":"","reg":false,"x":510,"y":100,"wires":[["538a3ab8.bc8824"]]},{"id":"6ce74694.81c0f8","type":"range","z":"6003067c.4bfd58","minin":"0","maxin":"100","minout":"0","maxout":"1","action":"scale","round":false,"property":"payload","name":"","x":550,"y":140,"wires":[["538a3ab8.bc8824"]]},{"id":"538a3ab8.bc8824","type":"ccu-value","z":"6003067c.4bfd58","name":"","iface":"BidCos-Wired","channel":"FEQ0023394:3 Licht Treppenhaus","datapoint":"LEVEL","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":true,"ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":730,"y":100,"wires":[["5f79eef7.9d0a8"]]}]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"thermostat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thermostat","aria-hidden":"true"}},[e._v("#")]),e._v(" Thermostat")]),e._v(" "),t("p",[e._v("... todo")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/alexa/thermostat2.png",alt:""}}),e._v(" "),t("img",{attrs:{src:"images/alexa/thermostat1.png",alt:""}})]),e._v(" "),t("h4",{attrs:{id:"flow-json-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-json-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow JSON")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[{"id":"5c47780.eb65788","type":"alexa-smart-home-v3","z":"83ab1da.bef0ee","conf":"e904a268.f4155","device":"10284","acknowledge":true,"name":"Heizung Keller","topic":"","x":150,"y":260,"wires":[["1d220169.fc9c4f"]]},{"id":"d9c7d7e.8848128","type":"alexa-smart-home-v3-state","z":"83ab1da.bef0ee","conf":"e904a268.f4155","device":"10284","name":"Heizung Keller","x":1300,"y":260,"wires":[]},{"id":"310d6c73.79b744","type":"ccu-value","z":"83ab1da.bef0ee","name":"","iface":"HmIP-RF","channel":"000393C98D0FF5:1 TRV Keller:1","datapoint":"ACTUAL_TEMPERATURE","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":false,"ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":570,"y":240,"wires":[["29f4a02b.a16a2"]]},{"id":"29f4a02b.a16a2","type":"template","z":"83ab1da.bef0ee","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\"state\\": {\\"temperature\\": {{payload}} }} ","output":"json","x":820,"y":240,"wires":[["4df0d2aa.c4342c"]]},{"id":"4df0d2aa.c4342c","type":"change","z":"83ab1da.bef0ee","name":"","rules":[{"t":"set","p":"acknowledge","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":1030,"y":260,"wires":[["d9c7d7e.8848128"]]},{"id":"c4280340.945fa","type":"ccu-value","z":"83ab1da.bef0ee","name":"","iface":"HmIP-RF","channel":"000393C98D0FF5:1 TRV Keller:1","datapoint":"SET_POINT_TEMPERATURE","mode":"","start":true,"change":true,"cache":true,"queue":false,"on":0,"onType":"undefined","ramp":0,"rampType":"undefined","working":false,"ccuConfig":"38263145.35ea0e","topic":"${CCU}/${Interface}/${channel}/${datapoint}","x":570,"y":300,"wires":[["6d8689c9.4eb368"]]},{"id":"6d8689c9.4eb368","type":"template","z":"83ab1da.bef0ee","name":"","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\"state\\": {\\"thermostatSetPoint\\": {{payload}} }} ","output":"json","x":820,"y":280,"wires":[["4df0d2aa.c4342c"]]},{"id":"1d220169.fc9c4f","type":"switch","z":"83ab1da.bef0ee","name":"","property":"command","propertyType":"msg","rules":[{"t":"eq","v":"SetTargetTemperature","vt":"str"},{"t":"eq","v":"SetThermostatMode","vt":"str"}],"checkall":"true","repair":false,"outputs":2,"x":370,"y":260,"wires":[["c4280340.945fa"],[]],"outputLabels":["SetTargetTemperature","SetThermostatMode"]}]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"keymatic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keymatic","aria-hidden":"true"}},[e._v("#")]),e._v(" Keymatic")]),e._v(" "),t("p",[e._v("... todo")]),e._v(" "),t("h2",{attrs:{id:"szenen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#szenen","aria-hidden":"true"}},[e._v("#")]),e._v(" Szenen")]),e._v(" "),t("p",[e._v("... todo")])])},[],!1,null,null,null);s.options.__file="Node-RED-Smart-Home-Control.md";a.default=s.exports}}]);