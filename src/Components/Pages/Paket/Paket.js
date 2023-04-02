import Prancis from "../../Assets/Prancis.jpg";
import Canada from "../../Assets/Canada.jpg";

const Paket = () => {
  return (
    <div id="paket" className="lg:h-screen lg:pt-10">
      <div className=" container lg:h-screen lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:px-20 ">
          <div className="block lg:pt-24">
            <h1 className="mb-4 text-2xl lg:text-4xl text-hijau font-bold">
              Terbaik Minggu Ini
            </h1>
            <p className="mb-3 lg:w-4/5 lg:mb-4">
              Berpikir untuk beristirahat dari kesibukan sehari-hari. Berencana
              untuk pergi ke luar negeri dengan kekasih Anda
            </p>
            <div className="flex ">
              <div className="">
                <h3 className="text-hijau font-bold text-2xl">50 +</h3>
                <h5 className="text-sm">Tujuan</h5>
              </div>
              <div className="px-6">
                <h3 className="text-hijau font-bold text-2xl">200 +</h3>
                <h5 className="text-sm">Prancis</h5>
              </div>
              <div>
                <h3 className="text-hijau font-bold text-2xl">300+</h3>
                <h5 className="text-sm">Canada</h5>
              </div>
            </div>
            <div className="pt-9">
              <button className="py-3 px-6 bg-hijau text-putih rounded-full font-semibold">
                Temukan Travel
              </button>
            </div>
          </div>
          <div className="block lg:flex lg:items-center justify-center pt-5">
            <div className="lg:block">
              <div className="flex justify-center ">
                <img
                  width="500"
                  src={Prancis}
                  alt="prancis"
                  className="w-80 rounded-xl"
                />
              </div>
              <div className="rounded-xl py-3 px-6 left-14 lg:left-5 -mt-16 relative w-60 bg-silver">
                <h3 className="mb-1">Prancis</h3>
                <p className="text-sm mb-1">dibandingkan dengan yang lain</p>
                <div className="flex justify-between items-center">
                  <h6 className="text-sm">Rp. 200.000.000,-</h6>
                  <button className="py-1 px-2 bg-hijau rounded-lg">
                    Pesan
                  </button>
                </div>
              </div>
            </div>

            <div className="block pt-5 lg:px-4">
              <div className="flex justify-center">
                <img
                  src={Canada}
                  width="500"
                  alt="canada"
                  className="w-80 rounded-xl"
                />
              </div>
              <div className="rounded-xl py-3 px-6 left-14 lg:left-5 -mt-16 relative w-60 bg-silver">
                <h3 className="mb-1">Canada</h3>
                <p className="text-sm mb-1">dibandingkan dengan yang lain</p>
                <div className="flex justify-between items-center">
                  <h6 className="text-sm">Rp. 200.000.000,-</h6>
                  <button className="py-1 px-2 bg-hijau rounded-lg">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Paket;
