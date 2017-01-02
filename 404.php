<?php get_header(); ?>
<?php get_template_part( 'blocks/sponsor' ); ?>
	<div class="container">
		<div class="two-columns">
			<div class="main-holder">
				<div id="content">
				<?php get_template_part( 'blocks/not_found' ); ?>
				</div>
			</div>
			<?php get_sidebar(); ?>
		</div>
	</div>
<?php get_footer(); ?>