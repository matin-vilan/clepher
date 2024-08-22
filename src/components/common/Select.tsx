import { SelectHTMLAttributes } from "react";

export default function Select({
  options,
  className,
  ...rest
}: {
  options: {
    name: string;
    value: string | number | boolean;
  }[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
      {...rest}
    >
      {options.map((item, i) => (
        <option
          key={`${item.value}_${item.name}_${i}`}
          value={item.value.toString()}
        >
          {item.name}
        </option>
      ))}
    </select>
  );
}
