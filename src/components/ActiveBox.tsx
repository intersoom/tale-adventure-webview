import { ReactNode } from "react";

function ActiveBox({ children }: { children?: ReactNode }) {
  return (
    <span className="w-[46px] h-[47px] bg-[#F2E9FF] rounded-[5px] shadow-[0px_3.5px_13.125px_0px_rgba(0,0,0,0.25)_inset] shadow-[0px_0.875px_7px_0px_rgba(162, 69, 255, 0.25)_inset] flex justify-center items-center text-[30px] text-[#3D3D3D] font-[700] m-[2px] flex">
      <span>{children}</span>
    </span>
  );
}
export default ActiveBox;

// 0px_3.5px_13.125px_0px_rgba(0,0,0,0.25)_inset, 0px_0.875px_7px_0px_rgba(162, 69, 255, 0.25)_inset;
