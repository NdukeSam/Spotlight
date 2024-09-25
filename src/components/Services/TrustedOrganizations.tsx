const TrustedOrganizations = () => {
  const organizations = [
    { name: "Danone", logo: "/src/assets/services/logos/danone-logo.png" }, 
    { name: "Deloitte", logo: "/src/assets/services/logos/Deloitte-Logo-2003.png" },
    { name: "NASA", logo: "/src/assets/services/logos/nasa-logo.png" },
    { name: "United Way", logo: "/src/assets/services/logos/unitedway-logo.png" },
    { name: "GE", logo: "/src/assets/services/logos/G_E-logo.png" },
    { name: "USAID", logo: "/src/assets/services/logos/USAID-logo.png" },
    { name: "New York Times", logo: "/src/assets/services/logos/The_New_York_Times-logo.png" },
    { name: "Spotify", logo: "/src/assets/services/logos/spotify-logo.png" }
  ];

  return (
    <div className="py-10 bg-white mt-[7rem]">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-20">
        Trusted by Atlanta's top Organizations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-20 justify-items-center">
        {organizations.map((org, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={org.logo}
              alt={org.name}
              className="h-10 md:h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedOrganizations;
