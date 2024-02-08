import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { FC, Fragment, ReactNode } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ open, onClose, children }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-20 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-body">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[7px] bg-black200 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[602px]">
                <div className="bg-black200 relative">
                  {children}
                  <div
                    onClick={onClose}
                    className="absolute w-[16px] h-[16px] right-[20px] top-[15px] cursor-pointer"
                  >
                    <Image fill alt="" src="/images/modal/close.svg" />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
