<?php
/**
 * Main plugin bootstrap.
 *
 * @package OocakFullscreenSlider
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main plugin class. Singleton.
 */
final class OOCAKFS_Plugin {

	/**
	 * Singleton instance.
	 *
	 * @var OOCAKFS_Plugin|null
	 */
	private static $instance = null;

	/**
	 * Get the singleton instance.
	 *
	 * @return OOCAKFS_Plugin
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor. Wires up the plugin.
	 */
	private function __construct() {
		$this->load_dependencies();
		$this->register_hooks();
	}

	/**
	 * Load the class files.
	 */
	private function load_dependencies() {
		require_once OOCAKFS_PATH . 'includes/class-cpt.php';
		require_once OOCAKFS_PATH . 'includes/class-rest.php';
		require_once OOCAKFS_PATH . 'includes/class-admin.php';
		require_once OOCAKFS_PATH . 'includes/class-assets.php';
		require_once OOCAKFS_PATH . 'includes/class-shortcode.php';
	}

	/**
	 * Instantiate the sub-classes so their hooks register.
	 */
	private function register_hooks() {
		new OOCAKFS_CPT();
		new OOCAKFS_REST();
		new OOCAKFS_Admin();
		new OOCAKFS_Assets();
		new OOCAKFS_Shortcode();
	}
}