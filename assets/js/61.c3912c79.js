(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{377:function(t,a,e){"use strict";e.r(a);var r=e(18),s=function(t){t.options.__data__block__={mermaid_1a962853:"graph LR\n\nusercsv[User has CSV,XLS etc]\nuserdr[User has Tabular Data Resource]\ndr[Tabular Data Resource]\n\nusercsv --1. some steps--\x3e dr\nuserdr -. direct .-> dr\ndr --2. load --\x3e datastore[DataStore]\n",mermaid_382ee148:'graph TD\n\nsubgraph "Prepare (ET)"\n  rawcsv[Raw CSV] --\x3e tidy[Tidy]\n  tidy --\x3e infer[Infer types]\n  infer\nend\n\ninfer --\x3e tdr{{Tabular Data Resource<br/>csv/json + table schema}}\ntdr --\x3e dsdelete\n\nsubgraph "Loader (L)"\n  datastorecreate[DataStore Create]\n  dsdelete[DataStore Delete]\n  load[Load to CKAN via DataStore API or direct copy]\n\n  dsdelete --\x3e datastorecreate\n  datastorecreate --\x3e load\nend\n',mermaid_382ee14c:"graph TD\n\ntdr[Tabular Data Resource on disk from CSV in FileStore of a resource]\nloadtdr[Load Tabular Data Resource Metadata]\n\ndscreate[Create Table in DS if not exists]\ncleartable[Clear DS table if existing content]\npushdatacopy[Load to DS via PG copy]\ndone[Data in DataStore]\n\ntdr --\x3e loadtdr\nloadtdr --\x3e dscreate\ndscreate --\x3e cleartable\n\ncleartable --\x3e pushdatacopy\n\npushdatacopy --\x3e done\n\nlogstore[LogStore]\n\ncleartable -. log .-> logstore\npushdatacopy -. log .-> logstore\n",mermaid_64a570e8:"graph TD\n\npyloadstr[Load in python in streaming mode]\ncleartable[Clear DS table if existing content]\npushdatacopy[Load to DS via PG copy]\npushdatads[Load to DS via DataStore API]\npushdatasql[Load to DS via sql over PG api]\ndone[Data in DataStore]\ndataflows[DataFlows SQL loader]\n\ncleartable -- 1 --\x3e pyloadstr\npyloadstr --\x3e pushdatads\npyloadstr --\x3e pushdatasql\ncleartable -- 2 --\x3e dataflows\ndataflows --\x3e pushdatasql\ncleartable -- 3 --\x3e pushdatacopy\n\npushdatasql --\x3e done\npushdatacopy --\x3e done\npushdatads --\x3e done\n"}},o=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"data-load-design"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-load-design"}},[t._v("#")]),t._v(" Data Load Design")]),t._v(" "),e("p",[t._v("Key point: this is classic ETL so let’s reuse those patterns and tooling.")]),t._v(" "),e("h2",{attrs:{id:"logic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logic"}},[t._v("#")]),t._v(" Logic")]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_1a962853",graph:t.$dataBlock.mermaid_1a962853}}),e("p",[t._v("In more detail, dividing ET(transform) from L(oad):")]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_382ee148",graph:t.$dataBlock.mermaid_382ee148}}),e("h3",{attrs:{id:"load-step-in-even-more-detail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-step-in-even-more-detail"}},[t._v("#")]),t._v(" Load step in even more detail")]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_382ee14c",graph:t.$dataBlock.mermaid_382ee14c}}),e("h2",{attrs:{id:"runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runner"}},[t._v("#")]),t._v(" Runner")]),t._v(" "),e("p",[t._v("We will use AirFlow.")]),t._v(" "),e("h2",{attrs:{id:"research"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#research"}},[t._v("#")]),t._v(" Research")]),t._v(" "),e("h3",{attrs:{id:"what-is-a-tabular-data-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-tabular-data-resource"}},[t._v("#")]),t._v(" What is a Tabular Data Resource?")]),t._v(" "),e("p",[t._v("See Frictionless Specs. For our purposes:")]),t._v(" "),e("ul",[e("li",[t._v("A “Good” CSV file: Valid CSV - with one header row, No blank header etc…")]),t._v(" "),e("li",[t._v("Encoding worked out – usually we should have already converted to utf-8")]),t._v(" "),e("li",[t._v("Dialect - "),e("a",{attrs:{href:"https://frictionlessdata.io/specs/csv-dialect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://frictionlessdata.io/specs/csv-dialect/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Table Schema "),e("a",{attrs:{href:"https://frictionlessdata.io/specs/table-schema",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://frictionlessdata.io/specs/table-schema"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("NB: even if you want to go direct loading route (a la XLoader) and forget types you still need encoding etc sorted – and it still fits in diagram above (Table Schema is just trivial – everything is strings).")]),t._v(" "),e("h3",{attrs:{id:"what-is-datastore-and-how-to-create-the-datastore-entry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-datastore-and-how-to-create-the-datastore-entry"}},[t._v("#")]),t._v(" What is datastore and how to create the DataStore entry")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ckan/ckan/tree/master/ckanext/datastore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ckan/ckan/tree/master/ckanext/datastore"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("provides an ad hoc database for storage of structured data from CKAN resources")]),t._v(" "),e("li",[t._v("Connection with Datapusher: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#datapusher-automatically-add-data-to-the-datastore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#datapusher-automatically-add-data-to-the-datastore"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Datastore API: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#the-datastore-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#the-datastore-api"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("Making Datastore API requests: "),e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#making-a-datastore-api-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#making-a-datastore-api-request"),e("OutboundLink")],1)])])])]),t._v(" "),e("h4",{attrs:{id:"create-an-entry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-an-entry"}},[t._v("#")]),t._v(" Create an entry")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -X POST http://127.0.0.1:5000/api/3/action/datastore_create -H "Authorization: {YOUR-API-KEY}"\n\nresource\n-d \'{\n  "resource": {"package_id": "{PACKAGE-ID}"},\n  "fields": [ {"id": "a"}, {"id": "b"} ]\n  }\'\n')])])]),e("p",[e("a",{attrs:{href:"https://docs.ckan.org/en/2.8/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ckan.org/en/2.8/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"options-for-loading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-for-loading"}},[t._v("#")]),t._v(" Options for Loading")]),t._v(" "),e("p",[t._v("There are 3 different paths we could take:")]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_64a570e8",graph:t.$dataBlock.mermaid_64a570e8}}),e("h4",{attrs:{id:"pros-and-cons-of-different-approaches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pros-and-cons-of-different-approaches"}},[t._v("#")]),t._v(" Pros and Cons of different approaches")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Criteria")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Datastore Write API")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("PG Copy")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Dataflows")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Speed")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Low")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("???")])]),t._v(" "),e("tr",[e("td",[t._v("Error Reporting")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("No(?)")])]),t._v(" "),e("tr",[e("td",[t._v("Easy of implementation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No(?)")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("Works Big data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Yes(?)")])]),t._v(" "),e("tr",[e("td",[t._v("Works well in parrallel")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes(?)")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Yes(?)")])])])]),t._v(" "),e("h3",{attrs:{id:"dataflows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataflows"}},[t._v("#")]),t._v(" DataFlows")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/datahq/dataflows",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/datahq/dataflows"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Dataflows is a framework for loading, processing, manipulating data.")]),t._v(" "),e("ul",[e("li",[t._v("Loader (Loading from external source (or disk)): "),e("a",{attrs:{href:"https://github.com/datahq/dataflows/blob/master/dataflows/processors/load.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/datahq/dataflows/blob/master/dataflows/processors/load.py"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Load to an SQL db (Dump processed data) "),e("a",{attrs:{href:"https://github.com/datahq/dataflows/blob/master/dataflows/processors/dumpers/to_sql.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/datahq/dataflows/blob/master/dataflows/processors/dumpers/to_sql.py"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("What is error reporting, what is runner system …, does it have a UI? does it have a queue system?\n"),e("ul",[e("li",[t._v("Think data package pipelines is taking care of all of these. "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-pipelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-pipelines"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("DPP itself is also a ETL framework, just much heavier and a bit complicated.")])])])])])]),t._v(" "),e("h3",{attrs:{id:"notes-an-qa-sep-2019"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes-an-qa-sep-2019"}},[t._v("#")]),t._v(" Notes an QA (Sep 2019)")]),t._v(" "),e("ul",[e("li",[t._v("Note: TDR needs info on CKAN Resource source so we can create right datastore entry …")]),t._v(" "),e("li",[t._v("No need to validate as we assume it is good …\n"),e("ul",[e("li",[t._v("We might want to do that … still")])])]),t._v(" "),e("li",[t._v("Pros and Cons\n"),e("ul",[e("li",[t._v("Speed")]),t._v(" "),e("li",[t._v("Error reporting …\n"),e("ul",[e("li",[t._v("What happens with Copy if you hit an error (e.g. a bad cast?)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://infinum.co/the-capsized-eight/superfast-csv-imports-using-postgresqls-copy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://infinum.co/the-capsized-eight/superfast-csv-imports-using-postgresqls-copy"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wiki.postgresql.org/wiki/Error_logging_in_COPY",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.postgresql.org/wiki/Error_logging_in_COPY"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Ease of implementation")]),t._v(" "),e("li",[t._v("Good with inserting Big data")])])]),t._v(" "),e("li",[t._v("Create as strings and cast later … ?")]),t._v(" "),e("li",[t._v("xloader implementation with COPY command: "),e("a",{attrs:{href:"https://github.com/ckan/ckanext-xloader/blob/fb17763fc7726084f67f6ebd640809ecc055b3a2/ckanext/xloader/loader.py#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ckan/ckanext-xloader/blob/fb17763fc7726084f67f6ebd640809ecc055b3a2/ckanext/xloader/loader.py#L40"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Raw insert ~ 15m (on 1m rows)"),e("br"),t._v("\nInsert with begin / commit ~5m"),e("br"),t._v("\ncopy ~82s (though may have limit on b/w) – and what happens if pipe breaks")]),t._v(" "),e("p",[t._v("Q: Is it better to but everything in DB as a string and cast later or cast and insert in DB."),e("br"),t._v("\nA: Probably cast first and insert after.")]),t._v(" "),e("p",[t._v("Q: Why do we rush to insert the data in DB? We will have to wait until it’s casted anyways befroe use"),e("br"),t._v("\nA: It’s much faster to do operations id DB than outside.")])],1)}),[],!1,null,null,null);"function"==typeof s&&s(o);a.default=o.exports}}]);