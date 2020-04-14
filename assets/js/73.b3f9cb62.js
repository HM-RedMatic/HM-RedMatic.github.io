(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{239:function(e,n,t){"use strict";t.r(n);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=t(6),r=Object(s.a)(i,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[t("p",[e._v("Man nehme einen Homekit Kamera Node:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://up.picr.de/35828323ed.jpg",alt:""}})]),e._v(" "),t("p",[e._v("Diesen benennt man und fügt die URL zum Bewegtbild und Standbild der Kamera hinzu.\nBei meiner Foscam ist das z.B.:\n"),t("code",[e._v("http://IP_ADRESSE/videostream.cgi?user=USERNAME&pwd=PASSWORT")]),e._v("\nund\n"),t("code",[e._v("http://IP_ADRESSE/snapshot.jpg?user=USERNAME&pwd=PASSWORT")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://up.picr.de/35828324aa.jpg",alt:""}})]),e._v(" "),t("p",[e._v("Eine Liste der Links nahezu aller Kameras gibt es hier, es funktionieren MJPEG und RTSP Streams:\n"),t("a",{attrs:{href:"https://www.ispyconnect.com/sources.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("iSpyConnect"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Dann implementieren und Redmatic einmal neu starten.")]),e._v(" "),t("p",[e._v("In der HomeApp ein neues Gerät hinzufügen und den QR-Code des Camera Node scannen.\nUnd schon sollte die Kamera in der Home App angezeigt werden, auf der Übersichtsseite als Standbild, das alle 10 Sekunden aktualisiert wird, wenn man drauf klickt als Bewegtbild.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://up.picr.de/35828325mo.jpg",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://up.picr.de/35828326ny.jpg",alt:""}})]),e._v(" "),t("p",[e._v("Auf einem RPi3B ist die CPU Auslastung mit dem sich aktualisierenden Standbild kaum höher, bei Livebild liegt sie bei ca. 16-20% mehr als üblich.")]),e._v(" "),t("p",[t("strong",[e._v("Achtung:")]),e._v(" "),t("strong",[e._v("Bei mehreren Kameras unbedingt im Camera Node unterschiedliche Ports vergeben. Sonst bleibt RedMatic hängen und man kommt auch nicht mehr ohne weiteres rein.")])]),e._v(" "),t("p",[t("strong",[e._v("Achtung2:")]),e._v("\n** Nicht vergessen die entsprechenden Ports auch in der CCU Firewall freizugeben, sonnst kann keine Verbindung hergestellt werden**")])])},[],!1,null,null,null);r.options.__file="Homekit-Kamera-einbinden.md";n.default=r.exports}}]);