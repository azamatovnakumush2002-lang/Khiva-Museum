import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import $api from "../../services/api";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await $api.post("/api/register", {
                firstName,
                lastName,
                email,
                password,
            });
            navigate("/verify-otp", { state: { email } });
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError("Ro'yxatdan o'tishda xatolik yuz berdi!");
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
                    <h1 className='text-2xl font-bold tracking-wide'>
                        Khiva Museum
                    </h1>
                    <h2 className='text-xl font-semibold mt-3'>
                        Ro'yxatdan o'tish
                    </h2>
                    <p className='text-xs text-gray-300 mt-1'>
                        Yangi hisob yaratish uchun ma'lumotlarni kiriting
                    </p>
                </div>

                {error && (
                    <div className='mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs text-center'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className='space-y-4'>
                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Ism
                        </label>
                        <input
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            placeholder='Ali'
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400'
                        />
                    </div>

                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Familiya
                        </label>
                        <input
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            placeholder='Valiyev'
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400'
                        />
                    </div>

                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Email
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='user@mail.com'
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400'
                        />
                    </div>

                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Parol
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='••••••••'
                            className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400'
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full py-3 bg-amber-500/80 hover:bg-amber-500 text-gray-900 font-bold rounded-xl transition-all shadow-lg mt-2 disabled:opacity-50'
                    >
                        {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
                    </button>
                </form>

                <p className='text-center text-xs text-gray-300 mt-6'>
                    Hisobingiz bormi?{" "}
                    <Link
                        to='/login'
                        className='text-amber-400 font-semibold hover:underline'
                    >
                        Kirish
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
