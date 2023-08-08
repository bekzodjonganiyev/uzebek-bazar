import { ReactElement, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NextItemIcon } from '@/assets/icons'

type Props = {
    home?: boolean,
}

type Logos = {
    logo: string,
    name: string,
    link: string
}[] | null

export const LikedBrands = (props: Props): ReactElement => {
    const [logos, setLogos] = useState<Logos>()

    const fetchBrendLogos = () => { 
        setLogos(null) 
        console.log(logos)
        console.log(props)
    }

    useEffect(() => {
        fetchBrendLogos()
    }, [])

    return (
        <div className='p-10 flex md:flex-row flex-col items-start bg-card-bg max-md:gap-y-10'>
            <div className='md:w-1/2 w-full'>
                <h2 className='font-medium text-3xl text-textColor-black pb-3'>Sevimli brendlar</h2>
                <p className='text-textColor-primary pb-3'>At vero et accusamus et iusto odio dignissimos ducimus qui <br /> blanditiis deleniti atqu.</p>
                <Link to={"#"} className=" border-b border-black font-medium pb-1 inline-block">
                    <div className='flex items-end gap-2'><span>Barchasini ko'rish</span><NextItemIcon height={20} width={20} /></div>
                </Link>
            </div>
            <div className='md:w-1/2 w-full grid lg:grid-cols-3 grid-cols-2 gap-5 min-w-44'>
                {/* {
                    logos?.map(item => (
                        <a href={item.link} target="_blank">
                            <img src={item.logo} alt={item.name} />
                        </a>
                    ))
                } */}

                <span className=''>{Nike}</span>
                <span className=''>{Hush}</span>
                <span className=''>{Puma}</span>
                <span className=''>{Shoei}</span>
                <span className=''>{Mars}</span>
                <span className=''>{Suprame}</span>

            </div>
        </div>
    )
}

const Nike = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5589 23.7988C36.0078 31.3484 29.7266 40.7105 29.6636 47.7084C29.6391 50.3413 30.4957 52.6399 32.5503 54.3809C35.5073 56.8883 38.7652 57.7725 42.0073 57.7777C46.7451 57.7842 51.4497 55.9085 55.1334 54.4622C61.337 52.0277 129.913 22.8047 129.913 22.8047C130.575 22.4794 130.451 22.0741 129.623 22.2764C129.288 22.3584 54.9669 42.123 54.9669 42.123C53.5592 42.5137 52.1045 42.718 50.6415 42.7306C44.9298 42.7638 39.8473 39.6526 39.8884 33.0966C39.9043 30.5312 40.7045 27.4376 42.5589 23.7988Z" fill="#A7A7A7" />
    </svg>

)

const Hush = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.7402 36.0941H36.6927V29.1393H44.6524V49.0772H36.6927V41.1186H27.7402V49.0772H19.7749V29.1393H27.7402V36.0941Z" fill="#A7A7A7" />
        <path d="M65.1722 44.5767C67.7659 44.5767 69.2664 43.7715 69.2664 41.2013V29.1393H77.2317V41.5102C77.2317 47.8473 73.3606 49.7777 65.1722 49.7777C56.9838 49.7777 53.1127 47.8473 53.1127 41.5102V29.1393H61.078V41.2013C61.078 43.7715 62.5785 44.5767 65.1722 44.5767Z" fill="#A7A7A7" />
        <path d="M93.4217 35.4268L102.938 36.8166C106.948 37.4068 109.436 39.2489 109.436 42.6243C109.436 47.4833 105.425 49.7722 96.4728 49.7722C90.3482 49.7722 83.6547 48.9338 83.6268 43.071H93.2264C93.2543 43.7384 93.5053 44.1851 94.0743 44.494C94.6655 44.7753 95.5357 44.9131 96.7796 44.9131C99.2617 44.9131 99.9422 44.2458 99.9422 43.2971C99.9422 42.7125 99.5741 42.1224 98.5031 41.9569L89.4111 40.6167C85.5177 40.0265 83.9057 37.7928 83.9057 35.0021C83.9057 29.8397 89.0207 28.4443 95.5692 28.4443C104.55 28.4443 108.248 30.7608 108.532 34.98H99.2673C99.2673 34.1693 98.7876 33.6618 98.0513 33.3861C97.3485 33.0827 96.4449 32.9669 95.5692 32.9669C93.193 32.9669 92.3786 33.5515 92.3786 34.3899C92.3786 34.9524 92.6296 35.3109 93.4217 35.4268Z" fill="#A7A7A7" />
        <path d="M125.11 36.0941H134.057V29.1393H142.022V49.0772H134.057V41.1186H125.11V49.0772H117.145V29.1393H125.11V36.0941Z" fill="#A7A7A7" />
    </svg>
)

const Puma = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.9611 51.6191C63.1871 51.6002 62.5302 50.9736 62.5302 50.199L62.5317 24.8889H54.0812V52.7877C54.0812 54.1557 55.2032 55.2708 56.5814 55.2708H71.3516C72.7374 55.2708 73.8464 54.155 73.8464 52.7877V24.8889H65.4028L65.3959 50.199C65.3967 50.9736 64.7382 51.6002 63.9611 51.6191ZM92.2525 24.8889H79.4648C79.1032 24.8895 78.7453 24.9605 78.4115 25.0977C78.0777 25.235 77.7746 25.4358 77.5195 25.6888C77.2644 25.9418 77.0623 26.242 76.9249 26.5721C76.7874 26.9022 76.7172 27.2559 76.7183 27.6128V55.2708H85.1772V29.9019C85.1782 29.7177 85.216 29.5355 85.2884 29.3657C85.3608 29.1959 85.4664 29.0419 85.5992 28.9125C85.7319 28.783 85.8893 28.6807 86.0621 28.6113C86.235 28.5419 86.42 28.5069 86.6066 28.5082C87.3959 28.5082 88.0292 29.1091 88.0476 29.88V55.2716H96.4697V29.8792C96.482 29.1084 97.1137 28.5074 97.9023 28.5074C98.6831 28.5074 99.3286 29.1235 99.3348 29.9011V55.2708H107.794V27.6128C107.795 27.2558 107.725 26.9021 107.587 26.5719C107.449 26.2418 107.247 25.9417 106.992 25.6887C106.737 25.4357 106.433 25.2349 106.099 25.0977C105.765 24.9605 105.407 24.8895 105.046 24.8889H92.2525ZM48.4445 47.6366H39.9076V55.2708H31.4609V24.8889H48.498C50.0231 24.8889 51.2139 26.1127 51.2139 27.6249V44.8969C51.215 45.2565 51.1442 45.6127 51.0055 45.9452C50.8668 46.2777 50.6629 46.5799 50.4056 46.8345C50.1483 47.089 49.8426 47.2909 49.5061 47.4286C49.1695 47.5662 48.8088 47.6369 48.4445 47.6366ZM42.7734 29.9539C42.776 29.7662 42.7411 29.5799 42.6706 29.4055C42.6002 29.2312 42.4955 29.0723 42.3627 28.9379C42.23 28.8035 42.0716 28.6963 41.8968 28.6225C41.722 28.5486 41.5341 28.5095 41.3439 28.5074H39.9076V43.8747H41.3439C42.0881 43.8747 42.7803 43.2903 42.7734 42.447V29.9539Z" fill="#A7A7A7" />
        <path d="M120.601 55.4009V47.7876H117.675V55.4009H109.078V27.7967C109.078 26.2897 110.332 25.0781 111.876 25.0781H126.401C126.769 25.0784 127.134 25.149 127.474 25.2859C127.815 25.4227 128.124 25.6231 128.384 25.8756C128.644 26.1282 128.85 26.4278 128.99 26.7575C129.13 27.0871 129.202 27.4403 129.201 27.7967V55.4009H120.601ZM120.601 44.0329V30.07C120.58 29.2984 119.936 28.7047 119.134 28.7047C118.751 28.704 118.383 28.8492 118.11 29.1088C117.837 29.3684 117.681 29.7216 117.675 30.0919V44.0329H120.601Z" fill="#A7A7A7" />
    </svg>
)

const Shoei = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M120.672 21.5942C119.905 20.8273 118.836 20.4441 117.851 20.4441H42.4423C41.4696 20.4441 40.4013 20.8685 39.6618 21.5942L24.5277 36.7946C22.9667 38.3422 22.9942 40.8625 24.5552 42.4095L39.703 57.5148C40.4288 58.2411 41.4696 58.6649 42.4423 58.6649H117.878C118.836 58.6924 119.905 58.3093 120.672 57.5423L135.819 42.3826C137.339 40.8625 137.339 38.3153 135.819 36.7952L120.672 21.5942ZM119.603 55.3777C118.918 56.0628 118.014 56.3922 117.11 56.3922V56.3928H42.9487C42.0992 56.3641 41.1677 56.0084 40.5107 55.3508L27.1575 42.0126C25.8022 40.6568 25.7747 38.4522 27.1306 37.0964L40.4838 23.7307C41.1408 23.0875 42.0723 22.7174 42.9493 22.7174H117.11C117.987 22.7449 118.918 23.0869 119.603 23.7582L132.956 37.1239C133.607 37.7762 133.973 38.6603 133.973 39.582C133.973 40.5037 133.607 41.3878 132.956 42.0401L119.603 55.3777ZM58.0515 44.5041C59.6752 47.4923 57.7102 50.8381 54.19 50.8381V50.8375H43.5877C43.0147 50.8093 42.7419 50.5202 42.7145 49.9558V47.1473C42.7155 47.0187 42.7418 46.8917 42.7919 46.7734C42.8419 46.6552 42.9147 46.5481 43.0061 46.4585C43.0975 46.3689 43.2056 46.2985 43.3241 46.2513C43.4427 46.2042 43.5693 46.1813 43.6967 46.1839H50.3964C50.9009 46.1839 51.0379 45.7842 50.8467 45.4952C50.119 44.5717 49.1282 43.4551 48.0547 42.2452C45.8474 39.7575 43.2902 36.8754 41.9497 34.4667C40.8585 32.5116 41.7585 28.2709 45.2656 28.2709H55.4313C55.9638 28.2709 56.3593 28.7252 56.3867 29.2349V32.0302C56.3867 32.6222 56.1413 32.8698 55.5135 32.8974H49.578C48.9228 32.8974 48.8406 33.3933 49.0729 33.6409C50.017 34.784 51.118 36.0002 52.2346 37.2336C54.5071 39.7439 56.8437 42.3251 58.0515 44.5041ZM65.8977 41.448V49.9017C65.8977 50.4114 65.4194 50.8381 64.9977 50.8381H60.9177C60.4942 50.8381 60.0439 50.4114 60.0165 49.9294L59.9897 29.2355C59.9897 28.6988 60.3441 28.2721 60.9993 28.2444H64.8744C65.4474 28.2444 65.8977 28.6982 65.8977 29.2355V36.2847H70.5097V29.2355C70.5097 28.8088 70.851 28.2721 71.5467 28.2444H75.4362C76.0771 28.2444 76.4184 28.6982 76.4184 29.2355L76.4458 49.9017C76.4458 50.4661 75.9955 50.8381 75.4904 50.8381H71.4103C71.0416 50.8381 70.4823 50.3837 70.4823 49.9017V41.448H65.8977ZM111.364 50.8381H98.6051C98.1274 50.8105 97.6503 50.3008 97.6229 49.9017V29.2355C97.6229 28.7811 98.1274 28.2985 98.6325 28.2715H111.336C111.95 28.2715 112.264 28.6159 112.264 29.2079V32.0308C112.291 32.5404 111.841 32.898 111.418 32.898H103.763V36.8491H108.798C109.303 36.9038 109.726 37.3034 109.698 37.7301V40.5939C109.726 41.0213 109.358 41.5027 108.852 41.475H103.763V46.1563H111.391C111.922 46.1563 112.318 46.5559 112.318 47.1203V49.9017C112.318 50.5899 111.922 50.8105 111.364 50.8381ZM118.732 50.8105H114.966C114.515 50.8105 114.065 50.4661 114.038 49.9294V29.2079C114.038 28.6159 114.378 28.2985 114.993 28.2715H118.677C119.209 28.2715 119.578 28.6982 119.605 29.2079V49.9294C119.605 50.4937 119.237 50.8105 118.732 50.8105ZM78.7789 31.4797C78.5335 36.851 78.5335 42.2309 78.7789 47.6023C78.7789 49.0207 80.3341 50.8658 81.9852 50.8658H92.0014C93.7072 50.8658 95.1266 49.1583 95.1266 47.6023C95.3994 42.1085 95.3994 36.7391 95.1266 31.452C95.0855 30.0613 93.4338 28.2715 92.0014 28.2715H82.0126C80.2668 28.3268 78.8337 30.1719 78.7789 31.4797ZM88.5354 46.4051C87.4573 46.4598 86.4197 46.4598 85.4101 46.4051C85.042 46.3768 84.6739 46.0331 84.6465 45.3311C84.4279 41.4756 84.3326 37.6208 84.6465 33.7521C84.7013 33.0771 84.9878 32.7328 85.4101 32.6775C86.4203 32.5675 87.4847 32.5675 88.5354 32.6498C88.8767 32.6498 89.1495 33.1042 89.1763 33.7515C89.4354 37.6202 89.4354 41.448 89.1763 45.3305C89.1495 45.8954 88.9857 46.3774 88.5354 46.4051Z" fill="#A7A7A7" />
    </svg>
)

const Mars = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M113.288 39.1774H108.491C108.491 39.1774 108.424 36.9513 106.199 36.9513C103.988 36.9513 104.029 39.1102 104.029 40.0142V47.0966H98.4664V38.3682C98.4664 38.3682 98.6142 32.0271 106.306 32.0271C106.306 32.0271 111.68 31.3522 113.971 36.7354C113.971 36.7354 115.58 32.0271 122.106 32.0271H128.243C128.243 32.0271 135.763 31.9731 135.763 39.0694H129.732C129.732 39.0694 129.557 37.3154 127.413 37.3154H122.763C122.763 37.3154 119.707 37.0994 119.707 39.5816C119.707 42.0638 121.423 42.2126 123.192 42.2126H140.225V47.0959H121.932C121.932 47.0959 113.288 47.8248 113.288 39.1774ZM82.3182 42.2396H89.2599V47.0959H81.0449C81.0449 47.0959 73.2857 46.7595 73.2857 39.9595C73.2857 33.1464 79.9056 32.0271 82.5994 32.0271H95.8522V47.0966H90.1035V37.3694H82.1436C82.1436 37.3694 79.6519 37.3292 79.6519 39.7574C79.6519 42.1718 81.8761 42.2396 82.3182 42.2396ZM27.5215 37.3424H19.7754V32.0271H30.9387C30.9387 32.0271 34.3029 32.1891 34.3029 35.3593V39.8924L43.0535 32.0271H46.3765C46.3765 32.0271 49.5524 32.0001 49.5524 35.5081V39.9872L58.3972 32.0271H61.9086C61.9086 32.0271 65.125 32.1891 65.125 35.8992V41.5384C65.125 41.5384 65.125 42.0645 65.7012 42.0645H72.6298V47.0966H63.1552C63.1552 47.0966 59.0009 47.5023 59.0009 43.2253V40.2025C59.0009 40.2025 58.9741 39.5013 58.3037 40.1755L50.746 47.0959H47.4086C47.4086 47.0959 43.5623 47.2309 43.5623 43.2516V39.8924C43.5623 39.8924 43.6297 39.2577 43.1065 39.8114L35.2408 47.0959H31.9975C31.9975 47.0959 28.3926 47.4476 28.3926 43.4267V38.0436C28.3926 38.0443 28.4861 37.3424 27.5215 37.3424Z" fill="#A7A7A7" />
    </svg>
)

const Suprame = (
    <svg className="max-sm:w-28" width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M113.288 39.1774H108.491C108.491 39.1774 108.424 36.9513 106.199 36.9513C103.988 36.9513 104.029 39.1102 104.029 40.0142V47.0966H98.4664V38.3682C98.4664 38.3682 98.6142 32.0271 106.306 32.0271C106.306 32.0271 111.68 31.3522 113.971 36.7354C113.971 36.7354 115.58 32.0271 122.106 32.0271H128.243C128.243 32.0271 135.763 31.9731 135.763 39.0694H129.732C129.732 39.0694 129.557 37.3154 127.413 37.3154H122.763C122.763 37.3154 119.707 37.0994 119.707 39.5816C119.707 42.0638 121.423 42.2126 123.192 42.2126H140.225V47.0959H121.932C121.932 47.0959 113.288 47.8248 113.288 39.1774ZM82.3182 42.2396H89.2599V47.0959H81.0449C81.0449 47.0959 73.2857 46.7595 73.2857 39.9595C73.2857 33.1464 79.9056 32.0271 82.5994 32.0271H95.8522V47.0966H90.1035V37.3694H82.1436C82.1436 37.3694 79.6519 37.3292 79.6519 39.7574C79.6519 42.1718 81.8761 42.2396 82.3182 42.2396ZM27.5215 37.3424H19.7754V32.0271H30.9387C30.9387 32.0271 34.3029 32.1891 34.3029 35.3593V39.8924L43.0535 32.0271H46.3765C46.3765 32.0271 49.5524 32.0001 49.5524 35.5081V39.9872L58.3972 32.0271H61.9086C61.9086 32.0271 65.125 32.1891 65.125 35.8992V41.5384C65.125 41.5384 65.125 42.0645 65.7012 42.0645H72.6298V47.0966H63.1552C63.1552 47.0966 59.0009 47.5023 59.0009 43.2253V40.2025C59.0009 40.2025 58.9741 39.5013 58.3037 40.1755L50.746 47.0959H47.4086C47.4086 47.0959 43.5623 47.2309 43.5623 43.2516V39.8924C43.5623 39.8924 43.6297 39.2577 43.1065 39.8114L35.2408 47.0959H31.9975C31.9975 47.0959 28.3926 47.4476 28.3926 43.4267V38.0436C28.3926 38.0443 28.4861 37.3424 27.5215 37.3424Z" fill="#A7A7A7" />
    </svg>
)