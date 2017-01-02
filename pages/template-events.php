<?php
/*
Template Name: Events Template
*/
get_header();
	$count_posts = wp_count_posts('sponsors');
	$published_posts = $count_posts->publish;
	$count = $published_posts/7;
?>
			<div class="visual">
					<div class="container">
						<div class="holder">
							<?php echo get_field('gallery_header');?>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="two-columns">
						<div class="main-holder">
							<div class="intro">
								<?php while ( have_posts() ) : the_post(); ?>
								<h1><?php the_title();?></h1>
								<div class="holder">
									<div class="text-holder">
										<?php the_content();?>
									</div>
								<?php endwhile;?>
									<div class="btn-hold">
										<a href="<?php echo get_field('donate_link');?>" class="btn-red popmake-donate">Donate</a>
										<a href="<?php echo get_field('register_link');?>" class="btn-blue">Register</a>
									</div>
								</div>
							</div>
							<div id="content">
								<div class="section">
									<div class="add-nav">
												<?php ubermenu( 'ultimate-content-area' , array( 'menu' => get_field('tabs') ) ); ?>
									</div>
									<div class="col-holder">
										<div class="col">
											<?php echo get_field('leaderboards');?>
										</div>
										<div class="col">
											<div class="text-box">
												<h2><?php echo get_field('heading_tab');?></h2>
												<p><?php echo get_field('content_tab');?></p>
												<div class="video-box">
													<?php echo get_field('video_tab');?>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<?php get_sidebar(); ?>
					</div>
					<?php get_template_part( 'blocks/gallery' ); ?>
				</div>

<?php get_footer(); ?>