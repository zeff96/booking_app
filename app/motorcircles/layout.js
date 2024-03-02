import Navbar from "../components/navbar/navbar";
export default function MotorcircleLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
