// build time:Sat Jun 08 2019 17:17:46 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("component/pop_base",function(t,e,n){var a=t("base/tangram").T,r=t("conf/const"),o=t("base/class").Class;e.PopBase=o.create(function(e){function n(t){a(t).click(function(t){t=a.event(t||window.event);var e=o(t.target);e&&(t.preventDefault(),i.fire("clickact",{cmd:a(e).attr(i._actBtnSet.cmdAttr),element:e,event:t,buttonType:i._poptype}))}).mouseover(function(t){var e=o(t.target);i.fire("mouseenter",{element:e,event:t}),a(e).attr("data-cmd")=="more"&&i.fire("moreover",{element:e,event:t})})}function o(t){if(c(t))return t;if(i._actBtnSet.maxDomDepth>0){var e=i._actBtnSet.maxDomDepth,n=0,r=a(t).parent().get(0),o=i.entities;while(n<e){if(c(r))return r;r=a(r).parent().get(0);if(a.array(o).contains(r)||r==document.body)break;n++}}return null}function c(t){var e=i._actBtnSet;return t&&t.tagName&&(e.className||e.tagName)?(!e.className||a(t).hasClass(e.className))&&(!e.tagName||t.tagName.toLowerCase()==e.tagName.toLowerCase())&&a(t).attr(e.cmdAttr):!1}var i=this;i._container=null,i._actBtnSet={className:"",tagName:"a",maxDomDepth:0,cmdAttr:r.CMD_ATTR},i._partners=t("component/partners").partners,i._partnerSort=t("component/partners").partnerSort,i._poptype=-1,i.show=function(t,e){window._bd_share_main.F.use("share_popup.css",function(){i._show(t,e)})},i.hide=function(){i._hide(),i.un()},i.init=function(){i._init(),n(i._container)},i._init=function(){},i._show=function(){},i._hide=function(){}})});
//rebuild by neat 