<div class="sponsor-head">
			<?php
				$category = get_field('category');
				if (is_page_template( 'pages/template-home.php' )){
					$args=array(
						'cat'      => $category,
						'post_type' => 'sponsors',
						'post_status' => 'publish',
						'posts_per_page' => 1);
				}else {
					$args=array(
							'category_name' => 'top-sponsors',
							'post_type' => 'sponsors',
							'post_status' => 'publish',
							'posts_per_page' => -1);}
							query_posts($args);
				?>
					<?php if( have_posts() ) :?>
						<div class="sponsor-head2">
							<div class="container">
							 <div class="sponsor-hold">
							  <div class="cycle-gallery2">
							   <div class="mask">
							    <div class="slideset">
							   <?php while (have_posts()) : the_post(); ?>
							     <div class="slide">
							      <div class="img-box">
							       <a href="<?php the_permalink();?>">
								<?php the_post_thumbnail( 'sponsors-gallery-header' ); ?>
							       </a>
							      </div>
							     </div>
							     <?php endwhile;?>
							    </div>
							   </div>
							  </div>
							 </div>
							</div>
						       </div>
					<?php endif;?>
					<?php wp_reset_query(); ?>
				</div>