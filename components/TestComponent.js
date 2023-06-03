export default function TestComponent({ name }) {
  return (
    <>
      <div>Hello, {name}!</div>
      <style jsx>{`
        div {
          background-color: #333;
          border-radius: 0.5em;
          color: #fff;
          margin-bottom: 1.5em;
          padding: 0.5em 0.75em;
        }
      `}</style>
    </>
  );
}
