<?php
/**
 * The template for displaying the front page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package GeekPack_Underscores
 */

get_header( 'widgets' );
?>

		<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<div id="front-page-1" class="widget-area">
			<div class="wrap">
				<div class="inner"><?php dynamic_sidebar( 'front-page-1' ); ?></div>
			</div>
		</div>

		<section class="featured-work">
			<div class="wrap">
				<div class="inner">
					<h1>Our Work</h1>
				</div>
			</div>
		</section>

		<div id="front-page-2" class="widget-area">
			<div class="wrap">
				<div class="inner"><?php dynamic_sidebar( 'front-page-2' ); ?></div>
			</div>
		</div>

		<div id="front-page-3" class="widget-area">
			<div class="wrap">
				<div class="inner"><?php dynamic_sidebar( 'front-page-3' ); ?></div>
			</div>
		</div>

		</main><!-- #main -->
	</div><!-- #primary -->


<?php
get_footer( 'widgets' );