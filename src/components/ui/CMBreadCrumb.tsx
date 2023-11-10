"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

type itemsType = {
  title: string;
  href: string;
};

const CMBreadCrumb = ({ items }: { items: itemsType[] }) => {
  const baseUrl = "/admin";
  const breadCrumbItems = [
    {
      title: <Link href={baseUrl}>Home</Link>,
    },
    ...items.map((item) => {
      return item.href
        ? { title: <Link href={item.href}>{item.title}</Link> }
        : { title: <span>{item.title}</span> };
    }),
  ];
  return <Breadcrumb separator=">" items={breadCrumbItems} />;
};

export default CMBreadCrumb;
