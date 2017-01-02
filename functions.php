<?php

//Staging restrictions
if ( file_exists( sys_get_temp_dir() . '/staging-restrictions.php' ) ) {
	define( 'STAGING_RESTRICTIONS', true );
	require_once sys_get_temp_dir() . '/staging-restrictions.php';
}

include( get_template_directory() . '/classes.php' );
include( get_template_directory() . '/widgets.php' );

add_action( 'themecheck_checks_loaded', 'theme_disable_cheks' );
function theme_disable_cheks() {
	$disabled_checks = array( 'TagCheck' );
	global $themechecks;
	foreach ( $themechecks as $key => $check ) {
		if ( is_object( $check ) && in_array( get_class( $check ), $disabled_checks ) ) {
			unset( $themechecks[$key] );
		}
	}
}

add_theme_support( 'automatic-feed-links' );

if ( !isset( $content_width ) ) $content_width = 900;

remove_action( 'wp_head', 'wp_generator' );

add_action( 'after_setup_theme', 'theme_localization' );
function theme_localization () {
	load_theme_textdomain( 'theprouty', get_template_directory() . '/languages' );
}

if ( function_exists( 'register_sidebar' ) ) {
	register_sidebar( array(
		'id'            => 'default-sidebar',
		'name'          => __( 'Default Sidebar', 'theprouty' ),
		'before_widget' => '<div class="widget %2$s" id="%1$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h3>'
	) );
}

if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 50, 50, true ); // Normal post thumbnails
	add_image_size( 'thumbnail_400x9999', 400, 9999, true );
	//add_image_size( 'gallery', 98, 86, true );
	//add_image_size( 'gallery-header', 110, 97, false);
	add_image_size( 'top-sponsors-home', 128, 128, false );
	add_image_size( 'sponsors-gallery-home', 98, 86, false );
	add_image_size( 'sponsors-gallery-header', 90, 77, false);
	add_image_size( 'presenting-sponsor', 639, 200, false);
	add_image_size( '24kt-gold-wheel', 415, 200, false);
	add_image_size( 'gold-wheel', 300, 200, false);
	add_image_size( 'palladium-wheel', 200, 200, false);
	add_image_size( 'media-sponsor', 189, 112, false);
	add_image_size( 'silver-sponsor', 189, 112, false);
	add_image_size( 'titanium-wheel', 189, 112, false);
	add_image_size( 'bronze-wheel', 189, 112, false);
	add_image_size( 'copper-wheel', 133, 78, false);
	add_image_size( 'big-wheel', 133, 100, false);
}

register_nav_menus( array(
	'primary' => __( 'Primary Navigation', 'theprouty' ),
	'home' => __( 'Content Home Navigation', 'theprouty' ),
	'ult' => __( 'Content Ulimate Navigation', 'theprouty' ),
	'side' => __( 'Sidebar Navigation', 'theprouty' ),
) );

//Add [email]...[/email] shortcode
function shortcode_email( $atts, $content ) {
	return antispambot( $content );
}
add_shortcode( 'email', 'shortcode_email' );

//Register tag [template-url]
function filter_template_url( $text ) {
	return str_replace( '[template-url]', get_bloginfo( 'template_url' ), $text );
}
add_filter( 'the_content', 'filter_template_url' );
add_filter( 'widget_text', 'filter_template_url' );

//Register tag [site-url]
function filter_site_url( $text ) {
	return str_replace( '[site-url]', get_bloginfo( 'url' ), $text );
}
add_filter( 'the_content', 'filter_site_url' );
add_filter( 'widget_text', 'filter_site_url' );

//Replace standard wp menu classes
//function change_menu_classes( $css_classes ) {
//	return str_replace( array( 'current-menu-item', 'current-menu-parent', 'current-menu-ancestor' ), 'active', $css_classes );
//}
//add_filter( 'nav_menu_css_class', 'change_menu_classes' );

//Allow tags in category description
$filters = array( 'pre_term_description', 'pre_link_description', 'pre_link_notes', 'pre_user_description' );
foreach ( $filters as $filter ) {
	remove_filter( $filter, 'wp_filter_kses' );
}

//Make wp admin menu html valid
function wp_admin_bar_valid_search_menu( $wp_admin_bar ) {
	if ( is_admin() )
		return;

	$form  = '<form action="' . esc_url( home_url( '/' ) ) . '" method="get" id="adminbarsearch"><div>';
	$form .= '<input class="adminbar-input" name="s" id="adminbar-search" tabindex="10" type="text" value="" maxlength="150" />';
	$form .= '<input type="submit" class="adminbar-button" value="' . __( 'Search', 'theprouty' ) . '"/>';
	$form .= '</div></form>';

	$wp_admin_bar->add_menu( array(
		'parent' => 'top-secondary',
		'id'     => 'search',
		'title'  => $form,
		'meta'   => array(
			'class'    => 'admin-bar-search',
			'tabindex' => -1,
		)
	) );
}

function fix_admin_menu_search() {
	remove_action( 'admin_bar_menu', 'wp_admin_bar_search_menu', 4 );
	add_action( 'admin_bar_menu', 'wp_admin_bar_valid_search_menu', 4 );
}
add_action( 'add_admin_bar_menus', 'fix_admin_menu_search' );

//Disable comments on pages by default
function theme_page_comment_status( $post_ID, $post, $update ) {
	if ( !$update ) {
		remove_action( 'save_post_page', 'theme_page_comment_status', 10 );
		wp_update_post( array(
			'ID' => $post->ID,
			'comment_status' => 'closed',
		) );
		add_action( 'save_post_page', 'theme_page_comment_status', 10, 3 );
	}
}
add_action( 'save_post_page', 'theme_page_comment_status', 10, 3 );

//custom excerpt
function theme_the_excerpt() {
	global $post;
	
	if ( trim( $post->post_excerpt ) ) {
		the_excerpt();
	} elseif ( strpos( $post->post_content, '<!--more-->' ) !== false ) {
		the_content();
	} else {
		the_excerpt();
	}
}

//theme password form
function theme_get_the_password_form() {
	$post = get_post( $post );
	$label = 'pwbox-' . ( empty($post->ID) ? rand() : $post->ID );
	$output = '<form action="' . esc_url( site_url( 'wp-login.php?action=postpass', 'login_post' ) ) . '" class="post-password-form" method="post">
	<p>' . __( 'This content is password protected. To view it please enter your password below:' ) . '</p>
	<p><label for="' . $label . '">' . __( 'Password:' ) . '</label> <input name="post_password" id="' . $label . '" type="password" size="20" /> <input type="submit" name="Submit" value="' . esc_attr__( 'Submit' ) . '" /></p></form>
	';
	return $output;
}
add_filter( 'the_password_form', 'theme_get_the_password_form' );

//Making jQuery Google API
function modify_jquery() {
	if (!is_admin()) {
		// comment out the next two lines to load the local copy of jQuery
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js', false, '1.11.2');
		wp_enqueue_script('jquery');
	}
}
add_action('init', 'modify_jquery');

function prouty_scripts_styles() {
	/*
	 * Adds JavaScript to pages with the comment form to support
	 * sites with threaded comments (when in use).
	 */
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'theme-comment-reply', get_template_directory_uri() . '/js/comment-reply.js' );

	// Loads JavaScript file with functionality specific.
	wp_enqueue_script( 'prouty-script', get_template_directory_uri() . '/js/jquery.main.js', array( 'jquery' ) );

	//Loads JavaScript for registration
	if ( is_page('Register') || is_page('2015') || is_page('RegisterTest')) {
		wp_enqueue_script( 'prouty-registration', get_template_directory_uri() . '/js/registration.js', array( 'jquery' ) );
	}
	
	// Loads our main stylesheet.
	wp_enqueue_style( 'prouty-style', get_stylesheet_uri(), array() );
	
	// Implementation stylesheet.
	wp_enqueue_style( 'prouty-theme', get_template_directory_uri() . '/theme.css', array() );	

	// Loads the Internet Explorer specific stylesheet.
	wp_enqueue_style( 'prouty-ie', get_template_directory_uri() . '/css/ie.css' );
	wp_style_add_data( 'prouty-ie', 'conditional', 'lt IE 9' );
}
add_action( 'wp_enqueue_scripts', 'prouty_scripts_styles' );

function theme_name_wp_title( $title, $sep ) {
	if ( is_feed() ) {
		return $title;
	}
	
	global $page, $paged;

	// Add the blog name
	$title .= get_bloginfo( 'name', 'display' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title .= " $sep $site_description";
	}

	// Add a page number if necessary:
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title .= " $sep " . sprintf( __( 'Page %s', '_s' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'theme_name_wp_title', 10, 2 );

//theme options tab in appearance
if( function_exists( 'acf_add_options_sub_page' ) ) {
	acf_add_options_sub_page( array(
		'title'  => 'Theme Options',
		'parent' => 'themes.php',
	) );
}

//acf theme functions placeholders
if( !class_exists( 'acf' ) && !is_admin() ) {
	function get_field_reference( $field_name, $post_id ) { return ''; }
	function get_field_objects( $post_id = false, $options = array() ) { return false; }
	function get_fields( $post_id = false ) { return false; }
	function get_field( $field_key, $post_id = false, $format_value = true )  { return false; }
	function get_field_object( $field_key, $post_id = false, $options = array() ) { return false; }
	function the_field( $field_name, $post_id = false ) {}
	function have_rows( $field_name, $post_id = false ) { return false; }
	function the_row() {}
	function reset_rows( $hard_reset = false ) {}
	function has_sub_field( $field_name, $post_id = false ) { return false; }
	function get_sub_field( $field_name ) { return false; }
	function the_sub_field( $field_name ) {}
	function get_sub_field_object( $child_name ) { return false;}
	function acf_get_child_field_from_parent_field( $child_name, $parent ) { return false; }
	function register_field_group( $array ) {}
	function get_row_layout() { return false; }
	function acf_form_head() {}
	function acf_form( $options = array() ) {}
	function update_field( $field_key, $value, $post_id = false ) { return false; }
	function delete_field( $field_name, $post_id ) {}
	function create_field( $field ) {}
	function reset_the_repeater_field() {}
	function the_repeater_field( $field_name, $post_id = false ) { return false; }
	function the_flexible_field( $field_name, $post_id = false ) { return false; }
	function acf_filter_post_id( $post_id ) { return $post_id; }
}
add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'sponsors',
    array(
      'labels' => array(
        'name' => __( 'Sponsors' ),
        'singular_name' => __( 'Sponsors' ),
	
      ),
      'taxonomies' => array('category'),
      'public' => true,
      'has_archive' => true,
      
    )
  );
  add_post_type_support( 'sponsors', 'thumbnail' );
  add_post_type_support( 'sponsors', 'excerpt' );
}

//Create friendly search page URL
function fb_change_search_url_rewrite() {
	if ( is_search() && ! empty( $_GET['s'] ) ) {
		wp_redirect( home_url( "/search/" ) . urlencode( get_query_var( 's' ) ) );
		exit();
	}	
}
add_action( 'template_redirect', 'fb_change_search_url_rewrite' );

//Disable auto paragraphs on posts/pages with custom field 'wpautop' == false.
function custom_wpautop($content) {
	$autoparagraph = get_field('auto_paragraph');
	if ($autoparagraph == 'False')
		return $content;
	else
		return wpautop($content);
}
remove_filter('the_content', 'wpautop');
add_filter('the_content', 'custom_wpautop');
