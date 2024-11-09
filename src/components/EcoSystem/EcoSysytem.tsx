import StreetLight from '../../ui/StreetLight';
import Gateway from '../../ui/Gateway';
import CloudSystem from '../../ui/CloudSystem';
import Users from '../../ui/Users';
import Education from '../../ui/Education';

const EcoSystem = () => {
    return (
        <>
            <div className='conatanier-ecoSystem pt-[146px] pb-[60px]'>
                <div>
                    <div className='flex items-center'>
                        <div
                            className="gradient-div w-full h-48 flex items-center justify-center relative"
                            style={{
                                background: 'linear-gradient(260.95deg, rgba(255, 255, 255, 0) 9.2%, #3661FF 122.1%)',
                            }}
                        >
                            <h2 className="text-[#00386B] text-2xl font-bold ml-[120px]">Ecosystem</h2>
                        </div>
                    </div>
                    <h3 className='text-[48px] flex justify-start w-[50%] leading-[68px] inter'>
                        How does a smart street light ecosystem work?
                    </h3>

                    <div className="flex flex-col space-y-8 mt-8 relative">
                        {/* Horizontal and Vertical Connection Lines - hidden on tablets and mobiles */}
                        <div className="absolute left-[26%] right-[58%] top-[135px] border-t-2 border-dashed border-[#3661FF] opacity-50 hidden lg:block"></div>
                        <div className="absolute left-[58%] right-[28%] top-[100px] border-t-2 border-dashed border-[#3661FF] opacity-50 hidden lg:block"></div>
                        <div className="absolute left-[50%] top-[300px] bottom-[400px] border-l-2 border-dashed border-[#3661FF] opacity-50 hidden lg:block"></div>
                        <div className="absolute left-[32%] right-[32%] top-[340px] border-t-2 border-dashed border-[#3661FF] opacity-50 hidden lg:block"></div>
                        <div className="absolute left-[28%] top-[392px] w-[100px] h-[2px] border-t-2 border-dashed border-[#3661FF] opacity-50 transform -rotate-90 hidden lg:block"></div>
                        <div className="absolute right-[28%] top-[392px] w-[100px] h-[2px] border-t-2 border-dashed border-[#3661FF] opacity-50 transform rotate-90 hidden lg:block"></div>

                        {/* Top Row Components */}
                        <div className="flex flex-wrap lg:flex-nowrap justify-center items-start gap-4 lg:gap-20 px-4 lg:px-20">
                            {/* Street Light Controller */}
                            <div className="flex flex-col items-start space-y-4 w-full lg:w-1/3 max-w-xs">
                                <div className="flex gap-4">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="border-2 border-dashed border-[#3661FF] p-4 rounded-3xl opacity-50 mt-6">
                                            <div className="p-4 flex items-center justify-center bg-white border-2 border-[#3661FF] rounded-2xl shadow-lg">
                                                <StreetLight />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-700 font-semibold mb-2">Street Light Controller</h3>
                                    <p className="text-sm text-gray-500">
                                        Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.
                                    </p>
                                </div>
                            </div>

                            {/* Gateway */}
                            <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3 max-w-xs">
                                <div className="border-2 border-dashed border-[#3661FF] p-4 rounded-3xl opacity-50">
                                    <div className="w-[167px] h-[167px] flex items-center justify-center bg-white border-2 border-[#3661FF] rounded-2xl shadow-lg">
                                        <Gateway />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-700 font-semibold mb-2">Gateway</h3>
                                    <p className="text-sm text-gray-500">
                                        Employed for interfacing between a Controller and the Lighting Management Software.
                                    </p>
                                </div>
                            </div>

                            {/* Cloud System */}
                            <div className="flex flex-col items-center space-y-4 w-full lg:w-1/3 max-w-xs">
                                <div className="border-2 border-dashed border-[#3661FF] p-4 rounded-3xl opacity-50">
                                    <div className="w-[167px] h-[167px] flex items-center justify-center bg-white border-2 border-[#3661FF] rounded-2xl shadow-lg">
                                        <CloudSystem />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-700 font-semibold mb-2">Cloud-based Management System</h3>
                                    <p className="text-sm text-gray-500">
                                        Collects information from multiple gateways.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-32 pt-8 lg:pt-32">
                            {/* Users */}
                            <div className="flex flex-col items-center space-y-4 max-w-xs">
                                <div className="border-2 border-dashed border-[#3661FF] p-4 rounded-3xl opacity-50">
                                    <div className="w-[167px] h-[167px] flex items-center justify-center bg-white border-2 border-[#3661FF] rounded-2xl shadow-lg">
                                        <Users />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-700 font-semibold mb-2">Users</h3>
                                    <p className="text-sm text-gray-500">
                                        Data from the cloud is used to monitor and control street lights by the System Managers.
                                    </p>
                                </div>
                            </div>

                            {/* Evaluation */}
                            <div className="flex flex-col items-center space-y-4 max-w-xs">
                                <div className="border-2 border-dashed border-[#3661FF] p-4 rounded-3xl opacity-50">
                                    <div className="w-[167px] h-[167px] flex items-center justify-center bg-white border-2 border-[#3661FF] rounded-2xl shadow-lg">
                                        <Education />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-gray-700 font-semibold mb-2">Evaluation</h3>
                                    <p className="text-sm text-gray-500">
                                        Gathered insights are used to evaluate the performance of the lighting systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
};

export default EcoSystem;
