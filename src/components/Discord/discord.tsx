import { useEffect, useRef } from "react";
import img from "/icons/discord.svg";
import img2 from "/icons/copy.svg";

function Discord() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleCopy = () => {
      const parent = button?.parentElement;
      const textToCopy = parent?.querySelector("p")?.innerText || "";
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(
          () => console.log("Tekst skopiowany do schowka:", textToCopy),
          (err) => console.error("Błąd kopiowania do schowka:", err)
        );
      }
    };

    button?.addEventListener("click", handleCopy);

    return () => {
      button?.removeEventListener("click", handleCopy);
    };
  }, []);

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex items-center justify-start bg-white/40 rounded-xl w-full m-4 mr-0">
        <img className="rounded-full m-2" src={img} alt="Moje zdjęcie" />
        <div className="flex m-auto justify-center items-center">
          <h3 className="text-xl">ajpar</h3>
        </div>
      </div>
      <button ref={buttonRef} className="bg-white/50 hover:bg-white/70 p-2 rounded-full m-2">
        <p className="hidden">ajpar</p>
        <img src={img2} alt="ikonka kopiowania" />
      </button>
    </section>
  );
}

export default Discord;
