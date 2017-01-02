<?php
/*
Template Name: Sponsors Template
*/
get_header();
?>
<?php get_template_part( 'blocks/sponsor' ); ?>
				<div class="container">
					<div class="two-columns">
						<div class="main-holder">
							<div id="content">
								<section class="sponsors">
									<?php while ( have_posts() ) : the_post(); ?>	
										<h1><?php the_title();?></h1>
									<?php endwhile;?>
									<?php
										$category = get_field('categorie1');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Presenting</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list full-width">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'presenting-sponsor' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<!--<?php
										//$category = get_field('categorie2');
										//$args=array(
										//	'cat'      => $category,
										//	'post_type' => 'sponsors',
										//	'posts_per_page'   => -1,
										//	'order'	=> 'ASC',
										//	'orderby'	=> 'title',
										//	'post_status' => 'publish');
										//	query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>24kt Gold Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list alt">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( '24kt-gold-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
									//	$category = get_field('categorie3');
									//	$args=array(
									//		'cat'      => $category,
									//		'post_type' => 'sponsors',
									//		'posts_per_page'   => -1,
									//		'order'	=> 'ASC',
									//		'orderby'	=> 'title',
									//		'post_status' => 'publish');
									//		query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Gold Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list alt">
											<?php while (have_posts()) : the_post(); ?>				
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'gold-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>-->
									<?php
										$category = get_field('categorie4');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Palladium Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list alt">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'palladium-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie5');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Media Sponsor</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list small">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'media-sponsor' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie6');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Silver Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list bigger">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'silver-sponsor' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie7');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Titanium Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list bigger">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'titanium-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie8');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Bronze Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list bigger">
											<?php while (have_posts()) : the_post(); ?>	
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'bronze-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie9');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Copper Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list little">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<div class="holder">
													<div class="img-hold">
														<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'copper-wheel' ); ?></a>
													</div>
													<div class="view"><a href="<?php the_permalink();?>">View Profile</a></div>
												</div>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php
										$category = get_field('categorie');
										$args=array(
											'cat'      => $category,
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'post_status' => 'publish');
											query_posts($args);?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Big Wheel</h2>
										</div>
										<?php if( have_posts() ) :?>
										<ul class="ico-list item">
											<?php while (have_posts()) : the_post(); ?>
											<li>
												<a href="<?php the_permalink();?>">
													<div class="holder">
														<div class="img-hold">
															<a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_post_thumbnail( 'big-wheel' ); ?></a>
														</div>
													</div>
												</a>
											</li>
											<?php endwhile;?>
										</ul>
										<?php endif;?>
									</div>
									<?php wp_reset_query(); ?>
									<?php if ( get_field('categorie10')):?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Spokes</h2>
										</div>
										<div class="col-box">
										<?php
										$arr = get_field('categorie10');
										$args=array(
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'post_status' => 'publish',
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'category__in' => $arr
											);
											query_posts($args);?>
											<div class="col">
												<?php if( have_posts() ) :?>
												<ul class="list">
													<?php while (have_posts()) : the_post(); ?>		
													<li><a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_title();?></a></li>
													<?php endwhile;?>
												</ul>
												<?php endif;?>
											</div>
											<?php wp_reset_query(); ?>
										</div>
									</div>
									<?php endif;?>
									<?php if ( get_field('categorie11')):?>
									<div class="sponsor-hold">
										<div class="head">
											<h2>Donors</h2>
										</div>
										<div class="col-box">
											<?php
										$arr = get_field('categorie11');
										$args=array(
											'post_type' => 'sponsors',
											'posts_per_page'   => -1,
											'post_status' => 'publish',
											'order'	=> 'ASC',
											'orderby'	=> 'title',
											'category__in' => $arr
											);
											query_posts($args);?>
											<div class="col">
												<?php if( have_posts() ) :?>
												<ul class="list">
													<?php while (have_posts()) : the_post(); ?>		
													<li><a href="<?php echo get_field('sponsor_website');?>" target="_blank"><?php the_title();?></a></li>
													<?php endwhile;?>
												</ul>
												<?php endif;?>
											</div>
											<?php wp_reset_query(); ?>
										</div>
									</div>
									<?php endif;?>
								</section>
							</div>
						</div>
						<?php get_sidebar(); ?>
					</div>
					
				</div>

<?php get_footer(); ?>