// サイト全体で使う値をここにまとめています。

export const SITE_TITLE = 'ハナちゃん日記';
export const SITE_DESCRIPTION =
	'フレンチ・ブルドッグのハナちゃん（1歳・女の子）の毎日をつづる日記です。';
export const SITE_AUTHOR = '河合勝彦';
export const SITE_AFFILIATION = '名古屋市立大学大学院経済学研究科';
export const SITE_CONTACT = 'kkawai@econ.nagoya-cu.ac.jp';

/** base（/kklab-astro-blog/）を考慮したサイト内リンクを作ります。 */
export function url(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.replace(/^\//, '');
	return `${base}/${clean}`;
}
