<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8XVMBtypjIWDOVEMommD25Kv3cHKa3KchAxrLHPDMsFt6cLBSpTMEkk5inn0iOzeLFeYKvWeJb03nq8LL4JFTw==');
define('SECURE_AUTH_KEY',  'Mk9S3N6Ypoy6JA5ivRhI1C2hS3ZBGBG0yNWGYxmzw76sruc/I40KsYw1aMkjDiuzqQ80KuKNt91mSaB4M7M6mA==');
define('LOGGED_IN_KEY',    'FnfnxAb461iWJc7FsnqeZ6FIp9n0wW9MFTVzRL127BaOQ0MGhjbqY23twr7JTEN7MEq01eD5PQqqNNydFmqmXQ==');
define('NONCE_KEY',        '0sWagFXAlzBiMHf81UEDphxy88qRYcLBfJUI0flGLdx+idg9E61XjDLo3cJ+j2Z0XBImKHoUUZ9JnPRmJzq+rg==');
define('AUTH_SALT',        'Ye3OXL4tvqH7/ekV72hiiCf6avR5UtbLgSkst7jAOgvuZOSNxybwdHJzOTc66N+3eqitTibqLnmUJxSZxQ3N3w==');
define('SECURE_AUTH_SALT', 'V1Nc3aovll47ZUmcx1TESiq4CgOL0ohMxyYCzhwLBdXcfQNLk9UtDbl9lovTAOmzytvryr934YHH0xZANcMKEA==');
define('LOGGED_IN_SALT',   'Pbxap+v+dSVEMXYBbzd1zUI9CPXDANOxN9YofgxV3vxlihtSFkUC/UtbRfg8ONMg1MnJ+B55KUPRQyf5cJA+Gw==');
define('NONCE_SALT',       'So6RXclcU6+2sYAUg8TycDBQAz5PBIMb8r0dj4QZY6+Agun4N330iYsTSQOaaMK65bdTSMMjVzIAUYaUoiJs5A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
