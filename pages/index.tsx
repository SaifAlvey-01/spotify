
import Sidebar from "../Components/Sidebar";
import Center from "../Components/Center";
import Player from "../Components/Player";
import { getSession, GetSessionParams } from "next-auth/react";

function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}

export default Home
export async function getServerSideProps(context: GetSessionParams | undefined){
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  }
}