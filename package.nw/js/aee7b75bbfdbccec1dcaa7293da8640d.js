'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./d559680a1a0c2551cbce1a9fb152cb99.js');class d extends a.Component{constructor(a){super(a)}componentWillReceiveProps(){}handleGroupClick(a){let b=a.currentTarget.dataset,c=this.props.list[b.index];this.props.hideGroupList(c)}hide(){this.props.hideGroupList(),this.props.hideShare({callbackID:this.props.callbackID,res:{errMsg:`${this.props.api}:cancel`}})}render(){let d,e=this.props,f=e.show?{}:b.displayNone,g=e.list.map((b,c)=>{return a.createElement('div',{key:b.room_topic,className:'weui-cell weui-cell_access auto_test_group',"data-index":c,onClick:this.handleGroupClick.bind(this)},a.createElement('div',{className:'weui-cell__hd'},a.createElement('img',{className:'thread-avatar',src:`/static/image/group-avatar${c}.jpg`})),a.createElement('div',{className:'weui-cell__bd'},a.createElement('p',{className:'thread-name'},b.room_topic,a.createElement('span',null,'(100\u4EBA)'))))});return d=global.onlySimulator?{top:0,left:0,display:e.show?'':'none',width:e.screenWidth,height:e.screenHeight,transform:`scale(${e.deviceScale})`,transformOrigin:'50% 0'}:{display:e.show?'':'none',width:e.screenWidth,height:e.screenHeight,marginLeft:-e.screenWidth/2,transform:`scale(${e.deviceScale})`,transformOrigin:'50% 0'},a.createElement('div',{className:'simulator',style:d},a.createElement(c,{width:e.width,height:e.navigationbarHeight,backgroundColor:'#efeff4',frontColor:'#000000',showLeftBtn:!0,title:'\u8BF7\u9009\u62E9\u4E00\u4E2A\u804A\u5929',titleStyle:'black',onLeftBtnClick:this.hide.bind(this)}),a.createElement('div',{className:'webview'},a.createElement('div',{className:'threads'},a.createElement('div',{className:'weui-cells__title'},a.createElement('p',null,'\u6700\u8FD1\u804A\u5929')),a.createElement('div',{className:'weui-cells'},g))))}}module.exports=d}(require('lazyload'),require);