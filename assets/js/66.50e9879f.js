(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{200:function(e,t,n){"use strict";n.r(t);var i={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},a=n(6),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[n("h1",{attrs:{id:"einfacher-flow-zum-schalten-einer-lampe-mittels-taster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#einfacher-flow-zum-schalten-einer-lampe-mittels-taster","aria-hidden":"true"}},[e._v("#")]),e._v(" Einfacher Flow zum Schalten einer Lampe mittels Taster")]),e._v(" "),n("p",[e._v("Möchte man mittels eines Tastendrucks ein Licht ein und mit dem nächsten Tastendruck Ausschalten, ist das einfach möglich:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587420-2ebe2d00-a7b3-11e8-8f43-9019480b0600.png",alt:"image"}})]),e._v(" "),n("h2",{attrs:{id:"inhalt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#inhalt","aria-hidden":"true"}},[e._v("#")]),e._v(" Inhalt")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#Vorwort"}},[e._v("Vorwort")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#vergleich-mit-einem-ccu-programm"}},[e._v("Vergleich mit einem CCU Programm")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#node-red-flow"}},[e._v("Node Red Flow")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#start"}},[e._v("Start")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#trigger-des-flow"}},[e._v("Trigger des Flow")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#konfiguration-des-trigger"}},[e._v("Konfiguration des Trigger")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#ablauf-steuern"}},[e._v("Ablauf steuern")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#ablauf-verandern"}},[e._v("Ablauf verändern")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#aktion-ausfuhren"}},[e._v("Aktion ausführen")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#abschluss"}},[e._v("Abschluss")])])])])]),e._v(" "),n("h2",{attrs:{id:"vorwort"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vorwort","aria-hidden":"true"}},[e._v("#")]),e._v(" Vorwort")]),e._v(" "),n("p",[e._v("Das Problem ließe sich sicherlich auf den ersten Blick einfacher mit einem Function Node und etwas JavaScript lösen. Die Empfehlung von IBM (der Firma hinter Node-Red) ist es möglichst auf die Function Nodes zu verzichten. Gerade bei solch einfachen Beispielen sind die Standard Nodes vorzuziehen.")]),e._v(" "),n("p",[e._v("Die Gründe dafür sind:")]),e._v(" "),n("ul",[n("li",[e._v("Die Funktion eines Flows erschließt sich viel einfacher mit der Verwendung der Standard Nodes\n"),n("ul",[n("li",[e._v("Auch wenn die Flows damit vielleicht nicht so aufgeräumt wirken, kann man die Funktion später viel einfacher nachvollziehen.")])])]),e._v(" "),n("li",[e._v("Die "),n("em",[e._v("Function Nodes")]),e._v(" haben gegenüber den Standard Nodes eine schlechtere Performance, da der Javascript Code in einer Sandbox ausgeführt wird.")])]),e._v(" "),n("h2",{attrs:{id:"vergleich-mit-einem-ccu-programm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vergleich-mit-einem-ccu-programm","aria-hidden":"true"}},[e._v("#")]),e._v(" Vergleich mit einem CCU Programm")]),e._v(" "),n("p",[e._v("Wenn man das Problem mittels CCU Programm lösen möchte, hat man vermutlich ein Programm in dieser Art erstellt:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/45623821-de23b200-ba88-11e8-94ee-053888e7bac5.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Hier wird das Programm durch einen kurzen Tastendruck getriggert und abhängig vom aktuellen Zustand der Lampe (nur prüfen) diese entweder ein- oder ausgeschaltet.")]),e._v(" "),n("p",[e._v("In Node Red ist der Flow ähnlich:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587420-2ebe2d00-a7b3-11e8-8f43-9019480b0600.png",alt:"image"}})]),e._v(" "),n("h2",{attrs:{id:"redmatic-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redmatic-flow","aria-hidden":"true"}},[e._v("#")]),e._v(" RedMatic Flow")]),e._v(" "),n("h3",{attrs:{id:"start"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" Start")]),e._v(" "),n("p",[e._v("Als erstes sollte man sich die "),n("a",{attrs:{href:"Node-RED"}},[e._v("Node-RED Grundlagen")]),e._v(" durchlesen. Danach kann es auch schon losgehen.")]),e._v(" "),n("h3",{attrs:{id:"trigger-des-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trigger-des-flow","aria-hidden":"true"}},[e._v("#")]),e._v(" Trigger des Flow")]),e._v(" "),n("p",[e._v("Als erstes benötigt man den Trigger für den Flow. Dieser gibt das Event, welches ein Ereignis auslösen soll.")]),e._v(" "),n("p",[e._v("Wenn dieser Event durch eine Taste eines Homematic Gerätes ausgelöst werden soll, nimmt man dafür in der Palette den Value Node:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587497-67f69d00-a7b3-11e8-9284-9b5b022cec19.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Diesen platziert man einfach in den Arbeitsbereitch und klickt ihn doppelt:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587735-1dc1eb80-a7b4-11e8-860f-d5058af7432c.png",alt:"image"}})]),e._v(" "),n("h4",{attrs:{id:"konfiguration-des-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#konfiguration-des-trigger","aria-hidden":"true"}},[e._v("#")]),e._v(" Konfiguration des Trigger")]),e._v(" "),n("p",[e._v("Zum Konfigurieren sind die Felder wie folgt auszufüllen:")]),e._v(" "),n("ol",[n("li",[e._v("Als erstes muss man die Homematic Zentrale auswählen. Hat man noch keine konfiguriert, so ist mittels Stift Button daneben die Einstellungen zur Zentrale zu tätigen. (siehe auch "),n("a",{attrs:{href:"CCU-Nodes"}},[e._v("CCU Nodes")]),e._v(" )")]),e._v(" "),n("li",[e._v("Danach das Interface des Homematic Gerätes auswählen"),n("br"),e._v(" "),n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587957-b3f61180-a7b4-11e8-886d-9aa9c8d3b5cf.png",alt:"image"}}),e._v(" Sollte die Drop Down Box leer sein (weil beispielsweise die CCU erst konfiguriert wurde), so muss man die Einstellungen des Node mit dem Done Button einmal schließen und neu öffnen.")]),e._v(" "),n("li",[e._v("Hier wählt man den Kanal aus. Dabei kann man sehr einfach den Namen eintippen. Es öffnet sich eine Liste mit den möglichen Kanälen in der man den gewünschten auswählt."),n("br"),e._v(" "),n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44588257-8198e400-a7b5-11e8-943d-fd55bdae5bca.png",alt:"image"}})]),e._v(" "),n("li",[e._v("Der Datenpunkt des Kanals. Die folgenden Datenpunkte sind dabei die gebräuchlichsten:\n"),n("ul",[n("li",[e._v('Taster - kurzer Tastendruck: "PRESS_SHORT"')]),e._v(" "),n("li",[e._v('Taster - langer Tastendruck: "PRESS_LONG"')]),e._v(" "),n("li",[e._v('Status eines Aktors "STATE"\nFür eine Taste als Trigger benötigen wir damit "PRESS_SHORT"')])])]),e._v(" "),n("li",[e._v("Mit dieser Einstellung kann man noch beeinflussen, wann die Node etwas ausgeben soll."),n("br"),e._v(" "),n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44588712-c2452d00-a7b6-11e8-9fbf-db21c17b9fdd.png",alt:"image"}}),e._v(" "),n("ul",[n("li",[e._v('Die Eigenschaft "Nur geänderte Werte ausgeben" kann man mit dem "bei Änderung", bzw. "bei Aktualisierung" in den Homematic Programmen vergleichen. Ist der Haken bei "Nur geänderte Werte ausgeben" gesetzt, wird der Flow nur gestartet, wenn sich der Datenpunkt auf einen anderen Wert (Bsp. true auf False) ändern ("bei Änderung"). Ist der Haken nicht gesetzt, wird der Flow immer dann gestartet, wenn der Datenpunkt aktualisiert wird ("bei Aktualisierung"). Damit auch wenn sich der Wert selbst nicht ändert (Bsp. true auf true).\n'),n("ul",[n("li",[e._v("Wenn man sich unsicher ist, sollte der Haken gesetzt sein.")])])]),e._v(" "),n("li",[e._v("Manche Datenpunkte können während der Änderung auch fortlaufend ihren Status übermitteln. So kann beispielsweise gesteuert werden ob ein Rollladen während der Bewegung ständig seine Position übermittelt oder nur wenn er an seinem Endpukt angekommen ist.\n"),n("ul",[n("li",[e._v("Wenn man sich unsicher ist, sollte der Haken gesetzt sein.")])])]),e._v(" "),n("li",[e._v('Mit der EIgenschaft "Beim Start letzten bekannten Wert ausgeben" kann gesteuert werden ob beim Neu/Start von RedMatic der Flow mit dem letzten bekannten Wert getriggert werden soll.')])])])]),e._v(" "),n("h3",{attrs:{id:"ablauf-steuern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ablauf-steuern","aria-hidden":"true"}},[e._v("#")]),e._v(" Ablauf steuern")]),e._v(" "),n("p",[e._v("Als nächstes ziehen wir aus der Palette den Node, der den Ablauf steuern soll. In diesem Beispiel wollen wir abhängig vom Schaltzustand eines Lichtes dieses aus oder einschalten. Also muss sich in Abhängigkeit vom Zustand des Lichtes (aus oder ein) etwas anderes passieren.")]),e._v(" "),n("ul",[n("li",[e._v("Wenn Lampe aus ist, soll sie eingeschaltet werden")]),e._v(" "),n("li",[e._v("Wenn Lampe ein ist, soll sie ausgeschaltet werden")])]),e._v(" "),n("p",[e._v("Dafür benutzt man aus der Palette de switch Node.\nMöchten wir den Flow in Abhängigkeit eines Datenpunktes eines Homematic Gerätes steuern nehmen wir den aus der CCU Palette:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44588995-970f0d80-a7b7-11e8-9bff-2d1da501345a.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Es gibt daneben noch den Standard switch node, den wir in diesem Beispiel nicht verwenden:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44588964-7ba40280-a7b7-11e8-8c02-6816a98a2122.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Hat man diesen auf den Arbeitsbereich gezogen, verbindet man den Ausgang des Trigger Nodes mit dem Eingang dieses switch Nodes.")]),e._v(" "),n("p",[e._v("Als nächstes öffnet man die Einstellungen dieses switch Nodes.\nDer obere Teil der Konfiguration ähnelt jetzt dem des value Nodes.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44589104-e5bca780-a7b7-11e8-9609-57bc04de5f42.png",alt:"image"}}),e._v('\nHier wählt man jetzt den Datenpunkt der Lampe aus, welche man schalten möchte.\nBei Property ist die "value" auszuwählen.')]),e._v(" "),n("p",[e._v("Im unteren Teil kann man die Bedingungen einstellen:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44589627-4f898100-a7b9-11e8-878d-316b88b4e3e0.png",alt:"image"}})]),e._v(" "),n("ol",[n("li",[e._v("Über den Add Button kann man die verschiedenen Bedingungen hinzufügen. Da wir 2 verschiedene Wege gehen möchten, müssen wir 2 Wege hinzufügen.")]),e._v(" "),n("li",[e._v('Für jeden dieser Wege kann man einstellen, unter welcher Bedingung er betreten werden soll. Die Bedingung "otherwise" trifft immer zu und sollte als letztes gewählt werden.')]),e._v(" "),n("li",[e._v('Diese Einstellung ist sehr wichtig. In der Standard Einstellung steht diese auf "checking all rules". Das bedeutet es wird jede Bedingung geprüft und der Flow an ihr weitergeführt. Für den "otherwise" zweig beispielsweise bedeutet das dieser immer weitergeführt wird, unabhängig von den anderen Bedingungen. Ist in dem Beispiel die Lampe eingeschaltet, geht es mit "checking all rules" sowohl bei "is true" als auch bei "otherwise" weiter. Will man eher eine Wenn-dann Bedingung ist diese Einstellung auf "stopping after first match" umzustellen.')])]),e._v(" "),n("p",[e._v("Die Komplette Konfiguration kann wie folgt aussehen:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590081-8a3fe900-a7ba-11e8-921f-e0ba6d4214c2.png",alt:"image"}})]),e._v(" "),n("h3",{attrs:{id:"ablauf-verandern"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ablauf-verandern","aria-hidden":"true"}},[e._v("#")]),e._v(" Ablauf verändern")]),e._v(" "),n("p",[e._v("Als nächstes möchten wir bestimmen was an den beiden Ausgängen passieren soll:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590167-c4a98600-a7ba-11e8-84fa-8c6c3b93f114.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Der obere wird ja betreten, wenn die Lampe an ist. Hier soll die Lampe ausgeschaltet werden.")]),e._v(" "),n("p",[e._v("Dafür nehmen wir aus der Palette die change Node:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590222-eefb4380-a7ba-11e8-8157-0387bdae5f8c.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Die steuernde Eigenschaft der weitergegebenen Nachricht ist die "),n("code",[e._v("msg.payload")]),e._v('. Um die Lampe auszuschalten muss diese auf "false" gesetzt werden. Der Node ist dafür bereits vorkonfiguriert:')]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590285-12be8980-a7bb-11e8-89cf-0e96f34f5170.png",alt:"image"}})]),e._v(" "),n("p",[e._v('Man wählt in der Liste einfach den Typ "boolean" aus und daneben false:')]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590418-692bc800-a7bb-11e8-9773-824e69721a0f.png",alt:"image"}})]),e._v(" "),n("p",[e._v("Diesen Node verbindet man mit dem oberen Ausgang des switch Nodes. Den Schritt wiederholt man mit dem underen Ausgang. Hierbei setzt man den payload jedoch auf true:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590514-a3956500-a7bb-11e8-835e-76600cd1f17d.png",alt:"image"}})]),e._v(" "),n("h3",{attrs:{id:"aktion-ausfuhren"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aktion-ausfuhren","aria-hidden":"true"}},[e._v("#")]),e._v(" Aktion ausführen")]),e._v(" "),n("p",[e._v("Als Aktion soll ein Homematic Aktor geschaltet werden.\nDafür ist aus der Palette der value Node in den Arbeitsbereich zu ziehen.\nDieser ist genauso wie der Tasten Kanal für den Trigger zu konfigurieren, mit dem unterschied anstelle des Tasterkanals hier den Kanal des Aktors zu wählen.")]),e._v(" "),n("p",[e._v("Als vorletzten Schritt verbindet man die beiden Change Nodes mit dem value Node:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44587420-2ebe2d00-a7b3-11e8-8f43-9019480b0600.png",alt:"image"}})]),e._v(" "),n("h3",{attrs:{id:"abschluss"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abschluss","aria-hidden":"true"}},[e._v("#")]),e._v(" Abschluss")]),e._v(" "),n("p",[e._v("Ist dies erledigt, wird diese Änderung aktiviert mittels des Deploy Buttons:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/12692680/44590937-962caa80-a7bc-11e8-9df3-592da55d8098.png",alt:"image"}})])])},[],!1,null,null,null);s.options.__file="Flow-simple-toggle-light.md";t.default=s.exports}}]);