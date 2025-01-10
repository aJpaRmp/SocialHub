import Main from "./components/main/main";
import Instagram from "./components/Instagram/instagram";
import Facebook from "./components/Facebook/facebook";
import Tiktok from "./components/Tiktok/Tiktok";
import Linkedin from "./components/Linkedin/Linkedin";
import Youtube from "./components/Youtube/youtube";
import Mail from "./components/Mail/mail";
import Threads from "./components/Threads/threads";
import Website from "./components/Website/website";
import X from "./components/X/x";

function App() {
  return (
    <>
      <Main />
      <Website />
      <Linkedin />
      <Instagram />
      <Tiktok />
      <X />
      <Threads />
      <Facebook />
      <Youtube />
      <Mail />
    </>
  );
}

export default App;
