import React from "react";
import { Icons } from "../../../assets/assets";

const Form = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <div
      className=" w-full border border-orange-500 "
      style={{ height: "600px" }}
    >
      <form action="" onSubmit={HandleSubmit}>
        <div className="text-center border border-b-orange-500  py-3">
          <h1 className="text-lg font-semibold">Rajat Jagre</h1>
          <p>Add information about yourself</p>
        </div>

        <div className="px-4 border border-b-orange-500 py-4 ">
          <h1 className="mb-1">Basics : </h1>
          <div className="">
            <div className="border-2 border-blue-950 mb-2  flex items-center justify-between  ">
              {" "}
              <input
                type="text"
                placeholder="Name"
                className=" outline-none w-96 h-6 px-3"
                required
              />
              <div className="  border border-l-blue-950 h-8 px-2 flex items-center  ">
                <Icons.MdModeEdit className="text-blue-600" />
              </div>
            </div>

            <div className="border-2 border-blue-950  flex items-center justify-between ">
              {" "}
              <input
                type="text"
                placeholder="Name"
                className=" outline-none w-96 h-6 px-3"
                required
              />
              <div className=" border border-l-blue-950 h-8 px-2 flex items-center   ">
                <Icons.MdModeEdit className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 border border-b-orange-500 py-4">
          <div className="border-2 border-blue-950 px-2 h-8 flex items-center ">
            <select
              id="languages"
              name="languages"
              className=" outline-none w-full"
              required
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
            </select>
          </div>
        </div>

        <div className="px-4 py-3 ">
          <h1>Links : </h1>
          <div className="flex justify-between   border-2 border-blue-950">
            <div className="px-3 h-8 flex">
              <input
                type="text"
                placeholder="http://github.com/"
                className="outline-none"
                required
              />
            </div>
            <div className="border border-l-blue-950 px-10 flex items-center">
              <h1 className="text-sm">Git Profile</h1>
            </div>
          </div>

          <h1 className="text-xs mb-2 text-orange-500">
            Add your GitHub username
          </h1>
          <div className="flex justify-between   border-2 border-blue-950">
            <div className="px-3 h-8 flex">
              <input
                type="text"
                placeholder="http://www.linkedin.com/"
                className="outline-none"
                required
              />
            </div>
            <div className="border border-l-blue-950 px-10 flex items-center">
              <h1 className="text-sm ">Git Profile</h1>
            </div>
          </div>
          <h1 className="text-xs mb-2 text-orange-500">
            Add your LinkedIn username
          </h1>
        </div>

        <div className="border px-4 ml-4 w-24 text-center py-1 bg-blue-950 text-white cursor-pointer">
          <input type="submit" value="Save" className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default Form;
