import React from 'react'

const LocationSearchPanel = (props) => {
  
  const locations = [
    
      '56, shyam kumat, near gandhi chauk sitamarhi',
    
    
      '123, main street, near city center',
  
    
       '789, elm street, near the park',
      '456, oak avenue, near the library',
    
  ]
  return (
    <div>
      {
locations.map(function(elem){
return <div onClick={()=>{props.setVehiclePanel(true)
  props.setPanelOpen(false)
}} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
      <i className="ri-map-pin-fill"></i> </h2>
    <h4 className='font-medium'>{elem}</h4>
  </div>

})
     


      }
    </div>
  )
}

export default LocationSearchPanel