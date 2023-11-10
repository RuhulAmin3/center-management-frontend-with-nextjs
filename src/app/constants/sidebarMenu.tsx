import type { MenuProps } from "antd";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const sidebarMenu = () => {
  const adminSidebarMenu: MenuProps["items"] = [
    {
      label: "Student",
      key: "student",
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href="/admin/student">All Students</Link>,
          key: "all_students",
          icon: <TeamOutlined />,
        },
        {
          label: (
            <Link href="/admin/student/student-details">Student Details</Link>
          ),
          key: "student_details",
          icon: <TeamOutlined />,
        },
        {
          label: (
            <Link href="/admin/student/admission-form">Admission Form</Link>
          ),
          key: "admission_form",
          icon: <TeamOutlined />,
        },
        {
          label: (
            <Link href="/admin/student/student-promotion">
              Student Promotion
            </Link>
          ),
          key: "student-promotion",
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      label: "Teacher",
      key: "teacher",
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href="/admin/teacher">All Teacher</Link>,
          key: "all_teachers",
          icon: <FileOutlined />,
        },
        {
          label: <Link href="/admin/teacher/add-teacher">Add Teacher</Link>,
          key: "add_teachers",
          icon: <UserOutlined />,
        },
        {
          label: (
            <Link href="/admin/teacher/teacher-details">Teacher Details</Link>
          ),
          key: "teacher_details",
          icon: <TeamOutlined />,
        },
        {
          label: <Link href="/admin/teacher/payment">Payment</Link>,
          key: "payment",
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      label: "Guardian",
      key: "guardian",
      icon: <TeamOutlined />,
      children: [
        {
          label: <Link href="/admin/guardian">All Guardian</Link>,
          key: "all_guardians",
          icon: <FileOutlined />,
        },
        {
          label: <Link href="/admin/guardian/add-guardian">Add Guardians</Link>,
          key: "add_guardian",
          icon: <UserOutlined />,
        },
        {
          label: (
            <Link href="/admin/guardian/guardian-details">
              Guardian Details
            </Link>
          ),
          key: "guardian_details",
          icon: <TeamOutlined />,
        },
      ],
    },
  ];

  return adminSidebarMenu;
};

export default sidebarMenu;
