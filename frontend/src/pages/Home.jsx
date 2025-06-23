
import React,  { useState,useRef} from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
function Home() {
  const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
const [ panelOpen, setPanelOpen ] = useState(false)
 const panelRef = useRef(null)
 const panelCloseRef = useRef(null)
 const [vehiclePanel, setVehiclePanel] = useState(false)
const vehiclePanelRef = useRef(null)
    
    // Function to handle form submission
   const submitHandler = (e) => {
        e.preventDefault()
    }
    useGSAP(function(){
      if(panelOpen){
      gsap.to(panelRef.current, {
                height: '70%',
               padding: 24})
                
                  gsap.to(panelCloseRef.current, {
                opacity: 1
            })
      }

        else{ gsap.to(panelRef.current, {
                height: '0%',
                padding: 0})
                 gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
      },[panelOpen])

         useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])

  return (
    <div className='h-screen relative  overflow-hidden'>
<img className='w-16 absolute left-5 top-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
<div className='h-screen w-screen'>
  <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
  </div>
<div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
  <div className='h-[30%] p-6 bg-white relative'>

    <h5 ref={panelCloseRef}
    onClick={() => {
                                setPanelOpen(false)
                            }} 
    className='absolute opacity-0 right-6 top-6 text-2xl'>
      <i className="ri-arrow-down-wide-line"></i>
      </h5>
    <h4 className='text-3xl font-semibold'>Find a trip</h4>
  <form  onSubmit={(e) => {
                        submitHandler(e)}}>
                           <div className="line absolute h-16 w-1 top-[50%]  left-5 bg-gray-700 rounded-full"></div>
    <input 
    onClick={() => {
                                setPanelOpen(true)
                                // setActiveField('pickup')
                            }}
      value={pickup}
    onChange={(e) => setPickup(e.target.value)}
    type="text"   className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3' 
    placeholder='Add a pick-up location'  />
    <input 
      onClick={() => {
                                setPanelOpen(true)
                                
                            }}
  value={destination}
  onChange={(e) => setDestination(e.target.value)}
    type="text"   
    className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3' 
    placeholder='Enter your destination'  />
   
  </form></div>
  <div ref={panelRef} className='bg-white h-0 '>
<LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
</div>

</div>
<div  ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
 <h5 className='p-1 w-[93%] text-center  absolute top-0'
 onClick={() => {setVehiclePanel(false)}
                            }
 ><i className="text-gray-200 text-3xl ri-arrow-down-wide-line"></i></h5>
  <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
<div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between '>
  <img className='h-14 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
<div className='ml-2 w-1/2'>
<h4 className='font-medium text-base'>UberGo <span><i className='ri-user-fill'></i>5</span></h4>
<h5 className='font-medium text-sm'> 2 mins away</h5>
<p className='font-normal text-xs text-gray-600'> Afoordable, compact rides</p>
</div>
  <h2 className='text-xl font-semibold'>₹193.20</h2>
</div>
<div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between '>
  <img className='h-14 ' src="data:image/jpeg;base64,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" alt="" />
<div className='ml-2 w-1/2'>
<h4 className='font-medium text-base'>Moto <span><i className='ri-user-fill'></i>1</span></h4>
<h5 className='font-medium text-sm'> 3 mins away</h5>
<p className='font-normal text-xs text-gray-600'> Afoordable, compact rides</p>
</div>
  <h2 className='text-xl font-semibold'>₹65.56</h2>
</div>

<div className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between '>
  <img className='h-14 ' src="data:image/jpeg;base64,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" alt="" />
<div className='ml-2 w-1/2'>
<h4 className='font-medium text-base'>UberAuto <span><i className='ri-user-fill'></i>3</span></h4>
<h5 className='font-medium text-sm'> 3 mins away</h5>
<p className='font-normal text-xs text-gray-600'> Afoordable, compact rides</p>
</div>
  <h2 className='text-xl font-semibold'>₹120.96</h2>
</div>

</div>
    </div>
  )
}

export default Home