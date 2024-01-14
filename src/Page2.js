import star from './images/star.png';
import starw from './images/starw.png';
import mag from './images/mag.png';
import profile2 from './images/pose2.png';
import loc from './images/loc.png';
import phon from './images/phon.png';
import mail from './images/mail.png';
import yarn from './images/yarn.png';
import paint from './images/paint.png';
import paw from './images/paw.png';
import music from './images/music.png';

const Page2 = () => {
    return (
      <div className="App-div">
        <div className="bg-cream flex items-center justify-end pr-[40px] pt-[15px]">
          <div className="flex items-center font-extrabold text-[35px] mr-auto py-[20px] ">
            <img src={star} alt="Star" className="pl-[20px]" />
            <div className="pl-[20px]">Abraham N K</div>
          </div>
          <a href="link e" className=" text-xl px-[30px]">About me</a>
          <a href="link e" className=" text-xl px-[30px]">Work</a>
          <a href="link e" className="bg-orange  px-[15px] py-[10px] rounded-full text-lg ml-[30px]">Get in touch!</a>
        </div>
        <div className='bg-cream h-[550px]'>
            <div className=' font-times text-[500%] absolute top-[1000px] left-[200px] font-bold'>
                <div>Hello,</div>
                <div>I'm Han !</div>
            </div>
            <div className='text-justify absolute top-[1245px] text-[18px] max-w-[380px] left-[200px]'>
                I am a self-taught Graphic Designer based in Vietnam with extensive marketing and communication experience. I am currently living in France and pursuing a degree in Digital Web & Project Management.
            </div>
            <a href="linkedin.com/in/han-nnb" className="pl-[100px] px-[75px] py-[10px] rounded-full text-lg absolute top-[1410px] left-[200px]">linkedin.com/in/han-nnb</a>
            <img src={mag} alt="mag" className="absolute top-[1420px] left-[235px] size-7" />
        </div>
        <div className='bg-green h-[630px]'>
            <div className=' font-times text-[500%] absolute top-[1000px] left-[200px]'>
            </div>
            <img src={profile2} alt="Portfolio2 Pose2" className='absolute top-[950px] right-[240px] w-[400px]' />
            <div className='absolute right-[240px] top-[1465px] p-[20px] bg-black  h-[180px] w-[400px] text-lg z-[1]'>
              <div className='text-white pl-[55px] font-times text-[45px] pb-[20px]'>Contact</div>
              <div className='text-white pl-[55px] text-[15px] pb-[5px] flex items-center'> <img src={loc} alt="location" className='pr-[10px] h-[20px]' /> Narbonne, France</div>
              <div className='text-white pl-[55px] text-[15px] pb-[5px] flex items-center'> <img src={mail} alt="email" className='pr-[10px] h-[14px]' /> nnbh928@gmail.com</div>
              <div className='text-white pl-[55px] text-[15px] pb-[5px] flex items-center'> <img src={phon} alt="Phone number" className='pr-[10px] h-[18px]' /> 07 82 84 59 00</div>
            </div>
          <div className='text-orange font-times text-[350%] pl-[200px] pt-[50px]'>
            Education
          </div>
          <div className='text-white font-times pl-[130px]'>
            <div className="flex items-center">
              <img src={star} alt="Star" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2022 - 2023</div>
              <div className="pl-[20px] mt-[23px] text-[15px]">
                <div className="text-[20px]">
                Digital Campus, Montpellier  
                </div>
                Digital Web & Project Management
              </div>
            </div>
            <div className="flex items-center">
              <img src={star} alt="Star" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2021 - 2022</div>
              <div className="pl-[20px] mt-[23px] text-[15px]">
                <div className="text-[20px]">
                IUT de Béziers  
                </div>
                Commercialisation Technique
              </div>
            </div>
            <div className="flex items-center">
              <img src={star} alt="Star" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2017 - 2020</div>
              <div className="pl-[20px] mt-[23px] text-[15px]">
                <div className="text-[20px]">
                Economic University, Danang  
                </div>
                International Business
              </div>
            </div>
          </div>
          <div className=' bg-orange font-times text-[350%] left-[120px] top-[1920px] pl-[20px] w-[600px] h-[505px] absolute'>
            <div className='pl-[60px] pt-[20px] font-extrabold'>
              Experience
            </div>
            <div className="flex items-center mt-[-25px]">
              <img src={starw} alt="Starw" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2022</div>
              <div className="pl-[20px] mt-[30px]  mb-[-15px] text-[15px]">
                <div className="text-[20px] font-bold">
                Marketing Intern  
                </div>
                  <div className="text-[13px]">Social media content creator</div>
                  <div className="text-[13px]">Bi Ethic, Narbonne, France</div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={starw} alt="Starw" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2021</div>
              <div className="pl-[20px] mt-[30px]  mb-[-15px] text-[15px] w-[340px]">
                <div className="text-[20px] font-bold">
                Freelancer  
                </div>
                <div className="text-[13px]">
                  Consulted with clients, created logos, posters, presentations based on their requirements
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={starw} alt="Starw" className="pl-[20px] w-[50px]" />
              <div className="pl-[20px] text-[30px] font-extrabold">2020</div>
              <div className="pl-[20px] mt-[30px]  mb-[-15px] text-[15px]">
                <div className="text-[20px] font-bold">
                Graphic Designer  
                </div>
                  <div className="text-[13px]">Design promotional materials for events</div>
                  <div className="text-[13px]">Songhan Incubator, Vietnam</div>
              </div>
            </div>
            <div className='flex pt-[30px] pl-[50px]'>
              <div className="bg-black text-[14px] text-white px-[30px] py-[10px] rounded-full text-lg ml-[10px]">#Creatifity</div>
              <div className="bg-black text-[14px] text-white px-[50px] py-[10px] rounded-full text-lg ml-[10px]">#Communication</div>
            </div>
            <div className='flex pt-[10px] pl-[50px]'>
              <div className="bg-black text-[14px] text-white px-[30px] py-[10px] rounded-full text-lg ml-[10px] whitespace-nowrap" >#Detail-oriented</div>
              <div className="bg-black text-[14px] text-white px-[30px] py-[10px] rounded-full text-lg ml-[10px]">#Adaptability</div>
            </div>
          </div>
        </div>
        <div className="bg-orange  px-[45px] py-[15px] rounded-full text-lg ml-[30px] absolute top-[1240px] right-[490px]">2nd August 1999</div>
        <div className="bg-orange  px-[45px] py-[15px] rounded-full text-lg ml-[30px] absolute top-[1380px] right-[200px]">Vietnamese</div>
        <div>
          <div className='outline-p font-times text-[750%] absolute top-[1440px] right-[200px]'>
            RESUME
          </div>
          <div className='outline-p font-times text-[750%] absolute top-[1540px]  right-[200px]'>
            RESUME
          </div>
          <div className='outline-p font-times text-[750%] absolute top-[1640px]  right-[200px]'>
            RESUME
          </div>
          <div className='absolute top-[1745px] left-[820px]'>
            <div className='text-orange font-times font-bold text-[250%]'>
              Technical skills
            </div>
            <div className='pt-[15px] flex'>
              <div className='pr-[100px]'>
                <div className='text-white font-times font-bold text-[20px]'>
                  Software Skills
                </div>
                <div className='pt-[20px] flex'>
                  <div className="bg-white mr-[10px] flex items-center justify-center text-green text-[27px] font-bold p-[5px] w-[45px] h-[45px] rounded-[10px]">Ps</div>
                  <div className="bg-white mr-[10px] flex items-center justify-center text-green text-[27px] font-bold p-[5px] w-[45px] h-[45px] rounded-[10px]">Ai</div>
                  <div className="bg-white mr-[10px] flex items-center justify-center text-green text-[27px] font-bold p-[5px] w-[45px] h-[45px] rounded-[10px]">Id</div>
                </div>
                <div className='pt-[10px] flex'>
                  <div className="bg-white mr-[10px] flex items-center justify-center text-green text-[27px] font-bold p-[5px] w-[45px] h-[45px] rounded-[10px]">Xd</div>
                  <div className="bg-white mr-[10px] flex items-center justify-center text-green text-[27px] font-bold p-[5px] w-[45px] h-[45px] rounded-[10px]">Pr</div>
                </div>
              </div>
              <div className='text-white'>
                <div className='text-white font-times font-bold text-[20px]'>
                  Coding Skills
                </div>
                <div className='pt-[15px]'>
                  Basic knownledge of:
                  <div className='flex pt-[10px]'>
                    <div className='pr-[45px]'>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>JavaScript</p>
                    </div>
                    <div>
                      <p>SQL</p>
                      <p>PHP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className='pt-[25px]'>
                <div className='flex pt-[30px]'>
                  <div className="bg-black text-white px-[35px] py-[5px] rounded-full text-lg">Packaging</div>
                  <div className="bg-black text-white px-[35px] py-[5px] rounded-full text-lg ml-[10px]">Visual Design</div>
                </div>
                <div className='flex pt-[10px]'>
                  <div className="bg-black text-white px-[35px] py-[5px] rounded-full text-lg">UI/UX design</div>
                  <div className="bg-black text-white px-[35px] py-[5px] rounded-full text-lg ml-[10px]">User research</div>
                </div>
              </div>
              <div className='pt-[100px]'>
                <div className='font-times font-bold text-[250%]'>
                  Language
                </div>
                <div className='flex pt-[20px]'>
                  <div>
                    <div className='font-times font-bold text-[20px] pr-[40px]'>
                      English
                    </div>
                    Fluent
                  </div>
                  <div>
                    <div className='font-times font-bold text-[20px] pr-[60px]'>
                      French
                    </div>
                    Intermediate
                  </div>
                  <div>
                    <div className='font-times font-bold text-[20px] pr-[40px]'>
                      Vietnamese
                    </div>
                    Native
                  </div>
                </div>
              </div>
              <div className='pt-[110px]'>
                <div className='font-times font-bold text-[250%]'>
                  Hobbies & Interests
                </div>
                <div className='flex pt-[20px]'>
                  <div className='text-center flex-1 pr-[40px]'>
                    <div className='font-times font-bold text-[20px]'>
                      <img src={music} alt="music" className="mx-auto w-[60px]" />
                    </div>
                    <div className='w-[150px] text-center pt-[10px]'>
                      Clasical Funky/Chypsy Jazz
                    </div>
                  </div>
                  <div className='text-center flex-1 pr-[40px]'>
                    <div className='font-times font-bold text-[20px]'>
                      <img src={yarn} alt="yarn" className="mx-auto w-[60px]" />
                    </div>
                    <div className='w-[80px] text-center pt-[10px]'>
                      Crochet Knitting
                    </div>
                  </div>
                  <div className='text-center flex-1 pr-[40px]'>
                    <div className='font-times font-bold text-[20px]'>
                      <img src={paint} alt="paint" className="mx-auto w-[60px]" />
                    </div>
                    <div className='w-[110px] text-center pt-[10px]'>
                      Digital art Miniature craft
                    </div>
                  </div>
                  <div className='text-center flex-1 pr-[40px]'>
                    <div className='font-times font-bold text-[20px]'>
                      <img src={paw} alt="paw" className="mx-auto w-[60px]" />
                    </div>
                    <div className='w-[80px] text-center pt-[10px]'>
                      Cat, cat and cat
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='bg-cream h-[620px]'>
          <div>
            <div className='font-times text-[350%] pl-[200px] pt-[285px] pb-[10px]'>
              Activities
            </div>
            <div className='font-times pl-[130px]'>
              <div className="flex items-center">
                <img src={star} alt="Star" className="pl-[20px] w-[50px]" />
                <div className="pl-[20px] text-[30px] font-extrabold">2020</div>
                <div className="pl-[40px] mt-[5px] text-[15px] mb-[-20px]">
                  <div className="text-[20px]">
                  'Danang Tui' 2 exhibition  
                  </div>
                  Artist of miniature art
                </div>
              </div>
              <div className="flex items-center">
                <img src={star} alt="Star" className="pl-[20px] w-[50px]" />
                <div className="pl-[20px] text-[30px] font-extrabold">2019</div>
                <div className="pl-[40px] mt-[40px] text-[15px] w-[300px]">
                  <div className="text-[20px]">
                  Danang Robodnic contest  
                  </div>
                  Volunteer designer and producer of promotional materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Page2;