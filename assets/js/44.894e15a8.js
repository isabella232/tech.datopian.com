(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{438:function(e,t,o){"use strict";o.r(t);var r=o(25),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploy-a-frontend-app-to-ckan-cloud"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-frontend-app-to-ckan-cloud"}},[e._v("#")]),e._v(" Deploy A Frontend APP To CKAN Cloud")]),e._v(" "),o("h2",{attrs:{id:"creating-ckan-portal-deploying-for-first-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-ckan-portal-deploying-for-first-time"}},[e._v("#")]),e._v(" Creating CKAN Portal - Deploying for first time")]),e._v(" "),o("p",[e._v("In order to deploy CKAN portal on our Kubernetes cluster, you will need to first dockerize the CKAN application. For that you will need:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Dockerfile")]),e._v(" to build an image.")]),e._v(" "),o("li",[o("code",[e._v(".env")]),e._v(" file to keep environment variables for an image.")]),e._v(" "),o("li",[o("code",[e._v(".gitlab-ci.yml")]),e._v(" to deploy an image to container registry.")])]),e._v(" "),o("p",[e._v("Later, Kubernetes will pull that image and build a portal using it.")]),e._v(" "),o("p",[e._v("We keep those file in private GitLab Repositories.")]),e._v(" "),o("p",[e._v("Create a new project in GitLab:")]),e._v(" "),o("ul",[o("li",[e._v("Navigate to "),o("a",{attrs:{href:"https://gitlab.com/viderum",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitlab.com/viderum"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Click the “New Project” button on the right")]),e._v(" "),o("li",[e._v("Let’s name it "),o("code",[e._v("cloud-deploy-demo-exercise-ng")]),e._v(" "),o("ul",[o("li",[e._v("We use following name convention: "),o("code",[e._v("cloud-[project-id]-ng")])])])]),e._v(" "),o("li",[e._v("Click “Create Project”")])]),e._v(" "),o("p",[e._v("You should have an empty repository on "),o("a",{attrs:{href:"https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitlab.com/viderum/cloud-deploy-demo-exercise-ng"),o("OutboundLink")],1),e._v(". Let’s now add the necessary files.")]),e._v(" "),o("h3",{attrs:{id:"create-dockerfile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-dockerfile"}},[e._v("#")]),e._v(" Create Dockerfile")]),e._v(" "),o("p",[o("code",[e._v("Dockerfile")]),e._v(" is a text document that contains all the commands a user could call on the command line to assemble an image. Usually, all you need is to copy the "),o("code",[e._v("Dockerfile")]),e._v(" from the existing project, and update its "),o("code",[e._v("API_URL")]),e._v(" variable.")]),e._v(" "),o("ul",[o("li",[e._v("Click “New File” button")]),e._v(" "),o("li",[e._v("Copy everything from "),o("a",{attrs:{href:"https://gitlab.com/viderum/cloud-deploy-demo-ng/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitlab.com/viderum/cloud-deploy-demo-ng/blob/master/Dockerfile"),o("OutboundLink")],1),e._v(" and paste it in your new file")]),e._v(" "),o("li",[e._v("Name the file "),o("code",[e._v("Dockerfile")])]),e._v(" "),o("li",[e._v("Click “Commit Changes” button")])]),e._v(" "),o("p",[o("strong",[e._v("Note:")])]),e._v(" "),o("ul",[o("li",[e._v("Please define "),o("strong",[e._v("All")]),e._v(" environment variables here as shown in example "),o("code",[e._v("ENV API_URL https://deploy-demo.ckan.io/api/3/action/")])])]),e._v(" "),o("h3",{attrs:{id:"create-env-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-env-file"}},[e._v("#")]),e._v(" Create .env file")]),e._v(" "),o("p",[e._v("Please create this file as a placeholder for now. It will "),o("strong",[e._v("not be used")]),e._v(" when deployd. Define all your environment variables in "),o("code",[e._v("Docerfile")])]),e._v(" "),o("ul",[o("li",[e._v("Click "),o("code",[e._v("+")]),e._v(" and choose “Add File”")]),e._v(" "),o("li",[e._v("Copy everything from "),o("a",{attrs:{href:"https://gitlab.com/viderum/cloud-deploy-demo-ng/blob/master/.env",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gitlab.com/viderum/cloud-deploy-demo-ng/blob/master/.env"),o("OutboundLink")],1),e._v(" and paste it in the new file")]),e._v(" "),o("li",[e._v("Name the file "),o("code",[e._v(".env")])]),e._v(" "),o("li",[e._v("Click “Commit Changes” button")])]),e._v(" "),o("h3",{attrs:{id:"create-gitlab-ci-yml"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-gitlab-ci-yml"}},[e._v("#")]),e._v(" Create .gitlab-ci.yml")]),e._v(" "),o("p",[o("code",[e._v(".gitlab-ci.yml")]),e._v(" is responsible for running continuous deployments. It builds the newest image of the portal and pushes it to the GitLab registry. To create it:")]),e._v(" "),o("ul",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://cc-p-jenkins.ckan.io/job/Initialize%20Gitlab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cc-p-jenkins.ckan.io/job/Initialize Gitlab/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build with Parameters")]),e._v(" button")]),e._v(" "),o("li",[e._v("Change "),o("code",[e._v("viderum/cloud-instance-id")]),e._v(" to "),o("code",[e._v("viderum/cloud-deploy-demo-exercise-ng")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build")]),e._v(" button")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/9xGKXOd.png",alt:""}})]),e._v(" "),o("p",[e._v("At this point you should have all 3 files in your repository.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/15leOnP.png",alt:""}})]),e._v(" "),o("p",[e._v("Wait until the GitLab Build is successful.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/cVopL51.png",alt:""}})]),e._v(" "),o("p",[e._v("Green means build was successful, and our image was deployed to GitLab Container registry. That means we are ready to create a new instance on the K8 cluster. 🚀")]),e._v(" "),o("h3",{attrs:{id:"create-frontend-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-frontend-app"}},[e._v("#")]),e._v(" Create Frontend APP")]),e._v(" "),o("p",[e._v("Now we need to deploy the new image to CKAN Cloud")]),e._v(" "),o("ul",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://cc-p-jenkins.ckan.io/job/create%20frontend%20instance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cc-p-jenkins.ckan.io/job/create frontend instance/"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build With Parameters")]),e._v(" button")]),e._v(" "),o("li",[e._v("Update "),o("code",[e._v("INSTANCE_NAME")]),e._v(" and "),o("code",[e._v("GITLAB_REPO")]),e._v(" inputs per your needs")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build")]),e._v(" button")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/GxLvkpe.png",alt:""}})]),e._v(" "),o("p",[e._v("Wait until the build is successful. Once done, that’s it! Our instance is deployed to the K8 cluster. Finally, let’s create a route for it.")]),e._v(" "),o("h3",{attrs:{id:"create-route"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-route"}},[e._v("#")]),e._v(" Create route")]),e._v(" "),o("p",[e._v("In the last step, we need to create the route for your portal, so that it’s publicly accessible.")]),e._v(" "),o("ul",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://cc-p-jenkins.ckan.io/job/create%20route",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cc-p-jenkins.ckan.io/job/create route"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build With Parameters")]),e._v(" button")]),e._v(" "),o("li",[e._v("Update "),o("code",[e._v("EXTRA_ARGS")]),e._v(" with following: "),o("code",[e._v("instances-default deploy-demo-exercise-ng deploy-demo-exercise-ng")])]),e._v(" "),o("li",[e._v("Set "),o("code",[e._v("DRY_RUN")]),e._v(" to "),o("code",[e._v("no")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Build")]),e._v(" button")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/lZWoB4Q.png",alt:""}})]),e._v(" "),o("h3",{attrs:{id:"check-it-is-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#check-it-is-working"}},[e._v("#")]),e._v(" Check it is working")]),e._v(" "),o("p",[e._v("That’s It! 🎆 You should now be able to visit "),o("a",{attrs:{href:"https://cloud-deploy-demo-ng-exercise.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud-deploy-demo-ng-exercise.ckan.io"),o("OutboundLink")],1),e._v(" and see the live portal.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://i.imgur.com/TqD8GCY.png",alt:""}})]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),o("p",[o("a",{attrs:{href:"/deploy/redeploy-ckan-ng"}},[e._v("Redeploy A Frontend APP To CKAN Cloud")])])])}),[],!1,null,null,null);t.default=i.exports}}]);