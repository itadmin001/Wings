
<?php
/**
 * Template Name: Wings Designer Choice
 */
get_header(); ?>
	<div id="primary" class="site-content">
		<div id="content" role="main">
			 <div class='holder'>
				  <div id="logo"><img src="http://skydivewings.com/wp-content/uploads/wings-classic.png" /></div>
				  <div id="logo2"><img src="http://skydivewings.com/wp-content/uploads/logo-top.png" /></div>
				  <div class='myTitle'>Skydive Wings </div>
				  <div id="product_id">
				  </div>
					<div class="container main">
					<span class="choiceIntro">Please select a Wings Model to begin designing your new custom container</span>
						<div class="row">
							<div class="wingsChoice">
								<h3 class="choiceTitle">Wings Classic</h3>
								<form method="post" action="http://skydivewings.com/designer-step-2/?model=classic&title=Wings%20Classic" id="classicForm">
								<input type="hidden" name="model" value="classic">
								</form>
								<a href="#" onclick="document.getElementById('classicForm').submit();"><img id="wingsClassicChoice" src="http://skydivewings.com/wp-content/uploads/wings_classic.png"></a>
							</div>
							<div class="wingsChoice">
								<h3 class="choiceTitle">Wings Vision</h3>
								<form method="post" action="http://skydivewings.com/designer-step-2/?model=vision&title=Wings%20Vision" id="visionForm">
								<a href="#" onclick="document.getElementById('visionForm').submit();"><img id="wingsVisionChoice"src="http://skydivewings.com/wp-content/uploads/wings_vision.png"></a>
								<input type="hidden" value="vision" name="model">
								</form>
							</div><!-- wings choice -->
							<p id="notice" style="font-weight:bold;"><span class="warning">***NOTICE:</span> Colors shown within the designer may differ from actual fabric colors due to Individual monitor settings.</p>
						</div><!-- row -->
							
					</div>
	
				</div> <!--  Holder ---- My outermost container -->
		</div><!-- #content -->
	</div><!-- #primary -->


<?php get_sidebar(); ?>
<?php get_footer(); ?>