import img from "/icons/youtube.svg";
import img2 from "../../assets/profile-yt.svg";

function Youtube() {
  return (
    <section className="flex justify-center items-center w-full">
      <a
        className="flex items-center justify-start bg-white/40 hover:bg-white/60  rounded-xl w-full m-4"
        href="https://www.youtube.com/channel/UCroC4IIvV6FarT6h_0-8wyw"
      >
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          <img className="m-3 rounded-full" src={img2} alt="Moje zdjęcie profilowe na x" />
          <h3 className="text-xl">Michał Pawłowski</h3>
        </div>
      </a>
    </section>
  );
}

export default Youtube;
