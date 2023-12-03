import { Col, Row, Form, Input, InputNumber } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../header/header";

const ProfilePage = () => {
  return (
    <>
      <Header></Header>
      <Row align="middle" justify="center">
        <Col span={24} style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1>Personal Information</h1>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 20px",
            }}
          >
            <img
              src="/images/profi.jpg"
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Form style={{ maxWidth: "300px", margin: "0 auto" }}>
            <Form.Item label="Name">
              <Input prefix={<UserOutlined />} placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Age">
              <InputNumber placeholder="Your Age" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item label="Weight">
              <InputNumber
                placeholder="Your Weight"
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item label="Height">
              <InputNumber
                placeholder="Your Height"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ProfilePage;
