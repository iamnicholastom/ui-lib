import React from "react";
import { BreadCrumb } from "./Breadcrumb";

export default {
  title: "Design System/Breadcrumb",
  component: BreadCrumb,
};

const crumbList = [
  {
    isCurrent: false,
    href: "/",
    page: "Home",
  },
  {
    isCurrent: false,
    href: "/living",
    page: "Living Room",
  },
  {
    isCurrent: false,
    href: "/living/couch",
    page: "Couches",
  },
  {
    isCurrent: true,
    href: "/living/couch/sectional",
    page: "Sectionals",
  },
];

export const BreadCrumbs = () => (
  <div>
    <BreadCrumb crumbList={crumbList} />
  </div>
);
