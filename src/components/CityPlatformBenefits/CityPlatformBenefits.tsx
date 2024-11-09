import React from 'react';
import SectionImg from "../../assets/image 41.png";

const CityPlatformBenefits: React.FC = () => {
    return (
        <div className="conatanier-ecoSystem">
            <h3 className="text-[24px] lg:text-[48px] text-center p-[20px] lg:p-[50px] px-[20px] lg:px-[150px]">
                The platform assists city managers on multiple fronts
            </h3>
            <div className="flex flex-col items-center py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
                    <div className="flex flex-col items-start gap-2 relative">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[50%]">Saves on power consumption & related costs</p>
                        {/* Line connector - shown only on larger screens */}
                        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-8 bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col items-start gap-2 mt-6 relative">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[30%]">Lowers downtimes</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 relative">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[30%]">Detects power thefts</p>
                        {/* Line connector - shown only on larger screens */}
                        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-8 bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col items-start gap-2 pr-10 relative mt-6">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[50%]">Ensures smart monitoring and control of the street light infrastructure</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 relative">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[50%]">Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.</p>
                        {/* Line connector - shown only on larger screens */}
                        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 h-px w-8 bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col items-start gap-2 relative mt-6">
                        <img src={SectionImg} alt="icon" width={40} height={40} />
                        <p className="text-start max-w-xs w-full lg:w-[50%]">Ensures security in the neighborhood</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityPlatformBenefits;
