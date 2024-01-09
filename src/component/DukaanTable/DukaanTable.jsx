import React, { useState } from "react";
import { Button, Input, Table, Badge } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    render: (text, record) => <a href={`/orders/${record.orderId}`}>{text}</a>,
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (text, record) => (
      <Badge color={record.status === "Successful" ? "green" : "blue"} text={text} />
    ),
  },
  {
    title: "Transaction ID",
    dataIndex: "transactionId",
  },
  {
    title: "Refund Date",
    dataIndex: "refundDate",
  },
  {
    title: "Order Amount",
    dataIndex: "orderAmount",
  },
];
const data = [
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: `131634495747`,
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281208",
    status: "Processing",
    transactionId: `131634495747`,
    refundDate: "Yesterday, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281207",
    status: "Successful",
    transactionId: `131634495747`,
    refundDate: "12 July, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281206",
    status: "Successful",
    transactionId: `131634495747`,
    refundDate: "12 July, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281205",
    status: "Successful",
    transactionId: `131634495747`,
    refundDate: "12 July, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
  {
    orderId: "#281204",
    status: "Successful",
    transactionId: `131634495747`,
    refundDate: "12 July, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
];
const DukaanTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          width: "81vw",
          marginTop: "24px",
        }}
      >
        <div
          className="d-flex gap-1"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Input
            bordered="yes"
            placeholder="Order ID or transaction ID"
            prefix={<SearchOutlined />}
          />
          <div className="d-flex gap-1">
            <Button>
              SORT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Button>
            <Button icon={<DownloadOutlined />}></Button>
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default DukaanTable;
