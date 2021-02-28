
		var spacer_group, metal_d_ring, res_handle, hres_group, Hacky, FF_Handle, BOC, pinstripes_3, pinstripes_4, pinstripes_5, pinstripes_7,ColorMainStripe;
		var display_diagram = document.getElementById("diag_show_hide");
		var deployment_option = document.getElementById("main-release");
		var mainHolder, colorHolder;
		var btnClear, btnDownloadSVG, btnDownloadPNG;
		var svgObject, svgObject2, svgOutline, svgColor, svgURL;
		var svgrFlapDetailDocInit;
		var fillSpeed = 0.15;
		var chosenColor;
		var chosenColorLogo;
		var chosenColorStripe;
		var pointers_list = document.getElementsByTagName("path");
		var _color_name = '';
		var _color = '';
		var closeOffset;
		var trim = '';
		var logoClass;
		var has_detail_area = false;
		var svgDoc, flapSvgDoc, z;
		var mainSvgDocx = ' ';
		var pinstripeFirstRun = true;
		var transferStorage = localStorage;
		
		
		
		
		function display_spacer_foam(){
		var spacer_foam = document.getElementById("spacer_show_hide");
		if(spacer_foam.checked == true){
			spacer_group.setAttribute('visibility', 'visible');
		}else{
			spacer_group.setAttribute('visibility', 'hidden');
		}
	}
	function metal_d_ring_option(){
	var d_ring_option = document.getElementById("res_metal_dring");
		if(d_ring_option.checked == true){
			metal_d_ring.setAttribute('display', 'inline');
			hres_group.setAttribute('display', 'none');
		}else{
			metal_d_ring.setAttribute('display', 'none');
			hres_group.setAttribute('display', 'inline');
		}
	}
	
	function show_hide_labels(){
		var text_list = document.getElementsByTagName("text");
		var labels_option = document.getElementById('diag_show_hide');
			if(labels_option.checked == true){
			for(var text=0;text<text_list.length;text++){
				if(text_list[text].getAttribute("class") == 'labels'){
					$(text_list[text]).css("display", "none");
				}
			}
		}else{
			for(var text=0;text<text_list.length;text++){
				if(text_list[text].getAttribute("class") == 'labels'){
					$(text_list[text]).css("display", "block");
				}
			}
		}
	}
	
	
	function updateText(sender, detailTargetID,mainTargetID){
		var text = $(sender).val();
		var f = $("#rFlapDetail");
		var g = $("#mainDocx");
		if(!g){
			g = $("#wingsVision");
		}
		var textNodeMain = g.context.querySelector("#"+mainTargetID)
		var textNodeDetail = f.context.querySelector("#"+detailTargetID);
		textNodeDetail.textContent = text;
		textNodeMain.textContent = text;
	}
	
	
	function ColorDetailElement(mainID, docID){
		if(mainID == 'grp_6_detail_pinstripes_bottom'){
			return;
		}
		if(mainID == 'grp_2'){
				var detail_area_sw;
				var detail_area_rflap;
				var g;
				f = document.querySelector("#sidewallDetail");
				g = document.querySelector("#rFlapDetail");
				elem = f.getElementById("grp_2_sidewall_detail-fabric");
				elem.setAttribute("display","none");
				detail_area_sw = f.querySelector("#grp_2_sidewall_detail_path");
				detail_area_rflap = g.querySelector("#grp_2_detail_path");
				detail_area_sw.style.fill = chosenColor;
				detail_area_rflap.style.fill = chosenColor;
				transferStorage.setItem('grp_2_detail_path',chosenColor);
			}else{
				var f = document.querySelector("svg#"+docID);
				var fabric_elem = f.getElementById(mainID+'_detail-fabric');
				fabric_elem.setAttribute("display","none");
				var elem = f.getElementById(mainID+'_detail_path');
				elem.style.fill = chosenColor;
				transferStorage.setItem(mainID+'_detail_path', chosenColor);
			}
	}
	function colorPinstripe(stripe, stripeID){
		stripe.style.fill = chosenColorStripe;
		g = $("#rFlapDetail");
		f = $("#mainDocx");
		if(!f){
			f = $("#wingsVision");
		}
		var tmp = stripeID;
		var mainStripe = tmp.replace('_detail', "");
		ColorMainStripe = document.querySelector("#"+mainStripe);
		ColorMainStripe.style.fill = chosenColorStripe;
		transferStorage.setItem(stripeID,chosenColorStripe);
		transferStorage.setItem(mainStripe,chosenColorStripe);
	}
	function colorHacky(area, areaID){
		area.style.fill = chosenColor;
		transferStorage.setItem(areaID, chosenColor);
	}
	function colorFF(area, areaID){
		area.style.fill = chosenColor;
		transferStorage.setItem(areaID, chosenColor);
	}
	$('.nav-tabs a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
		chosenColor = '#ffffff';
	})
	
	
	function mainReleaseOption(ID){
		switch(ID){
			case "BOC":
				transferStorage.setItem('mainRelease', 'BOC');
				BOC.setAttribute("display", "inline");
				FF_Handle.setAttribute("display","none");
				Hacky.setAttribute("display","none");
				break;
			case "freeFly":
				transferStorage.setItem('mainRelease', 'freeFly');
				BOC.setAttribute("display", "none");
				FF_Handle.setAttribute("display","inline");
				Hacky.setAttribute("display","none");
				break;
			case "hacky":
				transferStorage.setItem('mainRelease', 'hacky');
				BOC.setAttribute("display", "none");
				FF_Handle.setAttribute("display","none");
				Hacky.setAttribute("display","inline");
				break;
		}
	}


	var colors = [
	cordura = [
		{catName: "Cordura"},
		{color:'White', cValue:'#ffffff'},
		{color:'Medium Blue', cValue:'#5b80f0'},
		{color:'Neon Green', cValue:'#5bc762'},
		{color:'Red', cValue:'#b00002 '},
		{color:'Silver', cValue:'#adafbc '},
		{color:'Teal', cValue:'#22a1af'},
		{color:'Neon Yellow', cValue:'#e3ff46'},
		{color:'Burgundy', cValue:'#91323e'},
		{color:'Dark Grey', cValue:'#494b51'},
		{color:'Jade', cValue:'#006b56'},
		{color:'Yellow', cValue:'#f0d202'},
		{color:'Purple', cValue:'#4f2468'},
		{color:'Black', cValue:'#000000'},
		{color:'Olive Drab', cValue:'#56562e'},
		{color:'Gold', cValue:'#ddbd2c'},
		{color:'Pink', cValue:'#ffced6'},
		{color:'Navy Blue', cValue:'#1e254e'},
		{color:'Forest Green', cValue:'#3c5b52'},
		{color:'Orange', cValue:'#e86f16'},
		{color:'Fuschia', cValue:'#c0085d'},
		{color:'Royal Blue', cValue:'#2e49bd'},
		{color:'Kelly Green', cValue:'#2e7d51'},
		{color:'Neon Orange', cValue:'#ff4600'},
		{color:'Neon Pink', cValue:'#f91061'},
		{color:'Woodland Camo', cValue:'url(#woodland_camo)', link:'url("http://skydivewings.com/wp-content/uploads/camo/color_woodland_camo-150x150.jpg")'},
		{color:'Desert Camo', cValue:'url(#desert_camo)', link:'url("http://skydivewings.com/wp-content/uploads/camo/color_desert_camo-150x150.jpg")'},
		{color:'Digital Camo', cValue:'url(#digital_camo)', link:'url("http://skydivewings.com/wp-content/uploads/camo/color_digital_camo-150x150.jpg")'},
		{color:'Multi Camo', cValue:'url(#multi_camo)', link:'url("http://skydivewings.com/wp-content/uploads/camo/color_multi_cam-150x150.jpg")'},
		{color:'Desert Marshall', cValue:'url(#desert_marshall_camo)', link:'url("http://skydivewings.com/wp-content/uploads/camo/desert_marshall-150x150.jpg")'},

	],
	parapack = [
		{catName: "Parapack"},
		{color:'White', cValue:'#ffffff'},
		{color:'Light Blue', cValue:'#5797c6'},
		{color:'Burgundy', cValue:'#91323e'},
		{color:'Silver', cValue:'#adafbc'},
		{color:'Teal', cValue:'#22a1af'},
		{color:'Jade', cValue:'#006b56'},
		{color:'Dark Grey', cValue:'#494b51'},
		{color:'Black', cValue:'#000000'},
		{color:'Yellow', cValue:'#f0d202'},
		{color:'Royal Blue', cValue:'#2e49bd'},
		{color:'Neon Orange', cValue:'#ff4600'},
		{color:'Electric Blue', cValue:'#195eb9'},
		{color:'Red', cValue:'#b00002 '}
	],
	tie_dye = [
		{catName: "Tie Dye"},
		{color:'Black on Dark Gray', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Dark_Gray_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Dark_Gray_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Dark_Gray_x150.jpg")'},
		{color:'Black on Jade', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Jade_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Jade_15x45.png")', chosenColorLink: 'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Jade_x150.jpg")'},
		{color:'Black on Kelly', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Kelly_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Kelly_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Kelly_x150.jpg")'},
		{color:'Black on Medium Blue', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Medium_Blue_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Medium_Blue_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Medium_Blue_x150.jpg")'},
		{color:'Black on Purple', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Purple_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Purple_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Purple_x150.jpg")'},
		{color:'Black on Red', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Red_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Red_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Red_x150.jpg")'},
		{color:'Black on Royal', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Royal_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Royal_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Royal_x150.jpg")'},
		{color:'Black on Teal', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Teal_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Teal_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Black_on_Teal_x150.jpg")'},
		{color:'Dark Gray on Silver', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_Silver_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_Silver_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_Silver_x150.jpg")'},
		{color:'Dark Gray on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Dark_Gray_on_White_x150.jpg")'},
		{color:'Jade on Lavender', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_Lavender_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_Lavender_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_Lavender_x150.jpg")'},
		{color:'Jade on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Jade_on_White_x150.jpg")'},
		{color:'Lavender on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Lavender_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Lavender_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Lavender_on_White_x150.jpg")'},
		{color:'Magenta on Silver', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_Silver_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_Silver_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_Silver_x150.jpg")'},
		{color:'Magenta on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Magenta_on_White_x150.jpg")'},
		{color:'Navy on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Navy_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Navy_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Navy_on_White_x150.jpg")'},
		{color:'Purple on Silver', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Silver_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Silver_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Silver_x150.jpg")'},
		{color:'Purple on Teal', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Teal_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Teal_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_Teal_x150.jpg")'},
		{color:'Purple on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Purple_on_White_x150.jpg")'},
		{color:'Red on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_White_x150.jpg")'},
		{color:'Red on Yellow', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_Yellow_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_Yellow_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Red_on_Yellow_x150.jpg")'},
		{color:'Royal on Kelly', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Kelly_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Kelly_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Kelly_x150.jpg")'},
		{color:'Royal on Medium Blue', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Medium_Blue_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Medium_Blue_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Medium_Blue_x150.jpg")'},
		{color:'Royal on Neon Green', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Neon_Green_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Neon_Green_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Neon_Green_x150.jpg")'},
		{color:'Royal on Silver', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Silver_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Silver_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Silver_x150.jpg")'},
		{color:'Royal on Teal', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Teal_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Teal_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Teal_x150.jpg")'},
		{color:'Royal on White', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_White_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_White_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_White_x150.jpg")'},
		{color:'Royal on Yellow', cValue:'http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Yellow_x480.jpg', link:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Yellow_15x45.png")', chosenColorLink:'url("http://skydivewings.com/wp-content/uploads/tie-dye/Royal_on_Yellow_x150.jpg")'},
	],
	harness = [
		{catName: "Harness"},
		{color:'White', cValue:'#ffffff'},
		{color:'Red', cValue:'#b00002 '},
		{color:'Silver', cValue:'#adafbc'},
		{color:'Olive Drab', cValue:'#56562e'},
		{color:'Purple', cValue:'#4f2468'},
		{color:'Dark Grey', cValue:'#494b51'},
		{color:'Kelly Green', cValue:'#2e7d51'},
		{color:'Black', cValue:'#000000'},
		{color:'Yellow', cValue:'#f0d202'},
		{color:'Navy Blue', cValue:'#1e254e'},
		{color:'Gold', cValue:'#ddbd2c'},
		{color:'Royal Blue', cValue:'#2e49bd'},
		{color:'Jade', cValue:'#006b56'},
		{color:'Orange', cValue:'#e86f16'}
	],
	binding_tape = [
		{catName: "Binding Tape"},
		{color:'Black', cValue:'#ffffff'},
		{color:'Florescent Turquoise', cValue:'#06bab1'},
		{color:'Kelly Green', cValue:'#2e7d51'},
		{color:'Jade', cValue:'#006b56'},
		{color:'Burgundy', cValue:'#91323e'},
		{color:'Neon Orange', cValue:'#ff4600'},
		{color:'Fuschia', cValue:'#c0085d'},
		{color:'Silver', cValue:'#adafbc'},
		{color:'Medium Blue', cValue:'#5b80f0'},
		{color:'Neon Green', cValue:'#5bc762'},
		{color:'Red', cValue:'#b00002 '},
		{color:'Neon Pink', cValue:'#f91061'},
		{color:'Dark Grey', cValue:'#494b51'},
		{color:'Teal', cValue:'#22a1af'},
		{color:'Neon Yellow', cValue:'#e3ff46'},
		{color:'Black', cValue:'#000000'},
		{color:'Yellow', cValue:'#f0d202'},
		{color:'Purple', cValue:'#4f2468'},
		{color:'Navy Blue', cValue:'#1e254e'},
		{color:'Olive Drab', cValue:'#56562e'},
		{color:'Gold', cValue:'#ddbd2c'},
		{color:'Lavender', cValue:'#9e78c1'},
		{color:'Royal Blue', cValue:'#2e49bd'},
		{color:'Forest Green', cValue:'#3c5b52'},
		{color:'Orange', cValue:'#e86f16'},
		{color:'Pink', cValue:'#ffced6'}
	],
	logos = [
		{catName: "Logos"},
		{color:'White', cValue:'#ffffff'},
		{color:'Medium Blue', cValue:'#5b80f0'},
		{color:'Neon Green', cValue:'#5bc762'},
		{color:'Red', cValue:'#b00002 '},
		{color:'Silver', cValue:'#adafbc '},
		{color:'Teal', cValue:'#22a1af'},
		{color:'Neon Yellow', cValue:'#e3ff46'},
		{color:'Burgundy', cValue:'#91323e'},
		{color:'Dark Grey', cValue:'#494b51'},
		{color:'Jade', cValue:'#006b56'},
		{color:'Yellow', cValue:'#f0d202'},
		{color:'Purple', cValue:'#4f2468'},
		{color:'Black', cValue:'#000000'},
		{color:'Olive Drab', cValue:'#56562e'},
		{color:'Gold', cValue:'#ddbd2c'},
		{color:'Pink', cValue:'#ffced6'},
		{color:'Navy Blue', cValue:'#1e254e'},
		{color:'Forest Green', cValue:'#3c5b52'},
		{color:'Orange', cValue:'#e86f16'},
		{color:'Fuschia', cValue:'#c0085d'},
		{color:'Royal Blue', cValue:'#2e49bd'},
		{color:'Kelly Green', cValue:'#2e7d51'},
		{color:'Neon Orange', cValue:'#ff4600'},
		{color:'Neon Pink', cValue:'#f91061'},
		{color:'Florescent Turquoise', cValue:'#07f2f1'},
		{color:'Lavender', cValue:'#9e78c1'}
	]
	];
	
	var min = 10;
	var max = 120;
	function randomRotation(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	
	function showPinstripes(){
		var pinstripe_option = document.getElementById("add-pinstripes");
		var f = document.querySelector("#rFlapDetail");
		var g = document.querySelector("#sidewallDetail");
		//console.log("F: "+f);
		var grp7DetailPinstripes = g.querySelector("#grp_7_detail_pinstripes");
		var grp6DetailPinstripes = f.querySelector("#grp_6_detail_pinstripes");
		var grp5DetailPinstripes = f.querySelector("#grp_5_detail_pinstripes");
		var grp4DetailPinstripes = f.querySelector("#grp_4_detail_pinstripes");
		var grp3DetailPinstripes = f.querySelector("#grp_3_detail_pinstripes");
		var pinstripeInstruction = document.getElementById("pinstripe-instruction");
		var rFlapStripeRadio = document.getElementById("rFlapPinstripeRadio");
		var sidewallStripeRadio = document.getElementById("sidewallPinstripeRadio");
		if(pinstripe_option.checked==true){
			pinstripes_3.setAttribute("display","inline");
			pinstripes_4.setAttribute("display","inline")
			pinstripes_5.setAttribute("display","inline");
			pinstripes_6.setAttribute("display","inline");
			pinstripes_7.setAttribute("display","inline");
			grp3DetailPinstripes.setAttribute("display","inline");
			grp4DetailPinstripes.setAttribute("display","inline");
			grp5DetailPinstripes.setAttribute("display","inline");
			grp6DetailPinstripes.setAttribute("display","inline");
			grp7DetailPinstripes.setAttribute("display","inline");
			pinstripeInstruction.style.display="inline";
			if(rFlapStripeRadio.checked == true || sidewallStripeRadio.checked == true){
				unlockPinstripes();
			}else{
				lockPinstripes();
			}
		}else{
			pinstripes_3.setAttribute("display","none");
			pinstripes_4.setAttribute("display","none");
			pinstripes_5.setAttribute("display","none");
			pinstripes_6.setAttribute("display","none");
			pinstripes_7.setAttribute("display","none");
			grp3DetailPinstripes.setAttribute("display","none");
			grp4DetailPinstripes.setAttribute("display","none");
			grp5DetailPinstripes.setAttribute("display","none");
			grp6DetailPinstripes.setAttribute("display","none");
			grp7DetailPinstripes.setAttribute("display","none");
			lockPinstripes();
		}
	}
		
	
	function unlockPinstripes(){
		var f = document.getElementById("rFlapDetail");
		var h = document.getElementById("sidewallDetail");
		var g = $("#mainDocx");
		if(!g){
			g = $("#wingsVision");
		}
		var sidewallPinstripes = h.querySelectorAll(".pinstripe");
		var mainDocx = g.context.querySelectorAll("path:not(.pinstripe):not(.no-clear), polygon:not(.pinstripe)");
		for(i=0;i<mainDocx.length;i++){
			$(mainDocx[i]).css("pointer-events","none");
		}
		var not_pinstripes = f.querySelectorAll("path:not(.pinstripe):not(.no-clear), polygon:not(.pinstripe)");
		var pinstripes = f.querySelectorAll(".pinstripe");
		for(var i=0;i<not_pinstripes.length;i++){
			$(not_pinstripes[i]).css("pointer-events","none");
		}
		for(i=0;i<pinstripes.length;i++){
			$(pinstripes[i]).css("pointer-events","auto");
		}
		for(i=0;i<sidewallPinstripes.length;i++){
			$(sidewallPinstripes[i]).css("pointer-events","auto");
		}
	}
	function lockPinstripes(){
		var f = document.getElementById("rFlapDetail");
		var h = document.getElementById("sidewallDetail");
		var g = $("#mainDocx");
		if(!g){
			g = $("#wingsVision");
		}
		var not_pinstripes = f.querySelectorAll("path:not(.pinstripe):not(.no-clear), polygon:not(.pinstripe)");
		var pinstripes = f.querySelectorAll(".pinstripe");
		var sidewallPinstripes = h.querySelectorAll(".pinstripe");
		for(var i=0;i<not_pinstripes.length;i++){
			$(not_pinstripes[i]).css("pointer-events","auto");
		}
		for(i=0;i<pinstripes.length;i++){
			$(pinstripes[i]).css("pointer-events","none");
		}
		for(i=0;i<sidewallPinstripes.length;i++){
			$(sidewallPinstripes[i]).css("pointer-events","none");
		}
	}
	function makePinstripeColors(){
		var stripeColorsList = $('#stripe_colors ul');
		for(i in colors[0]){
			var current_color_hex = colors[0][i].cValue;
			var stripeSwatch = $('<li/>').appendTo(stripeColorsList);
			$(stripeSwatch).css('background-color', current_color_hex);
			$(stripeSwatch).data('color', current_color_hex);
			$(stripeSwatch).on('click', stripeSwatchClick);
			$(stripeSwatch).on('mouseenter mouseleave', colorRollover);
		}
		$(stripeColorsList).append('</ul>');
		$('.current_logo_color').css("background-color", "#000");
		
	}
	function makeSidewallPinstripeColors(){
		var stripeColorsList = $('#stripe_colors_sidewall ul');
		var i=1;
		for(i=1;i<colors[0].length;i++){
			var current_color_hex = colors[0][i].cValue;
			var stripeSwatch = $('<li/>').appendTo(stripeColorsList);
			$(stripeSwatch).css('background-color', current_color_hex);
			$(stripeSwatch).data('color', current_color_hex);
			$(stripeSwatch).on('click', stripeSwatchClick);
			$(stripeSwatch).on('mouseenter mouseleave', colorRollover);
		}
		$(stripeColorsList).append('</ul>');
		$('.current_logo_color').css("background-color", "#000");
		
	}
	
	function displayPinstripeColors(){
		var rFlapBox = document.getElementById("rFlapPinstripeRadio");
		var rFlapLogoRadio_ = document.getElementById("rFlapLogoRadio");
		var rFlapTextRadio_ = document.getElementById("rFlapTextRadio");
		var mainPinstripeOptionBox = document.getElementById("add-pinstripes");
	
		var f = $("#sidewallDetail");
		if(rFlapBox.checked){
			if(!mainPinstripeOptionBox.checked){
				mainPinstripeOptionBox.click();
			}
			
			$("#resFlapTextAreaInput").css("display","none");
			$("#rFlapTextForm").css("display","none");
			var colors_title = document.getElementById("rFlapTitle");
			$('.logo_colors').css("display","none");
			$('#stripe_colors').css("display","block");
			colors_title.innerHTML = "Pinstripe Colors";
			unlockPinstripes();
			if(pinstripeFirstRun){
				$('.current_logo_color').css("background-color", "#fff");
				document.querySelector('span.current_logo_color').innerHTML = "White";
				pinstripeFirstRun = false;
			}else{
				$('.current_logo_color').css("background-color", chosenColorStripe);
				document.querySelector('span.current_logo_color').innerHTML = findColorName(chosenColorStripe);
			}
		}else{
			
			LogoOrText('rFlap','resFlapTextAreaInput', 'resFlapTextArea','resFlapTextAreaDetail','rFlapTextForm','r_flap_logo','rFlapTitle');
		}
		
		
	}
	function displaySidewallPinstripeColors(){
		var LsidewallLogoRadio_ = document.getElementById("leftSidewallLogo_");
		var LsidewallTextRadio_ = document.getElementById("leftSidewallText_");
		var RsidewallLogoRadio_ = document.getElementById("rightSidewallLogo_");
		var RsidewallTextRadio_ = document.getElementById("rightSidewallText_");
		var rFlapTextRadio_ = document.getElementById("rFlapTextRadio");
		var swPinstripeBox = document.getElementById("sidewallPinstripeRadio");
		var colors_title = document.getElementById("sidewallsTitle");
		var mainPinstripeOptionBox = document.getElementById("add-pinstripes");
		var currentLogoColorSpan = document.querySelector('#logo_colors_03 span.current_logo_color');
		
		colors_title.innerHTML = "Pinstripe Colors";
		if(swPinstripeBox.checked){
			if(!mainPinstripeOptionBox.checked){
				mainPinstripeOptionBox.click();
			}
			
				$("#rightSidewallTextAreaInput").css("display","none");
				$("#leftSidewallTextAreaInput").css("display","none");
				$('#logo_colors_03 .logo_colors').css("display","none");
				$('#stripe_colors_sidewall').css("display","block");
				unlockPinstripes();
				var currentPinstripeColorSW = chosenColorStripe;
				if(!currentPinstripeColorSW){
					$('.current_logo_color').css("background-color", '#fff');
					currentLogoColorSpan.innerHTML = "White";
					currentLogoColorSpan.style.color="#ccc";
				}else{
					$('.current_logo_color').css("background-color", currentPinstripeColorSW);
					currentLogoColorSpan.innerHTML = findColorName(currentPinstripeColorSW);
				}
		}else{
			
			$("#rightSidewallTextAreaInput").css("display","block");
			$("#leftSidewallTextAreaInput").css("display","block");
			$('#logo_colors_03 .logo_colors').css("display","block");
			$('#stripe_colors_sidewall').css("display","none");
			unlockPinstripes();
			if(LsidewallLogoRadio_.checked){
				sidewallLogo('sidewall_left','sidewallLeftText','sidewallsTitle','sidewallLeftTextArea','sidewallLeftTextAreaDetail','leftSidewallTextAreaInput');
			}
			if(LsidewallTextRadio_.checked){
				sidewallText('LsidewallLogo_Text', 'sidewallLeftText','sidewall_left','sidewallLeftTextArea','sidewallLeftTextAreaDetail','sidewallsTitle','leftSidewallTextAreaInput');
			}
			if(RsidewallLogoRadio_.checked){
				sidewallLogo('sidewall_right','sidewallRightText','sidewallsTitle','sidewallRightTextArea','sidewallRightTextAreaDetail','rightSidewallTextAreaInput');
			}
			if(RsidewallTextRadio_.checked){
				sidewallText('RsidewallLogo_Text','sidewallRightText','sidewall_right','sidewallRightTextArea','sidewallRightTextAreaDetail','sidewallsTitle','rightSidewallTextAreaInput');
			}
		}
	}
	function makeLogoSwatchesRingCover(){
		var logoColorsList = $('#logo_colors_02  ul');
		for(i in colors[5]){
			var current_color_hex = colors[5][i].cValue;
			var logoSwatch = $('<li/>').appendTo(logoColorsList);
			$(logoSwatch).css('background-color', current_color_hex);
			$(logoSwatch).data('color', current_color_hex);
			$(logoSwatch).on('click', logoSwatchClickRingCover);
			$(logoSwatch).on('mouseenter mouseleave', colorRollover);
		}
		$(logoColorsList).append('</ul>');
		$('.current_logo_color').css("background-color", "#000");

	}

	function makeLogoSwatchesRFlap(){
	var logoColorsList = $('#logo_colors_01 .logo_colors  ul');
	var i = 1;
	for(i in colors[5]){
		var current_color_hex = colors[5][i].cValue;
		var logoSwatch = $('<li/>').appendTo(logoColorsList);
		$(logoSwatch).css('background-color', current_color_hex);
		$(logoSwatch).data('color', current_color_hex);
		$(logoSwatch).on('click', logoSwatchClickRFlap);
		$(logoSwatch).on('mouseenter mouseleave', colorRollover);
		}
		$(logoColorsList).append('</ul>');
		$('.current_logo_color').css("background-color", "#000");
		//$('.current_logo_color').append("Black");

	}


	function makeLogoSwatchesSidewall(){
		var logoColorsList = $('#logo_colors_03  .logo_colors ul');
		var i = 1;
		for(i in colors[5]){
			var current_color_hex = colors[5][i].cValue;
			var logoSwatch = $('<li/>').appendTo(logoColorsList);
			$(logoSwatch).css('background-color', current_color_hex);
			$(logoSwatch).data('color', current_color_hex);
			$(logoSwatch).on('click', logoSwatchClickSidewall);
			$(logoSwatch).on('mouseenter mouseleave', colorRollover);
			}
			$(logoColorsList).append('</ul>');
			$('.current_logo_color').css("background-color", "#000");
			$('.current_logo_color').append("Black");

	}
	function changeText(name, txtArea, txtAreaDetail,txtAreaDetailText){
		var textSelection = $('input[name="'+name+'"]:checked').val();
		console.log("Function start <name>: "+name);
		console.log("Function start <textSelections>: "+textSelection);
		switch(name){
			case 'rFlapText':
				var f = $("#rFlapDetail");
				break;
			case 'ringCoverText':
				var f = $("#ringCover");
				break;
			default:
				var f = $("#sidewallDetail");
				break;
		}
		var g = $("#mainDocx");
		if(!g){
			g = $("#wingsVision");
		}
		var textAreaText = g.context.querySelectorAll("#"+txtArea+" text");
		var textArea = g.context.querySelector("#"+txtArea);
		var textAreaDetailText = f.context.querySelectorAll("#"+txtAreaDetail+" text");
		var textAreaDetail = f.context.querySelectorAll("#"+txtAreaDetail);
		var i;
		if(textSelection == 'standard'){
		
			if(name=='sidewallRightTextChoice' || name=='sidewallLeftTextChoice'){
				textAreaText = g.context.querySelectorAll("#"+txtArea+" text");
				textArea = g.context.querySelector("#"+txtArea+" text");
				textAreaDetail = f.context.querySelector("#"+txtAreaDetail+" text");
				textAreaDetail.setAttribute("font-family","Russo One");
				textArea.setAttribute("font-family","Russo One");
				//textAreaText.style.fontWeight='normal';
				textAreaDetail.style.fontWeight='normal';
				textArea.style.fontSize='1em';
				textAreaDetail.style.fontSize='1em';
				textArea.style.fontWeight="normal";
				if(name=='sidewallRightTextChoice'){
					textArea.setAttribute("transform","matrix(1 0 0 -1 0 15)");
					textAreaDetail.setAttribute("transform","matrix(1 0 0 -1 0 43) rotate(2)");
				}else{
					textArea.setAttribute("transform","matrix(1 0 0 -1 10 25)");
				}
				
			}else{
				for(i=0;i<textAreaDetailText.length;i++){
					textAreaDetailText[i].setAttribute('font-family','Russo One');
				}
				for(i=0;i<textAreaText.length;i++){
					textAreaText[i].setAttribute('font-family','Russo One');
				}
				switch(name){
					case 'rFlapText':
						textArea.style.marginLeft='10px';
						textArea.style.fontSize='1em';
						for(i=0;i<textAreaDetailText.length;i++){
							textAreaDetailText[i].style.fontSize="1.4em";
							textAreaDetailText[i].style.fontWeight="normal";
						}
						for(i=0;i<textAreaText.length;i++){
							textAreaText[i].style.fontSize="1em";
							textAreaText[i].style.fontWeight="normal";
						}

						break;
					case 'ringCoverText':
					for(i=0;i<textAreaDetailText.length;i++){
							textAreaDetailText[i].style.fontSize="1em";
							textAreaDetailText[i].style.fontWeight="normal";
						}
						for(i=0;i<textAreaText.length;i++){
							textAreaText[i].style.fontSize="1em";
							textAreaText[i].style.fontWeight="bold";
						}
						break;
					
				}
			}
			

		}
		if(textSelection == 'script'){
			textAreaText = g.context.querySelectorAll("#"+txtArea+" text");
			textArea = g.context.querySelector("#"+txtArea+" text");
			textAreaDetail = f.context.querySelector("#"+txtAreaDetail+" text");
			textAreaDetail.setAttribute("font-family", "brush-script-std");
			textArea.setAttribute("font-family","brush-script-std");
			if(name=='sidewallRightTextChoice' || name=='sidewallLeftTextChoice'){
				textArea.style.fontSize='1.3em';
				if(name=='sidewallRightTextChoice'){
					textAreaDetail.setAttribute("transform","matrix(1 0 0 -1 0 47) rotate(2)");
					textArea.setAttribute("transform","matrix(1 0 0 -1 -20 10)");
				}else{
					textArea.setAttribute("transform","matrix(1 0 0 -1 30 25)");
					//textAreaDetail.setAttribute("transform","matrix(1 0 0 -1 0 47)");
				}
				//textArea.style.fontWeight='bold';
				//textAreaDetail.style.fontWeight='bold';
				textAreaDetail.style.fontSize="1.5em";
				
			}else{
				for(i=0;i<textAreaDetailText.length;i++){
				textAreaDetailText[i].setAttribute('font-family','brush-script-std');
			}
				for(i=0;i<textAreaText.length;i++){
					textAreaText[i].setAttribute('font-family','brush-script-std');
			}
			
			switch(name){
				case 'rFlapText':
					for(i=0;i<textAreaDetailText.length;i++){
						textAreaDetailText[i].style.fontSize="2.5em";
						//textAreaDetailText[i].style.fontWeight="bold";
					}
					for(i=0;i<textAreaText.length;i++){
						textAreaText[i].style.fontSize="1.4em";
						//textAreaText[i].style.fontWeight="bold";
					}
					textAreaText[0].setAttribute("transform","matrix(1 0 0 -1 0 38)");
					textAreaText[1].setAttribute("transform","matrix(1 0 0 -1 0 17)");
					//textAreaDetailText[2].setAttribute("transform","matrix(1 0 0 -1 0 -152)");
					
					break;
				case 'ringCoverText':
					textArea.style.fontSize='1.4em';
						for(i=0;i<textAreaDetailText.length;i++){
						textAreaDetailText[i].style.fontSize="1.8em";
						//textAreaDetailText[i].style.fontWeight="bold";
					}
					for(i=0;i<textAreaText.length;i++){
							textAreaText[i].style.fontSize="1.4em";
							//textAreaText[i].style.fontWeight="bold";
						}
					break;
			}
			}
			


		}
	}
	function sidewallLeftOrRight(name){
		var colors_title = document.getElementById("sidewallsTitle");
		var pinstripeColors = document.querySelector("#logo_colors_03 #stripe_colors_sidewall");
		var sidewallLogoColors = document.querySelector("#logo_colors_03 .logo_colors");
		var currentLogoRight = document.getElementById("right_side_logo");
		var currentLogoLeft = document.getElementById("left_side_logo");
		var sidewallSelection = $('input[name="sidewall"]:checked').val();
		var textSelectionCheck = $('input[name="'+name+'"]:checked').val();
		var leftSideText = document.getElementById("sidewallLeftText");
		var rightSideText = document.getElementById("sidewallRightText");
		var leftInputTable = document.getElementById("leftSidewallTextAreaInput");
		var rightInputTable = document.getElementById("rightSidewallTextAreaInput");
		var sidewallDetail_ = document.getElementById("sidewallDetail");
		var currentLogoColorSpan = document.querySelector('#logo_colors_03 .current_logo_color');
		
		pinstripeColors.style.display="none";
		sidewallLogoColors.style.display="block";
		
		
		if(sidewallSelection == 'left'){
			var currentLogoColorLeft = currentLogoLeft.getAttribute('fill');
			if(!currentLogoColorLeft){
				$('.current_logo_color').css("background-color", '#000');
				currentLogoColorSpan.innerHTML = "Black";
			}else{
				$('.current_logo_color').css("background-color", currentLogoColorLeft);
				currentLogoColorSpan.innerHTML = findColorName(currentLogoColorLeft);
			}
			sidewallNestRight.style.display='none';
			sidewallNestLeft.style.display='block';
			if(textSelectionCheck == 'text'){
				leftSideText.style.display='block';
				leftInputTable.style.display="block";
				colors_title.innerHTML="Text Colors";
			}else{
				leftSideText.style.display='none';
				leftInputTable.style.display="none";
				colors_title.innerHTML="Logo Colors";
			}
			rightSideText.style.display='none';
			rightInputTable.style.display='none';
		}else{
			var currentLogoColorRight = currentLogoRight.getAttribute('fill');
			if(!currentLogoColorRight){
				$('.current_logo_color').css("background-color", '#000');
				currentLogoColorSpan.innerHTML = "Black";
			}else{
				$('.current_logo_color').css("background-color", currentLogoColorRight);
				currentLogoColorSpan.innerHTML = findColorName(currentLogoColorRight);
			}
			sidewallNestRight.style.display='block';
			sidewallNestLeft.style.display='none';
			if(textSelectionCheck == 'text'){
				rightSideText.style.display='block';
				rightInputTable.style.display='block';
				colors_title.innerHTML="Text Colors";
			}else{
				rightSideText.style.display='none';
				rightInputTable.style.display='none';
				colors_title.innerHTML="Logo Colors";
			}
			leftSideText.style.display='none';
			leftInputTable.style.display='none'
		}
	}
	function sidewallText(name,sidewallTextTarget,targetLogoClass,txtArea,txtAreaDetail,titleID,inputTableID){
		var sidewallSelection = $('input[name="'+name+'"]:checked').val();
		var sidewallTextSelection = document.getElementById(sidewallTextTarget);
		var inputTable = document.getElementById(inputTableID);
		var colors_title = document.getElementById(titleID);
		var f = $("#mainDocx");
		if(!f){
			f = $("#wingsVision");
		}
		var textArea = f.context.getElementById(txtArea);
		var textAreaDetail = document.getElementById(txtAreaDetail);
		
		console.log(inputTable);

		if(sidewallSelection == 'text'){
			sidewallTextSelection.style.display = 'block';
			var pieces = document.querySelectorAll('.'+targetLogoClass);
			for(var a=0;a<pieces.length;a++){
				pieces[a].style.display="none";
			}
			colors_title.innerHTML = "Text Colors";
			textArea.style.display="block";
			textAreaDetail.style.display="block";
			inputTable.style.display="block";
		}
	}
	function sidewallLogo(targetLogoClass,sidewallTextTarget,titleID,txtArea,txtAreaDetail,inputTableID){
		var sidewallTextSelection = document.getElementById(sidewallTextTarget);
		var colors_title = document.getElementById(titleID);
		var textArea = document.getElementById(txtArea);
		var textAreaDetail = document.getElementById(txtAreaDetail);
		var inputTable = document.getElementById(inputTableID);
		var pieces = document.querySelectorAll('.'+targetLogoClass);
		colors_title.innerHTML = "Logo Colors";
		sidewallTextSelection.style.display = 'none';
		textArea.style.display="none";
		inputTable.style.display="none";
		textAreaDetail.style.display="none";
		for(var a=0;a<pieces.length;a++){
			pieces[a].style.display="block";
		}
	}
	function LogoOrText(name,txtAreaInput, txtArea,txtAreaDetail,scriptOrBlockID,targetLogoClass,titleID){
		var selection = $('input[name="'+name+'"]:checked').val();
		var textAreaInput = document.querySelector("#"+txtAreaInput);
		if(name == 'rFlap'){
			var f = $("#rFlapDetail");
		}
		if(name == 'ringCover'){
			var f = $("#ringCoverDetail");
		}
		var g = $("#mainDocx");
		if(!g){
			g = $("#wingsVision");
		}
		var textArea = g.context.querySelector("#"+txtArea);
		var textAreaDetail =  f.context.getElementById(txtAreaDetail);
		var scriptOrBlockRadios = document.getElementById(scriptOrBlockID);
		var colors_title = document.getElementById(titleID);
		lockPinstripes();
		$("#stripe_colors").css("display","none");
		$("#logo_colors_01 .logo_colors").css("display","block");
		if(selection == 'text'){
			var pieces = document.querySelectorAll('.'+targetLogoClass);
			for(var a=0;a<pieces.length;a++){
				pieces[a].style.display="none";
			}
			colors_title.innerHTML = "Text Colors";
			textArea.setAttribute("display", "inline");
			textAreaInput.style.display="block";
			textAreaDetail.style.display="block";
			scriptOrBlockRadios.style.display="block";
		}
		if(selection == 'logo'){
			var pieces = document.querySelectorAll('.'+targetLogoClass);
			for(var a=0;a<pieces.length;a++){
				pieces[a].style.display="block";
			}
			colors_title.innerHTML = "Logo Colors";
			textArea.setAttribute("display","none");
			textAreaInput.style.display="none";
			textAreaDetail.style.display="none";
			scriptOrBlockRadios.style.display="none";
		}
	}


		//curLogoColor.empty();
		//chosenColor = $(this).data('color');
		//curLogoColor.css("background-color", chosenColor);
		//_color_name = findColorName(chosenColor);
		//$(curLogoColor).append(_color_name);
	
	function stripeSwatchClick(){
		var rFlapDetail = document.getElementById("holder_0");
		var sidewallDetail = document.getElementById("holder_2");
		if(rFlapDetail.getAttribute('class') == 'active'){
			var curLogoColor = document.querySelector("#detail_image_holder_0 span.current_logo_color");
		}else if(sidewallDetail.getAttribute('class') == 'active'){
			var curLogoColor = document.querySelector("#detail_image_holder_2 span.current_logo_color");
		}
		$(curLogoColor).empty();
		chosenColorStripe = $(this).data('color');
		$(curLogoColor).css("background-color", chosenColorStripe);
		_color_name = findColorName(chosenColorStripe);
		$(curLogoColor).append(_color_name);
	}

	function logoSwatchClickRFlap(){
		var curLogoColor = document.querySelector("#detail_image_holder_0 span.current_logo_color");
		var pieces = document.querySelectorAll('.r_flap_logo');
		var f = $('#rFlapDetail');
		var g = $('#mainDocx');
		if(!g){
			g = $("#wingsVision");
		}
		var mainTextFlap = g.context.querySelector('#resFlapTextArea use');
		var detailText = f.context.querySelector('#resFlapTextAreaDetail use');
		
		chosenColorLogo = $(this).data('color');
		$(curLogoColor).css("background-color", chosenColorLogo);
		$(curLogoColor).empty();
		_color_name = findColorName(chosenColorLogo);
		$(curLogoColor).append(_color_name);
		for(var a=0;a<pieces.length;a++){
			pieces[a].style.fill = chosenColorLogo;
		}
			detailText.style.fill=chosenColorLogo;
			mainTextFlap.style.fill=chosenColorLogo;
			transferStorage.setItem('rFlapLogo',chosenColorLogo);
	}
	function logoSwatchClickSidewall(){
		var curLogoColor = document.querySelector("#detail_image_holder_2 span.current_logo_color");
		var side = $('input[name="sidewall"]:checked').val();
		if(side == 'left'){
			var pieces = document.querySelectorAll('.sidewall_left');
		}
		if(side == 'right'){
			var pieces = document.querySelectorAll('.sidewall_right');
		}
		$(curLogoColor).empty();
		chosenColorLogo = $(this).data('color');
		$(curLogoColor).css("background-color", chosenColorLogo);
		_color_name = findColorName(chosenColorLogo);
		$(curLogoColor).append(_color_name);
		for(var a=0;a<pieces.length;a++){
			pieces[a].setAttribute('fill',chosenColorLogo);
		}
		transferStorage.setItem('sidewallLogo_'+side, chosenColorLogo);
		var f = $('#mainDocx');
		if(!f){
			f = $("#wingsVision");
		}
		var g = $('#sidewallDetail');
		var sidewallSelection = $('input[name="sidewall"]:checked').val();
		if(sidewallSelection == 'left'){
			var textArea = f.context.querySelector("#sw_left_custom_text");
			var textAreaDetail = g.context.querySelector("#sw_left_custom_text_detail");
		}else{
			var textArea = f.context.querySelector("#sw_right_custom_text");
			var textAreaDetail = g.context.querySelector("#sw_right_custom_text_detail");
		}
		
		textArea.style.fill = chosenColorLogo;
		textAreaDetail.style.fill = chosenColorLogo;
	}
	function logoSwatchClickRingCover(){
		var curLogoColor = document.querySelector("#detail_image_holder_1 .current_logo_color");
		var pieces = document.querySelectorAll('.ring_cover_logo');
		var  f = $('#ringCoverDetail');
		var g = $('#mainDocx');
		if(!g){
			g = $("#wingsVision");
		}
		var rcTextArea = g.context.querySelector('#ringCoverTextArea use');
		var rcDetailText = f.context.querySelector('#ringCoverTextAreaDetail use');
		$(curLogoColor).empty();
		chosenColorLogo = $(this).data('color');
	
		$(curLogoColor).css("background-color", chosenColorLogo);
		_color_name = findColorName(chosenColorLogo);
		$(curLogoColor).append(_color_name);
		for(var a=0;a<pieces.length;a++){
			pieces[a].style.fill = chosenColorLogo;
		}
		transferStorage.setItem('ringCoverLogo',chosenColorLogo);
		rcTextArea.style.fill=chosenColorLogo;
		rcDetailText.style.fill=chosenColorLogo;
	}

	$.fn.makeSwatches = function() {
		var list_id=0;
		var i = 0;
		for(i in colors){
			for(j=1;j<colors[i].length;j++){
				var tab_div = $('#colors_'+i+' > ul#'+i);
				_color = colors[i][j].cValue;
				_color_name = findColorName(_color);
				var swatch = $('<li id="listID_'+list_id+'"/>').appendTo(tab_div);
				var tie_dye_test = _color.toString();
				if(_color_name == 'Woodland Camo' || _color_name == "Digital Camo" || _color_name == "Multi Camo" || _color_name == "Desert Camo" || _color_name == "Desert Marshall"){
					var link = colors[i][j].link;
					$(swatch).css('background', link);
					$(swatch).data('color', _color);
				}else{
					$(swatch).css('background', _color);
					$(swatch).data('color', _color);
				}
				if(i==2){
					var link = colors[i][j].link;
					$(swatch).css('background', link);
					$(swatch).data('color', _color);
					$(swatch).on('click', swatchClick);
				}
				if(i==0 || i==1){
					$(swatch).on('click', swatchClick);
				}
				if(i==3){
					$(swatch).on('click', swatchClickHarness);
				}
				if(i==4){
					$(swatch).on('click', swatchClickTrim);
					}
					$(swatch).on('mouseenter mouseleave', colorRollover);
					list_id++;
					if(j == colors[i].length-1){
						list_id++;
						swatch = $('<li class="currentColor"/>').appendTo(tab_div);
						$(swatch).css("background", chosenColor);
						$(swatch).data('color', _color);
				}
			}
			$('#listID_'+i).append('</ul>');
		}


		//var swatchPos = $('.theColorHolder').position();
		//var swatchHeight = $('.theColorHolder').outerHeight(true) + swatchPos.top;
		//closeOffset = swatchHeight - $('.theSwatchHolder').outerHeight();

		/* $('.theSwatchHolder').on('mouseenter mouseleave', swatchMove);
		$('.theSwatchHolder').css('bottom',closeOffset);
		swatchUp   = {css:{bottom:0}};
		swatchDown = {css:{bottom:closeOffset}};
		$('.theSwatchHolder').append('</ul>');*/
	}

	var click_loop_ran = false;
	var harness_loop_ran = false;
	var trim_loop_ran = false;
	
	function initHacky(){
		var f = $("mainDocx");
		if(!f){
			f = $("#wingsVision");
		}
		var hacky = f.context.querySelectorAll(".hacky");
		var ffHandle = f.context.querySelector("#ff");
		$(ffHandle).css("pointer-events","auto");
		for(i=0;i<hacky.length;i++){
			$(hacky[i]).css("pointer-events","auto");
		}
	}
	
	initHacky();

	function clearIndicator(listItemID){
		var rFlapStripeRadio = document.getElementById("rFlapPinstripeRadio");
		var sidewallStripeRadio = document.getElementById("sidewallPinstripeRadio");
		var colorIndicator = document.querySelectorAll(".currentColor");
		$(colorIndicator).empty();
		var checkMerFlap = document.getElementById("rFlapPinstripeRadio");
		var checkMeSidewall = document.getElementById("sidewallPinstripeRadio");
		if(checkMerFlap.checked || checkMeSidewall.checked){
			$('.currentColor').css("background-color", chosenColorStripe);
			$('.currentColor').append(findColorName(chosenColorStripe));
		}else{
			$('.currentColor').css("background-color", chosenColorLogo);
			$('.currentColor').append(findColorName(chosenColorLogo));
			rFlapPinstripeRadio.checked = false;
			sidewallStripeRadio.checked = false;
		}
		var f = $("mainDocx");
		if(!f){
			f = $("#wingsVision");
		}
		var hacky = f.context.querySelectorAll(".hacky");
		var ffHandle = f.context.querySelector("#ff");
		if(listItemID != 'colors_0_li'){
			$(ffHandle).css("pointer-events","none");
			for(i=0;i<hacky.length;i++){
				$(hacky[i]).css("pointer-events","none");
			}
		}else{
			$(ffHandle).css("pointer-events","auto");
			for(i=0;i<hacky.length;i++){
				$(hacky[i]).css("pointer-events","auto");
			}
		}
		
	}
	function selectTrimLock(){
		var g = document.getElementById("mainDocx");
		if(!g){
			g = document.getElementById("wingsVision");
		}
		var belems = document.querySelectorAll('path:not(.trim)');
			for(var a=0;a<belems.length;a++){
				$(belems[a]).css("pointer-events", "none");
			}
	}
	function selectHarnessLock(){
		var g = document.getElementById("mainDocx");
		if(!g){
			g = document.getElementById("wingsVision");
		}
		var belems = document.querySelectorAll('path:not(.harness)');
			for(var a=0;a<belems.length;a++){
				$(belems[a]).css("pointer-events", "none");
			}
	}
	function clearLogoIndicator(swatchDIV_ID){
		var colorIndicator = document.querySelector("#"+swatchDIV_ID+" .current_logo_color");
		var show_swatches = document.querySelector("#"+swatchDIV_ID+" .logo_colors");
		$(colorIndicator).empty();
		$('.current_logo_color').css("background-color", "#000");
		$('.current_logo_color').append("Black");
		if(swatchDIV_ID == 'logo_colors_02' || swatchDIV_ID == 'logo_colors_03'){
			show_swatches.style.display="block";
		}
		

	}

	function swatchClick(){
		var current_list = this.parentNode.getAttribute('id');
		var camoSwatch = this.getAttribute('id');
		var colorIndicator = document.querySelectorAll(".currentColor");
		$(colorIndicator).empty();
		chosenColor = $(this).data('color');
		$(colorIndicator[current_list]).css('background', chosenColor);
		if(chosenColor.indexOf('tie-dye') > -1){
			for(x=1;x<colors[2].length;x++){
				if(colors[2][x].cValue == chosenColor){
					var tie_dye_bg = colors[2][x].chosenColorLink
					$(colorIndicator[current_list]).css('background', tie_dye_bg);
				}
			}
		}
		var _ff = document.getElementById("FF_Handle");
		if(current_list == 1 || current_list == 3 || current_list == 4){
			$(_ff).css("pointer-events", "none");
		}else{
			$(_ff).css("pointer-events", "auto");
		}
		switch(camoSwatch){
			case 'listID_24':
				_color_name = "Woodland Camo";
				var indChosenColor = 'url("http://skydivewings.com/wp-content/uploads/camo/color_woodland_camo-150x150.jpg")';
				$(colorIndicator[current_list]).css('background', indChosenColor);
				break;
			case 'listID_25':
				_color_name = "Desert Camo";
				var indChosenColor = 'url("http://skydivewings.com/wp-content/uploads/camo/color_desert_camo-150x150.jpg")';
				$(colorIndicator[current_list]).css('background', indChosenColor);
				break;
			case 'listID_26':
				_color_name = "Digital Camo";
				var indChosenColor = 'url("http://skydivewings.com/wp-content/uploads/camo/color_digital_camo-150x150.jpg")';
				$(colorIndicator[current_list]).css('background', indChosenColor);
				break;
			case 'listID_27':
				_color_name = "Multi Camo";
				var indChosenColor =  'url("http://skydivewings.com/wp-content/uploads/camo/color_multi_cam-150x150.jpg")'
				$(colorIndicator[current_list]).css('background', indChosenColor);
				break;
			case 'listID_28':
				_color_name = "Desert Marshall";
				var indChosenColor =  'url("http://skydivewings.com/wp-content/uploads/camo/desert_marshall-150x150.jpg")'
				$(colorIndicator[current_list]).css('background', indChosenColor);
				break;
			default:
				_color_name = findColorName(chosenColor);
		}

		$(colorIndicator).append(_color_name);
		harness_loop_ran = false;
		trim_loop_ran = false;
		if(click_loop_ran == false){
			click_loop_ran = true;
			var belems = document.querySelectorAll('#harness, .trim');
			for(var a=0;a<belems.length;a++){
				$(belems[a]).css("pointer-events", "none");
		}
		var celems = document.querySelectorAll('path:not(#harness):not(.trim):not(.hacky)');
		for(var a=0;a<celems.length;a++){
			$(celems[a]).css("pointer-events", "auto");
		}
	}

	}
	function swatchClickHarness(){
		var current_list = this.parentNode.getAttribute('id');
		var colorIndicator = document.querySelectorAll(".currentColor");
		$(colorIndicator).empty();
		chosenColor = $(this).data('color');
		$(colorIndicator[current_list]).css('background-color', chosenColor);
		_color_name = findColorName(chosenColor);
		$(colorIndicator).append(_color_name);
		var the_harness = document.querySelectorAll(".harness");
		for(a=0;a<the_harness.length;a++){
			the_harness[a].style.fill = chosenColor;
		}
		transferStorage.setItem('harness',chosenColor);
		click_loop_ran = false;
		trim_loop_ran = false;
		if(harness_loop_ran == false){
			harness_loop_ran == true;
			Aelems = document.querySelectorAll('path, polygon, g clip-path');
			for(var a=0;a<Aelems.length;a++){
				$(Aelems[a]).css("pointer-events", "none");
			}
		}
	}

	function swatchClickTrim(){
		var current_list = this.parentNode.getAttribute('id');

		var colorIndicator = document.querySelectorAll(".currentColor");
		$(colorIndicator).empty();
		chosenColor = $(this).data('color');
		$(colorIndicator[current_list]).css('background-color', chosenColor);
		_color_name = findColorName(chosenColor);
		$(colorIndicator).append(_color_name);
		click_loop_ran = false;
		harness_loop_ran = false;
		trim = document.querySelectorAll('.trim');
		for(t=0;t<trim.length;t++){
			trim[t].style.fill = chosenColor;
		}
		transferStorage.setItem('trim',chosenColor);
		if(trim_loop_ran == false){
			trim_loop_ran = true;
			var belems = document.querySelectorAll('path:not(.trim)');
			for(var a=0;a<belems.length;a++){
				$(belems[a]).css("pointer-events", "none");
			}
			var celems = document.querySelectorAll('.trim');
			for(var a=0;a<celems.length;a++){
				$(celems[a]).css("pointer-events", "auto");
			}
		}
	}

	function findColorName(chosen_color){
	
		var setBreak = false;
		for(n in colors){
			for(k=1;k<colors[n].length;k++){
				var compare = colors[n][k].cValue;
				if(compare == chosen_color){
					chosen_color = colors[n][k].color;
					setBreak = true;
					break;
				}
				if(setBreak){break;}
			}
			if(setBreak){break;}
		}
		return chosen_color;
		}
	function swatchMove(e){
		var moveTo = (e.type == 'mouseenter')? swatchUp: swatchDown;
		TweenMax.to('.tab-pane', 0.5, moveTo);
	}
	
	function transferDesign(){
		
		//     Rflap Text     //
		var rFlapDetailText01 = document.getElementById("r_f_ct01").innerHTML;
		var rFlapDetailText02 = document.getElementById("r_f_ct02").innerHTML;
		var rFlapMainText01 = document.getElementById("main_rf_ct01").innerHTML;
		var rFlapMainText02 = document.getElementById("main_rf_ct02").innerHTML;
		
		transferStorage.setItem("rFlapDetailText01", rFlapDetailText01);
		transferStorage.setItem("rFlapDetailText02", rFlapDetailText02);
		transferStorage.setItem("rFlapMainText01", rFlapMainText01);
		transferStorage.setItem("rFlapMainText02", rFlapMainText02);
		
		//     Ring Cover Text     //
		var ringCoverDetailText01 = document.getElementById("rc_ct01").innerHTML;
		var ringCoverDetailText02 = document.getElementById("rc_ct02").innerHTML;
		var ringCoverDetailText03 = document.getElementById("rc_ct03").innerHTML;
		var ringCoverMainText01 = document.getElementById("main_rc_ct01").innerHTML;
		var ringCoverMainText02 = document.getElementById("main_rc_ct02").innerHTML;
		var ringCoverMainText03 = document.getElementById("main_rc_ct03").innerHTML;
		
		
		transferStorage.setItem("ringCoverDetailText01", ringCoverDetailText01);
		transferStorage.setItem("ringCoverDetailText02", ringCoverDetailText02);
		transferStorage.setItem("ringCoverDetailText03", ringCoverDetailText03);
		transferStorage.setItem("ringCoverMainText01", ringCoverMainText01);
		transferStorage.setItem("ringCoverMainText02", ringCoverMainText02);
		transferStorage.setItem("ringCoverMainText03", ringCoverMainText03);
		
		//     Sidewall Text     //
		var sidewallRightTextDetail = document.getElementById("swr_detail_ct01").innerHTML;
		var sidewallLeftTextDetail = document.getElementById("swL_detail_ct01").innerHTML;
		var sidewallRightTextMain = document.getElementById("swr_main_ct01").innerHTML;
		var sidewallLeftTextMain = document.getElementById("swL_main_ct01").innerHTML;
		
		transferStorage.setItem("sidewallRightTextMain", sidewallRightTextMain);
		transferStorage.setItem("sidewallRightTextDetail", sidewallRightTextDetail);
		transferStorage.setItem("sidewallLeftTextMain", sidewallLeftTextMain);
		transferStorage.setItem("sidewallLeftTextDetail", sidewallLeftTextDetail);
		
		var theTitle = document.querySelector("#product_id h1");
		var g = document.querySelector("#mainDocx");
		if(!g){
			transferStorage.removeItem('grp_2a');
			transferStorage.removeItem('grp_2a_detail');
			transferStorage.removeItem('grp_2a_detail_path');
			$('#ActivityDIV' ).makeSVGcolorTransfer('http://skydivewings.com/wp-content/uploads/svgs/wingsClassic.svg');
			loadSvg('#res-flap-detail-inner', 'http://skydivewings.com/wp-content/uploads/svgs/res_flap_detail-03-5_25_17-01');
			theTitle.innerHTML="Wings Classic";
		}else{
			$('#ActivityDIV' ).makeSVGcolorTransfer('http://skydivewings.com/wp-content/uploads/svgs/wingsVision.svg');
			loadSvg('#res-flap-detail-inner', 'http://skydivewings.com/wp-content/uploads/svgs/res_flap_detail_vision-01');
			theTitle.innerHTML="Wings Vision";
		}
	}
	var tieDyeActive = false;
	function colorMePack(poly, ID) {
	
	var f = $("#mainDocx");
	if(!f){
			f = $("#wingsVision");
		}
	var tieDyeSwatches = document.getElementById("colors_2_li");
	var detail_area_ID = "#"+ID+"_detail";
	var camo_fill = false;
	var checkClass = f.context.querySelector('#'+ID).className.baseVal;
	var image_area = f.context.querySelectorAll('#'+ID+' image');
	var has_detail_area = false;
	var documentID;
	
	
	
	if(checkClass.includes('has_detail_area')){
	
		switch(checkClass){
			case 'has_detail_area rFlap':
				documentID = 'rFlapDetail';
				break;
			case 'has_detail_area ringCover':
				documentID = 'ringCoverDetail';
				break;
			case 'has_detail_area sidewall':
				documentID = 'sidewallDetail';
				break;
			default:
				break;
		}
		has_detail_area = true;
	}
	
	if($(tieDyeSwatches).parent().attr('class') == 'active'){
		tieDyeActive = true;
		x=0;
		if(ID == 'grp_backpad'){
			x=350;
		}
		for(i=0;i<image_area.length;i++){
			image_area[i].setAttribute("xlink:href",chosenColor);
			image_area[i].setAttribute("x",x);
			x+=420;
		}
		document.getElementById(ID+'-fabric').setAttribute("display", "inline");
		transferStorage.setItem(ID,chosenColor);
		
		if(has_detail_area == true){
			var chosenColorDetail = chosenColor.replace("_x480.jpg","_x500.png");
			g = document.querySelector("svg#"+documentID);
			elem = g.getElementById(ID+'_detail-fabric');
			detail_image_area = g.querySelector('#'+ID+'_detail image');
			elem.setAttribute("display","inline");
			detail_image_area.setAttribute("xlink:href",chosenColorDetail);
			transferStorage.setItem(ID+"_detail", chosenColorDetail);
		}
		if(ID == 'grp_2'){
			f = document.querySelector("#sidewallDetail");
			elem = f.getElementById("grp_2_sidewall_detail-fabric");
			elem.setAttribute("display","inline");
			detail_image_area = f.querySelector("#grp_2_sidewall_detail image");
			detail_image_area.setAttribute("xlink:href",chosenColorDetail);
		}
	}else{
		tieDyeActive = false;
	}
	
	// Detail Image Variables //
	var f, elem, detail_image_area;
	
	if(chosenColor.includes('camo')){
		switch(chosenColor){
			case 'url(#woodland_camo)':
				chosenColorCamo = "http://skydivewings.com/wp-content/uploads/camo/woodland_camo_650x650.jpg";
				break;
			case 'url(#digital_camo)':
				chosenColorCamo = "http://skydivewings.com/wp-content/uploads/camo/digital_camo-650x650.jpg";
				break;
			case 'url(#desert_camo)':
				chosenColorCamo = "http://skydivewings.com/wp-content/uploads/camo/desert_camo_768.png";
				break;
			case 'url(#multi_camo)':
				chosenColorCamo = "http://skydivewings.com/wp-content/uploads/camo/multi_cam-650x650.jpg";
				break;
			case 'url(#desert_marshall_camo)':
				chosenColorCamo = "http://skydivewings.com/wp-content/uploads/camo/desert_marshall-650x650.jpg";
				break
		}
		
			x=0;
			if(ID == 'grp_backpad'){
			x=350;
			}
			for(k=0;k<image_area.length;k++){
				image_area[k].setAttribute("xlink:href", chosenColorCamo);
				image_area[k].setAttribute("x", x);
				x+=420;
			}
			document.getElementById(ID+'-fabric').setAttribute("display", "inline");
			if(has_detail_area == true){
				f = document.querySelector("svg#"+documentID);
				elem = f.getElementById(ID+'_detail-fabric');
				detail_image_area = f.querySelector('#'+ID+'_detail image');
				elem.setAttribute("display","inline");
				detail_image_area.setAttribute("xlink:href",chosenColorCamo);
				transferStorage.setItem(ID+"_detail", chosenColorCamo);
			}
			if(ID == 'grp_2'){
				f = document.querySelector("#sidewallDetail");
				elem = f.getElementById("grp_2_sidewall_detail-fabric");
				elem.setAttribute("display","inline");
				detail_image_area = f.querySelector("#grp_2_sidewall_detail image");
				detail_image_area.setAttribute("xlink:href",chosenColorCamo);
			}
			camo_fill = true;
			transferStorage.setItem(ID,chosenColorCamo);
	}
		if(!camo_fill && !tieDyeActive){
			document.querySelector('#'+ID+'-fabric').setAttribute("display", "none");
			poly = document.querySelector('#'+ID+' path:first-child');
			poly.style.fill = chosenColor;
			transferStorage.setItem(ID, chosenColor);
			if(has_detail_area){
				ColorDetailElement(ID, documentID);
			}
		}
	}
	function colorRollover(e){
		var rollover = (e.type == 'mouseenter')? {scale:1.2}:{scale:1};
		TweenMax.to($(this), 0.05, rollover);
	}

	function svgClear() {
		transferStorage.clear();
		var elems = document.querySelectorAll('path:not([fill="none"]):not(.no-clear):not([fill="#ccc"]):not(.stitching), polygon:not(.no-clear),stop:not(.no-clear), #slider');
		var images = document.querySelectorAll('[id$="-fabric"]');
		for(i=0;i<elems.length;i++){
			elems[i].style.fill = '#fff';
		}
		i=0;
		for(j=0;j<images.length;j++){
			images[j].setAttribute("display","none");
		}
	}
	
	
	//  ******************************       Download   ********************************   //
	
function svgDownloadSVG() {
		var doc = $("#mainDocx");
		var rFlapTextArea = doc.context.querySelectorAll("#custom_text_main text");
		//rFlapTextArea[0].setAttribute("transform","matrix(1 0 0 -1 29)");
		//rFlapTextArea[1].setAttribute("transform","matrix(1 0 0 -1 7)");
		//rFlapTextArea[2].setAttribute("transform","matrix(1 0 0 -1 -13)");
		
		var svgInfo = $("<div/>").append($(svgObject).clone()).html();
		$(this).attr({
				href:"data:image/svg+xml;utf8,"+svgInfo,
				download:'Product-Image.svg',
				target:"_blank"
		});
	}

	function loadSvg(selector, url) {
		var target = document.querySelector(selector);

		// If SVG is supported
		if (typeof SVGRect != "undefined") {
			// Request the SVG file
			var ajax = new XMLHttpRequest();
			ajax.open("GET", url + ".svg", true);
			ajax.send();

			// Append the SVG to the target
			ajax.onload = function(e) {
			  target.innerHTML = ajax.responseText;
			}
		} else {
			// Fallback to png
			alert("SVG Not Supported");
			target.innerHTML = "<img src='" + url + ".png' />";
		}
	}

	$.fn.makeSVGcolor = function(svgURL) {
			mainHolder = this;		
			$( this ).load(svgURL, function() {
			svgObject  = $('svg', this);
			svgColor   = $('g:nth-child(2)', svgObject).children();
			svgOutline = $('g:nth-child(1)', svgObject).children();
			//$(svgColor).on('click', colorMePack);
			$(mainHolder).makeSwatches();
			$('.tab-content').addClass('gray');
			var group_two = svgObject.context;
			console.log(group_two);
			svg = svgObject;
			BOC = group_two.querySelector("#BOC");
			FF_Handle = group_two.querySelector("#FF_Handle");
			Hacky = group_two.querySelector("#Hacky");
			pinstripes_3 = group_two.querySelector("#group_3_pinstripes");
			pinstripes_4 = group_two.querySelector("#group_4_pinstripes");
			pinstripes_5 = group_two.querySelector("#group_5_pinstripes");
			pinstripes_6 = group_two.querySelector("#group_6_pinstripes");
			pinstripes_7 = group_two.querySelector("#group_7_pinstripes");
			hres_group = group_two.querySelector("#hres_grp");
			metal_d_ring = group_two.querySelector("#metal_d-ring");
			spacer_group = group_two.querySelector("#spacer_foam_group");
			spacer_group.setAttribute("visibility","hidden");
			var group_two_elm = group_two.querySelector("#grp_2");
			group_two_elm.addEventListener("click", function(){
				ColorGrp2Sidewall();
			});
		});

		return svgObject;
	}
	$.fn.makeSVGcolorTransfer = function(svgURL) {
		
		mainHolder = this;		
		$( this ).load(svgURL, function() {
		
			svgObject  = $('svg', this);
			svgColor   = $('g:nth-child(2)', svgObject).children();
			svgOutline = $('g:nth-child(1)', svgObject).children();
			//$(svgColor).on('click', colorMePack);
			$('.tab-content').addClass('gray');
			var group_two = svgObject.context;
			var listItemIDHarness = document.getElementById("colors_3_li").parentNode.getAttribute('class');
			var listItemIDTrim = document.getElementById("colors_4_li").parentNode.getAttribute('class');
			
			if(listItemIDHarness == 'active'){
				selectHarnessLock();
			}
			if(listItemIDTrim == 'active'){
				selectTrimLock();
			}
			
			g = document.querySelector("#mainDocx");
			if(!g){
				g = $("#wingsVision");
			}
			if($.inArray('sidewall_detail',transferStorage)){
				transferStorage.removeItem("sidewall_detail");
			}
			if($.inArray('sidewall_detail_path',transferStorage)){
				transferStorage.removeItem("sidewall_detail_path");
			}
			if($.inArray('grp_8b_detail_path',transferStorage)){
				transferStorage.removeItem("grp_8b_detail_path");
			}
			if($.inArray('grp_8b_detail',transferStorage)){
				transferStorage.removeItem("grp_8b_detail");
			}
			if($.inArray('grp_backpad_detail',transferStorage)){
				transferStorage.removeItem("grp_backpad_detail");
			}
			BOC = group_two.querySelector("#BOC");
			FF_Handle = group_two.querySelector("#FF_Handle");
			Hacky = group_two.querySelector("#Hacky");
			pinstripes_3 = group_two.querySelector("#group_3_pinstripes");
			pinstripes_4 = group_two.querySelector("#group_4_pinstripes");
			pinstripes_5 = group_two.querySelector("#group_5_pinstripes");
			pinstripes_6 = group_two.querySelector("#group_6_pinstripes");
			pinstripes_7 = group_two.querySelector("#group_7_pinstripes");
			hres_group = group_two.querySelector("#hres_grp");
			metal_d_ring = group_two.querySelector("#metal_d-ring");
			spacer_group = group_two.querySelector("#spacer_foam_group");
			spacer_group.setAttribute("visibility","hidden");
			//   Main Tranfer Mechanisms   //
			
			// set up options for transferred design //
		$(document).ready(function(){
			display_spacer_foam();
			metal_d_ring_option();
			show_hide_labels();
			showPinstripes();
		});
			
			if($('#add-pinstripes').checked){
					showPinstripes();
				}
				
			for(i in transferStorage){
				
				//     Backpad Group    //
				
				
				if(i.includes('grp_backpad') || i.includes('grp_8b')){
					var t = document.querySelector("#ringCoverDetail");
				}else{
					var t = document.querySelector("#rFlapDetail");
				}
				
				//     Release     //
				
				
				if(i.includes('mainRelease')){
					switch(transferStorage[i]){
						case "BOC":
							BOC.setAttribute("display", "inline");
							FF_Handle.setAttribute("display","none");
							Hacky.setAttribute("display","none");
							break;
						case "freeFly":
							BOC.setAttribute("display", "none");
							FF_Handle.setAttribute("display","inline");
							Hacky.setAttribute("display","none");
							break;
						case "hacky":
							BOC.setAttribute("display", "none");
							FF_Handle.setAttribute("display","none");
							Hacky.setAttribute("display","inline");
							break;
					}
				}
				
				
				if(i.includes('hacky')){
					var hacky = document.getElementById(i);
					hacky.style.fill = transferStorage[i];
					continue;
				}
				
				if(i.includes('ff')){
					var freeFly = document.getElementById(i);
					freeFly.style.fill = transferStorage[i];
					continue;
				}
				
				//    Pinstripes    //
				if(i.includes('pinstr')){
					if(!transferStorage[i]){
						continue;
					}else{
						if(i.includes('pinstr') && i.includes('detail')){
							var pinstrDetail = document.getElementById("rFlapDetail")
							pinstrDetail.getElementById(i).style.fill=transferStorage[i];
						}else if(i.includes('pinstr') && !i.includes('detail')){
							var pinstr = document.querySelector("#"+i);
							pinstr.style.fill=transferStorage[i];
						}
					}
					
					continue;
				}
				
				//     LOGOS    //
				
				if(i.includes('rFlapLogo')){
					var resFlapLogo = document.querySelectorAll('.r_flap_logo');
					for(j=0;j<resFlapLogo.length;j++){
						resFlapLogo[j].style.fill=transferStorage[i];
					}
					continue;
				}
				if(i.includes('sidewallLogo')){
					if(i.includes('sidewallLogo_left')){
						var pieces = document.querySelectorAll('.sidewall_left');
					}
					if(i.includes('sidewallLogo_right')){
						var pieces = document.querySelectorAll('.sidewall_right');
					}
					for(j=0;j<pieces.length;j++){
						pieces[j].style.fill=transferStorage[i];
					}
					continue;
				}
				if(i.includes('ringCoverLogo')){
					var pieces = document.querySelectorAll('.ring_cover_logo');
					for(j=0;j<pieces.length;j++){
						pieces[j].style.fill=transferStorage[i];
					}
					continue;
				}
				
					
					//    Tie Dye    //
				var storage_var = transferStorage[i].toString();
				if(storage_var.indexOf('tie-dye') > -1){
					if(i.includes('detail')){
						var chosenColorDetail = transferStorage[i].replace("_x480.jpg","_x500.png");
						elem = t.querySelector("#"+i+'-fabric');
						detail_image_area = t.querySelector('#'+i+' image');
						elem.setAttribute("display","inline");
						detail_image_area.setAttribute("xlink:href",chosenColorDetail);
					}
					if(!i.includes('detail')){
						var mainArea = document.querySelector("#"+i+'-fabric');
						mainArea.setAttribute("display", "inline");
						x=0;
						if(i == 'grp_backpad'){
							x=350;
						}
						var image_area = document.querySelectorAll('#'+i+' image');
						for(n=0;n<image_area.length;n++){
							image_area[n].setAttribute("xlink:href",transferStorage[i]);
							image_area[n].setAttribute("x",x);
							x+=420;
						}
					
					}else if(i.includes('detail') && !transferStorage[i].includes('tie-dye') && !transferStorage[i].includes('camo')){
						var h = document.querySelector('#rFlapDetail');
						var detailElement = h.querySelector("#"+i);
						detailElement.style.fill = transferStorage[i];
					}
				}	
				
				if(storage_var.indexOf('camo') > -1){
					var image_area = document.querySelectorAll('#'+i+' image');
					x=0;
					if(i == 'grp_backpad'){
					x=350;
					}
					for(k=0;k<image_area.length;k++){
						image_area[k].setAttribute("xlink:href", transferStorage[i]);
						image_area[k].setAttribute("x", x);
						x+=420;
					}
					document.getElementById(i+'-fabric').setAttribute("display", "inline");
					if(i.includes('detail')){
						var camoDetail = document.getElementById("rFlapDetail");
						elem = camoDetail.getElementById(i+'-fabric');
						detail_image_area = camoDetail.querySelector('#'+i+' image');
						elem.setAttribute("display","inline");
						detail_image_area.setAttribute("xlink:href",transferStorage[i]);
					}
					if(i == 'grp_2'){
						f = document.querySelector("#sidewallDetail");
						elem = f.getElementById("grp_2_sidewall_detail-fabric");
						elem.setAttribute("display","inline");
						detail_image_area = f.querySelector("#grp_2_sidewall_detail image");
						detail_image_area.setAttribute("xlink:href",transferStorage[i]);
					}
				}
				
				//              Text Areas             //
				
				if(i.includes('Text')){
					if(document.getElementById("rFlapTextRadio").checked){
						LogoOrText('rFlap','resFlapTextAreaInput', 'resFlapTextArea','resFlapTextAreaDetail','rFlapTextForm','r_flap_logo','rFlapTitle');
					}
					if(document.getElementById("ringCoverTextRadio").checked){
						LogoOrText('ringCover','rcTextAreaInput','ringCoverTextArea','ringCoverTextAreaDetail','ringCoverTextForm','ring_cover_logo','ringCoverTitle');
					}
					if(document.getElementById("rightSidewallTextRadio").checked){
						sidewallText('RsidewallLogo_Text','sidewallRightText','sidewall_right','sidewallRightTextArea','sidewallRightTextAreaDetail','sidewallsTitle','rightSidewallTextAreaInput');
					}
					if(document.getElementById("leftSidewallTextRadio").checked){
						sidewallText('LsidewallLogo_Text', 'sidewallLeftText','sidewall_left','sidewallLeftTextArea','sidewallLeftTextAreaDetail','sidewallsTitle','leftSidewallTextAreaInput');
					}
					
					switch(i){
						case 'rFlapDetailText01':
							document.getElementById("r_f_ct01").innerHTML = transferStorage[i];
							break;
						case 'rFlapDetailText02':
							document.getElementById("r_f_ct02").innerHTML = transferStorage[i];
							break;
						case 'rFlapMainText01':
							document.getElementById("main_rf_ct01").innerHTML = transferStorage[i];
							break;
						case 'rFlapMainText02':
							document.getElementById("main_rf_ct02").innerHTML = transferStorage[i];
							break;
						case 'ringCoverDetailText01':
							document.getElementById("rc_ct01").innerHTML = transferStorage[i];
							break;
						case 'ringCoverDetailText02':
							document.getElementById("rc_ct02").innerHTML = transferStorage[i];
							break;
						case 'ringCoverDetailText03':
							document.getElementById("rc_ct03").innerHTML = transferStorage[i];
							break;
						case 'ringCoverMainText01':
							document.getElementById("main_rc_ct01").innerHTML = transferStorage[i];
							break;
						case 'ringCoverMainText02':
							document.getElementById("main_rc_ct02").innerHTML = transferStorage[i];
							break;
						case 'ringCoverMainText03':
							document.getElementById("main_rc_ct03").innerHTML = transferStorage[i];
							break;
						case 'sidewallRightTextMain':
							document.getElementById("swr_main_ct01").innerHTML = transferStorage[i];
							break;
						case 'sidewallRightTextDetail':
							document.getElementById("swr_detail_ct01").innerHTML = transferStorage[i];
							break;
						case 'sidewallLeftTextMain':
							document.getElementById("swL_main_ct01").innerHTML = transferStorage[i];
							break;
						case 'sidewallLeftTextDetail':
							document.getElementById("swL_detail_ct01").innerHTML = transferStorage[i];
							break;
					}
					continue;
				}	
					
					
						//  Color Only Detail -- Exlude tie dye and camo    //
						
					if(i=='trim'){
						trim = document.querySelectorAll('.trim');
						for(r=0;r<trim.length;r++){
							trim[r].style.fill = transferStorage[i];
						}						
					}else if(i=='harness'){
						var the_harness = document.querySelectorAll(".harness");
						for(a=0;a<the_harness.length;a++){
							the_harness[a].style.fill = transferStorage[i];
						}
					}else{
						if(i.includes('detail')){
							document.querySelector("#"+i).style.fill=transferStorage[i];
						}else{
							var fillTarget = document.querySelector("#"+i+"_path");
							if(!fillTarget){
								continue;
							}else{
								fillTarget.style.fill = transferStorage[i];
							}
							
						}
						
					}
			}
		});

			svg = svgObject;
	}
	$.fn.btnClear     = function() {
		btnClear = this;
		$(btnClear).on('click', svgClear);
	}
		
	$.fn.btnDownload  = function(type) {
		if(type == 'PNG'){
		  btnDownloadPNG = this;
		  $(this).on('mouseenter', svgDownloadPNG);
		} else {
		  btnDownloadSVG = this;
		  $(this).on('mouseenter', svgDownloadSVG);
		}
	}
	function ColorGrp2Sidewall(){
		var f = document.querySelector("#sidewallDetail");
		var grp_twos = f.getElementById("grp_2_sidewall_detail_path");
		grp_twos.style.fill = chosenColor;
	}
	
	function setUpSVGDocs(){
		flapSvgDoc = document.querySelector("#rFlapDetail");
	}
	window.onload = function(){
		setUpSVGDocs();
	}