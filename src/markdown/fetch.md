# How to use an API

- Search an free API.

  You can search this in [Rapid API](https://rapidapi.com) or in [Public APIs](https://publicapis.io).
  For example, you can use the followings APIs:

  - Jikan API: https://docs.api.jikan.moe
  - Marver API: https://developer.marvel.com

- Investigate how it works and how to use it.

  Possibly the API may require a type of key, it could be called a public key or a private key, or it may ask for both, these two keys should always be kept private.

  To obtain this API key, the API will generally ask you to log in to its website.

  You have to check which routes bring you the information you need and which parameters you have to pass.

- Use a fetch function to fetch the data.

<Code language="typescript" >
//This return a Promise object
fetch(URL)

//To return a result from this, you use ".then". Res is the response from the fetch function.
//These data need to be parsed to JSON to use them as an object.
fetch(URL).then(res=>console.log(res.json()))
</Code>

- UseEffect and useState.

<Code language="tsx" >
//import hooks
import {useEffect, useState} from "react";

export default function CardsComponent(){
&nbsp;&nbsp;const [data,setData]=useState();

&nbsp;&nbsp;//We need to use the useEffect to get the value of the fetch, since it works asynchronously.

&nbsp;&nbsp;//We obtain the promise with .then and set it in the useState.
&nbsp;&nbsp;useEffect(()=>{
&nbsp;&nbsp;&nbsp;&nbsp;fetch(URL).then(res=>setData(res.json()));
&nbsp;&nbsp;},[]);

//Rest code of component
}
</Code>
