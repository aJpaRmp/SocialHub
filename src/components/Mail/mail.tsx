import img from "/icons/mail.svg";
import img2 from "/icons/copy.svg";

function mail() {
  return (
    <section className="flex justify-center items-center w-full">
      <a
        className="flex items-center justify-start bg-white/40 hover:bg-white/60  rounded-xl w-full m-4"
        href="mailto:mp.pawlowskimichal@gmai.com"
        target="_blank"
      >
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          <h3 className="text-lg">mp.pawlowskimichal@gmail.com</h3>
        </div>
      </a>
      <button id="copy" className=" bg-white/50 hover:bg-white/70 p-1 rounded-full m-1">
        <img src={img2} alt="ikonka kopiowania" />
      </button>
    </section>
  );
}

export default mail;
