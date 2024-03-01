import styles from "./Generate.module.css";
import Copy from "./Copy";
import { useState } from "react";



export default function Generate({generateBtn,canClick,generateText}) {
  const [text,setText] = useState("")
  return (
    <>
    <div className="mx-48 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h2 className={styles.title}>④QRコードを生成する</h2>
        <div className={styles.result}>
        <p className={styles.generate}>生成URL</p>
        <p className={styles.text}>{generateText}</p>
        <Copy text={generateText} />
        </div>
       
        <button className={`${canClick ? styles.btn : styles.cant}`} onClick={generateBtn}>QR生成</button>
    </div>
    </>
  );
}
