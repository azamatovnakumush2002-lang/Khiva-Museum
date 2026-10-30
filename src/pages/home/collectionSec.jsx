import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icons from "../../components/icons/Icons";

const CollectionSection = () => {
    const { t, i18n } = useTranslation();

    const [collections, setCollections] = useState([]);

    async function getCollectionData() {
        try {
            const response = await fetch("https://api.atr.uz/api/collection");

            const data = await response.json();
            console.log("malumotlar", data);
            setCollections(data.data);
        } catch (error) {
            console.error("xato", error);
        }
    }

    useEffect(() => {
        getCollectionData();
    }, []);

    const currentLanguage = i18n.language;
    return (
        <>
            <section className='bg-lightBG dark:bg-lightGR '>
                <div className='mx-auto max-w-300 py-16 px-5'>
                    <div className='items-center text-center'>
                        <h1 className='font-semibold text-3xl sm:text-5xl text-hLight dark:text-text'>
                            {t("collection.title")}
                        </h1>
                        <p className='text-sm sm:text-base text-hLight dark:text-[#d7bf93] py-4 sm:py-7'>
                            {t("collection.text")}
                        </p>
                    </div>
                    <div>
                        {collections
                            .map((collection, i) => (
                                <div
                                    key={i}
                                    className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center my-10'
                                >
                                    <div
                                        key={i}
                                        className='col-span-1 w-full h-auto'
                                    >
                                        <img
                                            src={collection.images[0].url}
                                            className='rounded-lg w-full max-h-110 lg:w-80 lg:h-80 object-cover'
                                        />
                                    </div>
                                    <div className='lg:col-span-2 text-center lg:text-left'>
                                        <h1 className='font-bold text-2xl sm:text-4xl text-hLight dark:text-text'>
                                            {collection.title[currentLanguage]}
                                        </h1>
                                        <p className='font-medium text-sm sm:text-base text-hLight dark:text-[#d7bf93] py-4 sm:py-7 border-b border-hLight dark:border-[#d7bf93]'>
                                            {
                                                collection.description[
                                                    currentLanguage
                                                ]
                                            }
                                        </p>
                                        <Link
                                            to={""}
                                            className='mx-auto lg:mx-0 max-w-40 flex gap-1 items-center justify-center  py-2 px-5 border border-dashed hover:border-double border-hLight dark:border-[#d7bf93] rounded mt-10 transition-all duration-300 '
                                        >
                                            <span className='font-semibold text-hLight dark:text-[#d7bf93]'>
                                                {t("buttons.details")}
                                            </span>
                                            {Icons.right}
                                        </Link>
                                    </div>
                                </div>
                            ))
                            .slice(0, 3)}
                    </div>
                </div>
            </section>
        </>
    );
};
export default CollectionSection;
