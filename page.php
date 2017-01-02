<?php get_header(); ?>
<?php get_template_part( 'blocks/sponsor' ); ?>
				<div class="container">
					<div class="two-columns">
						<div class="main-holder">
							<div id="content">
								<section class="about">
									<?php while ( have_posts() ) : the_post(); ?>
									<div class="text-hold">
										<h1><?php the_title();?></h1>
										<?php the_content();?>
									</div>
									<?php endwhile;?>
									<?php if ( get_post_meta($post->ID, 'enable', true) and have_rows('fields') ) : ?>
									<ul class="about-list">
										<?php while ( have_rows('fields') ) : the_row();
										$image = get_sub_field('image'); ?>
										<li>
											<div class="img-hold">
												<a href="<?php echo get_sub_field('link'); ?>"><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"></a>
											</div>
											<div class="text-box">
												<h2><a href="<?php echo get_sub_field('link'); ?>"><?php echo get_sub_field('heading'); ?></a></h2>
												<p><?php echo get_sub_field('content'); ?></p>
											</div>
											<div class="btn-more">
												<a href="<?php echo get_sub_field('link'); ?>">More &raquo;</a>
											</div>
										</li>
										<?php endwhile;?>
									</ul>
									<?php endif;?>
									<?php if ( get_post_meta($post->ID, 'enable', true) and have_rows('anchors') ) : ?>
									<?php while ( have_rows('anchors') ) : the_row(); ?>
									<div class="anchor-content">
										<?php echo get_sub_field('anchor_content'); ?>
									</div>
									<?php endwhile;?>
									<?php endif;?>
								</section>
							</div>
						</div>
				<?php get_sidebar(); ?>
			</div>
			<?php get_template_part( 'blocks/gallery' ); ?>
		</div>
<?php get_footer(); ?>