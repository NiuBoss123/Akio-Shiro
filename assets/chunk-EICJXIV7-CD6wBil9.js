import{_ as a,j as g,l as m}from"./mermaid.core-D-7ZtuBl.js";import{s as n}from"./isEmpty-DVc1NNx0.js";var b=a((t,e)=>{let o;return e==="sandbox"&&(o=n("#i"+t)),(e==="sandbox"?n(o.nodes()[0].contentDocument.body):n("body")).select(`[id="${t}"]`)},"getDiagramElement"),B=a((t,e,o,r)=>{t.attr("class",o);const{width:i,height:s,x:h,y:x}=d(t,e);g(t,s,i,r);const c=l(h,x,i,s,e);t.attr("viewBox",c),m.debug(`viewBox configured: ${c} with padding: ${e}`)},"setupViewPortForSVG"),d=a((t,e)=>{const o=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:o.width+e*2,height:o.height+e*2,x:o.x,y:o.y}},"calculateDimensionsWithPadding"),l=a((t,e,o,r,i)=>`${t-i} ${e-i} ${o} ${r}`,"createViewBox");export{b as g,B as s};
