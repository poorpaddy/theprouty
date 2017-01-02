<?php

// WP_Query arguments
$args = array (
	'posts_per_page'         => -1,
	'post_type'              => 'sponsors',
	'post_status'            => 'publish',
	'cat'                    => '-1,-44,-71,-72,-73',
	'order'                	 => 'ASC',
	'nopaging'               => 'true',
	'orderby'                => 'title'
);

// The Query
$sponsors = new WP_Query( $args );
$count = $sponsors->post_count/6;
											?>
					<?php if( $sponsors->have_posts() ) :  $i = 0; $f =7; $countr=0; $z = 0;?>
					<div class="gallery-sponsors">
						<strong class="title">Special Thanks To Our Sponsors</strong>
						<div class="mask">
							<div class="slideset">
								<?php for ($k = 1; $k <= $count; $k++):
								$countr = $countr+$f;?>
									<?php if ($k==1):?>
									<?php else:?>
										<?php $i = $i+$f;?>
									<?php endif;?>
								<div class="slide">
									<ul class="sponsors-list">
										<?php $z=0;?>
									<?php while ($sponsors->have_posts()) : $sponsors->the_post(); ?>
										<?php $z++; if ($z<=$countr and $z>$i): ?>
											<li>
												<div class="img-hold">
													<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'sponsors-gallery-home' ); ?><?php echo $z;?></a>
												</div>
											</li>
											
										<?php endif;?>
									<?php endwhile; ?>
									</ul>
								</div>
								<?php endfor;?>
							</div>
						</div>
						
						<nav class="pagination"><?php $k =0;?>
							<ul>
								<?php while ($q<$count-1): $q++;?>
									<?php if ($q==1):?>
										<li class="active"><a href="#"><?php echo $q;?></a></li>
									<?php else:?>
										<li><a href="#"><?php echo $q;?></a></li>
									<?php endif;?>	
								<?php endwhile;?>
							</ul>
						</nav>
					</div>
					<?php endif;?>
					<?php wp_reset_query(); ?>