import Navbar from "./navbar";

export default function layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <main className="max-w-[650px] w-full mr-auto mt-6 md:mt-0 px-2 md:px-0 mt-12 ">{children}</main>
    </div>
  );
}
