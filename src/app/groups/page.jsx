"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const page = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="flex items-center mt-8 md:mt-12 max-w-[1500px] mx-auto flex-col md:flex-row gap-6 md:gap-10">
      <div className="w-full md:w-[70%] bg-gray-900 rounded-md">
        <div className="flex items-center border border-white justify-between">
          <Box className={` w-fit`}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="white"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "none",
                  color: "white",
                },
                "& .Mui-selected": {
                  color: "#4ade80",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#4ade80",
                  height: "4px",
                  borderRadius: "2px",
                },
              }}
            >
              <Tab value="one" label="Your Groups " />
              <Tab value="two" label="Requested" />
            </Tabs>
          </Box>
          <button className="py-2 px-5 rounded-full text-white border border-green-500">
            Create Group
          </button>
        </div>
        {value === "one" && <h1 className="text-white">one</h1>}
        {value === "two" && <h1 className="text-white">two</h1>}
      </div>
      <div className="w-full md:w-[30%] bg-gray-900 rounded-md">
        <h2 className="text-white">group</h2>
      </div>
    </section>
  );
};

export default page;
