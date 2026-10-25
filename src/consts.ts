// サイト全体で使う値をここにまとめています。

export const SITE_TITLE = 'ハナちゃん日記';
export const SITE_DESCRIPTION =
	'フレンチ・ブルドッグのハナちゃん（1歳・女の子）の毎日をつづる日記です。';
export const SITE_AUTHOR = '＊＊＊＊';
export const SITE_AFFILIATION = '＊＊＊＊＊＊';
export const SITE_CONTACT = '＊＊＊＊@＊＊＊＊';

/** base（/kklab-astro-blog/）を考慮したサイト内リンクを作ります。 */
export function url(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.replace(/^\//, '');
	return `${base}/${clean}`;
}
