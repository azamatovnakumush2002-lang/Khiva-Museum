import CollectionSection from "./collectionSec";
import GallerySection from "./gallerySec";
import Hero from "./hero";
import HistorySection from "./history";
import NewsSection from "./newsSec";
import RatingSection from "./rating";

const HomePage = () => {
    return (
        <>
            <Hero />
            <HistorySection />
            <RatingSection />
            <CollectionSection />
            <GallerySection />
            <NewsSection />
        </>
    );
};
export default HomePage;
