import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-white-900">
        <div className={styles.content}>
          <Link className="" href="/">
            <h1 className={styles.title}>Google Analytics 4✖︎QRコード生成</h1>
          </Link>
          
          <ul className={styles.menu}>
            <li>
              <Link className="no-underline" href="/">QR生成</Link>
            </li>
            <li>
              <Link className="" href="/storage">履歴</Link>
            </li>
            <li>
              <Link  className="" href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
