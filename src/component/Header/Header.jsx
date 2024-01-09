import { Input } from "antd";

const Header = () => {
  return (
    <div>
      <div
        style={{
          color: "#1A181E",
          fontFamily: "Galano Grotesque",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "28px",
        }}
      >
        Payouts
      </div>
      <div>How it works</div>
      <Input placeholder="default size" prefix={<UserOutlined />} />
    </div>
  );
};

export default Header;
