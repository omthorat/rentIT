import Infobox from "./Infobox";
const Infoboxs = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Infobox
              title="For Renters"
              backgroundColor="bg-gray-200"
              button={{
                href: "/properties",
                btntitle: "Browse Properties",
                backgroundColor: "bg-black",
              }}>
              Find your dream rental property. Bookmark properties and contact
              owners.
            </Infobox>
            <Infobox
              title="For Property Owners"
              backgroundColor="bg-purple-300"
              button={{
                href: "/properties/add",
                btntitle: "Add Property",
                backgroundColor: "bg-[#4B0082]",
              }}>
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </Infobox>
          </div>
        </div>
      </section>
    </>
  );
};
export default Infoboxs;
