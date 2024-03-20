import useCharacters from "../../hooks/useCharacters";

interface CharacterProps {
  id: string;
  image: string;
  name: string;
}

function CharacterCard({id, image, name}: CharacterProps) {
  const style = {
    cover: "object-cover",
    coverLeft: "object-cover object-left",
  };

  return (
    <div
      key={id}
      className="md:w-52 md:h-72 relative w-40 h-60 flex flex-col rounded-xl ease-in-out duration-200 after:rounded-xl hover:scale-105 hover:after:w-40 hover:after:h-60 md:hover:after:w-52 md:hover:after:h-72 hover:after:scale-105 hover:after:bg-emerald-800/10 hover:after:absolute hover:after:backdrop-blur-md [&_h1]:hover:items-start [&_h1]:hover:-translate-y-[10.5rem] md:[&_h1]:hover:-translate-y-[13.5rem] hover:shadow-2xl before:absolute before:bg-gradient-to-t before:from-emerald-900 before:via-transparent before:via-40% before:z-30 before:w-40 before:h-60 md:before:w-52 md:before:h-72 before:rounded-[calc(0.75rem-2px)]  hover:before:hidden ">
      <img
        className={`h-full rounded-xl ${
          image.includes("image_not_available") ? style.coverLeft : style.cover
        }`}
        src={image}
        alt={`Image of ${name}`}
      />
      <h1 className="flex items-end !text-xl !m-0 p-2 absolute z-30 ease-in-out text-left duration-200 bottom-0 h-20 w-full">
        {name}
      </h1>
    </div>
  );
}

export default function Characters() {
  const characters: any = useCharacters();
  if (!characters)
    return (
      <div role="status" className="w-full flex justify-center mt-10">
        <svg
          aria-hidden="true"
          className="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
      {characters.map((character: any) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          image={character.thumbnail.path + "." + character.thumbnail.extension}
          name={character.name}
        />
      ))}
    </div>
  );
}
