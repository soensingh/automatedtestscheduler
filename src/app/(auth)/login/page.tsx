"use client";
import Image from "next/image";
import google from "@/assets/google.svg";
import gridPattern from "@/assets/grid.svg";
import { useState, useCallback } from "react";

export default function Page() {
    const [email, setEmail] = useState(null);
    const [isCodeSent, setIsCodeSent] = useState(true);

    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleEmailSubmit = useCallback(() => { }, [email]);
    const handleOtpSubmit = useCallback(() => { }, [email]);

    return (
        <>
            <section id="login" className="flex flex-col gap-4 h-screen overflow-hidden items-start justify-center max-w-md mx-auto">
                <div className="absolute inset-0 flex flex-row w-screen h-screen -z-10 opacity-30">
                    <Image alt="Grid Pattern" src={gridPattern} />
                    <Image alt="Grid Pattern" src={gridPattern} />
                </div>

                {!isCodeSent &&
                    <>
                        <div className="flex flex-col gap-0 items-start">
                            <h1 className="text-3xl font-bold">Teacher Login</h1>
                            <p className="text-sm italic text-zinc-500">Kindly login here with a teacher ID.</p>
                        </div>

                        <div className="p-4 py-6 rounded-2xl border border-zinc-200 bg-white">
                            <div className="flex flex-col gap-3">
                                <input name="email" type="email" placeholder="Enter your email" className="outline-none border border-zinc-200 focus:border-zinc-500 rounded-xl p-3 px-4 h-10 w-80 text-zinc-600" />

                                <button onSubmit={handleEmailSubmit} className="bg-zinc-800 text-zinc-100 rounded-xl p-1.5 cursor-pointer hover:shadow-xl transition-all duration-500">Continue</button>
                            </div>

                            <hr className="h-px w-full bg-zinc-200 border-none outline-none my-3" />

                            <button className="bg-zinc-100 rounded-xl p-2 w-full flex justify-center items-center gap-2 cursor-pointer hover:shadow-lg transition-all duration-500">
                                <Image alt="Google SVG" src={google} width={20} />
                                <span className="text-sm">
                                    Sign in with Google
                                </span>
                            </button>
                        </div>
                    </>
                }

                {isCodeSent &&
                    <>
                        <div className="bg-green-100 border border-green-300 rounded-lg px-4 py-2">
                            <p className="text-sm italic text-green-600">Login Code email sent successfully!</p>
                        </div>

                        <div className="p-4 py-6 rounded-2xl border border-zinc-200 bg-white">
                            <div className="flex flex-col gap-3">
                                <p className="italic text-xs text-center text-zinc-400">Enter OTP here</p>

                                <div className="flex items-center gap-3 justify-center">
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" min={1} max={1} />
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" />
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" />
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" />
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" />
                                    <input type="number" className="w-12 h-12 bg-zinc-100 outline-none border border-transparent focus:border-zinc-300 rounded-lg no-spinner flex justify-center items-center" />
                                </div>

                                <button onSubmit={handleOtpSubmit} className="bg-zinc-800 text-zinc-100 rounded-xl p-1.5 cursor-pointer hover:shadow-xl transition-all duration-500">Verify</button>
                            </div>
                        </div>
                    </>
                }


            </section>
        </>
    );
}
