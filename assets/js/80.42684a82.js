(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{233:function(e,t,n){"use strict";n.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=n(6),a=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[n("h1",{attrs:{id:"mosquitto-authentifizierung-aktivieren"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mosquitto-authentifizierung-aktivieren","aria-hidden":"true"}},[e._v("#")]),e._v(" Mosquitto Authentifizierung aktivieren")]),e._v(" "),n("br"),e._v("\nals erstens das Addon HM-Tools auf der CCU installieren und per SSH auf die CCU verbinden\n"),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("ol",[n("li",[n("p",[e._v("in das Config-Verzeichnis wechseln "),n("code",[e._v("cd /usr/local/addons/mosquitto/etc/conf.d")])])]),e._v(" "),n("li",[n("p",[e._v("Passwortdatei anlegen\n"),n("code",[e._v("touch passwd.txt")])])]),e._v(" "),n("li",[n("p",[e._v("User anlegen\n"),n("code",[e._v("/usr/local/addons/mosquitto/bin/mosquitto_passwd -b passwd.txt USERNAME PASSWORD")]),e._v(" "),n("br"),e._v(" "),n("br")])])]),e._v(" "),n("h2",{attrs:{id:"authentifizierung-aktivieren"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentifizierung-aktivieren","aria-hidden":"true"}},[e._v("#")]),e._v(" Authentifizierung aktivieren")]),e._v(" "),n("br"),e._v(" "),n("ul",[n("li",[n("p",[e._v("Datei anlegen "),n("code",[e._v("nano login.conf")])])]),e._v(" "),n("li",[n("p",[e._v("nun folgenden Inhalt in die Datei login.conf kopieren")]),e._v(" "),n("p",[n("code",[e._v("allow_anonymous false")])]),e._v(" "),n("p",[n("code",[e._v("password_file /usr/local/addons/mosquitto/etc/conf.d/passwd.txt")]),e._v(" "),n("br"),e._v(" "),n("br")])]),e._v(" "),n("li",[n("p",[e._v("Mosquitto neustart\n"),n("code",[e._v("/etc/config/rc.d/mosquitto restart")]),e._v(" "),n("br"),e._v(" "),n("br")])])]),e._v(" "),n("h2",{attrs:{id:"logindaten-auf-den-geraten-verteilen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logindaten-auf-den-geraten-verteilen","aria-hidden":"true"}},[e._v("#")]),e._v(" Logindaten auf den Geräten verteilen")]),e._v(" "),n("p",[e._v("Der Benutzername und Passwort muss natürlich auf den MQTT Geräten eingegeben werden und in RedNote im MQTT-Server.")]),e._v(" "),n("p",[e._v("In RedNode auf eine MQTT-Node klicken und den kleinen Stift auswählen:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://homematic-forum.de/forum/download/file.php?id=64776&mode=view",alt:"MQTT-Server"}})]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("p",[e._v("Hier nun das Passwort eintragen\n"),n("br"),e._v(" "),n("br")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://homematic-forum.de/forum/download/file.php?id=64777&mode=view",alt:"MQTT-Passwort"}})])])},[],!1,null,null,null);a.options.__file="Mosquitto-Authentifizierung-aktivieren.md";t.default=a.exports}}]);