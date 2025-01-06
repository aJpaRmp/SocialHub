import img from "/icons/instagram.svg";
import img2 from "../../assets/profile-ig.svg";

function Instagram() {
  return (
    <section className="flex justify-center items-center w-full">
      <a
        className="flex items-center justify-start bg-white/40 hover:bg-white/60  rounded-xl w-full m-4"
        href="https://www.instagram.com/ajpar_"
        target="_blank"
      >
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          <img className="rounded-full m-3" src={img2} alt="Moje zdjęcie profilowe na instagramie" />
          <h3 className="text-xl">ajpar_</h3>
        </div>
      </a>
    </section>
  );
}

export default Instagram;
