export default function Gallery() {
  return (
    <>
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 container mx-auto">
        <div className="flex w-full  flex-wrap">
          <h1 className="sm:text-xl text-xl font-normal title-font text-gray-900 lg:mb-0 mb-4">Tu Álbum <span className="font-bold">0xc31F02A2BB5bF40C6E87a678ABC73ff2B347932a</span></h1>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img src="https://source.unsplash.com/301x301/?random" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/200x200/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/201x201/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/202x202/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/203x203/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/204x204/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/205x205/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/206x206/?random" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48" src="https://source.unsplash.com/207x207/?random" />
          <img src="https://source.unsplash.com/302x302/?random" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3" />
        </div>
      </section>
    </>
  );
}
