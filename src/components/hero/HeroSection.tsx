import HeroImage from "../../assets/Hero_section.png"; // Renamed import to avoid conflict

const HeroSection = () => {
  return (
    <div className="h-[700px] pt-20">
      {/* <img  alt="Hero Section" width={1470} height={600} /> */}
      <div className="overlay"></div> {/* Overlay div */}

      <p className="text-[24px] text-white text-center">Smart Lighting Solutions</p>
      <h2 className="text-[48px] text-[#7f94a7] text-center">
      Bringing a new perspective to street lights <div>and the cities of tomorrow.</div>
      </h2>
    </div>
  );
};

export default HeroSection;
