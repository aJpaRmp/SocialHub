import img from "/icons/youtube.svg";

function Youtube() {
  return (
    <section className="flex justify-center items-center w-full">
      <a className="flex items-center justify-start bg-white/20   rounded-xl w-full m-4" href="#">
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          {/* <img className="m-3 rounded-full" src="" alt="Moje zdjęcie profilowe na x" /> */}
          <h3 className="text-xl">Michał Pawłowski</h3>
        </div>
      </a>
    </section>
  );
}

export default Youtube;
