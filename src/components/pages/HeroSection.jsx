

const HeroSection = () => {


  return (
    <div>
      <div
          className='text-center flex flex-col items-center justify-center h-[100vh] text-white'
          style={{
          backgroundImage: 'url(/src/assets/hero-bg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <h1
          className='lg:text-6xl md:text-4xl text-2xl font-bold mb-5 '
        >
          Welcome to My Website
        </h1>
        <p
          className='md:text-2xl text-lg'
        >
          Your Journey Start Here.
        </p>
        <button
          className='bg-white cursor-pointer text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-200 font-medium mt-3'
        >
          Purchase Products
        </button>
      </div>
    </div>
  )
}

export default HeroSection