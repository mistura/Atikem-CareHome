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
import {WhatsAppOutlined} from '@ant-design/icons';
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
    <body >
    {/* Hero start */}
      <div className="relative flex h-screen  justify-center">
        <div className="min-w-fit top-0 h-full w-full bg-[url('/public/img/img16.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute top-0 h-full w-full bg-black/40 bg-cover bg-center" />
        <div className="w-1/2 items-start py-[2%]  absolute left-8 top-[15%] ">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto min-w-fit px-4  lg:w-[50%]">
            <Typography
                variant="h6"
                color="white"
                className=" font-[#2d6a81] "
              >
              Atikem Care Services
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black "
              >
              Quality care in the conform of your own home/ 24/7 supported living
              </Typography>
              <div className="flex w-[75%] justify-between">
              <button size="lg" className="min-w-max px-12 hover:shadow-3xl hover:border-[#0db1d5]  py-2 text-white rounded-lg bg-[#0db1d5] hover:bg-none mt-8">
              Make Enquiry
            </button>  
            <button  size="lg" className="px-6 py-4 mt-8 border text-white border-white hover:bg-[#0db1d5] hover:shadow-xl hover:border-[#0db1d5] rounded-lg">
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
        <div className="w-full text-center bg-[#cc2591]   hover:bg-[#8b1963] cursor-pointer " >
        <Typography
                variant="h6"
                color="white"
                className="py-4 font-black "
                icon= {MapIcon}
              >
              Find your nearest Atikem Office?
              </Typography>
        </div>
      </section>

{/* find care office end */}

<section>
  <div className="py-20  h-auto px-8">
    <p className="font-[#2d6a81] text-3xl">
    We offer a unique service of personalised care options from check-in<br/> visits to full live-in support.
    <div className="block md:flex justify-between my-8">
      <ColoredLine color="#3174b4"/>
      <div className="w-1/2">
        <p className="text-lg">Atikem Care Services will provide the following home health care programs at flexible schedules and cost-friendly service rates.</p>
      </div>
      
      <Button className="text-lg text-black hover:text-white bg-[#0db1d5]">View Services</Button>
    </div>
      <div className=" rounded-md grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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


{/* Why People Trust Atikem */}

      <section >
        <div className="h-[300px] relative w-full bg-[url('/public/img/img6.jpg')] bg-cover bg-center">
          <div className="w-full h-full bg-black/60">
          <Typography variant="h2" color="white" className="text-center py-[7%]">
          Why People Trust Atikem
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
          <div className="mt-16 flex flex-wrap items-center">
            <div className="mx-auto  w-full px-4 md:w-5/12">
              
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

     
{/* testimonial */}
<section>
        <div className="py-8 px-8"> 
        <p className="font-[#2d6a81] text-3xl">
        Our 97% client satisfaction rate is unparalleled in our field.</p>
    <div className="block md:flex justify-between my-8">
      <ColoredLine color="#3174b4"/>
      <div className="w-1/2">
        <p className="text-lg">Read below what our clients have to say and learn more about what makes us the premier provider of in-home senior care.</p>
      </div>
      
      <Button className="text-lg text-black hover:text-white bg-[#0db1d5]">Write Review</Button>
    </div>
        </div>
        <div id="default-carousel" data-carousel="slide" className="grid grid-cols-1 md:grid-cols-2 mb-32">
          <div className="md:px-28 px-8 md:py-12 py-8 bg-[#0db1d5] text-white">
            <h1 className=" md:text-4xl text-xl font-bold py-1">Sharom</h1>
            <p className="md:text-xl text-md font-normal py-1">Happy Client</p>
            <p className="py-4 md:text-xl text-sm font-thin"><span className="text-6xl">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis repellendus sed nam. Culpa sequi, reiciendis hic aspernatur deserunt mollitia, labore reprehenderit tempora laudantium esse rerum exercitationem eligendi doloribus qui?</p>
            
          </div>
          <div className="h-[full]"><img className="h-full" src="/public/img/img4.jpg" alt="" /></div>
          


        </div>
        
        <div className="mx-auto  mb-32 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
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
                  {`" ` + description + `"`}
                </Typography>
              </Card>
            ))}
          </div>

</section>
{/* testimonial end */}

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

      <section className="relative bg-blue-gray-50/50 py-4 px-4">
        <div className="container mx-auto">
         
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
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer className="text-white"/>
      </div>
    </body>
  );
}

export default Home;
