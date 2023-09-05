import { ReactNode } from "react";

function Toast({ children }: { children: ReactNode }) {
  return (
    <div className="w-[350px] h-[120px] bg-green-400 text-white bg-opacity-80 rounded-3xl shadow backdrop-blur-sm flex justify-center items-center text-[25px] font-bold">
      {children}
    </div>
  );
}

export default Toast;
