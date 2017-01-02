<?php
/*
Template Name: Search Template
*/
get_header(); ?>
<?php get_template_part( 'blocks/sponsor' ); ?>
				<div class="container">
					<div class="two-columns">
						<div class="main-holder">
							<div id="content">
								<section class="about">
									<h1><?php the_title();?></h1>
									<?php get_search_form(); ?>
								</section>
							</div>
						</div>
				<?php get_sidebar(); ?>
			</div>
			<?php get_template_part( 'blocks/gallery' ); ?>
		</div>
<?php get_footer(); ?>