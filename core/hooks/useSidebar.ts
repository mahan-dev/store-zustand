import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";

interface SidebarClickHandler {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  asideRef: RefObject<HTMLDivElement | null>;
}
export const useSidebarClickHandler = ({
  isOpen,
  setIsOpen,
  asideRef,
}: SidebarClickHandler) => {
  const handleMouseEvent = useCallback(
    (e: MouseEvent) => {
      if (
        asideRef.current &&
        e.target instanceof Node &&
        !asideRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    },
    [asideRef, setIsOpen],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("mousedown", handleMouseEvent);
    return () => document.removeEventListener("mousedown", handleMouseEvent);
  }, [isOpen, handleMouseEvent]);
};
