(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{454:function(e,t,a){"use strict";a.r(t);var o=a(25),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hubstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hubstore"}},[e._v("#")]),e._v(" HubStore")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Work in Progress")]),e._v(" "),a("p",[e._v("This is is early stage and still a work in progress.")])]),e._v(" "),a("p",[e._v("A HubStore maintains a catalog of organizations and their ownership of projects / datasets.")]),e._v(" "),a("p",[e._v("It’s name derives from the common appelation of “Hub” for something that organizes a collection of individual items e.g. Git"),a("em",[e._v("Hub")]),e._v(" or Data"),a("em",[e._v("Hub")]),e._v(". The HubStore handles the information that makes a Hub a Hub.")]),e._v(" "),a("h2",{attrs:{id:"domain-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-model"}},[e._v("#")]),e._v(" Domain Model")]),e._v(" "),a("ul",[a("li",[e._v("Organization")]),e._v(" "),a("li",[e._v("Account (User)")]),e._v(" "),a("li",[e._v("MembershipRole e.g. admin, editor etc")]),e._v(" "),a("li",[e._v("Project (which has a Dataset)")])]),e._v(" "),a("p",[e._v("Associations")]),e._v(" "),a("ul",[a("li",[e._v("Organization --owns–> Project")]),e._v(" "),a("li",[e._v("Organization --membership–> Account\n"),a("ul",[a("li",[e._v("Membership association has an associated MembershipRole.")])])])]),e._v(" "),a("p",[e._v("Potential extras:")]),e._v(" "),a("ul",[a("li",[e._v("Do we allow Accounts to own Projects or only Organizations? Yes, we do. I think this is a key use case.")]),e._v(" "),a("li",[e._v("Organization Hierarchies: Organization --parent–> Organization. One could allow for hierarchies of organizations. We do not by default but it is possible to do so.")]),e._v(" "),a("li",[e._v("Team: a convenient grouping of Accounts for the purpose of assigning permissions to something\n"),a("ul",[a("li",[e._v("All team members have the same status (if you want different statuses get different teams)")]),e._v(" "),a("li",[e._v("Team --membership–> Account (without a role)")]),e._v(" "),a("li",[e._v("Example: Github Teams")]),e._v(" "),a("li",[e._v("Comment: hirerarchical organizations "),a("em",[e._v("could")]),e._v(" make much of the use case obsolete. IME teams are an annoying feature of github that bring complexity (who exactly has access to this thing, if i want to remove Person X from access i have to check all the teams with access etc).")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);