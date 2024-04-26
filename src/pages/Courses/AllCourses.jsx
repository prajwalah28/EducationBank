import React from "react";
import courseData from "./CoursecData";
import CourseCard from "./CourseCard";

import { Icons } from '../../assets/assets'; 
import { Link } from 'react-router-dom';


const AllCourses = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  justify-items-center py-10">
      {courseData.map((item, index, arr) => {
        const { id, name, rating, numRatings, price } = item;

        return (
          <CourseCard
            key={id}
            name={name}
            rating={rating}
            numRatings={numRatings}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default AllCourses;
