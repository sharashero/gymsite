import { ReactNode } from "react";


interface IGrid {
  children: ReactNode;
}


function Grid({ children }: IGrid) {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}


export default Grid;
