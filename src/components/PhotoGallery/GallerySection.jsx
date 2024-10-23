
import Container from "../Container";
import PhotoCard from "./PhotoCard";

const letestPhotos = [
    {
        imageId : 1,
        imageLarge : 'https://i.ibb.co.com/R9KKMyS/Fire-Shot-Capture-004-Zip-Car-car-rental-frontend-hazel-verce1l-app.png',
        titleLarge : 'Car Rental',
        imageSmall : 'https://i.ibb.co.com/R9KKMyS/Fire-Shot-Capture-004-Zip-Car-car-rental-frontend-hazel-verce1l-app.png',
        titleSmall : '',
        liveURL : 'https://car-rental-frontend-hazel.vercel.app'
    },
    {
        imageId : 2,
        imageLarge : 'https://i.ibb.co.com/4WVT29n/Fire-Shot-Capture-002-Campers-Shop-campers-shop-six-vercel-app.png',
        titleLarge : 'CamperHaven',
        imageSmall : 'https://i.ibb.co.com/4WVT29n/Fire-Shot-Capture-002-Campers-Shop-campers-shop-six-vercel-app.png',
        titleSmall : '',
        liveURL : 'https://campers-shop-six.vercel.app'
    },
    {
        imageId : 3,
        imageLarge : 'https://i.ibb.co.com/r3ThvLv/Fire-Shot-Capture-007-Trend-Tweaks-trend-tweaks-vercel-app.png',
        titleLarge : 'TrendTweaks - Social Media',
        imageSmall : 'https://i.ibb.co.com/r3ThvLv/Fire-Shot-Capture-007-Trend-Tweaks-trend-tweaks-vercel-app.png',
        titleSmall : 'Trend Tweaks -',
        liveURL : 'https://trend-tweaks.vercel.app'
    },
    {
        imageId : 4,
        imageLarge : 'https://i.ibb.co/6JyGVKD/Screenshot-785.png',
        titleLarge : 'Landing Page',
        imageSmall : 'https://i.ibb.co/6JyGVKD/Screenshot-785.png',
        titleSmall : '',
        liveURL : 'https://gym-sick.vercel.app'
    },
    {
        imageId : 5,
        imageLarge : 'https://i.ibb.co.com/m4D7ZZr/Fire-Shot-Cce48-web-app.png',
        titleLarge : 'BrandShop',
        imageSmall : 'https://i.ibb.co.com/m4D7ZZr/Fire-Shot-Cce48-web-app.png',
        titleSmall : '',
        liveURL : 'https://brandshop-ece48.web.app'
    },
    {
        imageId : 6,
        imageLarge : 'https://i.ibb.co.com/HYxKkD5/Fire-Shot-Capture-008-Savor-Sport-Cafe-Where-Every-Bite-Tells-a-Delicious-Story-savorspot-ca44444444.png',
        titleLarge : 'SavrSpotCafe',
        imageSmall : 'https://i.ibb.co.com/bgMSQkZ/Fire-Shot-Capture-008-Savor-Sport-Cafe-Where-Every-Bite-Tells-a-Delicious-Story-savorspot-caf1144441.png',
        titleSmall : 'SavorSpot Cafe -',
        liveURL : 'https://savorspot-cafe.web.app'
    },
    {
        imageId :7,
        imageLarge : 'https://i.ibb.co.com/dWDqsyM/Fire-Shot-Capture-015-Raery-Network-rapid-parc000el-web-app.png',
        titleLarge : 'Rapid Parcel',
        imageSmall : 'https://i.ibb.co.com/ct4Pw5Q/Fire-Shot-Capture-015-Rapid-Parcel-Express-Delivery-Network-rapid-parcel-web-app.png',
        titleSmall : 'Rapid Parcel',
        liveURL : 'https://rapid-parcel.web.app'
    },
    {
        imageId : 8,
        imageLarge : 'https://i.ibb.co.com/HHmjbkh/Fire-Shot-Capture-011-Haven-Homes-haven-hoffffmes-vercel-app.png',
        titleLarge : 'Landing Page',
        imageSmall : 'https://i.ibb.co.com/pbLp5F7/ee.png',
        titleSmall : '',
        liveURL : 'https://haven-homes.vercel.app'
    },
    {
        imageId : 9,
        imageLarge : 'https://i.ibb.co.com/ypkbpZN/Fire-Shot-Capture-010-Finder-Land-finderland-vercel-apxxxxxxxp.png',
        titleLarge : 'Landing Page',
        imageSmall : 'https://i.ibb.co.com/5Lg1r3Z/Fire-Shot-Capture-010-Finder-Land-finderland-vercel-apxxxxxx44444xp.png',
        titleSmall : '',
        liveURL : 'https://finderland.vercel.app'
    },
    {
        imageId : 10,
        imageLarge : 'https://i.ibb.co.com/2P9PFZv/Screenshot-874.png',
        titleLarge : 'Real-State Landing Page',
        imageSmall : 'https://i.ibb.co.com/2P9PFZv/Screenshot-874.png',
        titleSmall : 'Real-State Design',
        liveURL : 'https://smart-state.vercel.app'
    },
]

const GallerySection = () => {
    const  darkMode = true

    return (
        <Container>
               <section className="px-4">
         <div className="mb-1">

<h1 style={{textAlign: 'center'}} className={`text-2xl md:text-3xl lg:text-4xl  lg:text-left rowdies-regular mt-3 mb-9 md:mb-12 lg:mb-14 xl:mb-20 ${darkMode?'text-gray-300': 'text-black'}`}>My Projects</h1>



    {/* grid container  */}
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-12  gap-4 md:gap-6 lg:gap-5 xl:gap-7 gap-y-7  lg:gap-y-9 xl:gap-y-14">
    {letestPhotos?.map(image => <PhotoCard key={image.imageId} project={image}/>)}
</div>

</div>
       </section>
        </Container>
    
    );
};

export default GallerySection;