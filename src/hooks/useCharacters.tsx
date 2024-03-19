import md5 from "md5";
import {useEffect, useState} from "react";

export default function useCharacters() {
  const [characters, setCharacters] = useState();
  const timestamp = new Date().getTime().toString();

  const hash = md5(
    timestamp +
      import.meta.env.VITE_PRIVATE_KEY +
      import.meta.env.VITE_PUBLIC_KEY
  );

  const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${
    import.meta.env.VITE_PUBLIC_KEY
  }&hash=${hash}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  }, []);

  return characters;
}
