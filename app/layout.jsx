import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "rent It",
  keywords:
    "property renting app, affordable rentals near me, rent houses online, rental properties platform, apartments for rent, house rental app, easy property search, find rental homes, property leasing app, best rental app for tenants, rent-to-own homes, vacation rentals app, tenant and landlord platform, flats for rent, hassle-free property renting, online rental services, room rentals near me, house for lease, rental apartments near me, no brokerage rentals, property management app, real estate rental app, list property for rent, secure rental homes, rental properties near me, rental search platform.",
  description:
    "Discover thousands of rental properties, including apartments, houses, and vacation homes, with rent It. Simplify renting today!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
