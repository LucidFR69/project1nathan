import profile from './images/pose.png';

const Page1 = () => {
  return (
    <div>
      <div className="bg-green h-[530px]">
        <div className='font-times text-white text-[900%] absolute top-[100px] left-1/2 transform -translate-x-1/2 z-[1]'>
          PORTFOLIO
        </div>
        <div className='outline-p font-times text-[900%] absolute top-[250px] left-1/2 transform -translate-x-1/2'>
          PORTFOLIO
        </div>
        <div className='outline-p font-times text-[900%] absolute top-[400px] left-1/2 transform -translate-x-1/2'>
          PORTFOLIO
        </div>
        <div className='outline-p font-times text-[900%] absolute top-[550px] left-1/2 transform -translate-x-1/2'>
          PORTFOLIO
        </div>
        <img src={profile} alt="Portfolio Pose" className='absolute top-[200px] left-[140px] h-[600px]' />
        <div className='absolute right-[10%] transform -translate-x-[40%] top-[365px] bg-green p-[60px] text-lg'>
          <div className='text-white pb-[5px]'>Wa    : +62 822-2003-0207</div>
          <div className='text-white pb-[5px]'>IG    : @lucid.fr</div>
          <div className='text-white pb-[5px]'>Email : lupacoi39@gmail.com</div>
        </div>
      </div>
      <div className="bg-black h-[233px]">
        <div className='text-white absolute left-[50px] top-[680px] text-[85%]'>
          <div>I love design and anything related to art.</div>
          <div>I approach problems in a rational and pragmatic</div>
          <div>way and seek the simplest and most functional</div>
          <div>solutions possible.</div>
        </div>
        <div className="absolute top-[812px] left-1/2 transform -translate-x-1/2 text-center w-[100px] h-[100px] bg-orange rounded-full flex justify-center items-center flex-col">
          <div>Scroll</div>
          <div>down</div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
