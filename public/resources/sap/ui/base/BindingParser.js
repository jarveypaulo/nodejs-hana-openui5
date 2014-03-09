/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.base.BindingParser");jQuery.sap.require("jquery.sap.script");(function(){var r=/^\{\s*[a-zA-Z_][a-zA-Z0-9_]*\s*:/;var a=/(\\[\\\{\}])|(\{)/g;var b=/([\\\{\}])/g;function c(f){var F=function(v){var R=[],l=f.length,i;for(i=0;i<l;i++){if(typeof f[i]==="number"){R.push(arguments[f[i]])}else{R.push(f[i])}}return R.join('')};F.textFragments=f;return F}function d(p){var P=p.indexOf(">"),B={path:p};if(P>0){B.model=p.slice(0,P);B.path=p.slice(P+1)}return B}sap.ui.base.BindingParser={};sap.ui.base.BindingParser._keepBindingStrings=false;sap.ui.base.BindingParser.simpleParser=function(s,C){if(jQuery.sap.startsWith(s,"{")&&jQuery.sap.endsWith(s,"}")){return d(s.slice(1,-1))}};sap.ui.base.BindingParser.simpleParser.escape=function(v){return v};sap.ui.base.BindingParser.complexParser=function(s,C,u){var e=jQuery.sap.parseJS,B={parts:[]},f=[],U,P,p=0,m,g;function h(o,k){if(typeof o[k]==="string"){if(jQuery.sap.startsWith(o[k],".")){o[k]=jQuery.proxy(jQuery.sap.getObject(o[k].slice(1),undefined,C),C)}else{o[k]=jQuery.sap.getObject(o[k])}}}function i(o,k){var F;if(typeof o[k]==="string"){if(jQuery.sap.startsWith(o[k],".")){F=jQuery.sap.getObject(o[k].slice(1),undefined,C)}else{F=jQuery.sap.getObject(o[k])}if(typeof F==="function"){o[k]=new F(o.formatOptions,o.constraints)}else{o[k]=F}delete o.formatOptions;delete o.constraints}}function j(o,k,l){var F;if(!(typeof o[k]==="object"||jQuery.isArray(o[k]))){return}if(jQuery.isArray(o[k])){jQuery.each(o[k],function(I,O){j(o[k],I,k)})}else{if(k==="filters"||l==="filters"){F=jQuery.sap.getObject("sap.ui.model.Filter")}else if(k==="sorter"||l==="sorter"){F=jQuery.sap.getObject("sap.ui.model.Sorter");h(o[k],"group")}if(F){o[k]=new F(o[k])}}}while(m=a.exec(s)){if(p<m.index){f.push(s.slice(p,m.index))}if(m[1]){f.push(m[1].slice(1));U=true}else{if(r.test(s.slice(m.index))){P=e(s,m.index);i(P.result,'type');j(P.result,'filters');j(P.result,'sorter');h(P.result,'formatter');h(P.result,'factory');f.push(B.parts.length);B.parts.push(P.result);a.lastIndex=P.at}else{g=s.indexOf('}',m.index);if(g<m.index){throw new SyntaxError("no closing braces found in '"+s+"' after pos:"+m.index)}f.push(B.parts.length);B.parts.push(d(s.slice(m.index+1,g)));a.lastIndex=g+1}}p=a.lastIndex}if(p<s.length){f.push(s.slice(p))}if(B.parts.length>0){if(f.length===1){B=B.parts[0]}else{B.formatter=c(f)}if(sap.ui.base.BindingParser._keepBindingStrings){B.bindingString=s}return B}else if(u&&U){return f.join('')}};sap.ui.base.BindingParser.complexParser.escape=function(v){return v.replace(b,"\\$1")}}());