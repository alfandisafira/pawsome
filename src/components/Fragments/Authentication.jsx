import React from "react";

import Button from "../Elements/Button";

const Authentication = () => {
  return (
    <div className="w-[216px] h-[37px] justify-end items-start gap-4 inline-flex">
      <Button
        type="button"
        outerClassName="text-primary hover:text-white"
        borderColor="primary"
        btnClassName="w-[100px] h-[37px] hover:bg-primary text-sm leading-[21px]"
      >
        Sign In
      </Button>
      <Button
        type="button"
        outerClassName="text-white"
        borderColor="primary"
        btnClassName="w-[100px] h-[37px] bg-primary hover:bg-hoverPrimary text-sm leading-[21px]"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Authentication;
