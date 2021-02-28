
<?php
/**
 * Template Name: Designer
 */
get_header(); ?>
<?php
$model = $_POST['model'];
$title = $_POST['title'];
?>


	<div id="primary" class="site-content">
		<div id="content" role="main">

			 <div class='holder'>
  <div id="logo"><img src="http://skydivewings.com/wp-content/uploads/wings-classic.png" /></div>
  <div id="logo2"><img src="http://skydivewings.com/wp-content/uploads/logo-top.png" /></div>
  <div class='myTitle'>Skydive Wings </div>
  <div id="product_id">
  <h1></h1>
  </div>
  
	<div class='held' id='ActivityDIV'>
	</div>
<div class="container">

		<div class="row">
			<div class="col col-sm-12">
				<ul class="checkboxes">
					<li><label><input type="checkbox" id="diag_show_hide" onclick="show_hide_labels();"><span class="white">hide section numbers</span></label></li>
					<li><label><input type="checkbox" id="spacer_show_hide" onclick="display_spacer_foam();"><span class="white">add spacer foam ($)</span></label></li>
					<li><label><input type="checkbox" id="res_metal_dring" onclick="metal_d_ring_option();"><span class="white">reserve metal D-ring</span></label></li>
					<li><label><input type="checkbox" id="add-pinstripes" onclick="showPinstripes();"><span class="white">pinstripes ($)</span><span id="pinstripe-instruction">-use bottom images-</label></li>
				</ul>
			</div><!-- column  -->
	 </div><!-- row  -->
	 <div class="row">
			<div class="col col-sm-12">
			<span class="list_title_top">Deployment:</span>
				<ul class="checkboxes">
					<li><label><input type="radio" name="main-release" id="BOC" onclick="mainReleaseOption(this.id)" checked><span class="white">Plastic Handle</span></label></li>
					<li><label><input type="radio" name="main-release" id="freeFly" onclick="mainReleaseOption(this.id)" ><span class="white">FreeFly Handle ($)</span></label></li>
					<li><label><input type="radio" name="main-release" id="hacky" onclick="mainReleaseOption(this.id)" ><span class="white" >Hacky Handle ($)</span></label></li>
					<li id="handleColors">**FreeFly and Hacky Handles - Cordura Colors Only**</li>
				</ul>
			</div><!-- column  -->
	 </div><!-- row  -->
	<div class="tab-menu" id="swatches">
		<ul class="nav nav-tabs" role="tablist">
			<li role="presentation" class="active"><a id="colors_0_li" href="#colors_0" data-toggle="tab" role="tab" onclick="clearIndicator(this.id)">Cordura</a></li>
			<li role="presentation"><a id="colors_1_li" href="#colors_1" data-toggle="tab" role="tab" onclick="clearIndicator(this.id)">Parapack</a></li>
			<li role="presentation"><a id="colors_2_li" href="#colors_2" data-toggle="tab" role="tab" onclick="clearIndicator(this.id)">Tie-Dye</a></li>
			<li role="presentation"><a id="colors_3_li" href="#colors_3" data-toggle="tab" role="tab" onclick="swatchClickHarness(this.id)">Harness</a></li>
			<li role="presentation"><a id="colors_4_li" href="#colors_4" data-toggle="tab" role="tab" onclick="clearIndicator(this.id)">Binding Tape</a></li>
		</ul>
		<div class="tab-content clearfix">

		<div id="colors_0" class="tab-pane active"><ul id="0"></ul></div>
		<div id="colors_1" class="tab-pane"><ul id="1"></ul></div>
		<div id="colors_2" class="tab-pane"><ul id="2"></ul></div>
		<div id="colors_3" class="tab-pane"><ul id="3"></ul></div>
		<div id="colors_4" class="tab-pane"><ul id="4"></ul></div>
	</div>
	</div>
	<p style="font-weight:bold;"><span class="warning">***NOTICE:</span> Colors shown may differ from actual fabric colors due to Individual monitor settings.</p>
	
	<p style="font-weight:bold; color:rgba(0,0,0,0.5);">Use the <span style="color:#000">TRANSFER DESIGN</span> button to transfer your color scheme to either the Classic or Vision Model</p>
</div>
<div class="buttons">
		<a id="btnClear"  onclick='svgClear()'    class="button gray">Clear Color</a>
		<a id="btnDownloadSVG" class="button gray">Download Image</a>
		<a id="btnTansfer" class="button gray" onclick="transferDesign();">Transfer Design</a>
	</div>

	<div id="bottom-detail-holder">
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
				 <div class="container">
					 <div id="bottom-detail-options"></div>
						<div class="tab-menu">
							<ul class="nav nav-tabs" id="bottom-detail-menu" role="tablist">
								<li role="presentation" id="holder_0" class="active"><a href="#detail_image_holder_0" data-toggle="tab" role="tab" onclick="clearLogoIndicator('logo_colors_01')">Res Flap</a></li>
								<li role="presentation" id="holder_1"><a href="#detail_image_holder_1" data-toggle="tab" role="tab" onclick="clearLogoIndicator('logo_colors_02')">Ring Cover</a></li>
								<li role="presentation" id="holder_2"><a href="#detail_image_holder_2" data-toggle="tab" role="tab" onclick="clearLogoIndicator('logo_colors_03')">Side Walls</a></li>
							</ul>
							<div class="tab-content clearfix">

							<div id="detail_image_holder_0" class="tab-pane active">
								<ul>
									<div class="container">
										<div id="logo_colors_01">
										<form id="rFlapForm">
												<table>
													<tr>
														<td><input type="radio" name="rFlap" id="rFlapLogoRadio" value="logo" onclick="LogoOrText('rFlap','resFlapTextAreaInput', 'resFlapTextArea','resFlapTextAreaDetail','rFlapTextForm','r_flap_logo','rFlapTitle')" checked /></td><td>Logo</td>
													</tr>
													<tr>
														<td><input type="radio"  name="rFlap" id="rFlapTextRadio" value="text" onclick="LogoOrText('rFlap','resFlapTextAreaInput', 'resFlapTextArea','resFlapTextAreaDetail','rFlapTextForm','r_flap_logo','rFlapTitle')" /></td><td>Custom Text</td>
													</tr>
													<tr>
														<td><input type="radio" name="rFlap" id="rFlapPinstripeRadio"  value="pinstripes" onclick="displayPinstripeColors()" /></td><td>Color Pinstripes</td>
													</tr>
												</table>
											</form>
											<form id="rFlapTextForm">
												<table>
													
												</table>
											</form>
											<span class="current_logo_color">
											</span>
											<span id="rFlapTitle" class="logo_color_list_title">Logo Colors</span>
											<div class="logo_colors">
												<ul></ul>
											</div>
											<div id="stripe_colors">
												<ul></ul>
											</div>
											<div id="resFlapTextAreaInput">
												<table>
													<tr>
														<td><input type="radio" name="rFlapText" value="standard" onclick="changeText('rFlapText','custom_text_main','custom_text_detail','resFlapTextAreaDetail')" checked /></td><td>Standard</td>
													</tr>
													<tr>
														<td><input type="radio" name="rFlapText" value="script" onclick="changeText('rFlapText','custom_text_main','custom_text_detail', 'resFlapTextAreaDetail')" /></td><td>Script</td>
													</tr>
													<tr>
														<td><label>Text 1:</label></td><td> <input type="text" name="rFlapText01" id="rFlapText01" placeholder="Custom" onkeyup="updateText(this, 'r_f_ct01','main_rf_ct01')"></td>
													</tr>
													<tr>
														<td><label>Text 2:</label></td><td> <input type="text" name="rFlapText02" id="rFlapText02" placeholder="Text" onkeyup="updateText(this, 'r_f_ct02','main_rf_ct02')"></td>
													</tr>
												</table>
													</div>
										</div>
										<span id="res-flap-detail-inner"></span>
										<h3 id="resFlapBottom">Area 6 Pinstripes</h3>
										<span id="res-flap-bottom-detail-inner"></span>
									</div>
								</ul>
							</div>
							<div id="detail_image_holder_1" class="tab-pane">
								<ul>
									<div class="container">
										<div id="logo_colors_02">
										<form id="ringCoverForm">
												<table>
													<tr>
														<td><input type="radio" name="ringCover" value="logo" onclick="LogoOrText('ringCover','rcTextAreaInput','ringCoverTextArea','ringCoverTextAreaDetail','ringCoverTextForm','ring_cover_logo','ringCoverTitle')" checked /></td><td>Logo</td>
													</tr>
													<tr>
														<td><input type="radio" name="ringCover" id="ringCoverTextRadio" value="text" onclick="LogoOrText('ringCover','rcTextAreaInput','ringCoverTextArea','ringCoverTextAreaDetail','ringCoverTextForm','ring_cover_logo','ringCoverTitle')" /></td><td>Custom Text </td>
													</tr>
												</table>
											</form>
											<form id="ringCoverTextForm">
												<table>
													
												</table>
											</form>
											<span class="current_logo_color"></span>
											<span id="ringCoverTitle" class="logo_color_list_title">Logo Colors</span>
											<div class="logo_colors">
												<ul></ul>
											</div>
											<div id="rcTextAreaInput">
												<form>
													<table>
														<tr>
															<td><input type="radio" name="ringCoverText" value="standard" onclick="changeText('ringCoverText','rc_custom_text_main','rc_custom_text_detail','ringCoverTextAreaDetail')" checked /></td><td>Standard</td>
														</tr>
														<tr>
															<td><input type="radio" name="ringCoverText" value="script" onclick="changeText('ringCoverText','rc_custom_text_main','rc_custom_text_detail','ringCoverTextAreaDetail')" /></td><td>Script</td>
														</tr>
														<tr>
															<td><label>Text 1:</label></td><td> <input type="text" name="rcText01" placeholder="Custom" onkeyup="updateText(this, 'rc_ct01','main_rc_ct01')"></td>
														</tr>
														<tr>
															<td><label>Text 2:</label></td><td> <input type="text" name="rcText02" placeholder="Name" onkeyup="updateText(this, 'rc_ct02','main_rc_ct02')"></td>
														</tr>
														<tr>
															<td><label>Text 3:</label></td><td> <input type="text" name="rcText03" placeholder="Text" onkeyup="updateText(this, 'rc_ct03','main_rc_ct03')"></td>
														</tr>
													</table>
												</form>
													</div>
										</div>
										<span id="ring-cover-detail"></span>
									</div>
								</ul>
							</div>
							<div id="detail_image_holder_2" class="tab-pane">
								<ul>
									<div class="container">
										<div id="logo_colors_03">
											<form>
												<table>
													<tr>
														<td><input type="radio" name="sidewall" value="left" onclick="sidewallLeftOrRight('LsidewallLogo_Text')" checked /></td><td>Left Sidewall</td>
													</tr>
													<tr>
														<table id="sidewallNestLeft">
															<tr>
																<td><input type="radio" name="LsidewallLogo_Text" id="leftSidewallLogo_" value="logo" onclick="sidewallLogo('sidewall_left','sidewallLeftText','sidewallsTitle','sidewallLeftTextArea','sidewallLeftTextAreaDetail','leftSidewallTextAreaInput')" checked /></td><td>Logo</td>
															</tr>
															<tr>
																<td><input type="radio" name="LsidewallLogo_Text" id="leftSidewallTextRadio" value="text" onclick="sidewallText('LsidewallLogo_Text', 'sidewallLeftText','sidewall_left','sidewallLeftTextArea','sidewallLeftTextAreaDetail','sidewallsTitle','leftSidewallTextAreaInput')" /></td><td>Custom Text</td>
															</tr>
															<tr>
																<table id="sidewallLeftText">
																	
																</table>
															</tr>
														</table>
													</tr>
												</table>
												<table>
													<tr>
														<td><input type="radio" name="sidewall" value="right" onclick="sidewallLeftOrRight('RsidewallLogo_Text')" /></td><td>Right Sidewall</td>
													</tr>
													<tr>
														<table id="sidewallNestRight">
															<tr>
																<td><input type="radio" name="RsidewallLogo_Text" id="rightSidewallLogo_" value="logo" onclick="sidewallLogo('sidewall_right','sidewallRightText','sidewallsTitle','sidewallRightTextArea','sidewallRightTextAreaDetail','rightSidewallTextAreaInput')" checked /></td><td>Logo</td>
															</tr>
															<tr>
																<td><input type="radio" name="RsidewallLogo_Text" id="rightSidewallTextRadio" value="text" onclick="sidewallText('RsidewallLogo_Text','sidewallRightText','sidewall_right','sidewallRightTextArea','sidewallRightTextAreaDetail','sidewallsTitle','rightSidewallTextAreaInput')" /></td><td>Custom Text</td>
															</tr>
															<tr>
																<table id="sidewallRightText">
																	
																</table>
															</tr>
														</table>
													</tr>
													</table>
													<table>
														<tr>
															<td><input type="radio" id="sidewallPinstripeRadio" name="sidewall" value="pinstripes" onclick="displaySidewallPinstripeColors()" /></td><td>Color Pinstripes</td>
														</tr>
													</table>
											</form>
											<span class="current_logo_color"></span>
											<span id="sidewallsTitle" class="logo_color_list_title">Logo Colors</span>
											<div class="logo_colors">
												<ul></ul>
											</div>
											<div id="stripe_colors_sidewall">
												<ul></ul>
											</div>
													<div id="rightSidewallTextAreaInput">
												<table>
													<tr>
														<td><input type="radio" name="sidewallRightTextChoice" value="standard" onclick="changeText('sidewallRightTextChoice','sw_right_custom_text','sw_right_custom_text_detail','sidewallRightTextAreaDetail')" checked /></td><td>Standard</td>
													</tr>
													<tr>
														<td><input type="radio" name="sidewallRightTextChoice" value="script" onclick="changeText('sidewallRightTextChoice','sw_right_custom_text','sw_right_custom_text_detail','sidewallRightTextAreaDetail')" /></td><td>Script</td>
													</tr>
													<tr>
														<td><label>Text: </label></td><td> <input type="text" name="sidewallRightText01" id="sidewallRightText01" placeholder="Custom Text" onkeyup="updateText(this, 'swr_detail_ct01','swr_main_ct01')"></td>
													</tr>
												</table>
											</div>
											<div id="leftSidewallTextAreaInput">
												<table>
													<tr>
														<td><input type="radio" name="sidewallLeftTextChoice" value="standard" onclick="changeText('sidewallLeftTextChoice','sw_left_custom_text','sw_left_custom_text_detail','sidewallLeftTextAreaDetail')" checked /></td><td>Standard</td>
													</tr>
													<tr>
														<td><input type="radio" name="sidewallLeftTextChoice" value="script" onclick="changeText('sidewallLeftTextChoice','sw_left_custom_text','sw_left_custom_text_detail','sidewallLeftTextAreaDetail')" /></td><td>Script</td>
													</tr>
													<tr>
														<td><label>Text: </label></td><td> <input type="text" name="sidewallLeftText01" id="sidewallLeftText01" placeholder="Custom Text" onkeyup="updateText(this, 'swL_detail_ct01','swL_main_ct01')"></td>
													</tr>
												</table>
											</div>
										</div>
										<span id="sidewall-detail"></span>
									</div>
								</ul>
							</div>
							<div id="detail_image_holder_3" class="tab-pane"><ul><span id="handle-detail-right-inner"></span><span id="handle-detail-left-inner"></span></ul></div>
							<div id="detail_image_holder_4" class="tab-pane"><ul><span id=""></span></ul></div>
						</div><!-- tab content -->
						</div><!-- tab menu -->
					</div><!--container-->
				</div><!-- column -->
			</div><!-- row -->
		</div><!-- container -->
	</div><!-- bottom detail holder -->
	
	</div> <!--  Holder ---- My outermost container -->
		</div><!-- #content -->
	</div><!-- #primary -->

<div id="canvas">Content:</div>

<script>
		<?php 
	if($model == 'classic'){
		?>
		localStorage.clear();
		$('#ActivityDIV' ).makeSVGcolor('http://skydivewings.com/wp-content/uploads/svgs/wingsClassic.svg');
		loadSvg("#res-flap-detail-inner", "http://skydivewings.com/wp-content/uploads/svgs/res_flap_detail-03-5_25_17-01");
		document.querySelector("#product_id h1").innerHTML="Wings Classic";
		
<?php
	}
else{
	?>
	localStorage.clear();
		$('#ActivityDIV' ).makeSVGcolor('http://skydivewings.com/wp-content/uploads/svgs/wingsVision.svg');
		loadSvg("#res-flap-detail-inner", "http://skydivewings.com/wp-content/uploads/svgs/res_flap_detail_vision-01");
		document.querySelector("#product_id h1").innerHTML="Wings Vision";
<?php	
	}
	?>

	loadSvg("#ring-cover-detail", "http://skydivewings.com/wp-content/uploads/svgs/ring_cover_detail-01");
	loadSvg("#sidewall-detail", "http://skydivewings.com/wp-content/uploads/svgs/sidewall-detail-01");


	
	$('#btnClear'      ).btnClear();
	$('#btnDownloadSVG').btnDownload();

	makePinstripeColors();
	makeSidewallPinstripeColors();
	makeLogoSwatchesRFlap();
	makeLogoSwatchesRingCover();
	makeLogoSwatchesSidewall();
	

</script>

<?php get_sidebar(); ?>
<?php get_footer(); ?>