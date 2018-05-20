'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('./fc137838572a83604db39acff8e909e0.js'),d=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),e=require('./eadce02c750c875a10680bcfedadec88.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./875171e7b864aa58d026d4fa0999fbd1.js'),{connect:h}=require('react-redux');class i extends a.Component{constructor(a){super(a),this.state={position:{left:0,top:0}}}componentDidMount(){this.checkDropdownPosition()}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show})}componentDidUpdate(a){this.context.isPopup&&!a.show&&this.props.show&&this.checkDropdownPosition()}checkDropdownPosition(){if(this.context.isPopup&&this.context.window&&this.props.left+250>this.context.window.width){let a=this.context.window.width-250;0>a&&(a=0),this.setState({position:_extends({},this.state.position,{left:a})})}}onSelectClick(a,b){b.stopPropagation(),this.props.onSelectClick(a)}onAddDeviceClick(){this.props.setAddDevicePopUp({show:!0})}onRemoveDeviceClick(a){this.props.removeDevice(a)}render(){let b,c=this.props,d=[],e='default';return c.list.map((f,g)=>{e!=f.type&&d.push(a.createElement('div',{className:'ui-dropdown-divider',key:`divider_${g}`})),d.push(a.createElement('div',{className:'ui-dropdown-item',key:g,index:g,onClick:this.onSelectClick.bind(this,g)},a.createElement('div',{className:'ui-dropdown-item-hd'},g==c.current?a.createElement('i',{className:'ui-icon-tick'}):null),a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('span',null,f.name),a.createElement('span',{className:'ui-desc'},f.desc),this.props.subDropdowns&&this.props.subDropdowns[g]&&this.props.subDropdowns[g].class?(b=this.props.subDropdowns[g].class)&&a.createElement(b,this.props.subDropdowns[g].props):null),'custom'==f.type?a.createElement('div',{className:'ui-dropdown-item-ft',onClick:this.onRemoveDeviceClick.bind(this,g)},a.createElement('span',{className:'ui-dropdown-opr'},a.createElement('i',{className:'ui-icon-close'}))):null)),e=f.type}),a.createElement(g,{show:this.props.show,style:{left:this.state.position.left||this.props.left,top:this.state.position.top||this.props.top,width:250},inClassName:'ui-popover',outClassName:'ui-animate-fadeOut ui-popover',onAnimationIn:this.checkDropdownPosition.bind(this)},a.createElement('div',{className:'ui-dropdown',ref:(a)=>this.dropdownDOM=a},d,a.createElement('div',{className:'ui-dropdown-divider'}),a.createElement('div',{className:'ui-dropdown-item',onClick:this.onAddDeviceClick.bind(this),id:'simulator-toolbar-device-custom'},a.createElement('div',{className:'ui-dropdown-item-hd'},a.createElement('i',{className:'ui-icon-plus'})),a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('span',null,'\u81EA\u5B9A\u4E49')))))}}i.contextTypes={isPopup:b.bool,window:b.object},module.exports=h((a)=>{let b=a.toolbar.device;return{list:b.list,current:b.current}},(a)=>{return{onSelectClick:f.bindActionCreators(c.selectDevice,a),removeDevice:f.bindActionCreators(c.removeDevice,a),setAddDevicePopUp:f.bindActionCreators(d.setAddDevicePopUp,a)}})(i)}(require('lazyload'),require);