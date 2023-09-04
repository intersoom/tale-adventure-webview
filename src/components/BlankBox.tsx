import { ReactNode } from "react";

function BlankBox({ children }: { children?: ReactNode }) {
  return (
    <span className="w-[46px] h-[47px] bg-white rounded-[5px] shadow-[0_2px_2px_0px_rgba(0,0,0,0.1)] flex justify-center items-center text-[30px] text-[#3D3D3D] font-[700] m-[2px] flex">
      <span>{children}</span>
    </span>
  );
}
export default BlankBox;
