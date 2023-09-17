import { useState, useEffect, ReactNode } from "react";
import Backdrop from "./Backdrop";


interface IModal {
  renderOpener(open: () => void): ReactNode;
  renderComponent(close: () => void): ReactNode;
}


function Modal({
  renderOpener,
  renderComponent
}: IModal)
{
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      {renderOpener(() => setOpen(true))}

      {open && <Backdrop onClick={(event) => {
        if (event.target == event.currentTarget)
          setOpen(false);
      }}>
        {renderComponent(() => setOpen(false))}
      </Backdrop>}
    </>
  );
}


export default Modal;
