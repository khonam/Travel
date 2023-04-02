const Navbar = () => {
  return (
    <div className="bg-silver w-full top-0 left-0 fixed items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home">
              <h1 className="font-bold text-3xl lg:text-4xl py-6 text-hijau">
                TravelBitly
              </h1>
            </a>
          </div>
          <div className="flex items-center px-4 top-full lg:hidden">
            <button type="button ">
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </button>
          </div>
          <div className="lg:items-center hidden lg:justify-between lg:flex">
            <ul className="flex ">
              <li className="group">
                <a
                  className=" text-base text-dark hover:text-hijau transition-2 py-2 mx-8"
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base text-dark hover:text-hijau py-2 mx-8"
                  href="#tempat"
                >
                  Liburan
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base text-dark hover:text-hijau py-2 mx-8"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li className="group">
                <a
                  className="text-base text-dark  hover:text-hijau py-2 mx-8"
                  href="#paket"
                >
                  Paket
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 hidden lg:flex">
            <button
              type="submit"
              className="bg-hijau py-2 px-6 rounded-full text-putih"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
