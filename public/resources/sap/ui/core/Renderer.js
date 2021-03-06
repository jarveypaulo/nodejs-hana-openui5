/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.Renderer");sap.ui.core.Renderer={};
sap.ui.core.Renderer.extend=function(p){var c={_super:p};for(var f in p){if(typeof(p[f])=="function"){c[f]=(function(){var m=f,t=c;return function(){return t._super[m].apply(this,arguments)}}())}}return c};
sap.ui.core.Renderer.getTextAlign=function(t,T){var s="";var c=sap.ui.getCore().getConfiguration();switch(t){case sap.ui.core.TextAlign.End:switch(T){case"LTR":s="right";break;case"RTL":s="left";break;default:if(c.getRTL()){s="left"}else{s="right"}break}break;case sap.ui.core.TextAlign.Begin:switch(T){case"LTR":s="left";break;case"RTL":s="right";break;default:if(c.getRTL()){s="right"}else{s="left"}break}break;case sap.ui.core.TextAlign.Right:if(c.getRTL()){if(T=="LTR"){s="right"}}else{s="right"}break;case sap.ui.core.TextAlign.Center:s="center";break;case sap.ui.core.TextAlign.Left:if(c.getRTL()){s="left"}else{if(T=="RTL"){s="left"}}break}return s};
