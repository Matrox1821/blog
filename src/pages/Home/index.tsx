import Characters from "../../components/Characters";

export default function Home() {
  return (
    <section className="w-full flex justify-center py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <Characters />
      </div>
    </section>
  );
}
