import { Icon } from "@iconify/react";
import arrowIosUpwardFill from "@iconify/icons-eva/arrow-ios-upward-fill";
import { useEffect, useState } from "react";

export const TopButton = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div
      className="fixed bottom-0 right-[20px] bg-opacity-50 bg-primary300 px-[16px] py-[12px] rounded-t-lg hover:bg-primary200 duration-150 cursor-pointer"
      onClick={() => {}}
    >
      <Icon icon={arrowIosUpwardFill} className="w-[24px] h-[24px]" />
    </div>
  );
};
