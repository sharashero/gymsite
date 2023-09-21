import { useState, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ITab {
  tabs: {
    element: ReactNode;
    icon: IconDefinition;
  }[]
}


function Tab({
  tabs = []
}: ITab)
{
  const [active, setActive] = useState(-1);

  return (
    <>
      <div className="flex gap-2">
        {tabs.map((tab, idx) => {
          return (
            <div
              key={idx}
              className={"flex items-center justify-center h-8 w-8 p-1 cursor-pointer"
                + ((active == idx)
                  ? " text-neutral-800"
                  : " text-neutral-400"
                )}
              onClick={() => {
                if (active == idx) {
                  setActive(-1);
                }
                else {
                  setActive(idx);
                }
              }}
            >
              <FontAwesomeIcon
                className="text-inherit"
                icon={tab.icon}
                size="xl"
              />
            </div>
          );
        })}
      </div>

      <div
        className={
          "w-full" + ((active > -1) && " border-t border-neutral-400")
        }
      >
        {tabs.map((tab, idx) => {
          return (
            <div key={idx} className={(active == idx) ? "block" : "hidden"}>
              {tab.element}
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Tab;
