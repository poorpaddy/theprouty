<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?php wp_title( ' | ', true, 'right' ); ?></title>
		<script type="text/javascript">
			var pathInfo = {
				base: '<?php echo get_template_directory_uri(); ?>/',
				css: 'css/',
				js: 'js/',
				swf: 'swf/',
			}
		</script>
		<?php wp_head(); ?>
	</head>
	<body>
	<div id="wrapper">
		<div class="w1">
			<header id="header">
				<div class="container">
					<strong class="logo"><a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/prouty-logo.png" alt="<?php bloginfo( 'name' ); ?>"></a></strong>
							<div class="nav-holder">
								<?php ubermenu( 'header-menu' , array( 'theme_location' => 'primary' ) ); ?>
							</div>
				</div>
			</header>
			<main role="main" id="main">