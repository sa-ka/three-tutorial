"use strict";var init=function(){var t={width:window.innerWidth,height:window.innerHeight},e=new THREE.Scene,i=new THREE.SpotLight(16777215);i.position.set(600,600,600),i.castShadow=!0,i.intensity=2,e.add(i);var o=new THREE.MTLLoader;o.setTexturePath("./assets/obj/city/"),o.setPath("./assets/obj/city/"),o.load("city.mtl",function(t){t.preload();var i=new THREE.OBJLoader;i.setMaterials(t),i.setPath("./assets/obj/city/"),i.load("city.obj",function(t){t.rotation.x=-.3,t.rotation.y=0,t.rotation.z=0,t.position.x=500,t.position.y=250,t.position.z=1e3,e.add(t)})});var n=new THREE.PerspectiveCamera(45,t.width/t.height,.1,3e3);n.position.x=0,n.position.y=200,n.position.z=400,n.lookAt(new THREE.Vector3(0,0,0));var a=new THREE.WebGLRenderer;a.setClearColor(new THREE.Color(15658734)),a.setSize(t.width,t.height),a.shadowMap.enabled=!0,a.setPixelRatio(window.devicePixelRatio),document.getElementById("js-WebGL").appendChild(a.domElement);var s=new THREE.TrackballControls(n),r=function d(){s.update(),n.position.y+=.25,n.position.z+=.5,requestAnimationFrame(d),a.render(e,n)};r()};window.onload=init();
//# sourceMappingURL=app-dist.js.map