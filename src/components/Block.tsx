

type Props = {
    text1: string,
    text2: string,
    text3: string
}

export default function Block({text1,text2,text3}:Props) {
  return (
    <>
    <div className="mx-48 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
    </div>
    </>
  );
}
