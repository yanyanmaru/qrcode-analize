import { useState } from "react";

export default function Copy({text}) {

  const copyToClipboard = async () => {
    await global.navigator.clipboard.writeText(text);
    alert(`${text}をコピーしました`)
  }
  return (
    <>
    <button className="text-blue-300" onClick={copyToClipboard}>コピーする</button>
    </>
  );
}
