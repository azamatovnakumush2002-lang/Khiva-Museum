import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $api from "../../services/api";

const VerifyOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Oldingi sahifadan kelgan emailni olish
    const [email] = useState(location.state?.email || "");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await $api.post("/api/verify-otp", {
                email,
                otp,
            });

            // Tokenni olib localStorage ga saqlaymiz
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token);
                navigate("/admin");
            }
        } catch (err) {
            console.error("OTP verify error:", err);
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Kod noto'g'ri yoki muddati tugagan!");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className='min-h-screen w-full flex items-center justify-center bg-cover bg-center relative p-4'
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=1600')`,
            }}
        >
            <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px]'></div>

            <div className='relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl text-white'>
                <div className='text-center mb-6'>
                    <h2 className='text-xl font-semibold'>
                        OTP Kodni Tasdiqlash
                    </h2>
                    <p className='text-xs text-gray-300 mt-1'>
                        <span className='text-amber-400 font-medium'>
                            {email || "Pochtangiz"}
                        </span>{" "}
                        manziliga yuborilgan 6 xonali kodni kiriting
                    </p>
                </div>

                {error && (
                    <div className='mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs text-center'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleVerify} className='space-y-4'>
                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            OTP Kod
                        </label>
                        <input
                            type='text'
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength={6}
                            placeholder='482913'
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-center tracking-widest text-lg placeholder-gray-500 text-white focus:outline-none focus:border-amber-400'
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full py-3 bg-amber-500/80 hover:bg-amber-500 text-gray-900 font-bold rounded-xl transition-all shadow-lg mt-2 disabled:opacity-50'
                    >
                        {loading ? "Tekshirilmoqda..." : "Tasdiqlash"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp;
