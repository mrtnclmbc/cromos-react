import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CollectionIcon, XCircleIcon } from '@heroicons/react/outline'
// import { truncateString } from '../helpers/formatHelper';
import { ModalContent } from './';

const Modal = (props) => {

  const { open, setOpen, selectedAsset } = props;
  const getNftButtonRef = useRef();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto mx-auto w-96"
        initialFocus={getNftButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-0 pb-4">
                <div className="flex justify-center flex-col">
                  <div className="mt-2 text-center">
                    <Dialog.Title as="div" className="text-lg leading-6 font-medium text-gray-900 flex items-center justify-center">
                      <button className="block w-8 absolute right-2 top-2 h-8 text-center text-xl leading-0 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
                        <XCircleIcon onClick={() => setOpen(false)} />
                      </button>
                    </Dialog.Title>
                  </div>
                  <ModalContent selectedAsset={selectedAsset}/>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex flex-row items-center justify-end">
                <img
                  className="h-6 w-auto hidden sm:block absolute left-8 transition duration-500 ease-in-out transform hover:scale-110"
                  src="/logo.svg"
                  alt="Cromy Logo"
                />
                <button
                  type="button"
                  className="mt-3 w-full hidden sm:block rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <a
                  className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  href={selectedAsset.permalink}
                  target="_blank"
                  ref={getNftButtonRef}
                >
                  Get NFT!
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;
