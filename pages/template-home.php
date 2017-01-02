<?php
/*
Template Name: Home Template
*/
get_header();
?>
<div class="visual">
			<?php while ( have_posts() ) : the_post(); ?>
					<div class="container">
						<?php if ($gal = get_field('gallery_header')):?>
						<div class="holder">
							<?php echo do_shortcode( $gal ) ?>
						</div>
						<?php endif;?>
					</div>
			<?php endwhile;?>
				</div>
				<section class="intro">
					<div class="container">
						<div class="donate-box">
							<a class="btn-blue center" href="<?php echo get_field('register_button_link');?>">Register</a>
							<a href="<?php echo get_field('donate_button_link');?>" class="btn-red popmake-donate">Donate</a>
							<div class="progressBar">
								<span class="line"></span>
							</div>
							<h2>Raised so far</h2>
							<span class="total"><?php echo get_field('totoal');?></span>
						</div>
						<script type="text/javascript">
							(function($){
								//Thermometer Script
								$('.donate-box').each(function() {
									var jelm = $(this),
										goal = parseInt(<?php echo get_field('goal');?>),
										raised = parseInt(<?php echo get_field('totoal');?>),
										percentage = Math.floor(raised / goal * 100),
										duration = parseFloat("4") * 1000, // convert to milliseconds
										jindicator = jelm.find('.line'),
										jraised_text = jelm.find('.total');
									
									setTimeout(function() {
										jindicator.width(0).animate({
											width: percentage + '%'
										}, {
											duration: duration,
											step: function(now, fx) {
												jraised_text.text(formatCurrency(Math.round( (now / 100) * raised )));
											},
											complete: function() {
												jraised_text.text(formatCurrency(raised));
											}
										});
									},2000);
									
								});
							})(jQuery);
							//Format Currency for Thermometer
							function formatCurrency(num, symbol) {
								symbol = symbol || '$';
								num = num.toString().replace(/\$|\,/g, '');
								if (isNaN(num)) num = "0";
								sign = (num == (num = Math.abs(num)));
								num = Math.floor(num * 100 + 0.50000000001);
								cents = num % 100;
								num = Math.floor(num / 100).toString();
								if (cents < 10) cents = "0" + cents;
								for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
									num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
								return (((sign) ? '' : '-') + symbol + num);
							}
						</script>
								<div class="text-holder">
									<div class="sponsor-hold">
										<strong class="title">Top Sponsors</strong>
										<?php
										$category = get_field('category');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'post_status' => 'publish');
											query_posts($args);?>
											<?php if( have_posts() ) : ?>
											<div class="gutter">
											<div class="cycle-gallery">
												<div class="mask">
												 <div class="slideset">
												<?php while (have_posts()) : the_post(); ?>
												  <div class="slide">
												   <div class="img-box">
												    <a href="<?php the_permalink();?>">
												     <?php the_post_thumbnail( 'full' ); ?> 
												    </a>
												   </div>
												  </div>
												<?php endwhile;?>
												 </div>
												</div>
											       </div>
											   </div>
											<?php endif;?>
									<?php wp_reset_query(); ?>
									<?php wp_reset_postdata();?>
									</div>
											<div class="text">
												<h1><?php echo get_field('title_sponsor_block');?></h1>
												<time class="date" datetime="<?php the_time('Y-n-j') ?>"><?php echo get_field('subtitle_sponsor_block');?></time>
												<p><?php echo get_field('content_sponsor_block').' ';?></p>
											</div>
									</div>
					</div>
				</section>
				<div class="container">
					<div class="content-holder">
						<div class="video-holder">
							<div class="video-box">
								<?php echo get_field('video');?>
							</div>
							<div class="text-hold">
								<h2><?php echo get_field('heading_video');?></h2>
								<p><?php echo get_field('content_video');?></p>
							</div>
						</div>
						<div class="section">
							<div class="add-nav">
							<?php ubermenu( 'home-content-area' , array( 'theme_location' => 'home' ) ); ?>
							</div>
							<div class="col-holder">
								<div class="col">
									<?php echo get_field('leaderboards');?>
								</div>
								<div class="col">
									<div class="text-box">
										<?php echo get_field('register_button');?>
										<h2><?php echo get_field('heding');?></h2>
										<?php echo get_field('content_home');?>
										<div class="inform-box">
											<p><?php echo get_field('inform_box');?></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				<?php get_template_part( 'blocks/gallery' ); ?>
				</div>

<?php get_footer(); ?>