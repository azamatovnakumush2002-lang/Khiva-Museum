import { useTranslation } from "react-i18next";
import { TicketButton } from "../../components/buttons/buttons";
import Icons from "../../components/icons/Icons";

const HistorySection = () => {
    const { t } = useTranslation();
    return (
        <section className='bg-lightBG dark:bg-lightGR mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
            <div className='order-2 lg:order-1'>
                <h1 className='font-semibold text-2xl sm:text-4xl text-hLight dark:text-text uppercase'>
                    {t("home.aboutMuseum.title")}
                </h1>
                <p className='text-sm sm:text-base text-hLight dark:text-[#d7bf93] py-4 sm:py-7'>
                    {t("home.aboutMuseum.text")}
                </p>
                <div className='flex justify-between sm:justify-start sm:gap-5 items-center'>
                    <TicketButton />
                    <a
                        href=''
                        className='flex items-center gap-2 rounded-full border border-dashed border-text/70 text-text hover:text-[#e8c77e] px-3 py-1 transition duration-300 hover:border-[#e8c77e] bg-[#1d5049] text-sm'
                    >
                        {t("buttons.details")}
                        {Icons.right}
                    </a>
                </div>
            </div>
            <div className='order-1 lg:order-2 w-full'>
                <img
                    src='/home/xiva-4.webp'
                    alt='Khiva Museum'
                    className='w-full max-h-130 object-cover rounded-xl'
                />
            </div>
        </section>
    );
};
export default HistorySection;
