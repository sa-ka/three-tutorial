"use strict";var init=function(){var e={width:window.innerWidth,height:window.innerHeight},i=new THREE.Scene,t=new THREE.SpotLight(16777215);t.position.set(600,600,600),t.castShadow=!0,t.intensity=2,i.add(t);var n=new THREE.BoxGeometry(100,100,100),o=new THREE.MeshBasicMaterial({color:16711680,wireframe:!0}),a=new THREE.Mesh(n,o);i.add(a);var r=new THREE.PerspectiveCamera(45,e.width/e.height,.1,3e3);r.position.x=0,r.position.y=200,r.position.z=400,r.lookAt(new THREE.Vector3(0,0,0));var d=new THREE.WebGLRenderer;d.setClearColor(new THREE.Color(15658734)),d.setSize(e.width,e.height),d.shadowMap.enabled=!0,d.setPixelRatio(window.devicePixelRatio),document.getElementById("js-WebGL").appendChild(d.domElement);var w=new THREE.TrackballControls(r),s=function E(){w.update(),r.position.x+=.5,r.position.y+=.5,requestAnimationFrame(E),d.render(i,r)};s()};window.onload=init();
//# sourceMappingURL=cube-dist.js.map