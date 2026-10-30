// import { useTranslation } from "react-i18next";
// import { RateIcons } from "../../i18n/locales/rateIcons";

// const RatingSection = () => {
//     const { t } = useTranslation();
//     const rates = t("home.rate", { returnObjects: true });

//     return (
//         <div className='bg-lightBG dark:bg-lightGR mx-auto py-16 '>
//             <div className='bg-[#fccd75] dark:bg-primary px-5 mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-4xl overflow-hidden'>
//                 {rates.map((item) => {
//                     const matchingIcon = RateIcons.find(
//                         (icon) => icon.id === item.id,
//                     );
//                     return (
//                         <div
//                             key={item.id}
//                             className={`flex flex-col text-center items-center justify-center  px-1 py-8 sm:px-8 w-full border-[#1d5049] border-b sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0`}
//                         >
//                             <div className='w-16 h-16 border-2 border-[#e8c77e] rounded-full flex items-center justify-center'>
//                                 <matchingIcon.icon />
//                             </div>
//                             <h2 className='font-medium text-xl text-text py-4'>
//                                 {item.title}
//                             </h2>
//                             <p className='text-3xl font-semibold text-white'>
//                                 {item.rate}
//                             </p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };
// export default RatingSection;

import { useTranslation } from "react-i18next";
import { RateIcons } from "../../i18n/locales/rateIcons";

const RatingSection = () => {
    const { t } = useTranslation();
    const rates = t("home.rate", { returnObjects: true });

    return (
        <section className='bg-lightBG dark:bg-lightGR mx-auto py-12 sm:py-16 transition-colors duration-300'>
            <div className='mx-4 sm:mx-6 lg:mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-3xl border border-text/30 dark:border-[#e8c77e]/20 bg-[#f0d6a0] dark:bg-[#1d5049] shadow-lg shadow-[#1d5049]/10 dark:shadow-black/20'>
                {Array.isArray(rates) &&
                    rates.map((item) => {
                        const matchingIcon = RateIcons.find(
                            (icon) => icon.id === item.id,
                        );

                        return (
                            <div
                                key={item.id}
                                className='group flex w-full flex-col items-center justify-center px-5 py-8 sm:px-6 sm:py-10 text-center border-b border-text/40 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(odd)]:border-r lg:[&:nth-child(even)]:border-r lg:[&:nth-child(4n)]:border-r-0 transition-colors duration-300 hover:bg-[#f0d6a0] dark:hover:bg-[#28645a]'
                            >
                                <div className='flex h-16 w-16 items-center justify-center rounded-full border border-text bg-[#fffaf0]/70 text-[#8c6728] shadow-sm transition-all duration-300 group-hover:scale-110  group-hover:text-white dark:border-[#e8c77e] dark:bg-[#153b36] dark:text-[#e8c77e] dark:group-hover:bg-[#e8c77e] dark:group-hover:text-[#153b36]'>
                                    {matchingIcon?.icon && (
                                        <matchingIcon.icon />
                                    )}
                                </div>

                                <h2 className='mt-5 min-h-14 flex items-center justify-center text-base sm:text-lg font-medium leading-relaxed text-[#49391f] dark:text-[#f5e9ce] transition-colors duration-300'>
                                    {item.title}
                                </h2>

                                <p className='mt-2 text-3xl sm:text-4xl font-bold tracking-wide text-[#98702d] dark:text-[#e8c77e]'>
                                    {item.rate}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default RatingSection;
