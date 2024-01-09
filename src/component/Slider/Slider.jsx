import React, { useState } from "react";
import {
  MenuFoldOutlined,
  SearchOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownOutlined,
  HomeOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  LogoutOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Input,
  Col,
  Card,
  Row,
  Dropdown,
  Space,
  Avatar,
  Badge,
} from "antd";
import PayoutCard from "../cards/PayoutCard/PayoutCard";
import AmountCard from "../cards/AmountCard/AmountCard";
import AmountProcessingCard from "../cards/AmountCard/AmountProcessingCard";
import DukaanTable from "../DukaanTable/DukaanTable";
const { Header, Sider, Content } = Layout;

const items = [
  {
    label: "January",
    key: "1",
    icon: <CalendarOutlined />,
  },
  {
    label: "February",
    key: "2",
    icon: <CalendarOutlined />,
  },
  {
    label: "March",
    key: "3",
    icon: <CalendarOutlined />,
  },
  {
    label: "April",
    key: "4",
    icon: <CalendarOutlined />,
  },
  {
    label: "May",
    key: "5",
    icon: <CalendarOutlined />,
  },
  {
    label: "June",
    key: "6",
    icon: <CalendarOutlined />,
  },
  {
    label: "July",
    key: "7",
    icon: <CalendarOutlined />,
  },
  {
    label: "August",
    key: "8",
    icon: <CalendarOutlined />,
  },
  {
    label: "September",
    key: "9",
    icon: <CalendarOutlined />,
  },
  {
    label: "October",
    key: "10",
    icon: <CalendarOutlined />,
  },
  {
    label: "November",
    key: "11",
    icon: <CalendarOutlined />,
  },
  {
    label: "December",
    key: "12",
    icon: <CalendarOutlined />,
  },
];

const handleMenuClick = (e) => {
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const Orders = () => (
    <img
      src="./images/orders.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Delivery = () => (
    <img
      src="./images/truck.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Marketing = () => (
    <img
      src="./images/notification.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Analytics = () => (
    <img
      src="./images/analytics.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Payouts = () => (
    <img
      src="./images/payouts.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Discounts = () => (
    <img
      src="./images/discount.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Audience = () => (
    <img
      src="./images/audience.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Appearance = () => (
    <img
      src="./images/appearance.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Plugins = () => (
    <img
      src="./images/plugin.png"
      alt="sss"
      style={{ height: "14px", marginRight: "10px" }}
    />
  );
  const Wallet = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z"
        fill="white"
      />
    </svg>
  );
  const Logos = () => {
    <img src="/images/nishyan_logo.png" alt="avatar" />;
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Layout>
          <Menu theme="dark" mode="inline">
            <Menu key="sub1" icon={<HomeOutlined />} title="Nishyan">
              <Menu.Item
                key="1"
                style={{
                  height: "64px",
                  marginTop: "40px",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src="/images/nishyan_logo.png"
                    alt="Logo"
                    style={{
                      width: "39px",
                      height: "39px",
                      marginRight: "8px",
                      marginTop: "1px",
                      borderRadius: "5px",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      top: "-9px",
                      marginRight: "10px",
                    }}
                  >
                    Nishyan
                    <svg
                      style={{ marginLeft: "30px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <a
                    href="https://mydukaan.io/"
                    style={{
                      position: "relative",
                      top: "12px",
                      right: "110px",
                      textUnderlinePosition: "auto",
                      textDecoration: "underline",
                    }}
                  >
                    Visit Store
                  </a>
                </div>
              </Menu.Item>
            </Menu>
          </Menu>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["8"]}
            items={[
              {
                key: "2",
                icon: <HomeOutlined />,
                label: "Home",
              },

              {
                key: "3",

                icon: <Orders />,
                label: "Orders",
              },
              {
                key: "4",
                icon: <AppstoreOutlined />,
                label: "Products",
              },
              {
                key: "5",
                icon: <Delivery />,
                label: "Delivery",
              },
              {
                key: "6",
                icon: <Marketing />,
                label: "Marketing",
              },
              {
                key: "7",
                icon: <Analytics />,
                label: "Analytics",
              },
              {
                key: "8",
                icon: <Payouts />,
                label: "Payouts",
              },
              {
                key: "9",
                icon: <Discounts />,
                label: "Discounts",
              },
              {
                key: "10",
                icon: <Audience />,
                label: "Audience",
              },
              {
                key: "11",
                icon: <Appearance />,
                label: "Appearance",
              },
              {
                key: "12",
                icon: <Plugins />,
                label: "Plugins",
              },
            ]}
          />
          <Menu theme="dark" mode="inline">
            <Menu key="sub1" icon={<HomeOutlined />} title="Nishyan">
              <Menu.Item
                key="1"
                style={{
                  height: "100px",
                  marginTop: "",
                  padding: "10px",
                  display: "",
                  alignItems: "",
                }}
              >

                <div className="basenav-bottom">
                  <div className="frame">
                    <div className="outline-wallet-wrapper">
                      <div className="outline-wallet">
                        <img className="wallet" src="./images/wallet.svg" />
                      </div>
                    </div>
                    <div className="div">
                      <div className="text-wrapper">Available Credits</div>
                      <div className="text-wrapper-2">222.10</div>
                    </div>
                  </div>
                </div>
           
              </Menu.Item>
            </Menu>
          </Menu>
        </Layout>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="d-flex gap-4 mx-4 justify-content-around align-items-baseline">
            <div className="d-flex mx-4 gap-4 align-items-center">
              <span
                className=""
                style={{
                  color: "#1A181E",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                Payouts
              </span>
              <div
                className="gap-1 "
                style={{
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                }}
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Outlined / Help">
                    <g id="Vector">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.54966 11.6358C9.54966 12.1266 9.15178 12.5245 8.66096 12.5245C8.17015 12.5245 7.77227 12.1266 7.77227 11.6358C7.77227 11.145 8.17015 10.7471 8.66096 10.7471C9.15178 10.7471 9.54966 11.145 9.54966 11.6358Z"
                        fill="#4D4D4D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.66328 3.89508C8.13964 3.69776 8.66381 3.64614 9.16951 3.74673C9.67521 3.84732 10.1397 4.09561 10.5043 4.4602C10.8689 4.82479 11.1172 5.2893 11.2178 5.79501C11.3184 6.30071 11.2668 6.82488 11.0694 7.30124C10.8721 7.7776 10.538 8.18475 10.1093 8.47121C9.8303 8.65761 9.51944 8.78746 9.19425 8.85542V8.96969C9.19425 9.26425 8.95547 9.50303 8.66092 9.50303C8.36637 9.50303 8.12758 9.26425 8.12758 8.96969V8.37723C8.12758 8.23578 8.18377 8.10012 8.28379 8.0001C8.38381 7.90008 8.51947 7.84389 8.66092 7.84389C8.96556 7.84389 9.26336 7.75356 9.51666 7.58431C9.76996 7.41506 9.96738 7.1745 10.084 6.89304C10.2005 6.61159 10.2311 6.30189 10.1716 6.0031C10.1122 5.70431 9.96549 5.42986 9.75007 5.21444C9.53466 4.99903 9.2602 4.85233 8.96141 4.7929C8.66263 4.73347 8.35292 4.76397 8.07147 4.88055C7.79002 4.99713 7.54946 5.19456 7.38021 5.44786C7.21096 5.70116 7.12062 5.99896 7.12062 6.3036C7.12062 6.59815 6.88184 6.83693 6.58729 6.83693C6.29274 6.83693 6.05395 6.59815 6.05395 6.3036C6.05395 5.78799 6.20685 5.28396 6.49331 4.85525C6.77976 4.42653 7.18692 4.09239 7.66328 3.89508Z"
                        fill="#4D4D4D"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.66094 1.86745C5.27359 1.86745 2.5276 4.61343 2.5276 8.00078C2.5276 11.3881 5.27359 14.1341 8.66094 14.1341C12.0483 14.1341 14.7943 11.3881 14.7943 8.00078C14.7943 4.61343 12.0483 1.86745 8.66094 1.86745ZM1.46094 8.00078C1.46094 4.02433 4.68449 0.800781 8.66094 0.800781C12.6374 0.800781 15.8609 4.02433 15.8609 8.00078C15.8609 11.9772 12.6374 15.2008 8.66094 15.2008C4.68449 15.2008 1.46094 11.9772 1.46094 8.00078Z"
                        fill="#4D4D4D"
                      />
                    </g>
                  </g>
                </svg>
                How it Works
              </div>
            </div>

            <Input
              placeholder="Search features, tutorials, etc"
              prefix={<SearchOutlined />}
            />
            <div
              className="d-flex gap-4 position-relative"
              style={{ top: "10px" }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle id="Ellipse 2" cx="20" cy="20" r="20" fill="#E6E6E6" />

                <svg
                  x="10"
                  y="10"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group">
                    <g id="Group_2">
                      <path
                        id="Vector"
                        d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                        fill="#4D4D4D"
                      />
                    </g>
                  </g>
                </svg>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_94365_4441)">
                  <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                  <path
                    d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                    fill="#4D4D4D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94365_4441">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: "#f2f2f2",
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="d-flex justify-content-between">
            <span className="mb-4 customHeadings">Overview</span>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  This Month
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <Row gutter={16}>
            <Col span={8}>
              <PayoutCard />
            </Col>
            <Col span={8}>
              <AmountCard />
            </Col>
            <Col span={8}>
              <AmountProcessingCard />
            </Col>
          </Row>
          <Row gutter={16} className="mt-4">
            <Col span={6}>
              <div>
                <span className="mb-4 mt-4 customHeadings">
                  Transactions | This Month{" "}
                </span>
                <br />
                <br />
                <div className="d-flex gap-2">
                  <span
                    className="algn-items-center"
                    style={{
                      backgroundColor: "#E6E6E6",
                      padding: "6px 16px",
                      display: "flex",
                      borderRadius: "40px",
                    }}
                  >
                    Payouts (22)
                  </span>
                  <span
                    className="algn-items-center"
                    style={{
                      backgroundColor: "#146EB4",
                      padding: "6px 16px",
                      display: "flex",
                      borderRadius: "40px",
                      color: "white",
                    }}
                  >
                    Refunds (6)
                  </span>
                </div>
              </div>
            </Col>
            <Col span={12}>{/* <AmountCard/> */}</Col>
            <div className="h-20vh">
              <DukaanTable />
            </div>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Slider;
