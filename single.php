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
			<?php the_post_thumbnail( 'full' ); ?>
			<?php the_content();?>
		</div>
			<?php comments_template(); ?>
			<?php get_template_part( 'blocks/pager-single', get_post_type() ); ?>
		<?php endwhile; ?>
		</section>
	</div>
			</div>
			<?php get_sidebar(); ?>
		</div>
	</div>
<?php get_footer(); ?>