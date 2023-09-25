import BottomBar from "@/components/BottomBar";
import Coverage from "@/components/Coverage";
import Protection from "@/components/Protection";
import TopBar from "@/components/TopBar";
import Header from "@/components/header";
import  Main  from "@/components/main"

export default function Home() {
  return (
    <div className="p-4 ">
      <Header/>

<TopBar/>
<Main/>
      <Coverage/>
      <Protection />
      <BottomBar></BottomBar>
    </div>
  );
}
