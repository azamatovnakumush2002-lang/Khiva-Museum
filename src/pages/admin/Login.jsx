import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import $api from "../../services/api";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await $api.post("/api/login", {
                email,
                password,
            });
            const token = response.data.token || response.data.accessToken;
            if (token) {
                localStorage.setItem("token", token);
                navigate("/admin");
            } else {
                setError("Token olinmadi. Qayta urinib ko'ring.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Email yoki parol xato kiritildi!");
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
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 mb-3'>
                        <img
                            src='/header/museum-logo.png'
                            alt='Logo'
                            className='w-10 h-10 object-contain'
                        />
                    </div>
                    <h1 className='text-2xl font-bold tracking-wide'>
                        Khiva Museum
                    </h1>
                    <h2 className='text-xl font-semibold mt-4'>Kirish</h2>
                    <p className='text-xs text-gray-300 mt-1'>
                        Admin panelga kirish uchun ma'lumotlaringizni kiriting
                    </p>
                </div>

                {error && (
                    <div className='mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs text-center'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className='space-y-5'>
                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Email
                        </label>
                        <div className='relative flex items-center'>
                            <span className='absolute left-3 text-gray-400 text-lg'>
                                <Icon icon='lucide:mail' />
                            </span>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='email@example.com'
                                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400 transition-all'
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-xs font-medium mb-1 text-gray-200'>
                            Parol
                        </label>
                        <div className='relative flex items-center'>
                            <span className='absolute left-3 text-gray-400 text-lg'>
                                <Icon icon='lucide:lock' />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='••••••••'
                                className='w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-sm placeholder-gray-400 text-white focus:outline-none focus:border-amber-400 transition-all'
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 text-gray-400 hover:text-white'
                            >
                                <Icon
                                    icon={
                                        showPassword
                                            ? "lucide:eye-off"
                                            : "lucide:eye"
                                    }
                                />
                            </button>
                        </div>
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full py-3 bg-amber-500/80 hover:bg-amber-500 text-gray-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-amber-500/30 disabled:opacity-50 mt-2'
                    >
                        {loading ? "Kirilmoqda..." : "Kirish"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
