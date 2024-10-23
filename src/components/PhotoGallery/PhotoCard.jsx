
import { RxDoubleArrowRight } from "react-icons/rx";

const PhotoCard = ({ project}) => { 
    const { imageId, imageLarge, imageSmall, titleLarge, titleSmall, liveURL } = project;

    return (
        <>
        <div className={`hidden md:block relative top-0 transition-all duration-300 hover:-translate-y-2

        ${imageId === 1 && ' row-span-4    relative'}

        ${imageId === 2 && 'row-span-4  relative'}
        ${imageId === 3 && 'row-span-4 col-span-2    relative'}
        
        ${imageId === 4 && 'row-start-8 row-span-8       relative'}
        ${imageId === 5 && 'row-start-8 row-span-8       relative'}

        ${imageId === 6 && 'row-span-5       relative'}
        ${imageId === 7 && 'row-span-5       relative'}
        
        ${imageId === 8 && 'row-start-8 row-span-5       relative'}
        ${imageId === 9 && 'row-start-8 row-span-5       relative'}
        
        ${imageId === 10 && 'row-start-1 md:row-start-auto col-span-2 row-span-8       relative'}
        `}
        >
            {/* gradient layer on the image  */}
            <div className="to-bg-black-10 absolute z-30 inset-0 h-full w-full bg-gradient-to-t from-[#0F1724] via-[#0F1724]/20 rounded-t-xl md:rounded-t-2xl group ">
                <div className="relative h-full w-full">

                    <div className=" absolute bottom-0 w-full rounded-t-lg h-0 group-hover:h-[40%]  bg-gradient-to-t from-[#0F1724] via-[#0F1724]/50 duration-500  "></div>

                    <h2 style={{ background: 'rgb(131,103,212)',
background: 'linear-gradient(106deg, rgba(131,103,212,1) 9%, rgba(41,158,201,1) 37%)',
'-webkit-background-clip': 'text',
'-webkit-text-fill-color': 'transparent',
'background-clip': 'text'}}   className="hidden xl:block absolute transition-all duration-300  opacity-0 group-hover:opacity-100 -right-4 bottom-7 text-[22px] text-white/90 rowdies-light hover:cursor-pointer group-hover:right-[20%]">{titleLarge}</h2>

                    {(imageId === 3 || imageId === 10) && <h2 style={{ background: 'rgb(131,103,212)',
background: 'linear-gradient(106deg, rgba(131,103,212,1) 9%, rgba(41,158,201,1) 37%)',
'-webkit-background-clip': 'text',
'-webkit-text-fill-color': 'transparent',
'background-clip': 'text'}}   className="hidden lg:block xl:hidden absolute transition-all duration-300  opacity-0 group-hover:opacity-100 -right-4 bottom-7 text-[22px] text-white/90 rowdies-light hover:cursor-pointer group-hover:right-[20%]">{titleLarge}</h2>}


                    <a href={liveURL} target="_blank">
                   <div className="gradient-background rounded-md p-[1px] absolute bottom-6 -left-1 transition-all duration-500  opacity-0 group-hover:opacity-100 group-hover:left-5 ">

                   <button className="px-4 md:py-[7px] xl:py-[8px] rounded-md  text-white inter-medium text-xs shadow-lg bg-[#0F1724]  hover:brightness-110 flex items-center gap-2">Live<span className="text-xl text-cyan-400 "><RxDoubleArrowRight/></span></button></div></a>
                </div>
            </div>


            <img src={imageLarge} className="w-full h-full opacity-90 object-cover object-top rounded-t-xl lg:rounded-t-2xl gradient-background p-[1px] transition duration-300 relative"/>
        </div>


        {/* for mobile  */}


        <div className={`md:hidden transition-all duration-300 hover:-translate-y-2

${imageId === 1 && ' row-span-4    relative'}

${imageId === 2 && 'row-span-4  relative'}
${imageId === 3 && ' row-span-4 col-span-2    relative'}

${imageId === 4 && ' row-span-5      relative'}
${imageId === 5 && ' row-span-5      relative'}

${imageId === 6 && 'row-span-1 col-span-2     relative'}
${imageId === 7 && 'row-span-6       relative'}

${imageId === 8 && ' row-span-4       relative'}
${imageId === 9 && ' row-span-4       relative'}

${imageId === 10 && 'row-start-5 col-span-2 row-span-3 relative'}
`}
>
    {/* gradient layer on the image  */}
    <div className="to-bg-black-10 absolute z-30 inset-0 h-full w-full bg-gradient-to-t from-[#0F1724] via-[#0F1724]/20 rounded-t-xl md:rounded-t-2xl group">
                <div className="relative h-full w-full">

                    <div className=" absolute bottom-0 w-full rounded-t-lg h-0 group-hover:h-[40%]  bg-gradient-to-t from-[#0F1724] via-[#0F1724]/70 duration-500  "></div>

                    {(imageId === 3 || imageId === 6 || imageId === 10) && <h2 style={{ background: 'rgb(131,103,212)',
background: 'linear-gradient(106deg, rgba(131,103,212,1) 9%, rgba(41,158,201,1) 37%)',
'-webkit-background-clip': 'text',
'-webkit-text-fill-color': 'transparent',
'background-clip': 'text'}}   className=" absolute transition-all duration-300  opacity-0 group-hover:opacity-100 -right-4 bottom-7 text-[20px] text-white/90 rowdies-light hover:cursor-pointer group-hover:right-[20%]">{titleSmall}</h2>}

                    <a href={liveURL} target="_blank">
                   <div className="gradient-background rounded-md p-[1px] absolute bottom-6 -left-1 transition-all duration-500  opacity-0 group-hover:opacity-100 group-hover:left-5 ">

                   <button className="px-4 py-[7px] rounded-md  text-white inter-medium text-xs shadow-lg bg-[#0F1724]  hover:brightness-110 flex items-center gap-2">Live<span className="text-xl text-cyan-400 "><RxDoubleArrowRight/></span></button></div></a>
                </div>
            </div>

            <img src={imageSmall} className="w-full h-full opacity-90 object-cover object-top rounded-t-xl lg:rounded-t-2xl gradient-background p-[1px] transition duration-300 relative"/>
</div>


</>

    );
};

export default PhotoCard;