'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('./53ec6a2d71bd5a4846662679c61fe819.js'),b=require('./c4b43629b4de3d73a79d27fb0314f46a.js'),c=require('react'),d=require('redux'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:f}=require('react-redux');class g extends c.Component{onConfirmCallback(a){'function'==typeof this.props.callback&&this.props.callback(a),this.props.cosActions.setConfirmInfo({show:!1})}componentDidMount(){}render(){let b=this.props;return b.show?c.createElement(a,_extends({},this.props,{callback:this.onConfirmCallback.bind(this)})):null}}module.exports=f((a)=>{let b=a.cos.confirmInfo||{};return _extends({},b)},(a)=>{return{cosActions:e.bindActionCreators(b,a)}})(g)}(require('lazyload'),require);