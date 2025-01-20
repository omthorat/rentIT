import Property from "@/models/property";
import connectDB from "@/config/databaseconection";
export const GET = async () => {
  await connectDB();
  const property = await Property.find({}).lean();
  return new Response(JSON.stringify({ property }), {
    status: 200,
  });
};
