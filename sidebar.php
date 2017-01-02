<aside id="sidebar">
							<?php if ($tit = get_field('sidebar_heading')):?>
							<h2><?php echo $tit ;?></h2>
							<?php else:?>
							<h2>Ways to Prouty</h2>
							<?php endif;?>
							<?php if (get_field('menu')):?>
									<nav class="side-nav">
									<?php $men = get_field('menu');?>
									<?php if( $men )
									wp_nav_menu( array(
										'container' => false,
										'menu'            => $men,
										'items_wrap'     => '<ul>%3$s</ul>',
										'walker'         => new Custom_Walker_Nav_Menu
										)
										); ?>
									</nav>
							<?php else:?>
									<nav class="side-nav">
									<?php if(has_nav_menu('side'))
									wp_nav_menu( array('container' => false,
										'theme_location' => 'side',
										'items_wrap' => '<ul>%3$s</ul>',
										'walker' => new Custom_Walker_Nav_Menu) ); ?>
									</nav>
							<?php endif;?>
							<?php if (is_page_template( 'pages/template-ultimate.php' )):?>
								<?php get_template_part( 'blocks/search' ); ?>
							<?php endif;?>
							<?php if (!is_page_template( 'pages/template-ultimate.php' ) and !is_page_template( 'pages/template-home.php' )):?>
								<div class="donate-box">
									<p><?php echo get_field('content_donate','option');?></p>
									<a href="<?php echo get_field('link_donate','option');?>" class="btn-red popmake-donate">Donate</a>
								</div>
								<?php
						$count_posts = wp_count_posts('sponsors');
						$published_posts = $count_posts->publish;
						$count = $published_posts/4;
						$args = array(
							'posts_per_page' => -1,
							'post_type' => 'sponsors'
							);
							query_posts($args);
					?>
					<?php wp_reset_query(); ?>
							<?php endif;?>
						</aside>