import md5 from "md5";
import {useEffect, useState} from "react";

const publicKey = "6f3a767ba9d4f6da258039aab200e2df";
const privateKey = "59074d2fd4ec963b60aeba994ace758b1038d7e1";

export default function useCharacters() {
  const [characters, setCharacters] = useState();
  const timestamp = new Date().getTime().toString();

  const hash = md5(timestamp + privateKey + publicKey);

  const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  }, []);

  return characters;
}
