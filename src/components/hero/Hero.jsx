import Link from "next/link";
import { GrOptimize, GrFingerPrint } from "react-icons/gr";
import { MdMoneyOff } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FcDataBackup, FcUpload } from "react-icons/fc";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    return (
        <>
            <section className="bg-gray-100">
                <div className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-7">
                            <div>
                                <Link href="/" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
                                    <Image src="/assets/resume-example.jpg" alt="logo" width={50} height={50} />
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link href="/builder" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Builder
                                </Link>
                                <Link href="/templates" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Profiles
                                </Link>
                                <Link href="/examples" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Examples
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-6xl font-bold text-gray-800 mb-2">
                            ProfileStack <br />
                            <span className="text-[#325178]">
                                <Typewriter
                                    words={['role-ready', 'maintainable', 'structured']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <br />
                            CV profiles.
                        </h1>
                        <p className="text-gray-600 mb-4">
                            ProfileStack helps you maintain multiple versions of your CV from structured profile data. Keep one professional history, adapt it for different roles, and export clean one-page resumes when you need them.
                        </p>
                        <Link href="/builder" className="inline-block bg-[#325178] text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#284160] transition duration-200 hover:-translate-y-1 transform hover:shadow-lg">
                            Open Builder
                        </Link>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}

const About = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Features
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <GrOptimize className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Role-specific profiles
                                </h1>
                                <p className="text-gray-600">
                                    Create focused CV variants for different roles without duplicating your whole professional history by hand.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <GrFingerPrint className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Easy to maintain
                                </h1>
                                <p className="text-gray-600">
                                    Edit structured profile data, switch between variants, and keep each CV consistent as your experience changes.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <MdMoneyOff className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Open source
                                </h1>
                                <p className="text-gray-600">
                                    Use it locally, customize it for your workflow, and keep full control of your professional data.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <DiResponsive className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Print-ready
                                </h1>
                                <p className="text-gray-600">
                                    Keep a clean A4 preview and export your selected profile to PDF from the browser print dialog.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <FcDataBackup className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Download profile data
                                </h1>
                                <p className="text-gray-600">
                                    Save the current CV data as JSON and keep backups outside the repository when needed.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-[#325178] rounded-lg shadow-lg p-4">
                            <FcUpload className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Upload profile data
                                </h1>
                                <p className="text-gray-600">
                                    Load a saved JSON profile to continue editing or move a CV between local environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

