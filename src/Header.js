import star from './images/star.png';


const Header = () => {
  return (
    <header className="App-header">
      <div className="bg-green flex items-center justify-end pr-[40px] pt-[15px]">
        <div className="flex items-center font-extrabold text-[35px] mr-auto py-[20px] text-white">
          <img src={star} alt="Star" className="pl-[20px]" />
          <div className="pl-[20px]">Abraham N K</div>
        </div>
        <a href="link e" className="text-white text-xl px-[30px]">About me</a>
        <a href="link e" className="text-white text-xl px-[30px]">Resume</a>
        <a href="link e" className="text-white text-xl px-[30px]">Work</a>
        <a href="link e" className="bg-orange px-[15px] py-[10px] rounded-full text-lg ml-[30px]">Get in touch!</a>
      </div>
    </header>
  );
}

export default Header;
