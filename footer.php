			</main>
			<footer id="footer">
				<div class="container">
					<div class="holder">
						<div class="contacts">
							<strong class="title"><?php echo get_field('address_title','option');?></strong>
							<address>
                                                            <?php echo get_field('address','option');?>
                                                        </address>
						</div>
						<div class="social">
							<ul class="social-networks">
								<li><a href="<?php echo get_field('web_link','option');?>" class="web">web</a></li>
								<li><a href="<?php echo get_field('facebook','option');?>" class="facebook">facebook</a></li>
								<li><a href="<?php echo get_field('twitter','option');?>" class="twitter">twitter</a></li>
								<li><a href="<?php echo get_field('youtube','option');?>" class="youtube">youtube</a></li>
								<li><a href="<?php echo get_field('pinterest','option');?>" class="pinterest">pinterest</a></li>
								<li><a href="<?php echo get_field('instagram','option');?>" class="instagram">instagram</a></li>
							</ul>
                                                        <?php $img = get_field('partner_logo','option');?>
							<strong class="logo-friend"><a href="<?php echo get_field('partner_logo_url','option');?>"><img src="<?php echo $img['url'] ;?>" alt="<?php echo $img['alt'] ;?>"></a></strong>
						</div>
						<div class="text-holder">
							<p><?php echo get_field('info_content','option');?></p>
							<p><a href="<?php echo get_field('info_link_url','option');?>"><?php echo get_field('info_link_label','option');?></a></p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
	<a href="#" class="scrollToTop">Scroll To Top</a>
		<?php wp_footer(); ?>
	</body>
</html>