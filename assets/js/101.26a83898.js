(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{216:function(e,n,t){"use strict";t.r(n);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=t(6),a=Object(r.a)(i,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[t("h1",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v('Im RedMatic UI (Erreichbar im CCU WebUI unter Einstellungen->Systemsteuerung) im Tab "Pakete" bei node-red-contrib-zigbee auf den Install Button klicken, danach Node-RED neustarten.')]),e._v(" "),t("p",[t("img",{attrs:{src:"/wiki/images/zigbee/InstallPackage.png",alt:"Install Packages"}})]),e._v(" "),t("h1",{attrs:{id:"einrichtung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#einrichtung","aria-hidden":"true"}},[e._v("#")]),e._v(" Einrichtung")]),e._v(" "),t("h2",{attrs:{id:"controller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controller","aria-hidden":"true"}},[e._v("#")]),e._v(" Controller")]),e._v(" "),t("p",[e._v("Den Node "),t("em",[e._v("controller")]),e._v(" aus dem Ordner "),t("em",[e._v("zigbee")]),e._v(" per Drag&Drop einem Flow hinzufügen.")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/AddControllerNode.png",alt:"Add Controller Node to Flow"}})]),e._v(" "),t("p",[e._v("Die Konfiguration des neu hinzugefügten Node per Doppelklick öffnen, den Button mit dem Bleistift-Icon anklicken um einen neuen Controller hinzuzufügen. Dies ist die Verbindung zu einem CC253x USB Sticks zum Beispiel welche die Admininstrationseinstellungden des Zigbee Netzwerkes zur Verfügung stellt.")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/AddController.png",alt:"Add Controller"}})]),e._v(" "),t("p",[e._v("Folgende Einstellungen machen später ein neues Pairing der Geräte nötg und sollten daher mit Bedacht gewählt werden:")]),e._v(" "),t("ul",[t("li",[e._v("Channels:\nDies ist der Zigbee Kanal im 2.4Ghz Netz. Da dieser Frequenzbereich auch von WLAN Netzwerken genutzt wird, sollte ein Kanal mit geringer Belegeung gewählt werden. Wer eine FritzBox sein eigen nennt, kann dies im Bereich --\x3eWLAN --\x3e Funkkanal nachschauen. Leider lassen sich die WLAN Kanäle nicht 1:1 in Zigbee Kanäle übernehmen. Phillips benutzt nur die Kanäle 11, 15, 20 und 25, da diese als relativ problemlos gelten (["),t("a",{attrs:{href:"https://www.digitalzimmer.de/artikel/wissen/philips-hue-zigbee-kanalwechsel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quelle"),t("OutboundLink")],1),e._v("]). Wenn man also in der Netzwerkanalyse sieht das der obere Bereich oft genutzt wird, wählt man einen unteren Kanal und Vice Versa.")]),e._v(" "),t("li",[e._v('networkKey\nDieser stellt das "Password" des Netzwerkes bereit. Man sollte diesen auf einen eigenen Wert ändern, der sich aus einer 32Stelligen HEX Zahl [0..9, A..F] mit Grossbuchstaben zusammen setzt.')])]),e._v(" "),t("p",[e._v("Der Path des Serialport gibt an, wo auf der CCU bzw. dem Raspberry der Stick eingebunden ist. Wenn es nur einen Stick gibt, ist das eigentlich immer /dev/ttyACM0, ansonsten gibt es "),t("a",{attrs:{href:"https://www.zigbee2mqtt.io/getting_started/running_zigbee2mqtt.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),t("OutboundLink")],1),e._v(" eine Anleitung wie er zu finden ist (in Englisch)")]),e._v(" "),t("p",[e._v("Wenn die Einstellungen gemacht sind, den ADD Button klicken.")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/SettingsCoordinator.png",alt:"Setting Up Coordinator"}})]),e._v(" "),t("p",[e._v("Die Konfiguration mit "),t("em",[e._v("DONE")]),e._v(" verlassen und mit "),t("em",[e._v("Deploy")]),e._v(" speichern und aktivieren.")]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/SaveAndDeployCoordinator.png",alt:"Save and Deploy Coordinator"}})]),e._v(" "),t("h2",{attrs:{id:"gerat-anlernen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gerat-anlernen","aria-hidden":"true"}},[e._v("#")]),e._v(" Gerät anlernen")]),e._v(" "),t("p",[e._v('Auf die eben hinzugefügte Controller Node oder irgendeine andere bereits im Flow intgrierte zigbee Node doppelklicken. Als ersten Punkt findet man den Link zum "herdsman", also der zentralen Kontrolleinheit im zigbee Netzwerk, dort auch Coordinator genannt. Mit dem Bleistift die Konfiguration öffnen.')]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/ConfigureCoordinator.png",alt:"ConfigureCoordinator.png"}})]),e._v(" "),t("ol",[t("li",[t("em",[e._v("Permit Join")]),e._v(":\nDen Button Permit Join anklicken. Damit läst der Coordinator zu, das sich neue Geräte im System anmelden dürfen.")]),e._v(" "),t("li",[e._v("Danach das anzulernende Gerät zurücksetzen ("),t("a",{attrs:{href:"https://www.zigbee2mqtt.io/information/supported_devices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Liste der unterstützten Geräte inklusive Pairing Anweisung"),t("OutboundLink")],1),e._v(") und es sollte nach kurzer Wartezeit in der Liste mit seinem Typ, dem Hersteller und dem Modell auftauchen.")]),e._v(" "),t("li",[e._v("Mit "),t("em",[e._v("Stop Join")]),e._v(" den Anlernprozess beenden")]),e._v(" "),t("li",[e._v("Dem Device einen sinnvollen Klartextnamen geben")]),e._v(" "),t("li",[e._v("Mit "),t("em",[e._v("Aktualisieren")]),e._v(" die Konfiguration Verlassen und dann wie gehabt mit "),t("em",[e._v("Deploy")]),e._v(" speichern und aktivieren")])]),e._v(" "),t("p",[t("img",{attrs:{src:"images/zigbee/AddDevice.png",alt:"Join device"}})]),e._v(" "),t("h2",{attrs:{id:"fehlerbehebung-bei-cuxd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fehlerbehebung-bei-cuxd","aria-hidden":"true"}},[e._v("#")]),e._v(" Fehlerbehebung bei CUXd")]),e._v(" "),t("p",[e._v("Da der CUXd leider auf die Seriellen Ports zugreift und dabei auf der CCU eine ordentliche Einrichtung teilweise unmöglich macht, sollte man den Port des CC253x USB Sticks ausklammern.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Um heraus zu finden wo dieser auf der CCU liegt einfach per SSH auf die CCU einloggen und den Befehl auf der Konsole eingeben:")])]),e._v(" "),t("li",[t("p",[e._v("ls /dev/tty*")])]),e._v(" "),t("li",[t("p",[e._v("Schauen ob der Port /dev/ttyACM0 vorhanden ist. (Fast immer ist er es bei Verwendung eines CC253x USB Sticks)")])]),e._v(" "),t("li",[t("p",[e._v("CUXd von der Systemsteuerung aus öffnen.")])]),e._v(" "),t("li",[t("p",[e._v("Oben auf Setup drücken.")])]),e._v(" "),t("li",[t("p",[e._v("Einfach im Fenster CUXd-Einstellungen folgendes einfügen:   TTYASSIGN=ttyACM0:NC")])]),e._v(" "),t("li",[t("p",[e._v("Danach speichern und eventuell Neustarten der CCU.")])])])])},[],!1,null,null,null);a.options.__file="ZigBee.md";n.default=a.exports}}]);