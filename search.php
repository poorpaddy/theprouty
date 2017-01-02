<?php get_header(); ?>
<?php get_template_part( 'blocks/sponsor' ); ?>
	<div class="container">
		<div class="two-columns">
			<div class="main-holder">
				<div id="content">
					<div class="teamsandsearch">
						<?php echo do_shortcode('[sphere_search search="' . get_search_query() . '"]'); ?>
					</div>

		<?php if ( have_posts() ) : ?>
			<div <?php post_class(); ?>>
				<div class="title">
					<h1><?php printf( __( 'Search Results for: %s', 'theprouty' ), '<span>' . get_search_query() . '</span>'); ?></h1>
				</div>
			</div>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'blocks/content', get_post_type() ); ?>
			<?php endwhile; ?>
			<?php get_template_part( 'blocks/pager' ); ?>
		<?php else : ?>
			<?php get_template_part( 'blocks/not_found' ); ?>
		<?php endif; ?>
	</div>
			</div>
			<?php get_sidebar(); ?>
		</div>
	</div>
<?php get_footer(); ?>