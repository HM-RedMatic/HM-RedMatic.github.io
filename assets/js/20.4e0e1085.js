(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{288:function(e,n,t){"use strict";t.r(n);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=t(6),s=Object(i.a)(a,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[t("h1",{attrs:{id:"zusatzliche-nodes-installieren"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zusatzliche-nodes-installieren","aria-hidden":"true"}},[e._v("#")]),e._v(" Zusätzliche Nodes installieren")]),e._v(" "),t("p",[e._v("Node-RED kann durch zusätzliche "),t("em",[e._v("Nodes")]),e._v(" erweitert werden, eine große und aktive Community hat Stand Heute bereits weit über 1000 Nodes entwickelt die unterschiedlichste Anwendungsfälle abdecken und diverse Services und Systeme an Node-RED anbinden.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://flows.nodered.org/?type=node&num_pages=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Verzeichnis aller verfügbarer Nodes auf nodered.org"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("router-link",{attrs:{to:"/wiki/Erfolgreich-getestete-Nodes.html"}},[e._v("Erfolgreich auf RedMatic getestete Nodes (bitte ergänzen!)")])],1)]),e._v(" "),t("p",[e._v("Nicht alle Nodes lassen sich auf einer CCU installieren. Es gibt Nodes die bei der Installation Binärmodule compilieren\nmüssen, dies ist auf der CCU bzw. RaspberryMatic nicht praktikabel machbar (Buildroot ist nicht dafür vorgesehen die\ndafür notwendigen Tools wie z.B. gcc zu installieren). Dies betrifft u.A. Nodes die Zugriff auf Hardware (z.B.\nBluetooth) benötigen. Falls der Wunsch besteht bestimmte Nodes zu nutzen die sich nicht installieren lassen kann gerne\nein "),t("a",{attrs:{href:"https://github.com/hobbyquaker/ccu-addon-node-red/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue"),t("OutboundLink")],1),e._v(" angelegt werden, es ist dann u.U. möglich die\nNodes mit vorab gebauten Binärmodulen mit in das CCU Addon Paket aufzunehmen.")]),e._v(" "),t("h2",{attrs:{id:"backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup","aria-hidden":"true"}},[e._v("#")]),e._v(" Backup")]),e._v(" "),t("p",[e._v("Zur Sicherheit vor dem Installieren zusätzlicher Nodes ein "),t("strong",[e._v("Backup der CCU anlegen!")])]),e._v(" "),t("h2",{attrs:{id:"installation-via-node-red-admin-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-via-node-red-admin-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation via Node-RED Admin UI")]),e._v(" "),t("p",[t("img",{attrs:{src:"/wiki/images/node-install-1.png",alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:"/wiki/images/node-install-2.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"installation-via-command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-via-command-line","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation via Command Line")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export PATH=/usr/local/addons/redmatic/bin:$PATH\ncd /usr/local/addons/redmatic/var\nnpm install --save --no-package-lock --global-style --save-prefix="~" --production <paket-name>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"manuelle-deinstallation-von-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manuelle-deinstallation-von-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Manuelle Deinstallation von Nodes")]),e._v(" "),t("p",[e._v("Mangelhafte Nodes können im schlimmsten Fall zum Node-RED Absturz führen. Falls dieses Problem auftritt ist es nötig den Node manuell zu entfernen da das Node-RED UI ja nicht mehr genutzt werden kann. Hierzu wie folgt vorgehen:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export PATH=/usr/local/addons/redmatic/bin:$PATH\ncd /usr/local/addons/redmatic/var\nnpm remove --save --no-package-lock <paket-name>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Alternativ kann natürlich auch einfach ein vor der Node Installation erstelltes CCU Backup zurückgespielt werden.")]),e._v(" "),t("h2",{attrs:{id:"kommentar-wie-kann-ich-die-qualitat-von-node-red-nodes-beurteilen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kommentar-wie-kann-ich-die-qualitat-von-node-red-nodes-beurteilen","aria-hidden":"true"}},[e._v("#")]),e._v(" Kommentar: Wie kann ich die Qualität von Node-RED Nodes beurteilen?")]),e._v(" "),t("blockquote",[t("blockquote",[t("p",[e._v("V 0.0.1 (sagt vielleicht schon alles?).")])]),e._v(" "),t("p",[e._v('Mja, Node-RED krankt (wie imho auch andere Smart Home Software oder generell Open Source Frameworks mit Plugin-Konzept) an der sehr unterschiedlichen Qualität der Plugins/Adapter/Bindings/Nodes/Treiber/... Die Bandbreite reicht von "ohne Doku hingeworfen, keinerlei Support, keine Updates" bis zu "Super getestet, ausführlichst dokumentiert, spitzen Support, regelmäßige Updates" 😉')]),e._v(" "),t("p",[e._v("Als Tipp um die Qualität von sowas zu beurteilen würde ich raten: Github Seite anschauen. Das Projekt sollte schon ein gewisses Alter haben, der letzte Commit sollte aber auch nicht allzu lange her sein, Issue Tracker anschauen - wird anständig supportet - wird auf Issues reagiert und wie lange lässt sich der Entwickler dafür Zeit? Wird es überhaupt von einer Nennenswerten Anzahl Usern benutzt (Github Issues, Github Sternchen, Download Counter auf flows.nodered.org)? Gibt/gab es Pull Requests (sprich: beteiligen sich Leute am Projekt oder ist es eine 1-Man-Show)?, gibt es eine ordentliche Doku/Readme? Auch ein guter Hinweis auf die Aktivität des Entwicklers ist seine Github-Profilseite, da gibts es diese Grafik mit den grünen Kästchen von der Du ablesen kannst wie aktiv der Entwickler insgesamt auf Github war/ist und auch ein Blick auf seine evtl. anderen Projekte schadet nicht.")]),e._v(" "),t("p",[e._v("Auch ganz praktisch: https://npms.io/ scannt alle Node-Module (auch alle Node-RED Nodes sind da zu finden) und erstellt 3 Bewertungen: Popularität, Qualität und Maintenance, was dort angezeigt wird ist meistens recht treffend, jedenfalls was Qualität und Maintenance angeht, Popularität ist bei so Smart Home Sachen meistens sehr niedrig und daher eher weniger aussagekräftig.")])]),e._v(" "),t("p",[e._v("(ursprünglich aus https://homematic-forum.de/forum/viewtopic.php?f=41&t=43508&p=446462#p446462)")])])},[],!1,null,null,null);s.options.__file="04_add-nodes.md";n.default=s.exports}}]);