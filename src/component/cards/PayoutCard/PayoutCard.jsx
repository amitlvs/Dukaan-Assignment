import React from "react";

const PayoutCard = () => {
  return (
    <div className="frame">
      <div className="frame-wrapper">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <div className="text-wrapper">Next Payout</div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Outlined / Help" clipPath="url(#clip0_39203_197507)">
                  <g id="Vector">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.8856 11.6358C8.8856 12.1266 8.48772 12.5245 7.9969 12.5245C7.50609 12.5245 7.1082 12.1266 7.1082 11.6358C7.1082 11.145 7.50609 10.7471 7.9969 10.7471C8.48772 10.7471 8.8856 11.145 8.8856 11.6358Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99921 3.89508C7.47557 3.69776 7.99975 3.64614 8.50545 3.74673C9.01115 3.84732 9.47567 4.09561 9.84026 4.4602C10.2048 4.82479 10.4531 5.2893 10.5537 5.79501C10.6543 6.30071 10.6027 6.82488 10.4054 7.30124C10.2081 7.7776 9.87392 8.18475 9.44521 8.47121C9.16624 8.65761 8.85538 8.78746 8.53019 8.85542V8.96969C8.53019 9.26425 8.29141 9.50303 7.99685 9.50303C7.7023 9.50303 7.46352 9.26425 7.46352 8.96969V8.37723C7.46352 8.23578 7.51971 8.10012 7.61973 8.0001C7.71975 7.90008 7.85541 7.84389 7.99685 7.84389C8.3015 7.84389 8.5993 7.75356 8.8526 7.58431C9.1059 7.41506 9.30332 7.1745 9.4199 6.89304C9.53648 6.61159 9.56699 6.30189 9.50756 6.0031C9.44812 5.70431 9.30142 5.42986 9.08601 5.21444C8.87059 4.99903 8.59614 4.85233 8.29735 4.7929C7.99856 4.73347 7.68886 4.76397 7.40741 4.88055C7.12596 4.99713 6.8854 5.19456 6.71615 5.44786C6.5469 5.70116 6.45656 5.99896 6.45656 6.3036C6.45656 6.59815 6.21778 6.83693 5.92323 6.83693C5.62867 6.83693 5.38989 6.59815 5.38989 6.3036C5.38989 5.78799 5.54279 5.28396 5.82924 4.85525C6.1157 4.42653 6.52285 4.09239 6.99921 3.89508Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.99687 1.86745C4.60953 1.86745 1.86354 4.61343 1.86354 8.00078C1.86354 11.3881 4.60953 14.1341 7.99687 14.1341C11.3842 14.1341 14.1302 11.3881 14.1302 8.00078C14.1302 4.61343 11.3842 1.86745 7.99687 1.86745ZM0.796875 8.00078C0.796875 4.02433 4.02042 0.800781 7.99687 0.800781C11.9733 0.800781 15.1969 4.02433 15.1969 8.00078C15.1969 11.9772 11.9733 15.2008 7.99687 15.2008C4.02042 15.2008 0.796875 11.9772 0.796875 8.00078Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_39203_197507">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper-2">₹2,312.23</div>
            <div className="div-4">
              <div className="link">
                <div className="link-2">23 orders</div>
              </div>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Outlined / Chevron Right">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.95696 5.29289C9.34748 4.90237 9.98064 4.90237 10.3712 5.29289L16.3712 11.2929C16.5587 11.4804 16.6641 11.7348 16.6641 12C16.6641 12.2652 16.5587 12.5196 16.3712 12.7071L10.3712 18.7071C9.98065 19.0976 9.34748 19.0976 8.95696 18.7071C8.56643 18.3166 8.56643 17.6834 8.95696 17.2929L14.2498 12L8.95696 6.70711C8.56643 6.31658 8.56643 5.68342 8.95696 5.29289Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="div-5">
        <div className="text-wrapper-3">Next payout date:</div>
        <div className="text-wrapper-4">Today, 04:00PM</div>
      </div>
    </div>
  );
};

export default PayoutCard;
