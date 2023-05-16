import { Avatar, Typography, Button, Tabs } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import {WhatsAppOutlined} from '@ant-design/icons';
import { teamData } from "@/data";

export function Profile() {
  
  return (
    <>
      <section className="relative block h-[60vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/hands.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 ">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-60 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6 py-8">
              <h1 className="text-center text-4xl">Our Vision and Mission</h1>
              <div className="grid grid-cols-2">
                <div className="px-8 py-12 text-lg leading-7 text-[#2d6a81]">NanoCare is committed to providing high-quality health care services to individual clients and their families, as well as to other healthcare organizations in need of supplemental staffing such as certified home health and hospice agencies, health plans, hospitals, nursing homes and assisted living facilities.

Our priority is to provide state-of-the-art and compassionate in-home care from highly-trained medical professionals and aides. To make good on this promise, proper training is paramount. Not only do we hire the most experienced personnel, but we provide them with in-depth disease-specific training so that they can deliver specialized care to our clients.</div>
                <div className="px-8 py-12 text-lg leading-7 text-[#2d6a81]">At NanoCare, we believe everyone should have the opportunity to live a healthy, active and fulfilling life. This ethos is at the heart of everything we do.

We provide everyone we support with the opportunity to continue to live life to the full. We actively encourage Service Users to become more self-reliant, to make decisions for themselves, and ultimately, to move on to more independent living arrangements.

We facilitate and support our Service Users to pursue meaningful and personalised lifestyles. We provide individually planned education & leisure opportunities to support each individual in their ongoing development.</div>
              </div>

              <div>
                <h1 className="text-center text-4xl">The Grand Team</h1>
                {/* <div className="grid grid-cols-2">
                    <div className="px-8 py-12 text-lg leading-7 text-[#2d6a81]">Our home health care management team is highly experienced in delivering exceptional care and support for clients – regardless of age or specific medical needs.</div>

                    <div className="px-8 py-12 text-lg leading-7 text-[#2d6a81]">The leadership team at NanoCare discusses what home care means to them and how NanoCare is changing the way the world ages.</div>
              </div> */}

              <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
                {teamData.map(({ img, name, position, socials }) => (
                  <div className="rounded-md ">
                        <img className="rounded-md mb-4" src={img}/>
                        <p className="text-xl text-[#2d6a81] px-4">{name}</p>
                        <p className="text-md text-[#cc2591] px-4">{position}</p>
                  </div>
                    



                ))}
          </div>
              </div>
                
              
              

             
            </div>
          </div>
        </div>
        <section>
        <div className="py-16  md:px-52 w-full h-[20%] bg-gradient-to-r from-[#0db1d5] to-[#076A7F]">
          <h1 className="text-white text-3xl md:text-5xl text-center md:px-4 px-0">We do what ever it takes to bring<br/> you peace of mind</h1>
          <div className="md:flex block justify-between  w-[65%] gap-8 mt-12 text-center m-auto">
              <button  className="px-8 min-w-fit py-4  mt-4 border text-white border-white hover:border-[#214d78] hover:shadow-lg rounded-md">
              Learn more
            </button>
            <div className="flex w-full md:w-[62%] justify-between cursor-pointer hover:shadow-lg px-2 hover:border hover:border-[#076A7F]">
              
            <WhatsAppOutlined  className="text-white  text-4xl mt-2 md:mt-4"/>
              <div className="block justify-between ">
              <p className="text-white text-lg font-mormal">24/7 service available</p>
              <p className="text-white text-2xl md:text-4xl font-extrabold">01 800 688 8688</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
