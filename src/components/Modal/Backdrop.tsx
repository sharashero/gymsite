import { HTMLAttributes } from "react";


function Backdrop({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>)
{
  return (
    <div
      className="fixed inset-0 z-20 flex flex-col items-center justify-center overflow-hidden bg-[#00000080]"
      {...props}
    >
      {children}
    </div>
  );
}


export default Backdrop;
