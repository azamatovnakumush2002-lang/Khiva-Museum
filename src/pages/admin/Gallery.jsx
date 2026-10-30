import { useEffect, useState } from "react";
import $api from "../../services/api";

const AdminGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const fetchGallery = async () => {
        try {
            const response = await $api.get("/api/gallery");
            setGallery(response.data.data || response.data || []);
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddImage = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            alert("Iltimos, rasm tanlang!");
            return;
        }

        try {
            setUploading(true);

            const formData = new FormData();
            formData.append("file", selectedFile);

            const uploadRes = await $api.post("/api/admin/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const files = uploadRes.data?.files;
            const firstFile = Array.isArray(files) ? files[0] : null;

            const imageUrl =
                typeof firstFile === "string"
                    ? firstFile
                    : firstFile?.url ||
                      firstFile?.path ||
                      firstFile?.link ||
                      firstFile?.filePath ||
                      firstFile?.name;

            if (!imageUrl) {
                alert("Serverdan rasm manzili topilmadi!");
                setUploading(false);
                return;
            }

            const galleryPayload = {
                images: [
                    {
                        url: imageUrl,
                    },
                ],
            };

            await $api.post("/api/admin/gallery", galleryPayload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setIsOpen(false);
            setSelectedFile(null);
            fetchGallery();
        } catch (error) {
            console.error(
                "Rasm yuklashda xatolik:",
                error.response?.data || error,
            );
            alert(
                "Rasmni yuklab bo'lmadi: " +
                    (error.response?.data?.error || error.message),
            );
        } finally {
            setUploading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Haqiqatan ham bu rasmni o'chirmoqchimisiz?"))
            return;

        try {
            await $api.delete(`/api/admin/gallery/${id}`);
            setGallery(gallery.filter((item) => item.id !== id));
        } catch (error) {
            console.error("O'chirishda xatolik:", error);
            alert("Rasmni o'chirib bo'lmadi.");
        }
    };

    const totalPages = Math.ceil(gallery.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGallery = gallery.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) return <div className='text-center py-10'>Yuklanmoqda...</div>;

    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-base sm:text-xl lg:text-2xl font-bold text-emerald-800'>
                    Galereyani Boshqarish
                </h2>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-emerald-800 hover:bg-white border border-emerald-800 text-white hover:text-emerald-800 font-medium px-3 sm:px-4 py-1.5 lg:py-2 rounded-xl transition duration-300 shadow-sm text-[10px] sm:text-base'
                >
                    + Rasm qo'shish
                </button>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                {currentGallery.length > 0 ? (
                    currentGallery.map((item) => (
                        <div
                            key={item.id}
                            className='relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col'
                        >
                            <div className='h-40 overflow-hidden bg-slate-100'>
                                <img
                                    src={item.url}
                                    alt='Gallery'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className='absolute top-2 right-2 text-white hover:text-red-800 text-sm font-medium transition-colors bg-black/40 p-1 rounded-full'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M0 0h20v20H0z' fill='none' />
                                    <path
                                        fill='currentColor'
                                        d='M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z'
                                    />
                                </svg>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='col-span-full text-center text-slate-500 py-10'>
                        Rasmlar mavjud emas.
                    </p>
                )}
            </div>

            {totalPages > 1 && (
                <div className='flex justify-center items-center gap-2 mt-6'>
                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className={`px-3.5 py-1.5 rounded-lg border text-sm font-medium transition duration-300 ${
                            currentPage === 1
                                ? "bg-white text-emerald-800 border-emerald-800 hover:text-white hover:bg-emerald-800 transition duration-500 cursor-not-allowed"
                                : "bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-50"
                        }`}
                    >
                        Oldingi
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3.5 py-1.5 rounded-lg border text-sm font-medium transition duration-300 ${
                                currentPage === index + 1
                                    ? "bg-emerald-800 text-white border-emerald-800"
                                    : "bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-50"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages),
                            )
                        }
                        disabled={currentPage === totalPages}
                        className={`px-3.5 py-1.5 rounded-lg border text-sm font-medium transition duration-300 ${
                            currentPage === totalPages
                                ? "bg-emerald-800 text-white border-emerald-800 cursor-not-allowed"
                                : "bg-emerald-800 text-white hover:text-emerald-800 border-emerald-800 hover:bg-white transition duration-500"
                        }`}
                    >
                        Keyingi
                    </button>
                </div>
            )}

            {isOpen && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-2xl p-6 w-full max-w-md shadow-xl'>
                        <h3 className='text-xl font-bold mb-4 text-emerald-800 text-center'>
                            Galereyaga yangi rasm qo'shish
                        </h3>
                        <form onSubmit={handleAddImage} className='space-y-4'>
                            <div className='mx-auto text-center'>
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) =>
                                        setSelectedFile(e.target.files[0])
                                    }
                                    required
                                    className='w-full text-sm text-emerald-800 border border-emerald-700 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-500 my-5 mx-auto rounded-lg transition duration-500'
                                />
                            </div>
                            <div className='flex justify-end gap-3 mt-6'>
                                <button
                                    type='button'
                                    onClick={() => setIsOpen(false)}
                                    className='px-4 py-2 border border-emerald-800 rounded-lg text-emerald-800 bg-inherit hover:bg-emerald-800 hover:text-white text-sm font-medium transition duration-500'
                                >
                                    Bekor qilish
                                </button>
                                <button
                                    type='submit'
                                    disabled={uploading}
                                    className='px-4 py-2 border border-emerald-800 bg-emerald-800 hover:bg-white text-white hover:text-emerald-800 rounded-lg text-sm font-medium transition duration-500'
                                >
                                    {uploading ? "Yuklanmoqda..." : "Saqlash"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminGallery;
