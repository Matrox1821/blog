import {useEffect, useState} from "react";
import * as readme from "../../markdown/fetch.md";
import Markdown from "markdown-to-jsx";
import Code from "../../components/Code";

export default function FetchTuto() {
  const [post, setPost] = useState<string>();

  useEffect(() => {
    fetch(readme.default).then((res) => res.text().then((res) => setPost(res)));
  }, []);

  if (!post) return <></>;

  return (
    <section className="mx-2 md:mx-36">
      <Markdown
        children={post}
        options={{overrides: {Code: {component: Code}}}}
        className="flex flex-col items-start text-left"
      />
    </section>
  );
}
