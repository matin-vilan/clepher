import { HTMLAttributes } from "react";

export default function Flex({
  vertical,
  className,
  ...rest
}: { vertical?: boolean } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex ${vertical ? "flex-col " : " "} ${className}`}
      {...rest}
    >
      {rest.children}
    </div>
  );
}
