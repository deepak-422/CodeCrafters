import React from 'react'

const Medical = ({name="Mahila Mitra", age=26, contact="975432252"}) => {
  return (
    <>
    <div className='bg-colors  flex justify-center items-center bg-cover h-screen w-screen'>
    <div className="bg-glass backdrop-blur-sm p-8 rounded-lg shadow-md max-w-xl mx-auto">
         <h1 className="text-2xl font-bold mb-6">Medical Details</h1>
          <div className="mb-4"> 
            <label className="block text-gray-700">Patient Name:</label>
            <p className="px-4 py-2 font-bold rounded-lg">{name}</p> </div>
            <div className="mb-4"> <label className="block text-gray-700">Age:</label>
             <p className="px-4 py-2 font-bold rounded-lg">{age}</p> </div> <div className="mb-4">
                 <label className="block text-gray-700">Home Contact Number:</label>
                  <p className="px-4 py-2 font-bold rounded-lg">{contact}</p> </div> 
                  <div className="mb-4"> <label className="block text-gray-700">Medical History:</label> 
                  <p className="px-4 font-bold rounded-lg">
                  Asthma Diagnosis: Diagnosed at age 10. Symptoms include shortness of breath, wheezing, and chest tightness, particularly during physical activity or exposure to allergens. <br />
                  Recent Check-Up: Last pulmonary function test showed stable lung function with a peak flow rate of 450 L/min. <br />
                  Medications:

Daily: Fluticasone (inhaled corticosteroid) 100 mcg twice daily. <br />

As Needed: Albuterol (short-acting beta agonist) inhaler for acute symptoms.

                    
                    </p> </div></div></div>
    </>
  )
}

export default Medical