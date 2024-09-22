const figures = [
    {
      figureTitle: "22.5k+",
      figureBody: "Community Members Served",
    },
    {
      figureTitle: "250+",
      figureBody: "Social Good Organizations Onboarded",
    },
    {
      figureTitle: "68.6%",
      figureBody: "Under-represented Communities",
    },
  ];
  
  const ImpactSection = () => {
    return (
      <div className="w-full md:mt-[5rem] px-4 py-10 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-grotesque text-4xl font-bold mb-8">Our Impact So Far</h3>
          <div className="figures flex flex-col md:flex-row justify-center gap-8">
            {/* Mapping over figures */}
            {figures.map((figure, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg"
              >
                <h4 className="text-4xl font-bold font-grotesque ">{figure.figureTitle}</h4>
                <p className="mt-2  text-lg text-gray-700">{figure.figureBody}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ImpactSection;
  