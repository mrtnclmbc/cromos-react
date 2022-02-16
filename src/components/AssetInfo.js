import PlayRoundedIcon from '../../public/icons/search-icon.svg';

const AssetInfo = ({ addressId, tokenId, backgroundImage }) => {
  return (
    <>
      <div className="absolute group w-full h-full z-30 overflow-hidden">
        <img src={backgroundImage} className={`h-full w-full blurred`} />
        <div className="bg-opacity-0 hover:bg-opacity-100 absolute bg-black bg-opacity-0 w-full h-full top-0 flex items-center group-hover:opacity-80 transition z-50">
          <button className="hover:scale-110 ml-auto mr-auto text-white opacity-0 transform translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <PlayRoundedIcon className="mx-auto h-10" fill="#fff" />
          </button>
        </div>
      </div>
    </>
  )
}

export default AssetInfo;
