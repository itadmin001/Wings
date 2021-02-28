<?php
if ( file_exists( dirname( __FILE__ ) . '/gd-config.php' ) ) {
	require_once( dirname( __FILE__ ) . '/gd-config.php' );
	define( 'FS_METHOD', 'direct' );
	define( 'FS_CHMOD_DIR', ( 0705 & ~ umask() ) );
	define( 'FS_CHMOD_FILE', ( 0604 & ~ umask() ) );
}
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
define('DB_NAME', "f2e541442508684");

/** MySQL database username */
define('DB_USER', "f2e541442508684");

/** MySQL database password */
define('DB_PASSWORD', "rbMA)L1vN7Dz");

/** MySQL hostname */
define('DB_HOST', "f2e541442508684.db.41442508.81d.hostedresource.net:3309");

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jBMM89bMmImJgUUWM7QivJPRkWMMxlWtEywgw8xIUeF2inHiutk6uEVPnAQUk6LS');
define('SECURE_AUTH_KEY',  'pPC9LyOoOzlKQU8cckxn3A13BCtoDqA3tsDVwmjXfQYHnm2cw2iKQzGRNNk8tnN3');
define('LOGGED_IN_KEY',    '1DashJwxN2m9sT7B2Dc9TIqlAxwf4M63a8cahQEYVtvmBNMttBiRmfKlKuWTlPZV');
define('NONCE_KEY',        '1Wah5WdJm3Q8M8v2IRpm9jBoZRxISZtr82PGzN4eJn9YqV9EF3DF8PMDhcjC8UFU');
define('AUTH_SALT',        'OmOtwCCzYRqJY4GSRyu08vF7ewsr7vYfxsi1hQT2xCNt6ndLvqBbVpvi3a6SsGzo');
define('SECURE_AUTH_SALT', 'MoPnYVssPjdcwOF2AcPK6lJXNmbt6e2ukaCzQ9FQri4PtXr9XyDc182nxaov2OyI');
define('LOGGED_IN_SALT',   's1sTAtMzFDUMuZffOqnTbkb79XlV8IcSEpwr19XS2jeLDDQzP0zjT9e6HjeurMm0');
define('NONCE_SALT',       'qiGFxQ81PeLLH4INkCeTRU0fQh6SnNpAbKYk6eXDp2PCU6co0GGtwFToPNxmOkoh');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
