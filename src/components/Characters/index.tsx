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

  if (!characters) return <div>ERROR</div>;
  return characters.map((character: any) => (
    <CharacterCard
      key={character.id}
      id={character.id}
      image={character.thumbnail.path + "." + character.thumbnail.extension}
      name={character.name}
    />
  ));
}
