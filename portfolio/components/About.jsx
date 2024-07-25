import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, SchoolIcon } from 'lucide-react'
import DevImg from './DevImg'

const infoData = [
  {
    icon: <PhoneCall size={20} />,
    text: '+650-307-8627'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'cyao030@bu.edu'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on Febuary 14, 2005'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor\'s in Computer Science'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Millbrae, California, United States'
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        school: 'Boston University',
        major: 'Bachelor\'s in Computer Science',
        year: '2024-2026',
      },
      {
        school: 'University of California, Riverside',
        major: 'Bachelor\'s in Computer Science',
        year: '2023-2024',
      },
      {
        school: 'Mills High School',
        major: 'High School Diploma',
        year: '2019-2023',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'University of California, Riverside',
        title: 'Research Assistant',
        duration: 'Feb 2024 - Now',
      },
      {
        company: 'KTByte',
        title: 'Computer Science TA',
        duration: 'Jan 2023 - August 2023',
      },
      {
        company: 'Mills High School',
        title: 'Robotics Captain',
        duration: 'Sept 2019 - May 2023',
      },
    ],
  },
]

const skillData = [
  {
    title: 'Skills',
    data: [
      {
        name: 'HTML, CSS'
      },
      {
        name: 'C++'
      },
      {
        name: 'Python'
      },
      {
        name: 'Javascript'
      },
      {
        name: 'Matlab'
      },
      {
        name: 'NextJS'
      },
      {
        name: 'Tensorflow'
      },
    ]
  }
]

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }


  return <section className=' pb-12 py-16' >
    <div className="container mx-auto">
      <h2 id = 'about' className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>
      <div className='flex-1' >
        <Tabs defaultValue='personal'>
          <TabsList className='grid xl:grid-cols-3 mx-auto justify-center xl:w-[520px] xl:border dark:border-none'>
            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Info</TabsTrigger>
            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
          </TabsList>
          <div className='text-lg mt-12 xl:mt-8'>
            <TabsContent value='personal'>
              <div className='text-center'>
                <h3 className='h3 mb-4'>Computer Science student</h3>
                <p className='subtitle max-w-xl mx-auto'>
                  I am a Sophomore who recently transfered to Boston University majoring in Computer Science.
                </p>
                <div className='grid gap-4 mb-12'>
                  {infoData.map((item, index) => {
                    return (
                      <div className='flex items-center gap-x-4 mx-auto pr-5' key={index}>
                        <div className='text-primary'>{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value='qualifications'>
              <div className='grid items-center gap-y-8'>
                <h3 className='h3 mb-8 text-center'>
                  My Journey So Far
                </h3>
                <div className='flex flex-col items-center gap-y-3'>
                  <div className='flex gap-4 items-center text-[22px] text-primary mr-48'>
                    <Briefcase />
                    <h4 className='capitalize font-medium'>
                      {getData(qualificationData, 'experience').title}
                    </h4>
                  </div>
                  <div className='flex flex-col gap-y-8'>
                    {getData(qualificationData, 'experience').data.map((item, index) => {
                      const { company, title, duration } = item;
                      return (
                        <div key={index} className='flex'>
                          <div className='h-[84px] w-[1px] bg-border relative ml-3'></div>
                          <div className='flex flex-col gap-x-4 ml-7'>
                            <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                            <div className='text-lg leading-none text-muted-foreground mb-2'>{title}</div>
                            <div className='text-base font-medium'>{duration}</div>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className='flex flex-col items-center gap-y-3'>
                  <div className='flex gap-4 items-center text-[22px] text-primary mr-52'>
                    <GraduationCap size={28} />
                    <h4 className='capitalize font-medium'>
                      {getData(qualificationData, 'education').title}
                    </h4>
                  </div>
                  <div className='flex flex-col gap-y-8'>
                    {getData(qualificationData, 'education').data.map((item, index) => {
                      const { school, major, year } = item;
                      return (
                        <div key={index} className='flex'>
                          <div className='h-[84px] w-[1px] bg-border relative ml-3'></div>
                          <div className='flex flex-col gap-x-4 ml-7'>
                            <div className='font-semibold text-xl leading-none mb-2'>{school}</div>
                            <div className='text-lg leading-none text-muted-foreground mb-2'>{major}</div>
                            <div className='text-base font-medium'>{year}</div>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='skills'>
              <div className='text-center'>
                <h3 className='h3 mb-8'>Tools I Use</h3>
                <div className = 'mb-16'>
                  <div className='border-b border-border mb-4'></div>
                  <div>
                    {getData(skillData, 'Skills').data.map((item, index) => {
                      const { name } = item
                      return (
                        <div className='w-2/4 text-center mx-auto' key={index}>
                          <div className='font-medium'>{name}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </div>
  </section>
}

export default About