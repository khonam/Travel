import Travel from "../../Assets/Travel.png";
import Travel2 from "../../Assets/Cs.png";

const Home = () => {
  return (
    <div id="home" className="pt-24 xl:pt-36">
      <div className="container items-center ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <span className="text-hijau font-medium tracking-widest text-xl">
              Simpan perjalanan anda
            </span>
            <h1 className="text-dark text-4xl mb-4 font-bold md:text-7xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:10xl">
              Jadikan <span className="text-hijau animate-plus"> Liburan</span>{" "}
              Anda Berkesan
            </h1>
            <p className="mb-10 font-medium">
              Berpikir untuk beristirahat dari kesibukan sehari-hari. berencana
              untuk pergi ke luar negeri bersama orang yang Anda cintai untuk
              bersenang-senang dan waktu berkualitas dengan cara yang hemat
              biaya.
            </p>

            <button
              type="submit"
              className="bg-hijau py-2 px-5 lg:py-3 rounded-full text-putih"
              href="#"
            >
              Pergi Explorasi
            </button>
            <a
              className="bg-hijau py-3 px-5 rounded-full text-putih mx-4 lg:hidden"
              href="#"
            >
              Register
            </a>
          </div>
          <div className=" w-full flex justify-end px-4 lg:w-1/2">
            <div className="lg:-mt-9 mt-10  2xl:mt-10 lg:right-7 flex md:right-16 relative">
              <img
                width="250"
                src={Travel}
                alt="travel"
                className="max-w-full mx-auto xl:w-45 xl:h-auto"
              />
              <div className="hidden sm:block">
                <img
                  src={Travel2}
                  alt="travel"
                  className="max-w-full mx-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
