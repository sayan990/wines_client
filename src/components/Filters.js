export default function Filters() {
  return (
    <>
    <div className="flex justify-center bg-purple-800">
      <select className="rounded-md grid m-4 grid-flow-row px-4">
        <option>Marca</option>
        <option>Malbec</option>
        <option>Malbec</option>
      </select>
      <select className="rounded-md grid m-4 px-4">
        <option>Tipo</option>
        <option>Tinto</option>
        <option>Blanco</option>
      </select>
      </div>
    </>
  );
}
