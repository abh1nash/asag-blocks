<?php
/**
 * Plugin Name: ASAG Blocks
 * Plugin URI: http://abhinash.net/
 * Version: 1.0.0.2
 * Description: Custom Gutenberg Blocks for ASAG
 * Author: Abhinash Khatiwada
 * Author URI: https://abhinash.net/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ASAG
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
