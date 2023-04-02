import Service1 from "../../Assets/Service.jpg";

const Service = () => {
  return (
    <div id="service" className="lg:h-screen lg:pt-32 2xl:pt-52 px-4">
      <div className="container">
        <div className="block lg:flex md:px-10 lg:px-20 justify-center lg:justify-between items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-10">
              Dapatkan Pengalaman
              <span className="block left-3 relative"> yang menyenangkan</span>
            </h1>
            <p className="mb-10 lg:w-8/12">
              Memikirkan untuk istirahat sejenak dari kesibukan sehari-hari.
              Berencana pergi ke luar negeri bersama kekasih Anda
            </p>
            <div className="flex justify-center lg:justify-between">
              <img
                width="450"
                src={Service1}
                alt="service"
                className="rounded-xl"
              />
            </div>
            <div className="left-12 -mt-16 lg:left-24 relative text-left py-2 px-4 w-56 bg-silver rounded-xl">
              <h3 className="mb-1 font-semibold text-lg">Paris</h3>
              <p className="text-sm mb-2">
                Memikirkan untuk istirahat sejenak dari kesibukan sehari-hari.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm">Rp. 300.000.000,-</p>
                <button
                  type="submit"
                  className="py-1 px-2 bg-hijau text-sm text-putih rounded-lg"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="block mt-4 justify-center items-center">
            <div className="flex">
              <div className="icons icons rounded-lg md:w-16 h-14 w-32 lg:h-12 lg:w-20 2xl:h-16 text-center flex justify-center items-center bg-hijau lg:mt-5 mx-2 lg:mx-6">
                <i className="bx bx-wallet text-2xl text-silver"></i>
              </div>
              <div className="block">
                <h3 className="mb-3 text-hijau font-bold text-xl">
                  Harga terjangkau
                </h3>
                <p className="mb-8">
                  Kami memberikan beberapa harga yang sangat terjangkau
                  dibandingkan dengan yang lain
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="icons h-14 w-32 md:w-16 rounded-lg lg:h-12 lg:w-20 2xl:h-16 text-center flex justify-center items-center bg-hijau lg:mt-5 mx-2 lg:mx-6">
                <i className="bx bxs-bus-school text-2xl text-silver"></i>
              </div>
              <div className="block ">
                <h3 className="mb-3 text-hijau font-bold text-xl">
                  Pengalaman yang Tak Terlupakan
                </h3>
                <p className="mb-8">
                  Kami memberikan beberapa harga yang sangat terjangkau
                  dibandingkan dengan yang lain
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="icons icons h-14 md:w-16 w-32 lg:h-12 lg:w-20 2xl:h-16 rounded-lg text-center flex justify-center items-center bg-hijau lg:mt-5 mx-2 lg:mx-6">
                <i className="bx bxs-balloon text-2xl text-silver"></i>
              </div>
              <div className="block">
                <h3 className="mb-3 text-hijau font-bold text-xl">
                  Layanan yang sangat ramah
                </h3>
                <p className="mb-8">
                  Kami memberikan beberapa harga yang sangat terjangkau
                  dibandingkan dengan yang lain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
