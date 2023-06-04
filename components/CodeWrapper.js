export default function CodeWrapper({ children }) {
  return (
    <>
      <div className="border border-neutral-800	 overflow-hidden rounded">{children}</div>
    </>
  );
}
