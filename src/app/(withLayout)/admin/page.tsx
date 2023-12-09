import StudentChart from "@/components/charts/StudentChart";
import NoticeBoard from "@/components/notice-board/NoticeBoard";
import TitleBar from "@/components/ui/TitleBar";
import CMBreadCrumb from "@/components/ui/CMBreadCrumb";
import SmallCard from "@/components/ui/SmallCard";
import SocialCard from "@/components/ui/SocialCard";
import {
  UserOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import { Col, Row } from "antd";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <TitleBar title="Admin Dashboard">
        <CMBreadCrumb
          items={[
            {
              title: "admin",
              href: "/admin",
            },
          ]}
        />
      </TitleBar>

      <Row
        style={{ marginBottom: "20px" }}
        gutter={[
          { xs: 8, sm: 13 },
          { xs: 8, sm: 13 },
        ]}
      >
        <Col xl={6} sm={12} span={24}>
          <SmallCard title="Student" number="150000" iconBackground="#d1f3e0">
            <UserOutlined style={{ color: "#3cb878" }} />{" "}
          </SmallCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SmallCard title="Teachers" number="150" iconBackground="#e1f1ff">
            <UserOutlined style={{ color: "#3f7afc" }} />
          </SmallCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SmallCard title="Parents" number="150" iconBackground="#fff2d8">
            <UserOutlined style={{ color: "#ffa001" }} />
          </SmallCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SmallCard title="Earnings" number="$150548" iconBackground="#ffeaea">
            <UserOutlined style={{ color: "#ff0000" }} />
          </SmallCard>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "20px" }}
        gutter={[
          { xs: 8, sm: 13 },
          { xs: 8, sm: 13 },
        ]}
      >
        <Col xl={10} span={24}>
          <StudentChart />
        </Col>
        <Col xl={14} span={24}>
          <NoticeBoard />
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "20px" }}
        gutter={[
          { xs: 8, sm: 13 },
          { xs: 8, sm: 13 },
        ]}
      >
        <Col xl={6} sm={12} span={24}>
          <SocialCard
            backgroundColor="#546ca9"
            message="Like us on facebook"
            follower="30000"
          >
            <FacebookOutlined />
          </SocialCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SocialCard
            backgroundColor="#1565c0"
            message="Follow us on LinkedIn"
            follower="15025"
          >
            <LinkedinOutlined />
          </SocialCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SocialCard
            backgroundColor="#45a0f0"
            message="Follow us on twitter"
            follower="14700"
          >
            <TwitterOutlined />
          </SocialCard>
        </Col>
        <Col xl={6} sm={12} span={24}>
          <SocialCard
            backgroundColor="#fa7e1e"
            message="Follow us on Instagram "
            follower="14700"
          >
            <InstagramOutlined />
          </SocialCard>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
