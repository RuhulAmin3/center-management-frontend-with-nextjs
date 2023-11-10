"use client";
import TitleBar from "@/components/ui/Actionbar";
import CMBreadCrumb from "@/components/ui/CMBreadCrumb";
import {
  defaultStyles,
  defaultHeadingStyles,
  inputDefaultStyle,
} from "@/app/constants/styles";
import { Col, Row } from "antd";
import CMForm from "@/components/Form/CMForm";
import FormInputField from "@/components/Form/FormInputField";
import FormSelectField from "@/components/Form/FormSelectField";
import { bloodGroup, gender } from "@/app/constants";

const AdmissionFormPage = () => {
  const breadCrumbItems = [{ href: "", title: "Student Admission Form" }];
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <TitleBar title="Students">
        <CMBreadCrumb items={breadCrumbItems} />
      </TitleBar>
      <div style={{ ...defaultStyles }}>
        <h3 style={{ ...defaultHeadingStyles }}>Add New Student</h3>
        <CMForm submitHandler={onSubmit}>
          <Row
            style={{ marginBottom: "20px" }}
            gutter={[
              { xs: 8, sm: 13, md: 18 },
              { xs: 8, sm: 13, md: 18 },
            ]}
          >
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="name.firstName"
                size="large"
                label="First Name"
                style={{ ...inputDefaultStyle }}
                required
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="name.middleName"
                size="large"
                label="Middle Name"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="name.lastName"
                size="large"
                label="Last Name"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="classRoll"
                size="large"
                label="Class Roll"
                style={{ ...inputDefaultStyle }}
                required
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormSelectField
                name="gender"
                size="large"
                label="Gender"
                placeholder="Select gender"
                selectOptions={gender}
                required
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormSelectField
                name="bloodGroup"
                size="large"
                label="Blood Group"
                placeholder="Select blood group"
                selectOptions={bloodGroup}
                required
              />
            </Col>
          </Row>
        </CMForm>
      </div>
    </>
  );
};

export default AdmissionFormPage;
