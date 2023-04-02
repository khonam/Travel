import Heroo from "../../Assets/Pi.png";

const Hero = () => {
  return (
    <div className="pt-10 lg:h-screen lg:pt-10">
      <div className=" container">
        <div className="lg:flex lg:h-screen justify-between items-center lg:px-20">
          <div className="lg:px-10 2xl:px-20">
            <img
              width="600"
              src={Heroo}
              alt="heroo"
              className="md:left-16 relative lg:left-0"
            />
          </div>
          <div className="pt-10 lg:w-11/12 2xl:w-9/12 2xl:px-20 lg:px-10">
            <h1 className="mb-4 md:text-5xl text-2xl text-hijau font-bold lg:text-4xl">
              Ambil Akhir Pekan Terbaik{" "}
              <span className="block"> dan Nikmati Tempat Anda</span>
            </h1>
            <p className="text-sm mb-7 lg:text-lg md:text-2xl">
              Berpikir untuk beristirahat dari kesibukan sehari-hari. berencana
              untuk pergi ke luar negeri bersama orang yang Anda cintai untuk
              bersenang-senang dan waktu berkualitas dengan cara yang hemat
              biaya.
            </p>
            <div>
              <button className="py-2 px-5 md:py-3 md:px-6 bg-hijau text-putih rounded-xl mb-10 lg:mb-0">
                Pesan
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Hero;
