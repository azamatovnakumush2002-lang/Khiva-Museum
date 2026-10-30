import { useEffect, useState } from "react";
import { getNews } from "../../api/api";

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadNews() {
            try {
                const data = await getNews();

                console.log("Kelgan data:", data);

                setNews(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadNews();
    }, []);

    if (loading) {
        return <p>Ma'lumot yuklanmoqda...</p>;
    }

    if (error) {
        return <p>Xatolik: {error}</p>;
    }

    return (
        <section>
            <h1>Muzey yangiliklari</h1>
            <pre>{JSON.stringify(news, null, 2)}</pre>
        </section>
    );
}

export default News;
