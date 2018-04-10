<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', 'dummy');
}
if (!defined('DB_USER')) {
	define('DB_USER', 'dummy');
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', 'nightfall');
}
if (!defined('DB_HOST')) {
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't+dMKy3Um`=-o{KZS/2MRCi1UiA|--T~I!nS!LvnKO#D7ue7|r$cPtEp?x5;6]re');
define('SECURE_AUTH_KEY',  'ZCnyljgje Z:.6Y0jdo!SHyI/lrmT[U1@C={eF}W<8BCcIr],$|VW;nm(rJP$Vui');
define('LOGGED_IN_KEY',    'TB.CAJ(Zkz-dw.viWKuae.Mf5<i+CHN|r<tU.; hKK2};=LEChsyi|~aQz#1erk!');
define('NONCE_KEY',        '{gBC(k+`-+Ck(foKQ/~Z+d^<*I:C}*!nQk?,,WJ6PPpJL(dNUYZ2iB3}5,ZMt:5d');
define('AUTH_SALT',        'R2u#*15$pv6NH:O)w-|H]3r&O>bj;2+NFKdKn,x~-9kiK @)B^iF*v-Hcl60+]D!');
define('SECURE_AUTH_SALT', 'XhP890e|lgPSybNNswu1QQ9A~r=fqB2|,>qg3}9e(l:)kB0-)y>~t}+rpXqrq!a+');
define('LOGGED_IN_SALT',   '=E3&BzqhU@$vy~p-s~+#|-)ns:-gB+dn-F);|=HMi>m|,;c^ng6Yy4+m&H31_:sS');
define('NONCE_SALT',       'H[|Va:K{bDjH);+cS+oO-;]-fX35-S1p1kyp<v-dg@wPH76VJl7,Bi3Nd?;R!5~l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'nch';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * Set custom paths
 *
 * These are required because wordpress is installed in a subdirectory.
 */

$local_path = 'localhost/green_dyna-18';
// $_SERVER['SERVER_NAME']


if (!defined('WP_SITEURL')) {
	define('WP_SITEURL', 'http://' . $local_path . '/wordpress');
}
if (!defined('WP_HOME')) {
	define('WP_HOME',    'http://' . $local_path . '');
}
if (!defined('WP_CONTENT_DIR')) {
	define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
}
if (!defined('WP_CONTENT_URL')) {
	define('WP_CONTENT_URL', 'http://' . $local_path . '/content');
}


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', true);
}

/* Prevent coding edits from CMS */
define( 'DISALLOW_FILE_EDIT', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
