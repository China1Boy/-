jQuery(document).ready(function(){jQuery(".btn-show-chat, .close-multi-panel").click(function(e){e.preventDefault(),jQuery("body").toggleClass("collapsed-alertbar"),jQuery(window).resize()}),jQuery(".show-hide-sidebar").click(function(e){e.preventDefault(),jQuery("body").toggleClass("collapsed-sidebar"),jQuery("body").hasClass("collapsed-sidebar")&&jQuery("#sidebar .nav-submenu").css("display","none")}),jQuery(":checkbox, :radio").labelauty({label:!1}),jQuery.fn.filestyle&&jQuery(":file").filestyle({icon:!1}),jQuery.fn.animsition&&jQuery(".animsition").animsition({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:500,linkElement:'a:not([target="_blank"]):not([href^=#])',loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animsition","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"}),jQuery.fn.slimScroll&&(jQuery("#sidebar .sidebar_scroll").slimScroll({width:"250px",height:"auto"}),jQuery(window).resize(function(){jQuery("#sidebar .sidebar_scroll").slimScroll({width:"250px",height:"auto"})}),jQuery(".message-widget .mailscroll").slimScroll({height:"340px"}),jQuery(".server-noti-scroll").slimScroll({height:"218px"}),jQuery("#multi-panel .slimscroll").slimScroll({height:"100%"})),jQuery('div[class|="col"]').each(function(){var e=jQuery(this);e.addClass("animateme").addClass("scrollme"),e.attr("data-when","enter"),e.attr("data-from","0.2"),e.attr("data-to","0"),e.attr("data-crop","false"),e.attr("data-opacity","0"),e.attr("data-scale","0.5")});var e=jQuery(window).width();e>=480&&jQuery(".row.same-height").each(function(){var e=jQuery(this),a=e.height();e.find('> div[class|="col"]').each(function(){var e=jQuery(this);e.height(a),e.find(".panel").each(function(){var e=jQuery(this);e.css({position:"absolute",bottom:"0px",top:"0px",left:"10px",right:"10px"})})})}),jQuery(".panel-heading-icons .panel-close").on("click",function(e){e.preventDefault();var a=jQuery(this);a.closest(".panel").fadeOut(300,function(){jQuery(this).remove()})}),jQuery(".panel-heading-icons .panel-toggle").on("click",function(e){e.preventDefault();var a=jQuery(this);a.closest(".panel").find(".panel-body").slideToggle()}),jQuery("#sidebar .nav#main-nav > li > ul").each(function(){var e=jQuery(this),a=e.parent(),r=a.find("> a");r.click(function(a){a.preventDefault();var t=jQuery(window).width();t>=768&&!jQuery("body").hasClass("collapsed-sidebar")&&(r.hasClass("active")||jQuery("#sidebar .nav a.active").removeClass("active").parent().find("> ul").slideToggle(),r.toggleClass("active"),e.slideToggle())}),e.find(".active_submenu").length>0&&r.click()});var e=jQuery(window).width();e>=990&&jQuery(".fix-on-scroll").each(function(){var e=jQuery(this),a=e.offset().top-80;jQuery(window).scroll(function(){if(jQuery(window).scrollTop()>a){var r=jQuery(window).scrollTop()-a;e.css("margin-top",r)}else e.css("margin-top","0px")})});var a=jQuery(window).height()/2;jQuery(window).scroll(function(){jQuery(window).scrollTop()>a?jQuery(".scroll-top").fadeIn():jQuery(".scroll-top").fadeOut()}),jQuery('[data-toggle="tooltip"]').tooltip(),jQuery(".example-popover").popover(),jQuery(".scroll-top").click(function(){jQuery(document).scrollTo(0,300)}),jQuery(".navbar-search-block .search-field").focus(function(e){e.preventDefault();var a=jQuery(".navbar-search-block").offset();a.top-=jQuery(window).scrollTop(),a.bottom-=jQuery(window).scrollTop(),jQuery(".navbar-search-block").attr("data-top")||(jQuery(".navbar-search-block").attr("data-top",a.top),jQuery(".navbar-search-block").attr("data-left",a.left),jQuery(".navbar-search-block").attr("data-width",jQuery(".navbar-search-block").width()+30),jQuery(".navbar-search-block").attr("data-height",jQuery(".navbar-search-block").height())),jQuery(".navbar-search-block").css({position:"fixed",top:a.top-10+"px",left:a.left+"px",bottom:a.bottom+"px",right:a.right+"px","z-index":9999}).animate({top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",margin:"0px"},300,function(){jQuery(".navbar-search-block:not(.open-search) .search-field").focus(),jQuery(".navbar-search-block .search-container, .navbar-search-block .search-close").fadeIn(300)}).addClass("open-search")}),jQuery(".navbar-search-block .search-close").click(function(e){e.preventDefault(),jQuery(".navbar-search-block .search-close").fadeOut(200),jQuery(".navbar-search-block .search-container").fadeOut(200,function(){jQuery(".navbar-search-block").animate({top:jQuery(".navbar-search-block").attr("data-top"),left:jQuery(".navbar-search-block").attr("data-left"),width:jQuery(".navbar-search-block").attr("data-width"),height:jQuery(".navbar-search-block").attr("data-height")},300,function(){jQuery(".navbar-search-block").css({position:"relative",left:"5px",top:"8px",margin:"0px 15px 0px 5px"})}).removeClass("open-search")})})});