'use strict';!function(require,directRequire){function a(){x=''}function b(b,c){let e=d.extname(c);'.js'===e?('add'==b||'unlink'==b)&&a():'.json'===e&&a()}async function c(c){if(w){let b=w.setting&&w.setting.newFeature,d=c.setting&&c.setting.newFeature;b!=d&&a()}w=c;let d=await h(c);v&&v.srcPath==d.srcPath||(a(),v&&v.unWatch(b),v=d,v.watch(b))}const d=require('path'),e=require('./d28a711224425b00101635efe1034c99.js'),f=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),g=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),h=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),{asDebug:j,workerAsDebug:k,htmlBegin:l,htmlEnd:m,vendorList:n,workerVendorList:o,devVendorList:p,noBrowser:q,devWorkerList:r,plugincodePlaceholder:s}=require('./ebfcad0a5e72b6e693634486564b1394.js'),t=global.appConfig.isDev&&!nw.App.manifest.forceVendor?p:n,u=global.appConfig.isDev&&!nw.App.manifest.forceVendor?r:o;var v,w,x='';e.on('VENDOR_CONFIG_CHANGE',a),e.on('VENDOR_VERSION_CHANGE',a),a(),module.exports=async function(a,b={}){if(await c(a),!x||b.force||global.appConfig.isDev){let b=[];b.push(l),global.appConfig.isDev?b.push('<script src="./__asdebug__/asdebug.js"></script>'):b.push(`<script>${j}</script>`);let c=v.getAllJSFiles(),e={},h=[],n=[],o=[],p=[];const q=await g(a),r=q.workers;r&&b.push(global.appConfig.isDev?'<script src="__workerasdebug__/workerasdebug.js"></script>':`<script>${k}</script>`);for(let a=0,c=t.length;a<c;a++){let c=t[a],e=d.extname(c);'.js'===e?b.push(`<script src="./__dev__/${c}"></script>`):'.css'===e&&b.push(`<link rel="stylesheet" type="text/css" href='./${c}' />`)}if(r){const a=[];for(let b=0,c=u.length;b<c;b++){let c=u[b],e=d.extname(c);'.js'===e&&a.push(`<script src="__workerdev__/${c}"></script>`)}const c=`<script>var __workerVendors__ = ${JSON.stringify(u)}</script>`;b.push(c+'\n'+a.join('\n'))}b.push(s);let w=await f(a),y=w.pages;y.forEach((a)=>{e[a]=!0;let b=a.replace(/\"/g,'\\"');h.push(`<script>__wxRoute = "${b}";__wxRouteBegin = true</script>`),h.push(`<script>__wxAppCurrentFile__ = "${b}.js"</script>`),h.push(`<script src="./${encodeURI(a)}.js"></script>`),h.push(`<script>require("${b}.js")</script>`),h.push(`<script>
      if(__wxRouteBegin) {
        console.group("${new Date} page 编译错误")
        console.error("${b}.js 出现脚本错误或者未正确调用 Page()")
        console.groupEnd()
      }
      </script>`)});let z=await i.getFileList(a,w);z.forEach((a)=>{if(!e[a]){e[a]=!0;let b=a.replace(/\"/g,'\\"');n.push(`<script> __wxAppCurrentFile__ = "${b}.js"</script>`),n.push(`<script src="${encodeURI(a)}.js"></script>`),n.push(`<script>require("${b}.js")</script>`)}}),c.forEach((a)=>{let b=a.replace(/\.js$/,'');if(!e[b])if('app.js'==a)p.push(`<script src="./${encodeURI(a)}"></script>`),p.push(`<script>require("${a.replace(/\"/g,'\\"')}")</script>`);else{if(w.subPackages){let b=!1;if(w.subPackages.forEach((c)=>{0==a.indexOf(c.root)&&(b=!0)}),b)return}o.push(`<script src="./${encodeURI(a)}"></script>`)}}),b=b.concat(o).concat(p).concat(n).concat(h),b.push(m),x=b.join('\n')}return x}}(require('lazyload'),require);