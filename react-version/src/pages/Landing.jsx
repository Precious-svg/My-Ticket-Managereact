import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { useNavigate} from 'react-router-dom'
import heroWave from '../../../assests/hero-wave.svg'
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
            <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16'>
                <Card bgColor="bg-yellow-500 flex justify-center items-center min-h-[150px]">
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

            <img src={heroWave}  alt="Hero Wave" class="absolute bottom-0 left-0 w-full"
    />
        </main>

    </div>
  )
}

export default Landing