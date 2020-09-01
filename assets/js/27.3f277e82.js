(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{364:function(e,a,t){"use strict";t.r(a);var r=t(18),s=function(e){e.options.__data__block__={mermaid_64a5702c:'graph LR\n\nsubgraph "Filter UI"\n  simpleselectui[Filter by columns explicitly]\n  sqlfilterui[SQL UI]\n  richselectui[Filter and Group by etc in a UI]\nend\n\nsubgraph Renderers\n  tableview[Table Renderer]\n  chartview[Chart Renderer]\n  mapview[Map Renderer]\nend\n\nsubgraph Builders\n  datasetselector[Select datasets to use, potentially with combination]\n  chartbuilder[Chart Builder - UI to create a chart]\n  mapbuilder[Map Builder]\nend\n\nsubgraph APIs\n  queryapi[Abstract Query API implemented by others]\n  datastoreapijs[DataStore API wrapper - returns a Data Package with cached data and query as url?]\n  datajs[Data Package - Data in Memory: Dataset and Table objects]\n  datajsquery[Query Wrapper Around Dataset with cached data in memory]\nend\n\nclassDef todo fill:#f9f,stroke:#333,stroke-width:1px\nclassDef working fill:#00ff00,stroke:#333,stroke-width:1px\n\nclass chartbuilder todo;\nclass chartview,tableview,mapview,simpleselectui working;\n',mermaid_64a57024:"graph TD\n\nFilterUI_Update --\x3e ReduxACTION:UpdateFilters\nReduxACTION:UpdateFilters --\x3e RefetchData\nReduxACTION:UpdateFilters --\x3e updateUIState\n\nRefetchData --store.workingData--\x3e UpdateStore\nupdateUIState --store.uiState--\x3e UpdateStore\n\nUpdateStore --\x3e RerenderApp\n"}},n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"data-explorer-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-explorer-design"}},[e._v("#")]),e._v(" Data Explorer Design")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("Design sketches from Aug 2019. This remains a work in progress though a good part was implemented in the new "),t("RouterLink",{attrs:{to:"/data-explorer/"}},[e._v("Data Explorer")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"job-stories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#job-stories"}},[e._v("#")]),e._v(" Job Stories")]),e._v(" "),t("p",[e._v("[Preview] As a Data Consumer I want to have a sense of what data there is in a dataset’s resources before I download it (or download an individual resource) so that I don’t waste my time and get interested")]),e._v(" "),t("p",[e._v("[Preview] As a Data Consumer I want to view (the most important contents) of a resource without downloading it and opening it so i save time (and don’t have to get specialist tools)")]),e._v(" "),t("p",[e._v("[Preview - with tweaks] As a Data Consumer I want to be able to display tabular data with geo info on a map so that I can see it in an easily comprehensible way")]),e._v(" "),t("p",[e._v("[Explorer] As a Viewer I want to explore (filter, facet?) a dataset so I can find the data i’m looking for …")]),e._v(" "),t("p",[e._v("[Explorer - map] As a viewer i want to filt4er down the data i dispaly on the map so that I can see the data i want")]),e._v(" "),t("p",[e._v("[Map / Dash Creator] As a Publisher i want to create a custom map or dashboard so that I can display my data to viewers powerfully")]),e._v(" "),t("p",[e._v("[View the data] As a User, I want to see my city related data (eg, crime, road accidents) on the map so that:")]),e._v(" "),t("ul",[t("li",[e._v("I can easily understand which area is safe for me.")]),e._v(" "),t("li",[e._v("I can evaluate different neighbourhoods when planning a move.")])]),e._v(" "),t("p",[e._v("As a User from city council, I want to see my city related data (eg, traffic) on the map so that I can take better actions to improve the city (make it safe for citizens).")]),e._v(" "),t("blockquote",[t("p",[e._v("is this self-service created, a custom map made by publisher, an auto-generated map (e.g. preview)")])]),e._v(" "),t("p",[e._v("[Data Explorer] As a Power User I want to do SQL queries on the datastore so that I can dsiplay / download the results and get insight without having to download into my own tool and do that wrangling")]),e._v(" "),t("h2",{attrs:{id:"components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),t("p",[e._v("Definitions for feature clusters")]),e._v(" "),t("ul",[t("li",[e._v("Preview: “preview” a variety of data types starting with tabular and geodata and extending to PDFS and HTML etc etc.\n"),t("ul",[t("li",[e._v("Pluggable system")]),e._v(" "),t("li",[e._v("Resource proxy (cors issues)")])])]),e._v(" "),t("li",[e._v("Data Explorer")]),e._v(" "),t("li",[e._v("Chart Builder")]),e._v(" "),t("li",[e._v("Map Builder\n"),t("ul",[t("li",[e._v("Lite")]),e._v(" "),t("li",[e._v("Complex")])])]),e._v(" "),t("li",[e._v("Rich Viz")]),e._v(" "),t("li",[e._v("Dashboard: something that has many widgets displayed at once\n"),t("ul",[t("li",[e._v("Basic: no linkage between widgets (basic controls)")]),e._v(" "),t("li",[e._v("Complex: linkage between widgets (e.g. zooming on the map changes the map, or clicking the map changes the charts)")])])])]),e._v(" "),t("p",[e._v("## Architecture")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a5702c",graph:e.$dataBlock.mermaid_64a5702c}}),t("p",[e._v("Filter UI updates Redux Store using a one-way data binding as the ONLY way to modify application state or component state (except internal state of components as needed):")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_64a57024",graph:e.$dataBlock.mermaid_64a57024}}),t("h2",{attrs:{id:"interfaces-to-define"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-to-define"}},[e._v("#")]),e._v(" Interfaces to define")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dataset => data package\nquery[Query - source data package + cached data + filter state]\nworkingdataset[Working Dataset in Memory]\nchartconfig[]\nmapconfig[]\n")])])]),t("h3",{attrs:{id:"redux-store-top-level-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redux-store-top-level-state"}},[e._v("#")]),e._v(" Redux store / top level state")]),e._v(" "),t("div",{staticClass:"language-javascript= extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("queryuistate: {\n  // url / data package rarely changes during lifetime of explorer usually\n  url: datastore url / or an original data package\n  filters: ...\n  sqlstatement: \n}\n// list of datasets / resources we are working with ...\ndatasets/resources: [\n\n]\nlayout: [\n  // this is the switcher layout where you only see one widget at a time \n  layouttype: chooser; // chooserr aka singleton, stacked, custom ... \n  views: [list of views in their order]\n] \nviews: [\n  {\n    type:\n    resource:\n    char\n  }\n]\n")])])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(n);a.default=n.exports}}]);