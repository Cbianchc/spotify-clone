import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "@/app/(site)/components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="
    bg-neutral-900 
    rounded-lg 
    h-full 
    w-full 
    overflow-hidden 
    overflow-y-auto
    " >
      <Header>
        <div className="mb-2">
          <h1 className="
            bg-gradient-to-r 
            from-blue-300
            via-green-200
            to-indigo-300 
            inline-block text-transparent 
            bg-clip-text
            font-semibold
            text-3x1
            ">Bienvenid@ Crack!</h1>

          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            xl:grid-cols-3 
            2xl:grid-cols-4 
            gap-3 
            mt-4
          ">
            <ListItem 
              image="/images/liked.png"
              name="Favoritas"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="
          bg-gradient-to-r 
          from-blue-300
          to-indigo-400 
          inline-block text-transparent 
          bg-clip-text
          text 2x1 font-semibold">
            Nuevos temas
          </h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  )
}

