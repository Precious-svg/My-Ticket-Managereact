import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { useNavigate} from 'react-router-dom'
const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className='max-w-[1440px] w-full mx-auto px-2'>
        <header className='w-full mt-24'>

            {/* for decorative circle */}
            <div  className="absolute -top-16 -left-16 w-48 h-48 bg-blue-200 rounded-full opacity-50 "></div>
            <div className="absolute top-10 right-6 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>
            <div className='flex flex-col justify-center items-center'>
                <h2>MyTicketApp</h2>
                <p>...Seamlessly create, track and resolve your tasks all in one place.</p>
            </div>
        </header>
           
           
        <main className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
          <div className='flex flex-col gap-3'>
               <Button onClick={() => navigate("/auth/signup")}>Get Started</Button>
               <Button onClick={() => navigate("/auth/login")}>Login</Button>
          </div>

            {/* feature section */}
            <section className='w-full grid grid-cols-3 gap-2 mt-16'>
                <Card bgColor="bg-yellow-500 flex justify-center items-center">
                   <section className='bg-white rounded-md'>
                       <h4 className='text-black'>Create new tickets</h4>
                       <p className='text-black'>Easily add new tickets with a high level of priority. </p>
                   </section>
                   
                </Card>
                <Card bgColor='bg-pink-500'>
                    <section>
                        <h4>Track</h4>
                        <p>Visualise your tricket status and update in realtime. </p>
                    </section>
                </Card>
                <Card>
                    <h4>Team Collaboration</h4>
                    <p>Work with your team efficiently and keep all updates and communication centralised.</p>
                </Card>
            </section>

            <svg
                className="absolute bottom-0 w-full aspect-[1440/320]"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
               <path
                 fill="#3b82f6"
                  fillOpacity="1"
                   d="M0,224L60,197.3C120,171,240,117,360,106.7C480,96,600,128,720,160C840,192,960,224,1080,224C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
          </svg>
        </main>

    </div>
  )
}

export default Landing