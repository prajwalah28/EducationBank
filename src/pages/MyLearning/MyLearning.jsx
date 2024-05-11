// import React, { useState, useEffect, useContext } from 'react';
// import { Icons } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../Context/LoginContext'; // Update path

// function MyLearning() {
//   const { userEmail } = useContext(UserContext);
//   const [userCourses, setUserCourses] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.1.41:8080/api/myCourses')
//       .then(response => response.json())
//       .then(data => {
       
//         const courses = data.filter(item => item.loginDetails.email === userEmail);
//         setUserCourses(courses);
//         console.log(courses)
//       })
//       .catch(error => console.error('Error fetching courses:', error));
//   }, [userEmail]);

  

//   return (
//     <div>
//       <h1 className='font-inter text-4xl font-bold leading-tight text-center mt-28'>My Learning</h1>
//       <div className="container mx-auto px-4 flex mb-12">
//         <div className="flex flex-wrap justify-center">
//           {userCourses.map((course, index) => (
//             <div key={index} className="mt-12 mx-4">
//               <Link to='/VideoPlayer'>
//                 <div>
//                   <div className="border-2 border-orange-500 flex max-w-xl">
//                     <div className="w-1/3">
//                       <img src={course.courses.image} alt={course.courses.courseTitle} className="h-full w-full object-cover" />
//                     </div>
//                     <div className="px-4 py-2 w-2/3">
//                       <div className="text-orange-500 font-semibold">
//                         <h1>{course.courses.courseTitle}</h1>
//                       </div>
//                       <div>
//                         <h1 className="flex items-center">
//                           <span className="mr-1">{course.courses.ratings}</span>
//                           <img src={Icons.FiveStar} alt="" className="w-20" />
//                           <span className="text-gray-400 ml-1">({course.courses.instructor.reviews})</span>
//                         </h1>
//                         <div className='flex gap-48'>
//                           <h1 className="text-md font-bold mt-4">₹ {course.courses.cost}</h1>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyLearning; 
import React, { useState } from 'react';
import { Icons } from '../../assets/assets';
import Courses from '../AddCart/Courses';
import { Link } from 'react-router-dom';

function MyLearning() {
  const [cartItems, setCartItems] = useState(Courses);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveFromCart = (index) => {
    console.log('Removing item at index:', index);
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1 className='font-inter text-4xl font-bold leading-tight text-center mt-28'>My Learning</h1>
      <div className="container mx-auto px-4 flex mb-12">
        <div className="flex flex-wrap justify-center">
          {cartItems.map((item, index) => (
            <div key={index} className="mt-12 mx-4">
                <Link to='/VideoPlayer'>
              <div>  
              <div className="border-2 border-orange-500 flex max-w-xl">
                <div className="w-1/3">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="px-4 py-2 w-2/3">
                  <div className="text-orange-500 font-semibold">
                    <h1>{item.name}</h1>
                  </div>
                  <div>
                    <h1 className="flex items-center">
                      <span className="mr-1">4.5</span>
                      <img src={Icons.FiveStar} alt="" className="w-20" />
                      <span className="text-gray-400 ml-1">(30,000)</span>
                    </h1>
                    <div className='flex gap-48'>
                      <h1 className="text-md font-bold mt-4">₹ {item.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default MyLearning;


