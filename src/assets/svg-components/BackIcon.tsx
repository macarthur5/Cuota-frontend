import React, {FC} from "react";

const BackIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      viewBox="0 0 24 24"
      width="32px"
      fill="rgb(50, 50, 50)"
      {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    </svg>
  );
};

export default BackIcon;
