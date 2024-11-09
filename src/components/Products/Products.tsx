import React from 'react';
import LightImg from "../../assets/image_placeholder.png";

const Products = () => {
    const productNames = [
        "Centralized Control & Monitoring System",
        "NEMA-Mounted VOLC 1160",
        "Retrofit Street Light Controller VOLC 2160",
        "Retrofit Street Light Controller VOLC 2180",
        "Retrofit Street Light Controller VOLC 4180"
    ];

    return (
        <>
            <div className='conatanier-ecoSystem bg-[#bdd4e2] pt-[70px]'>
                <div>
                    <div className='flex items-center'>
                        <div
                            className="gradient-div w-full h-48 flex items-center justify-center relative"
                            style={{
                                background: 'linear-gradient(260.95deg, rgba(255, 255, 255, 0) 4.29%, #EBF4FF 95.46%, #C9E2FF 95.46%)',
                            }}
                        >
                            <h2 className="text-[#00386B] text-2xl font-bold ml-[120px]">Products</h2>
                        </div>
                    </div>
                    <h3 className='text-[48px] pt-[20px] w-[70%] leading-[68px] inter'>
                        <span className='font-bold'>Cutting-edge hardware,</span> offerings helping cities optimize resources and achieve smart development goals
                    </h3>
                </div>
            </div>

            <div className="conatanier-ecoSystem bg-[#bdd4e2] pt-[30px] flex flex-col">
                {/* Product Button List */}
                <div className="flex flex-wrap justify-start gap-4 max-w-full">
                    {productNames.map((productName, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 border border-gray-400 rounded-md text-[#00386B] font-medium hover:bg-[#dbeaff] hover:border-blue-500 max-w-[390px] mb-2"
                        >
                            {productName}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container-ecoSystem bg-[#bdd4e2] pt-[50px] flex justify-center">
    <div className="flex flex-col md:flex-row max-w-[1200px] w-full">
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 relative flex-1">
            <img
                src={LightImg}
                alt="Street Lights"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1/1' }}
            />
        </div>

        {/* Right side: Content */}
        <div className="w-full md:w-1/2 bg-gradient-to-r flex flex-col justify-center from-white via-[#EBF4FF] to-[#C9E2FF] p-8 flex-1">
            <div className="flex items-center mb-4">
                <h2 className="text-[#00386B] text-2xl font-bold">Products</h2>
                <span className="text-gray-500 ml-2">1/5</span>
            </div>
            <h3 className="text-[32px] lg:text-[48px] font-bold leading-[48px] lg:leading-[68px] mb-4">
                Centralized Control & Monitoring System
            </h3>
            <p className="text-gray-700 text-lg mb-6">
                Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.
            </p>
            <a href="#" className="text-blue-600 font-medium flex items-center">
                Know More <span className="ml-2 text-blue-600 text-lg">→</span>
            </a>
        </div>
    </div>
</div>

        </>
    );
};

export default Products;
