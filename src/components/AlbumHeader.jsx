const AlbumHeader = (props) => {
  const {
    backgroundImage = null,
    title,
    description,
  } = props;
  // TO-DO: Remove hardcoded values!
  return (
    <>
      <section className="w-full bg-cover bg-opacity-5 bg-center py-12 bg-gradient-to-r from-yellow-400 to-red-600" style={ backgroundImage ? {backgroundImage} : null }>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-2xl sm:text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              {`${title} `}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto font-light">
                {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AlbumHeader;
