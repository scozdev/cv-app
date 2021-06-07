import * as React from "react";

function SvgPhone(props) {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="20" height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M11.229 11.229c-1.583 1.582-3.417 3.096-4.142 2.371-1.037-1.037-1.677-1.941-3.965-.102-2.287 1.838-.53 3.064.475 4.068 1.16 1.16 5.484.062 9.758-4.211 4.273-4.274 5.368-8.598 4.207-9.758-1.005-1.006-2.225-2.762-4.063-.475s-.936 2.927.103 3.965c.722.725-.791 2.559-2.373 4.142z" />
    </svg>
  );
}

export default SvgPhone;
