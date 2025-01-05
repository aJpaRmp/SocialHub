import img from "../../assets/MP.png";

function Main() {
  return (
    <main className="flex justify-center items-center ">
      <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
      <div className="m-2 text-2xl ">
        <h1>Michał Pawłowski</h1>
        <h2>aJpaR</h2>
      </div>
    </main>
  );
}

export default Main;
