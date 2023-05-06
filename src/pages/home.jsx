import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon, MapIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Detials from "@/data/details";
import WhyChoose from "@/data/whyChoose";
export function Home() {

  const ColoredLine = ({ color }) => (
    <hr
    style={{
    color: color,
    backgroundColor: color,
    height: 3,
    borderRadius: 2,
    width:250
    }}
    />
    );
  return (
    <>
    {/* Hero start */}
      <div className="relative flex h-screen  justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/public/img/img16.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <div className="w-1/2 items-start py-[2%]  absolute left-8 top-[25%] ">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto min-w-full px-4  lg:w-8/12">
            <Typography
                variant="h6"
                color="white"
                className=" font-[#2d6a81] "
              >
              Atikem Care Home
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black "
              >
              You can't always be there but we can
              </Typography>
              <div className="flex w-[75%] justify-between">
              <button size="lg" className="min-w-max px-12 hover:shadow-xl  py-2 text-white rounded-lg bg-[#3174b4] mt-8">
              Make Enquiry
            </button>  
            <button  size="lg" className="px-6 py-4 mt-8 border text-white border-white hover:bg-[#3174b4] hover:shadow-xl hover:border-[#3174b4] rounded-lg">
              Request an Appointment
            </button>

              </div>
              

             
            </div>
          </div>
        </div>
      </div>

    {/* Hero end */}

{/* find care office start */}
      <section>
        <div className="w-full text-center bg-[#3174b4] h-20 py-4 hover:bg-[#1B3F4D] cursor-pointer " >
        <Typography
                variant="h6"
                color="white"
                className="mt-2 font-black "
                icon= {MapIcon}
              >
              Find your nearest Atikem Office
              </Typography>
        </div>
      </section>

{/* find care office end */}

<section>
  <div className="py-20  h-auto px-8">
    <p className="font-[#2d6a81] text-3xl">
    Would you rather stay at home than go into a health care facility <br/> or nursing home?
    <div className="block md:flex justify-between my-8">
      <ColoredLine color="#3174b4"/>
      <div className="w-1/2">
        <p className="text-lg">Atikem Care Home, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates.</p>
      </div>
      
      <Button className="text-lg text-black hover:text-white bg-[#3174b4]">View Care Facilities</Button>
    </div>
      <div className=" rounded-md grid grid-cols-3 gap-8 mt-12">
      {Detials.map(({img, text, narrative})=>(
        // <FeatureCard img={img} key={text} description={narrative}/>
          <div className="text-center">
            <img src={img} alt="" className="rounded-lg border h-2/3 w-[90%]"/>
            <p className="text-lg pt-6">{text}</p>
            <p className="text-slate-300 text-[15px] leading-normal px-8">{narrative}</p>

          </div>

       
      ))}

      </div>
      
   

    </p>
  </div>
</section>


{/* Knowledge Area start */}

      <section >
        <div className="h-[300px] relative w-full bg-[url('/public/img/img6.jpg')] bg-cover bg-center">
          <div className="w-full h-full bg-black/60">
          <Typography variant="h2" color="white" className="text-center py-[7%]">
                Why Choose Us
            </Typography>

          </div>
            
        </div>

      </section>

{/* Knowledge Area end */}

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ text, narrative, color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={text}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={narrative}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Having a hand to hold allows me to stay in my home
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est molestias quisquam vitae ipsum repudiandae blanditiis modi, voluptate, odit saepe alias, possimus vero voluptas omnis fugiat consequatur sapiente aliquid. Esse.
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit illo distinctio voluptas voluptatum numquam facere delectus. Dolore, ex nesciunt. Ad est cumque iure vero nam officiis voluptatum, libero dolores ratione.
              </Typography>
              <button  size="lg" className="px-6 py-4 mt-8 border text-[#3174b4] border-[#3174b4] hover:border-[#214d78] hover:shadow-lg rounded-lg">
              Learn more
            </button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/img15.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea laborum odio, accusamus maiores expedita delectus facere eveniet cumque hic!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Why choose Us">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Lets have a Chat!?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button  className="mt-8 bg-[#3174b4]">
              Send Message
            </Button>
          </form>
        </div>
      </section> */}

      <div className="bg-blue-gray-50/50">
        <Footer className="text-white"/>
      </div>
    </>
  );
}

export default Home;
