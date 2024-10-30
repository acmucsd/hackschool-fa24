// Import Navbar from the components folder
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* Add your navbar component here */}
      <Component {...pageProps} />
    </div>
  );
}
