import { HTMLAttributes, ReactNode } from "react";

interface WordBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function WordBox({ children, ...props }: WordBoxProps) {
  return (
    <span
      className="w-[46px] h-[47px] bg-[#F2E9FF] rounded-[5px] flex justify-center items-center text-[30px] text-[#7141B3] font-[700] m-[2px] flex"
      {...props}
    >
      <span className="w-[41.429px] h-[41.429px] rounded-[8.571px] bg-[#F2E9FF] shadow-[0px_2.8px_11.4px_0px_rgba(0,0,0,0.1)] flex justify-center items-center">
        <span>{children}</span>
      </span>
    </span>
  );
}
export default WordBox;
