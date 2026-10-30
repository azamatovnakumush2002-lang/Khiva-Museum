import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import $api from "../../services/api";

const Dashboard = () => {
    const [stats, setStats] = useState({
        ticketsCount: 0,
        galleryCount: 0,
        newsCount: 0,
        employeesCount: 0,
    });
    const [loading, setLoading] = useState(true);

    // Statistik ma'lumotlarni API'dan olish (yoki vaqtincha mock ma'lumot)
    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Agar backend'da umumiy statistika uchun alohida endpoint bo'lmasa,
                // har bir bo'limdagi ma'lumotlar uzunligini (.length) olishimiz mumkin
                const [ticketsRes, galleryRes, newsRes] = await Promise.all([
                    $api.get("/api/tickets").catch(() => ({ data: [] })),
                    $api.get("/api/gallery").catch(() => ({ data: [] })),
                    $api.get("/api/news").catch(() => ({ data: [] })),
                ]);

                setStats({
                    ticketsCount: ticketsRes.data.length || 15,
                    galleryCount: galleryRes.data.length || 24,
                    newsCount: newsRes.data.length || 8,
                    employeesCount: 5,
                });
            } catch (error) {
                console.error("Statistikani olishda xatolik:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className='text-center py-10 font-medium text-slate-600'>
                Yuklanmoqda...
            </div>
        );
    }

    return (
        <div className='space-y-6'>
            <div className='bg-white p-5 rounded-2xl shadow-sm border border-slate-200'>
                <h3 className='text-lg font-bold text-emerald-700 mb-4'>
                    Xush kelibsiz!
                </h3>
                <p className='text-emerald-600 text-sm'>
                    Chap tarafdagi menyu orqali Xiva muzeyi tizimining
                    chiptalari, galereya rasmlari, yangiliklar va xodimlar
                    ma'lumotlarini osongina boshqarishingiz mumkin.
                </p>
            </div>

            {/* Statistika Kartochkalari (KPI Cards) */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* Chiptalar */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between'>
                    <div>
                        <p className='text-sm font-medium text-slate-500'>
                            Jami Chiptalar
                        </p>
                        <h3 className='text-3xl font-bold text-slate-800 mt-2'>
                            {stats.ticketsCount}
                        </h3>
                        <span className='text-xs text-emerald-600 font-semibold mt-1 inline-block'>
                            ↑ Faol tariflar
                        </span>
                    </div>
                    <div className='h-14 w-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl shadow-inner'>
                        <Icon icon='lucide:ticket' />
                    </div>
                </div>

                {/* Galereya rasmlari */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between'>
                    <div>
                        <p className='text-sm font-medium text-slate-500'>
                            Galereya Rasmlari
                        </p>
                        <h3 className='text-3xl font-bold text-slate-800 mt-2'>
                            {stats.galleryCount}
                        </h3>
                        <span className='text-xs text-emerald-600 font-semibold mt-1 inline-block'>
                            ↑ Yuklangan rasmlar
                        </span>
                    </div>
                    <div className='h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl shadow-inner'>
                        <Icon icon='lucide:image' />
                    </div>
                </div>

                {/* Yangiliklar */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between'>
                    <div>
                        <p className='text-sm font-medium text-slate-500'>
                            Yangiliklar
                        </p>
                        <h3 className='text-3xl font-bold text-slate-800 mt-2'>
                            {stats.newsCount}
                        </h3>
                        <span className='text-xs text-emerald-600 font-semibold mt-1 inline-block'>
                            ↑ E'lon qilingan
                        </span>
                    </div>
                    <div className='h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl shadow-inner'>
                        <Icon icon='lucide:newspaper' />
                    </div>
                </div>

                {/* Xodimlar */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between'>
                    <div>
                        <p className='text-sm font-medium text-slate-500'>
                            Xodimlar
                        </p>
                        <h3 className='text-3xl font-bold text-slate-800 mt-2'>
                            {stats.employeesCount}
                        </h3>
                        <span className='text-xs text-emerald-600 font-semibold mt-1 inline-block'>
                            ↑ Faol adminlar
                        </span>
                    </div>
                    <div className='h-14 w-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl shadow-inner'>
                        <Icon icon='lucide:users' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
