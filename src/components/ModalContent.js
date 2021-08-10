import React from 'react';
import { truncateString } from '../helpers/formatHelper';
import { DocumentDuplicateIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ModalContent = (props) => {

  // Props Destructuring
  const {
    name,
    description,
    token_id,
    asset_contract,
    permalink,
    traits,
  } = props.selectedAsset;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-8 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div className="w-full px-2 lg:pb-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-md sm:text-xl title-font font-semibold">{name}</h1>
            <div className="flex mb-2">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-1 text-md"></a>
            </div>
            <p className="leading-relaxed mb-2 text-xs sm:text-base">{description || 'No description...'}</p>

            <div className="flex border-t items-baseline border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
              <span>Token ID:</span>
              <span className="ml-auto text-gray-900">{truncateString(token_id)}</span>
              <Tippy content='Copied!' trigger='click' animation='fade'>
              <span>
                  <DocumentDuplicateIcon
                    className='w-5 h-5 ml-1 mb-1 inline-block align-middle transition duration-100 ease-in-out transform hover:scale-110 hover:text-red-500 cursor-pointer'
                    onClick={() => navigator.clipboard.writeText(token_id)}
                  />
                  </span>
              </Tippy>
            </div>

            <div className="flex border-t items-baseline border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
              <span>Address ID:</span>
              <span className="ml-auto text-gray-900">{truncateString(asset_contract.address)}</span>
              <Tippy content='Copied!' trigger='click' animation='fade'>
              <span>
                  <DocumentDuplicateIcon
                    className='w-5 h-5 ml-1 mb-1 inline-block align-middle transition duration-100 ease-in-out transform hover:scale-110 hover:text-red-500 cursor-pointer'
                    onClick={() => navigator.clipboard.writeText(asset_contract.address)}
                  />
                  </span>
              </Tippy>
            </div>

            <div className="flex border-t items-baseline border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
              <span>Permalink</span>
              <Tippy content={permalink} trigger='mouseenter focus' animation='fade' interactive='true'>
                <span className="ml-auto text-gray-900">
                  {truncateString(permalink, 0, 15, 0)}
                  <a href={permalink} target="_blank">
                    <ExternalLinkIcon
                      className='w-5 h-5 ml-1 mb-1 inline-block align-middle transition duration-100 ease-in-out transform hover:scale-110 hover:text-red-500 cursor-pointer'
                    />
                  </a>
                </span>
              </Tippy>
            </div>

            {asset_contract.total_supply &&
              <div className="flex border-t items-baseline  border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
                <span className="text-gray-500">Total supply:</span>
                <span className="ml-auto text-gray-900">{asset_contract.total_supply}</span>
              </div>
            }

            {traits.length > 0 &&
              <>
                {traits.map((trait, index) => {
                  return(
                    <div className="flex border-t items-baseline border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
                      <span className="text-gray-500">{trait.trait_type}</span>
                      <span className="ml-auto text-gray-900 truncate">{trait.value}</span>
                    </div>
                  )
                })}
              </>
            }

            <div className="flex border-t border-b border-gray-200 py-2 text-xs sm:text-base title-font text-gray-500 tracking-wide">
              <span className="text-gray-500">Metadata</span>
              <span className="ml-auto text-gray-900">
                <Tippy content='Copied!' trigger='click' animation='fade'>
                  <span
                    onClick={() => navigator.clipboard.writeText(JSON.stringify(props.selectedAsset))}
                    className='group transition duration-100 ease-in-out transform hover:text-red-500 cursor-pointer'
                  >
                    copy
                    <DocumentDuplicateIcon
                      className='w-5 h-5 ml-1 mb-1 inline-block align-middle transform hover:scale-110 hover:text-red-500 cursor-pointer'
                    />
                  </span>
                </Tippy>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalContent;
