import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Yerin Kirill's personal blog";

const ogImageURL =
  "https://scontent.fiev25-2.fna.fbcdn.net/v/t1.6435-9/117378699_609165919985927_8180354329180815559_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=-LlSnuN046AAX-Z-xkg&_nc_ht=scontent.fiev25-2.fna&oh=00_AT-78TC7cyZZONXe6_r5lPpynk7OJYyY0CYgRsimBecB8w&oe=629BA803";
const name = "Kirill Yerin";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Yerin Kirill's personal blog with the most interesting articles about his life"
        />
        <meta property="og:image" content={ogImageURL} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
