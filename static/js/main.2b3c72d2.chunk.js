(this["webpackJsonpmutual-aid-networks"]=this["webpackJsonpmutual-aid-networks"]||[]).push([[0],{218:function(e,t,a){e.exports=a(395)},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},309:function(e,t,a){},329:function(e,t,a){},362:function(e,t,a){},385:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"requestNetworks",(function(){return N}));var o={};a.r(o),a.d(o,"getSelectedCategories",(function(){return j})),a.d(o,"getSearchLocation",(function(){return L})),a.d(o,"getHoveredPointId",(function(){return G})),a.d(o,"getViewState",(function(){return F}));var r={};a.r(r),a.d(r,"getAllNetworks",(function(){return B})),a.d(r,"getFilteredNetworks",(function(){return H})),a.d(r,"getVisibleCards",(function(){return K}));var s={};a.r(s),a.d(s,"setCategoryFilters",(function(){return V})),a.d(s,"setLatLng",(function(){return Y})),a.d(s,"setHoveredPoint",(function(){return X}));var i=a(19),c=a(25),l=a(33),u=a(30),p=a(34),_=a(0),E=a.n(_),d=a(128),A=a(9),m=a.n(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(161),T=a(78),P=a(405),S=a(200),f=a.n(S),R=a(40),b=function(e,t){return"".concat(e,"-").concat(t)},O=b("EVENTS","REQUEST_NETWORKS"),g=b("EVENTS","SET_NETWORKS"),C=b("EVENTS","REQUEST_FAILED"),v={allNetworks:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return Object(R.a)({},e,{allNetworks:n,error:null});case C:return console.log("REQUEST_FAILED: ".concat(n)),Object(R.a)({},e,{error:n});default:return e}},N=function(){return{type:O}},w=a(99),D=a(100),y=a(160),k=a(406),j=function(e){return e.selections.categories},L=function(e){return e.selections.searchLocation},G=function(e){return e.selections.hoveredPointId},F=Object(w.a)([L],(function(e){return e.lat?"list":"default"})),B=function(e){return e.networks.allNetworks},H=Object(w.a)([B,j],(function(e,t){return t.length?Object(D.filter)(e,(function(e){return t.includes(e.category)})):[]})),K=Object(w.a)([H,L],(function(e,t){if(!t.lat)return[];var a=new y.b(Number(t.lat),Number(t.lng));return e.filter((function(e){return Object(k.a)(a,new y.b(Number(e.lat),Number(e.lng)))<80467})).sort((function(e,t){return Object(k.a)(a,new y.b(Number(e.lat),Number(e.lng)))-Object(k.a)(a,new y.b(Number(t.lat),Number(t.lng)))}))})),U=a(404),M={actions:n,logics:[Object(U.a)({type:O,processOptions:{successType:g,failType:C},process:function(e){return e.firestore.collection("mutual_aid_networks").get().then((function(e){return e.docs.map((function(e,t){var a,n=e.data();return a=n.generalForm||n.supportRequestForm&&n.supportOfferForm?"General":n.supportRequestForm?"Request Support":n.supportOfferForm?"Offer Support":"Community",Object(R.a)({},n,{id:t,category:a})}))}))}})],reducers:I,selectors:r},x=b("SELECTIONS","FILTER_BY_CATEGORY"),W=b("SELECTIONS","SET_LAT_LNG"),q=b("SELECTIONS","SET_HOVERED_POINT"),J=["General","Request Support","Offer Support","Community"],z={view:"default",categories:J,language:"",community:"",searchLocation:{},hoveredPointId:null},V=function(e){return{type:x,payload:e}},Y=function(e){return{type:W,payload:e}},X=function(e){return{type:q,payload:e}},Z={actions:s,logics:[],reducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(R.a)({},e,{categories:t.payload});case W:return Object(R.a)({},e,{searchLocation:t.payload});case q:return Object(R.a)({},e,{hoveredPointId:t.payload});default:return e}},selectors:o},Q=a(103),$=a.n(Q),ee="REACT_APP_PROD";var te={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_FIREBASE_API_KEY")],authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_FIREBASE_AUTH_DOMAIN")],databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_DATABASE_URL")],storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_STORAGE_BUCKET")],messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_MESSAGING_SENDER_ID")],projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_TESTING_FIREBASE_API_KEY:"AIzaSyCJncx2G6bUnecl4H2VHSBTDfRRxg7H5Fs",REACT_APP_TESTING_FIREBASE_AUTH_DOMAIN:"townhalltestingsms.firebaseapp.com",REACT_APP_TESTING_DATABASE_URL:"https://townhalltestingsms.firebaseio.com",REACT_APP_TESTING_PROJECT_ID:"townhalltestingsms",REACT_APP_TESTING_STORAGE_BUCKET:"townhalltestingsms.appspot.com",REACT_APP_TESTING_MESSAGING_SENDER_ID:"86976100332",REACT_APP_PROD_FIREBASE_API_KEY:"AIzaSyCXyjAOvBKDEX5pckTwuI7LODWKNlL21gc",REACT_APP_PROD_FIREBASE_AUTH_DOMAIN:"townhallproject-86312.firebaseapp.com",REACT_APP_PROD_DATABASE_URL:"https://townhallproject-86312.firebaseio.com",REACT_APP_PROD_STORAGE_BUCKET:"townhallproject-86312.appspot.com",REACT_APP_PROD_MESSAGING_SENDER_ID:"208752196071",REACT_APP_PROD_PROJECT_ID:"townhallproject-86312",REACT_APP_SMS_API:"https://localhost:8080"})["".concat(ee,"_PROJECT_ID")]};$.a.initializeApp(te);var ae=$.a.database(),ne=$.a.firestore(),oe=($.a,{networks:M.reducers,selections:Z.reducers}),re=[].concat(Object(h.a)(M.logics),Object(h.a)(Z.logics)),se={firebaseUrl:"https://townhallproject-86312.firebaseio.com",firebasedb:ae,firestore:ne,httpClient:f.a},ie=Object(P.a)(re,se),ce=Object(T.a)(ie);a(397);var le=a(213),ue=(a(272),a(104)),pe=a(17),_e=a(201),Ee=a.n(_e),de=function e(t){Object(i.a)(this,e),this.type="Feature",this.geometry={coordinates:[Number(t.lng),Number(t.lat)],type:"Point"};var a=t.bbox[3]-t.bbox[1];this.properties={region:t.region,contact:t.contact||null,socials:t.social||null,facebookPage:t.facebookPage,state:t.state,title:t.title,generalForm:t.generalForm,supportRequestForm:t.supportRequestForm,supportOfferForm:t.supportOfferForm,category:t.category,bbox:t.bbox,lat:t.lat,lng:t.lng,scale:10*a},this.id=t.id},Ae=a(3),me=a.n(Ae),he="networks-dots",Te="pk.eyJ1IjoidG93bmhhbGxwcm9qZWN0IiwiYSI6ImNqMnRwOG4wOTAwMnMycG1yMGZudHFxbWsifQ.FXyPo3-AD46IuWjjsGPJ3Q",Pe=window.mapboxgl,Se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addClickListener=a.addClickListener.bind(Object(pe.a)(a)),a.addLayer=a.addLayer.bind(Object(pe.a)(a)),a.createFeatures=a.createFeatures.bind(Object(pe.a)(a)),a.updateData=a.updateData.bind(Object(pe.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.networks,t=this.createFeatures(e);this.initializeMap(t)}},{key:"componentWillReceiveProps",value:function(e){var t=e.networks;t.length!==this.props.networks.length&&this.updateData(t)}},{key:"updateData",value:function(e){var t=this.createFeatures(e);this.map.getSource("".concat(he,"-").concat(this.props.stateName))&&this.map.getSource("".concat(he,"-").concat(this.props.stateName)).setData(t)}},{key:"createFeatures",value:function(e){var t={features:[],type:"FeatureCollection"};return t.features=e.map((function(e){return new de(e)})),t}},{key:"addClickListener",value:function(){var e=this.props,t=e.bounds,a=e.setBounds;this.map.on("click",(function(){a(t)}))}},{key:"addLayer",value:function(e){this.map.addLayer({id:"".concat(he,"-").concat(this.props.stateName),paint:{"circle-opacity":.5,"circle-radius":7,"circle-stroke-color":"#fff","circle-stroke-width":1,"circle-color":["match",["get","category"],"Support Request","#ef4822","Support Offer","#6ac1e5","General","#8048f3","#057A8F"]},source:{data:e,type:"geojson"},type:"circle"},"district_interactive")}},{key:"initializeMap",value:function(e){var t=this,a=this.props,n=a.bounds,o=a.mapId;Pe.accessToken=Te;this.map=new Pe.Map({container:o,doubleClickZoom:!1,dragPan:!1,scrollZoom:!1,style:"mapbox://styles/townhallproject/cjgr7qoqr00012ro4hnwlvsyp"}),this.map.fitBounds(n,{easeTo:{duration:0},linear:!0}),this.map.on("load",(function(){t.addClickListener(),t.addLayer(e)}))}},{key:"render",value:function(){var e=this.props,t=e.viewState,a=e.mapId,n=me()({hidden:"list"===t,inset:!0});return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{id:a,className:n,"data-bounds":this.props.bounds}))}}]),t}(E.a.Component);Se.defaultProps={selectedState:""};var fe=Se,Re=(a(303),a(304),a(305),a(306),window.mapboxgl),be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).filterDistrict=["any"],a.includedStates=["in","NAME"],a.addPopups=a.addPopups.bind(Object(pe.a)(a)),a.addClickListener=a.addClickListener.bind(Object(pe.a)(a)),a.addLayer=a.addLayer.bind(Object(pe.a)(a)),a.createFeatures=a.createFeatures.bind(Object(pe.a)(a)),a.updateData=a.updateData.bind(Object(pe.a)(a)),a.handleReset=a.handleReset.bind(Object(pe.a)(a)),a.insetOnClickEvent=a.insetOnClickEvent.bind(Object(pe.a)(a)),a.handleClickOnInset=a.handleClickOnInset.bind(Object(pe.a)(a)),a.initializeMap=a.initializeMap.bind(Object(pe.a)(a)),a.state={popoverColor:"popover-general-icon",bbox:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.networks,t=this.createFeatures(e);this.initializeMap(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.hoveredPointId,n=t.viewState,o=t.networks;this.map.resize(),o.length!==e.networks.length&&this.updateData(this.props.networks),e.viewState!==n&&(this.hoveredPopup.remove(),"default"===n&&this.setInitialState()),this.state.bbox&&"list"===n&&(this.map.fitBounds(this.state.bbox),this.setState({bbox:null})),a&&this.hoverPoint(a),e.hoveredPointId&&e.hoveredPointId!==a&&this.unHoverPoint(e.hoveredPointId)}},{key:"insetOnClickEvent",value:function(e){this.setState({inset:!1});var t=e.target.parentNode.parentNode.getAttribute("data-bounds").split(","),a=[Number(t[0]),Number(t[1])],n=[Number(t[2]),Number(t[3])],o=a.concat(n);this.map.fitBounds(o)}},{key:"updateData",value:function(e){var t=this.createFeatures(e);this.map.fitBounds([[-128.8,23.6],[-65.4,50.2]]),this.map.getSource(he)&&this.map.getSource(he).setData(t)}},{key:"createFeatures",value:function(e){var t={features:[],type:"FeatureCollection"};return t.features=e.map((function(e){return new de(e)})),t}},{key:"addPopups",value:function(e){var t=this,a=this.map;this.hoveredPopup=new Re.Popup({closeButton:!0,closeOnClick:!0}),a.on("mousemove",(function(n){var o=a.queryRenderedFeatures(n.point,{layers:[e]});if(a.getCanvas().style.cursor=o.length?"pointer":"",o.length){var r,s=o[0],i=s.properties,c="popover-".concat(s.properties.category.split(" ").join("-").toLowerCase());return t.setState({popoverColor:c}),t.props.setHoveredPoint(o[0].id),r=i.generalForm?'<a target="_blank" href='.concat(i.generalForm,">Link to form</a>"):i.supportOfferForm&&i.supportRequestForm?'<a class="side-by-side" target="_blank" href='.concat(i.supportOfferForm,'>Offer support</a><a class="side-by-side" target="_blank" href=').concat(i.supportRequestForm,">Request support</a>"):i.supportOfferForm?"<a href=".concat(i.supportOfferForm,">Offer support</a>"):i.supportRequestForm?"<a href=".concat(i.supportRequestForm,">Request support</a>"):"<a href=".concat(i.facebookPage,">Link to group</a>"),t.hoveredPopup.setLngLat(s.geometry.coordinates).setHTML("\n            <h4>".concat(i.title,"</h4>\n            <div>").concat(r,"</div>")).addTo(a)}}))}},{key:"addClickListener",value:function(){var e=this,t=this.map,a=this.props.setLatLng;t.on("click",(function(n){var o=t.queryRenderedFeatures(n.point,{layers:[he]});if(o.length>0){var r=JSON.parse(o[0].properties.bbox);a({lat:o[0].properties.lat,lng:o[0].properties.lng}),e.setState({bbox:r})}}))}},{key:"hoverPoint",value:function(e){this.map.setFeatureState({source:he,id:e},{hover:!0})}},{key:"unHoverPoint",value:function(e){this.map.setFeatureState({source:he,id:e},{hover:!1})}},{key:"addLayer",value:function(e){this.map.addLayer({id:he,paint:{"circle-opacity":["case",["boolean",["feature-state","hover"],!1],1,.5],"circle-radius":8,"circle-stroke-color":"#fff","circle-stroke-width":["case",["boolean",["feature-state","hover"],!1],2,1],"circle-color":["match",["get","category"],"Request Support","#ef4822","Offer Support","#6ac1e5","General","#8048f3","#057A8F"]},source:{data:e,type:"geojson"},type:"circle"},"district_interactive")}},{key:"handleReset",value:function(){(0,this.props.setLatLng)({})}},{key:"setInitialState",value:function(){this.map.fitBounds([[-128.8,23.6],[-65.4,50.2]]),document.getElementsByClassName("mapboxgl-ctrl-geocoder--input"),Array.from(document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")).forEach((function(e){e.value=""})),this.map.resize()}},{key:"handleClickOnInset",value:function(e){this.setState({bbox:e});var t=new Re.LngLatBounds(e).getCenter();this.props.setLatLng(t)}},{key:"makeZoomToNationalButton",value:function(){document.querySelector(".mapboxgl-ctrl-compass").remove(),document.querySelector(".mapboxgl-ctrl-usa")&&document.querySelector(".mapboxgl-ctrl-usa").remove();var e=document.createElement("button");e.className="mapboxgl-ctrl-icon mapboxgl-ctrl-usa",e.innerHTML='<span class="usa-icon"></span>',e.addEventListener("click",this.handleReset),document.querySelector(".mapboxgl-ctrl-group").appendChild(e)}},{key:"initializeMap",value:function(e){var t=this,a=this.props.setLatLng;Re.accessToken=Te;this.map=new Re.Map({container:"map",style:"mapbox://styles/townhallproject/cjgr7qoqr00012ro4hnwlvsyp"}),this.map.addControl(new Re.NavigationControl),this.map.scrollZoom.disable(),this.map.dragRotate.disable(),this.map.touchZoomRotate.disableRotation(),this.makeZoomToNationalButton();var n=this.map,o=this;this.map.addControl(new Ee.a({accessToken:Re.accessToken,mapboxgl:Re,countries:"us",marker:!1,zoom:12,flyTo:!1}).on("clear",(function(e){a({})})).on("result",(function(e){n.resize(),a({lat:e.result.center[1],lng:e.result.center[0]}),o.setState({bbox:e.result.bbox})})),"top-left"),this.map.on("load",(function(){t.map.fitBounds([[-128.8,23.6],[-65.4,50.2]]),t.addClickListener(),t.addLayer(e),t.addPopups(he)}))}},{key:"render",value:function(){var e=this.props,t=e.center,a=e.resetSelections,n=e.setLatLng,o=e.viewState,r=e.networks;return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{id:"map",className:this.state.popoverColor},E.a.createElement("div",{className:"map-overlay",id:"legend"},E.a.createElement(fe,{networks:Object(D.filter)(r,{state:"AK"}),center:t,stateName:"AK",viewState:o,resetSelections:a,setLatLng:n,setBounds:this.handleClickOnInset,mapId:"map-overlay-alaska",bounds:[[-170.15625,51.72702815704774],[-127.61718749999999,71.85622888185527]]}),E.a.createElement(fe,{networks:Object(D.filter)(r,{state:"HI"}),stateName:"HI",center:t,viewState:o,resetSelections:a,setLatLng:n,setBounds:this.handleClickOnInset,mapId:"map-overlay-hawaii",bounds:[[-161.03759765625,18.542116654448996],[-154.22607421875,22.573438264572406]]}))))}}]),t}(E.a.Component);be.defaultProps={};var Oe=be,ge=(a(307),a(215)),Ce=(a(309),function(){return E.a.createElement("div",{className:"start-network-container"},E.a.createElement(ge.a,{id:"start-network-button",target:"_blank",href:"https://docs.google.com/forms/d/1Orat2boOrd7dqmWD4LS1yJd5QwK_kSn05OS9BghJKTk/edit?usp=sharing"},"Submit a Mutual Aid Network"))}),ve=(a(327),a(132)),Ie=(a(329),ve.a.Group),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={indeterminate:!1,checkAll:!0},a.onChange=function(e){a.props.setFilters(e),a.setState({indeterminate:!!e.length&&e.length<J.length,checkAll:e.length===J.length})},a.onCheckAllChange=function(e){var t=e.target.checked?J:[];a.setState({indeterminate:!1,checkAll:e.target.checked}),a.props.setFilters(t)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return E.a.createElement("div",{className:"filter-container"},E.a.createElement("div",{className:"site-checkbox-all-wrapper"},E.a.createElement(ve.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Select all")),E.a.createElement("br",null),E.a.createElement(Ie,{value:this.props.selectedCategories,onChange:this.onChange},J.map((function(e){return E.a.createElement(ve.a,{key:e.replace(" ","-").toLowerCase(),className:e.replace(" ","-").toLowerCase(),value:e},e)}))))}}]),t}(E.a.Component),we=(a(396),a(214)),De=(a(192),a(49)),ye=(a(362),function(e){return E.a.createElement(E.a.Fragment,null,e.networks.map((function(t){var a=t.address,n=t.title,o=t.neighborhood,r=(t.form,t.facebookPage),s=t.category,i=t.community,c=t.language,l=t.generalForm,u=t.supportRequestForm,p=t.supportOfferForm,_=t.id;return E.a.createElement(we.a,{className:"network-card",title:n,key:_,onMouseEnter:function(){return e.setHoveredPoint(_)},onMouseLeave:function(){return e.setHoveredPoint(null)},extra:E.a.createElement("ul",{className:"list-inline"},s&&E.a.createElement("li",null,s),i&&E.a.createElement("li",null,i))},E.a.createElement("ul",{className:"list-inline"},o&&E.a.createElement("li",null,o),a&&E.a.createElement("li",null,a),c&&E.a.createElement("li",null,c)),E.a.createElement(De.a,{justify:"space-between"},l&&E.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"button"},"Offer or request help"),u&&E.a.createElement("a",{href:u,rel:"noopener noreferrer",target:"_blank",className:"button"},"Request help"),p&&E.a.createElement("a",{href:p,rel:"noopener noreferrer",target:"_blank",className:"button"},"Offer help"),r&&E.a.createElement("a",{href:r,rel:"noopener noreferrer",target:"_blank",className:"button"},"Join social media")))})))}),ke=function(e){var t=e.visibleCards,a=e.setHoveredPoint;return E.a.createElement("div",{className:"list-container"},t.length?E.a.createElement(ye,{setHoveredPoint:a,networks:t}):"There are no support requests or networks nearby.")},je=(a(385),function(){return E.a.createElement("div",{class:"webGl-warning",target:"_blank"},E.a.createElement("p",null,"Our interactive map feature uses WebGL, a plugin common in most modern browsers. Your browser does not have WebGL working currently."),E.a.createElement("p",null,"You can learn how to enable WebGL on",E.a.createElement("a",{href:"https://get.webgl.org/",target:"_blank"}," this website.")))}),Le=ue.a.Header,Ge=ue.a.Content,Fe=ue.a.Footer,Be=window.mapboxgl,He=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.requestNetworks)()}},{key:"render",value:function(){var e=this.props,t=e.setFilters,a=e.selectedCategories,n=e.filteredNetworks,o=e.viewState,r=e.setLatLng,s=e.visibleCards,i=e.allNetworks,c=e.setHoveredPoint,l=e.hoveredPointId;return i.length?E.a.createElement(ue.a,{className:"layout"},E.a.createElement(Le,null,E.a.createElement("div",{className:"logo"},"Mutual Aid Hub"),E.a.createElement(le.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}})),E.a.createElement(Ge,{style:{padding:"0 50px"}},E.a.createElement("div",{className:"main-container"},Be.supported()?E.a.createElement(E.a.Fragment,null,E.a.createElement(Ne,{setFilters:t,selectedCategories:a}),E.a.createElement("div",{className:"interactive-content-".concat(o)},E.a.createElement(Oe,{networks:n,viewState:o,setLatLng:r,hoveredPointId:l,setHoveredPoint:c}),E.a.createElement(ke,{visibleCards:s,setHoveredPoint:c}))):E.a.createElement(je,null),E.a.createElement("div",{className:"tagline"},"Find Mutual Aid Networks and other community self-support projects near you. Join these important efforts, offer resources, or submit needs requests."),E.a.createElement(Ce,null))),E.a.createElement(Fe,{style:{textAlign:"center"}},E.a.createElement("div",{className:"footer-text"},"We list these networks as a public resource. We cannot verify or vouch for any network or individual offerings. Please exercise all necessary judgement when interacting with community members not previously known to you."))):null}}]),t}(E.a.Component),Ke=Object(d.b)((function(e){return{filteredNetworks:M.selectors.getFilteredNetworks(e),selectedCategories:Z.selectors.getSelectedCategories(e),viewState:Z.selectors.getViewState(e),searchLocation:Z.selectors.getSearchLocation(e),visibleCards:M.selectors.getVisibleCards(e),allNetworks:M.selectors.getAllNetworks(e),hoveredPointId:Z.selectors.getHoveredPointId(e)}}),(function(e){return{requestNetworks:function(){return e(M.actions.requestNetworks())},setFilters:function(t){return e(Z.actions.setCategoryFilters(t))},setLatLng:function(t){return e(Z.actions.setLatLng(t))},setHoveredPoint:function(t){return e(Z.actions.setHoveredPoint(t))}}}))(He),Ue=(a(394),Object(T.d)(Object(T.c)(oe),ce)),Me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return E.a.createElement(d.a,{store:Ue},E.a.createElement(Ke,null))}}]),t}(_.Component);m.a.render(E.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.2b3c72d2.chunk.js.map