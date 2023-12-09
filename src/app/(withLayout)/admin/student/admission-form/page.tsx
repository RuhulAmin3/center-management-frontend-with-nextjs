"use client";
import TitleBar from "@/components/ui/TitleBar";
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
import { bloodGroup, classesOptions, gender } from "@/app/constants";
import FormDatePickerField from "@/components/Form/FormDatePickerField";
import FormTextAreaField from "@/components/Form/FormTextAreaField";
import UploadImage from "@/components/ui/UploadImage";
import CMButton from "@/components/ui/CMButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentSchema } from "@/app/schemas/student";
import FormYearPickerField from "@/components/Form/FormYearPickerField";
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
        <CMForm submitHandler={onSubmit} resolver={yupResolver(studentSchema)}>
          <Row
            style={{ marginBottom: "20px" }}
            gutter={[
              { xs: 8, sm: 13, md: 18 },
              { xs: 8, sm: 13, md: 18 },
            ]}
          >
            {/* student basic Information */}
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
                name="className"
                size="large"
                label="Class Name"
                placeholder="Select class name"
                selectOptions={classesOptions}
                required
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="section"
                size="large"
                label="Section"
                required
                style={{ ...inputDefaultStyle }}
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
                // style={inputDefaultStyle}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormDatePickerField
                name="dateOfBirth"
                size="large"
                label="Date of Birth"
                required={true}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="email"
                size="large"
                label="Email"
                type="email"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="contactNo"
                size="large"
                label="Contact No"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormYearPickerField
                name="admissionYear"
                label="Admission Year"
                picker="year"
                required={true}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="emergencyContactNo"
                size="large"
                label="Emergency Contact No"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="presentAddress"
                size="large"
                label="Present Address"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="permanentAddress"
                size="large"
                label="Permanent Address"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
          </Row>

          <h3 style={defaultHeadingStyles}>
            Guardian Information of The Student
          </h3>
          {/* guardian Information */}
          <Row
            gutter={[
              { xs: 8, sm: 13, md: 18 },
              { xs: 8, sm: 13, md: 18 },
            ]}
          >
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="fatherName"
                size="large"
                label="Father Name"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="fatherOccupation"
                size="large"
                label="Father Occupation"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="fatherContactNo"
                size="large"
                label="Father Contact No"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="motherName"
                size="large"
                label="Mother Name"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="motherOccupation"
                size="large"
                label="Mother Occupation"
                style={{ ...inputDefaultStyle }}
              />
            </Col>
            <Col xl={6} sm={12} span={24}>
              <FormInputField
                name="motherContactNo"
                size="large"
                label="Mother Contact No"
                required
                style={{ ...inputDefaultStyle }}
              />
            </Col>
          </Row>
          <h3 style={defaultHeadingStyles}>Others Information</h3>
          <Row
            gutter={[
              { xs: 8, sm: 13, md: 18 },
              { xs: 8, sm: 13, md: 18 },
            ]}
          >
            <Col sm={12} span={24}>
              <FormTextAreaField
                name="shortDescription"
                label="Short Description"
                rows={5}
              />
            </Col>
            <Col sm={12} span={24}>
              <div>
                <span style={{ marginBottom: "10px", display: "inline-block" }}>
                  Upload Student Image
                </span>
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </div>
              <br />
              <UploadImage name="file" />
            </Col>
            <Col sm={12} span={24}>
              <CMButton text="Save" type="submit" />
              <CMButton
                text="Reset"
                type="reset"
                style={{ background: "#042954", marginLeft: "1rem" }}
              />
            </Col>
          </Row>
        </CMForm>
      </div>
    </>
  );
};

export default AdmissionFormPage;
