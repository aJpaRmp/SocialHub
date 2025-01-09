import img from "/icons/Threads.svg";
import img2 from "../../assets/profile-th.svg";

function Tiktok() {
  return (
    <section className="flex justify-center items-center w-full">
      <a
        className="flex items-center justify-start bg-white/40 hover:bg-white/60  rounded-xl w-full m-4"
        href="https://www.threads.net/@ajpar_?igshid=NTc4MTIwNjQ2YQ=="
        target="_blank"
      >
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          <img className="m-3 rounded-full" src={img2} alt="Moje zdjęcie profilowe na instagramie" />
          <h3 className="text-xl">ajpar__</h3>
        </div>
      </a>
    </section>
  );
}

export default Tiktok;
