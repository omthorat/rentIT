import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Property from "@/models/property";
import connectDB from "@/config/databaseconection";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      {property.name}
    </>
  );
};

export default PropertyPage;
