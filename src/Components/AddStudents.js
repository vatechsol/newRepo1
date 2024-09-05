import React, { useState } from "react";

const AddStudents=()=>{

  const [formData,setFormData]=useState({
    name:"",
    rollNumber:"",
    college:"",
    branch:""

  })

    const SubmitData = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch("http://localhost:4000/api/student", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: myHeaders,
    
        }).then((data) => console.log(data)).catch((err) => console.log(err));
      }

      const handleChange=()=>{

      }

    return(
        <div>
            <form onSubmit={SubmitData} method="POSt">
              <input type="text" name="name" value={formData.name} onChange={handleChange}/>
              <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange}/>
              <input type="text" name="college" value={formData.college} onChange={handleChange}/>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange}/>
              
            </form>
            <button onClick={SubmitData}>click me</button>

        </div>
    )
}

export default AddStudents;