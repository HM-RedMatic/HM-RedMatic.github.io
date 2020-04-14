(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{278:function(e,t,r){"use strict";r.r(t);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=r(6),i=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[r("h1",{attrs:{id:"rpc-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpc-event","aria-hidden":"true"}},[e._v("#")]),e._v(" rpc event")]),e._v(" "),r("p",[e._v("Die "),r("code",[e._v("rpc event")]),e._v(" Node dient dazu einen Flow zu starten, wenn ein Event von der CCU empfangen wird. Im Gegensatz zur "),r("router-link",{attrs:{to:"./value.html"}},[e._v("value")]),e._v(" Node, welche nur auf einen spezifischen Datepunkt reagiert, wird die "),r("code",[e._v("rpc event")]),e._v(" Node bei allen CCU-Events getriggert.")],1),e._v(" "),r("p",[e._v("Um den Flow nur für bestimmte Events zu starten verfügt sie über diverse Filtermöglichkeiten. Die meisten Filter können explizit gesetzt werden z.B. "),r("code",[e._v("Arbeitszimmer Taster AN")]),e._v(" oder gegen einen "),r("a",{attrs:{href:"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener noreferrer"}},[e._v("regulären Ausdruck"),r("OutboundLink")],1),e._v(" geprüft werden. Ein Beispiel für ein RegEx Pattern das auf alle "),r("em",[e._v("Taster")]),e._v(" zutrifft wäre "),r("code",[e._v(".*Taster.*")]),e._v(". Um zwischen explizit (String) und RegEx zu wählen wird das DropDown neben der Werteingabe verwendet.")]),e._v(" "),r("h2",{attrs:{id:"output"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[e._v("#")]),e._v(" Output")]),e._v(" "),r("p",[e._v("Die "),r("code",[e._v("msg")]),e._v(" enthält diverse Informationen über das RPC wie "),r("code",[e._v("topic")]),e._v(", "),r("code",[e._v("function")]),e._v(", "),r("code",[e._v("deviceName")]),e._v(" und viele weitere. Die "),r("code",[e._v("payload")]),e._v(" ist die "),r("code",[e._v("value")]),e._v(", also der Wert oder auch Zustand des Datenpunkts des zugehörigen Events. Beispiel "),r("code",[e._v("20.4")]),e._v(" für "),r("code",[e._v("ACTUAL_TEMPERATURE")]),e._v(" eines Heizkörperthermostats.")]),e._v(" "),r("h2",{attrs:{id:"attribute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attribute","aria-hidden":"true"}},[e._v("#")]),e._v(" Attribute")]),e._v(" "),r("h3",{attrs:{id:"ccu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ccu","aria-hidden":"true"}},[e._v("#")]),e._v(" CCU")]),e._v(" "),r("p",[e._v("Die zu verwendende CCU-Konfiguration.")]),e._v(" "),r("h3",{attrs:{id:"topic"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#topic","aria-hidden":"true"}},[e._v("#")]),e._v(" Topic")]),e._v(" "),r("p",[e._v("Das Topic ist an "),r("a",{attrs:{href:"https://de.wikipedia.org/wiki/MQTT",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT"),r("OutboundLink")],1),e._v(" angelehnt und kann zur späteren\nIdentifizierung des Werts verwendet werden.")]),e._v(" "),r("h3",{attrs:{id:"interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Interface")]),e._v(" "),r("p",[e._v("Hier wird das Interface gewählt, welches das Event erzeugt hat.")]),e._v(" "),r("h3",{attrs:{id:"room"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#room","aria-hidden":"true"}},[e._v("#")]),e._v(" Room")]),e._v(" "),r("p",[e._v("Raum Filter. Beispiel: "),r("code",[e._v("Wohnzimmer")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function","aria-hidden":"true"}},[e._v("#")]),e._v(" Function")]),e._v(" "),r("p",[e._v("Funktion oder auch Gewerk Filter. Beispiel: "),r("code",[e._v("Taster")])]),e._v(" "),r("h3",{attrs:{id:"device"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#device","aria-hidden":"true"}},[e._v("#")]),e._v(" Device")]),e._v(" "),r("p",[e._v("Die Seriennummer der Homematic Komponente. Beispiel: "),r("code",[e._v("OEQ1662328")])]),e._v(" "),r("h3",{attrs:{id:"devicename"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devicename","aria-hidden":"true"}},[e._v("#")]),e._v(" DeviceName")]),e._v(" "),r("p",[e._v("Der in der CCU vergebene Name der Homematic Komponente. Beispiel: "),r("code",[e._v("Rauchmelder Arbeitszimmer")]),e._v(";\nalle Rauchemelder über RegEx: "),r("code",[e._v("Rauchmelder .*")])]),e._v(" "),r("h3",{attrs:{id:"devicetype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#devicetype","aria-hidden":"true"}},[e._v("#")]),e._v(" DeviceType")]),e._v(" "),r("p",[e._v("Die Typen-Bezeichnung der Homematic Komponente. Beispiel: "),r("code",[e._v("HM-Sec-SD-2")])]),e._v(" "),r("h3",{attrs:{id:"channel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#channel","aria-hidden":"true"}},[e._v("#")]),e._v(" Channel")]),e._v(" "),r("p",[e._v("Der exakte Kanal bestehend aus Serien- und Kanalnummer. Beispiel: "),r("code",[e._v("OEQ1245312:4")])]),e._v(" "),r("h3",{attrs:{id:"channelname"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#channelname","aria-hidden":"true"}},[e._v("#")]),e._v(" ChannelName")]),e._v(" "),r("p",[e._v("Der in der CCU vergebene Kanalname. Beispiel: "),r("code",[e._v("Bad Lichte Decke PIR")])]),e._v(" "),r("h3",{attrs:{id:"channeltype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#channeltype","aria-hidden":"true"}},[e._v("#")]),e._v(" ChannelType")]),e._v(" "),r("p",[e._v("Der Typ des Kanals. Beispiel: "),r("code",[e._v("VIRTUAL_KEY")]),e._v(" oder "),r("code",[e._v("DIMMER")])]),e._v(" "),r("h3",{attrs:{id:"datapoint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#datapoint","aria-hidden":"true"}},[e._v("#")]),e._v(" Datapoint")]),e._v(" "),r("p",[e._v("Der Datenpunkt des Kanals. Beispiel: "),r("code",[e._v("PRESS_SHORT")]),e._v(" oder "),r("code",[e._v("ACTUAL_TEMPERATURE")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"flags"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flags","aria-hidden":"true"}},[e._v("#")]),e._v(" Flags")]),e._v(" "),r("ul",[r("li",[r("p",[r("em",[r("strong",[e._v("Nur geänderte Werte ausgeben")])]),r("br"),e._v("\nEin Event wird nur dann erzeugt, wenn sich der Wert seit dem letztn Event verändert hat.")])]),e._v(" "),r("li",[r("p",[r("em",[r("strong",[e._v("Während WORKING keine Werte ausgeben")])]),r("br"),e._v("\nEs gibt Aktoren, z.B. Dimmer oder Rolladen, die  während einer Rampe (Öffnen/Schließen eines Rollladen, Dimmen einer Lampe)\nfortwährend den aktuellen Zustand ausgeben. Um nur den End-Status auszugeben kann diese Option benutzt werden."),r("br"),e._v('\nGebräuchlich auch bei Verwendung mit Dashboard-Nodes um "springende" Slider zu verhindern.')])]),e._v(" "),r("li",[r("p",[r("em",[r("strong",[e._v("Beim Start letzten bekannten Wert ausgeben")])]),r("br"),e._v("\nWenn Node-RED gestartet wird, dann wird der letzte Wert (sofern in der ReGaHSS bekannt) ausgegeben."),r("br"),e._v("\nZ.B. um beim Start einen korrekten Wert an das Dashboard zu übergeben."),r("br"),e._v(" "),r("strong",[e._v("Achtung")]),e._v(": Wird durch die ausgegebene Nachricht im weiteren Verlauf des Flows ein Homematic Wert gesetzt wirkt sich\njedes (Full-)Deployment negativ auf den DutyCycle aus.")])])]),e._v(" "),r("h3",{attrs:{id:"name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[e._v("#")]),e._v(" Name")]),e._v(" "),r("p",[e._v("Der Name dient zur Beschriftung des Node im Flow.")])])},[],!1,null,null,null);i.options.__file="rpc-event.md";t.default=i.exports}}]);