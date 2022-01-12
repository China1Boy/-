/*
 *  Document   : base_comp_charts.js
 *  Author     : pixelcave
 */var BaseCompCharts=function(){var o=function(){var o,t,l,i,e,a,r,s,n=jQuery(".js-chartjs-lines")[0].getContext("2d"),f=jQuery(".js-chartjs-bars")[0].getContext("2d"),p=jQuery(".js-chartjs-radar")[0].getContext("2d"),d=jQuery(".js-chartjs-polar")[0].getContext("2d"),c=jQuery(".js-chartjs-pie")[0].getContext("2d"),h=jQuery(".js-chartjs-donut")[0].getContext("2d"),u={scaleFontFamily:"'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",scaleFontColor:"#999",scaleFontStyle:"600",tooltipTitleFontFamily:"'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",tooltipCornerRadius:3,maintainAspectRatio:!1,responsive:!0},r={labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"Last Week",fillColor:"rgba(220,220,220,.3)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[30,32,40,45,43,38,55]},{label:"This Week",fillColor:"rgba(171, 227, 125, .3)",strokeColor:"rgba(171, 227, 125, 1)",pointColor:"rgba(171, 227, 125, 1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]}]},s=[{value:56,color:"rgba(171, 227, 125, 1)",highlight:"rgba(171, 227, 125, .75)",label:"Earnings"},{value:22,color:"rgba(250, 219, 125, 1)",highlight:"rgba(250, 219, 125, .75)",label:"Sales"},{value:22,color:"rgba(117, 176, 235, 1)",highlight:"rgba(117, 176, 235, .75)",label:"Tickets"}];o=new Chart(n).Line(r,u),t=new Chart(f).Bar(r,u),l=new Chart(p).Radar(r,u),i=new Chart(d).PolarArea(s,u),e=new Chart(c).Pie(s,u),a=new Chart(h).Doughnut(s,u)},t=function(){var o={type:"bar",barWidth:8,barSpacing:6,height:"70px",barColor:"#fadb7d",tooltipPrefix:"",tooltipSuffix:" Tickets",tooltipFormat:"{{prefix}}{{value}}{{suffix}}"};jQuery(".js-slc-bar1").sparkline("html",o),o.barColor="#abe37d",o.tooltipPrefix="$ ",o.tooltipSuffix="",jQuery(".js-slc-bar2").sparkline("html",o),o.barColor="#faad7d",o.tooltipPrefix="",o.tooltipSuffix=" Sales",jQuery(".js-slc-bar3").sparkline("html",o);var t={type:"line",width:"120px",height:"70px",tooltipOffsetX:-25,tooltipOffsetY:20,lineColor:"#fadb7d",fillColor:"#fadb7d",spotColor:"#777777",minSpotColor:"#777777",maxSpotColor:"#777777",highlightSpotColor:"#777777",highlightLineColor:"#777777",spotRadius:2,tooltipPrefix:"",tooltipSuffix:" Tickets",tooltipFormat:"{{prefix}}{{y}}{{suffix}}"};jQuery(".js-slc-line1").sparkline("html",t),t.lineColor="#abe37d",t.fillColor="#abe37d",t.tooltipPrefix="$ ",t.tooltipSuffix="",jQuery(".js-slc-line2").sparkline("html",t),t.lineColor="#faad7d",t.fillColor="#faad7d",t.tooltipPrefix="",t.tooltipSuffix=" Sales",jQuery(".js-slc-line3").sparkline("html",t);var l={type:"pie",width:"50px",height:"50px",sliceColors:["#fadb7d","#faad7d","#75b0eb","#abe37d"],tooltipPrefix:"",tooltipSuffix:" Tickets",tooltipFormat:"{{prefix}}{{value}}{{suffix}}"};jQuery(".js-slc-pie1").sparkline("html",l),l.tooltipPrefix="$ ",l.tooltipSuffix="",jQuery(".js-slc-pie2").sparkline("html",l),l.tooltipPrefix="",l.tooltipSuffix=" Sales",jQuery(".js-slc-pie3").sparkline("html",l);var i={type:"tristate",barWidth:8,barSpacing:6,height:"80px",posBarColor:"#abe37d",negBarColor:"#faad7d"};jQuery(".js-slc-tristate1").sparkline("html",i),jQuery(".js-slc-tristate2").sparkline("html",i),jQuery(".js-slc-tristate3").sparkline("html",i)},l=function(){jQuery(".js-pie-randomize").on("click",function(){jQuery(this).parents(".block").find(".pie-chart").each(function(){var o=Math.floor(100*Math.random()+1);jQuery(this).data("easyPieChart").update(o)})})},i=function(){function o(){for(b.length>0&&(b=b.slice(1));b.length<300;){var o=b.length>0?b[b.length-1]:50,t=o+10*Math.random()-5;0>t&&(t=0),t>100&&(t=100),b.push(t)}for(var l=[],i=0;i<b.length;++i)l.push([i,b[i]]);return jQuery(".js-flot-live-info").html(t.toFixed(0)+"%"),l}function t(){g.setData([o()]),g.draw(),setTimeout(t,70)}var l=jQuery(".js-flot-lines"),i=jQuery(".js-flot-stacked"),e=jQuery(".js-flot-live"),a=jQuery(".js-flot-pie"),r=jQuery(".js-flot-bars"),s=[[1,2500],[2,2300],[3,3200],[4,2500],[5,4500],[6,2800],[7,3900],[8,3100],[9,4600],[10,3200],[11,4200],[12,5700]],n=[[1,1100],[2,700],[3,1300],[4,900],[5,1900],[6,950],[7,1700],[8,1250],[9,1800],[10,1300],[11,1750],[12,2900]],f=[[1,500],[4,390],[7,1e3],[10,600],[13,800],[16,1050],[19,1200],[22,750],[25,980],[28,900],[31,1350],[34,1200]],p=[[2,650],[5,600],[8,1400],[11,900],[14,1300],[17,1200],[20,1420],[23,1650],[26,1300],[29,1120],[32,1550],[35,1650]],d=[[1,"Jan"],[2,"Feb"],[3,"Mar"],[4,"Apr"],[5,"May"],[6,"Jun"],[7,"Jul"],[8,"Aug"],[9,"Sep"],[10,"Oct"],[11,"Nov"],[12,"Dec"]],c=[[2,"Jan"],[5,"Feb"],[8,"Mar"],[11,"Apr"],[14,"May"],[17,"Jun"],[20,"Jul"],[23,"Aug"],[26,"Sep"],[29,"Oct"],[32,"Nov"],[35,"Dec"]];jQuery.plot(l,[{label:"Earnings",data:s,lines:{show:!0,fill:!0,fillColor:{colors:[{opacity:.7},{opacity:.7}]}},points:{show:!0,radius:6}},{label:"Sales",data:n,lines:{show:!0,fill:!0,fillColor:{colors:[{opacity:.5},{opacity:.5}]}},points:{show:!0,radius:6}}],{colors:["#abe37d","#333333"],legend:{show:!0,position:"nw",backgroundOpacity:0},grid:{borderWidth:0,hoverable:!0,clickable:!0},yaxis:{tickColor:"#ffffff",ticks:3},xaxis:{ticks:d,tickColor:"#f5f5f5"}});var h=null,u=null;l.bind("plothover",function(o,t,l){if(l){if(h!==l.dataIndex){h=l.dataIndex,jQuery(".js-flot-tooltip").remove();var i=(l.datapoint[0],l.datapoint[1]);u=0===l.seriesIndex?"$ <strong>"+i+"</strong>":1===l.seriesIndex?"<strong>"+i+"</strong> sales":"<strong>"+i+"</strong> tickets",jQuery('<div class="js-flot-tooltip flot-tooltip">'+u+"</div>").css({top:l.pageY-45,left:l.pageX+5}).appendTo("body").show()}}else jQuery(".js-flot-tooltip").remove(),h=null}),jQuery.plot(i,[{label:"Sales",data:n},{label:"Earnings",data:s}],{colors:["#faad7d","#fadb7d"],series:{stack:!0,lines:{show:!0,fill:!0}},lines:{show:!0,lineWidth:0,fill:!0,fillColor:{colors:[{opacity:1},{opacity:1}]}},legend:{show:!0,position:"nw",sorted:!0,backgroundOpacity:0},grid:{borderWidth:0},yaxis:{tickColor:"#ffffff",ticks:3},xaxis:{ticks:d,tickColor:"#f5f5f5"}});var b=[],g=jQuery.plot(e,[{data:o()}],{series:{shadowSize:0},lines:{show:!0,lineWidth:2,fill:!0,fillColor:{colors:[{opacity:.2},{opacity:.2}]}},colors:["#75b0eb"],grid:{borderWidth:0,color:"#aaaaaa"},yaxis:{show:!0,min:0,max:110},xaxis:{show:!1}});t(),jQuery.plot(r,[{label:"Sales Before",data:f,bars:{show:!0,lineWidth:0,fillColor:{colors:[{opacity:1},{opacity:1}]}}},{label:"Sales After",data:p,bars:{show:!0,lineWidth:0,fillColor:{colors:[{opacity:1},{opacity:1}]}}}],{colors:["#faad7d","#fadb7d"],legend:{show:!0,position:"nw",backgroundOpacity:0},grid:{borderWidth:0},yaxis:{ticks:3,tickColor:"#f5f5f5"},xaxis:{ticks:c,tickColor:"#f5f5f5"}}),jQuery.plot(a,[{label:"Sales",data:22},{label:"Tickets",data:22},{label:"Earnings",data:56}],{colors:["#fadb7d","#75b0eb","#abe37d"],legend:{show:!1},series:{pie:{show:!0,radius:1,label:{show:!0,radius:2/3,formatter:function(o,t){return'<div class="flot-pie-label">'+o+"<br>"+Math.round(t.percent)+"%</div>"},background:{opacity:.75,color:"#000000"}}}}})};return{init:function(){o(),t(),i(),l()}}}();jQuery(function(){BaseCompCharts.init()});