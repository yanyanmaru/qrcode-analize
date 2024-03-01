import styles from './Input.module.css'

type Input = {
  title: string,
  text: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onFocusEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlurEvent: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

//https://ja.react.dev/learn/sharing-state-between-components
export default function Input({title,text,handleChange,onFocusEvent,onBlurEvent}:Input) {
  return (
    <div className="mx-48 mb-8 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-left">{title}<span className="text-red-600">*</span></h2>
    <input onFocus={onFocusEvent} onBlur={onBlurEvent} className="mt-4 p-1 w-full bg-gray-100 border border-gray-200 rounded" value={text} onChange={handleChange} type="text" required />
    </div>
  );
}
