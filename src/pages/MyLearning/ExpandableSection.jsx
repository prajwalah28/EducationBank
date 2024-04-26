import React, { useState } from 'react';
import expandableSectionsData from './expandableSectionsData';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const ExpandableSection = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 p-4 border-t-2">
      <div
        className="cursor-pointer text-gray-800 font-bold flex flex-row gap-4  justify-center "
        onClick={() => setExpanded(!expanded)}
      >
        {title} {expanded ? <IoIosArrowUp className='mt-2'/> : <IoIosArrowDown className='mt-2'/>}
      </div>
      {expanded && (
        <div className="bg-white p-4 mt-2 rounded-md shadow-md">
          {content.map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto">
      {expandableSectionsData.map((section, index) => (
        <ExpandableSection key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default App;