import Prancis from "../../Assets/Prancis.jpg";
import Canada from "../../Assets/Canada.jpg";
import Brazil from "../../Assets/Brazil.jpg";

const Tempat = () => {
  return (
    <div id="tempat" className="pt-9 lg:pt-36 2xl:pt-36 lg:h-screen">
      <div className="container ">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2 2xl:mb-7 2xl:text-6xl">
            Destinasi Tempat Terbaik
          </h1>
          <p className="text-sm 2xl:text-xl 2xl:font-light  lg:mb-1 2xl:mb-10">
            Kami memberikan beberapa harga yang sangat terjangkau dibandingkan
            yang lain
          </p>
        </div>
        <div className="lg:flex justify-center">
          <div className=" rounded-lg my-8 shadow-lg mx-8 ">
            <img
              width="300"
              className="w-full md:h-full lg:h-80 lg:w-80 rounded-lg"
              src={Prancis}
              alt="prancis"
            />
            <div className="py-6 px-4 w-80">
              <h3 className="mb-3">Prancis</h3>
              <p className="text-sm mb-4">
                Kami memberikan beberapa harga yang sangat terjangkau
                dibandingkan dengan yang lain
              </p>
              <div className="flex justify-between items-center">
                <h3>Rp. 200.000.000,-</h3>
                <button
                  type="submit"
                  className="py-2 px-4 bg-hijau text-putih rounded-md"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg my-8 mx-8">
            <img
              width="300"
              src={Canada}
              alt="prancis"
              className="w-full md:h-full lg:h-80 lg:w-80 rounded-lg"
            />
            <div className="py-6 px-4 w-80">
              <h3 className="mb-3">Canada</h3>
              <p className="text-sm mb-4">
                Kami memberikan beberapa harga yang sangat terjangkau
                dibandingkan dengan yang lain
              </p>
              <div className="flex justify-between items-center">
                <h3>Rp. 300.000.000,-</h3>
                <button
                  type="submit"
                  className="py-2 px-4 bg-hijau text-putih rounded-md"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-lg my-8 mx-8">
            <img
              width="300"
              src={Brazil}
              alt="prancis"
              className="w-full md:h-full lg:h-80 lg:w-80 rounded-lg"
            />
            <div className="py-6 px-4 w-80">
              <h3 className="mb-3">Brazil</h3>
              <p className="text-sm mb-4">
                Kami memberikan beberapa harga yang sangat terjangkau
                dibandingkan dengan yang lain
              </p>
              <div className="flex justify-between items-center">
                <h3>Rp. 250.000.000,-</h3>
                <button
                  type="submit"
                  className="py-2 px-4 bg-hijau text-putih rounded-md"
                >
                  Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tempat;
