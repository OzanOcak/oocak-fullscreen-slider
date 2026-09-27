<?php
// Placeholder. Will be filled in next.<?php
/**
 * [oocak_slider] shortcode.
 *
 * @package OocakFullscreenSlider
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Renders the slider on the front end.
 */
class OOCAKFS_Shortcode {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_shortcode( 'oocak_slider', array( $this, 'render' ) );
	}

	/**
	 * Render the shortcode.
	 *
	 * @param array $atts Shortcode attributes.
	 * @return string
	 */
	public function render( $atts ) {
		$atts = shortcode_atts(
			array( 'id' => 0 ),
			$atts,
			'oocak_slider'
		);

		$id = (int) $atts['id'];
		if ( ! $id ) {
			return '';
		}

		$post = get_post( $id );
        if ( ! $post || OOCAKFS_CPT::POST_TYPE !== $post->post_type || 'trash' === $post->post_status ) {
            return '';
        }

		$slides = OOCAKFS_REST::get_slides( $id );
		if ( empty( $slides ) ) {
			return '';
		}

		wp_enqueue_script( 'oocakfs-frontend' );
		wp_enqueue_style( 'oocakfs-frontend' );

		ob_start();
		?>
		<div id="oocakfs-slider-<?php echo esc_attr( $id ); ?>" class="oocakfs-root"></div>
		<script type="application/json" id="oocakfs-data-<?php echo esc_attr( $id ); ?>">
			<?php echo wp_json_encode( array( 'slides' => $slides ) ); ?>
		</script>
		<?php
		return ob_get_clean();
	}
}