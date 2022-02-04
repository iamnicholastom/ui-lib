import React from "react";
import styled from "styled-components";

const BreadcrumbList = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const ListItemWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: "";
      display: inline-block;
      margin-right: var(--spacing);
      transform: rotate(15deg);
      border-right: 1px solid;
      height: 0.8em;
    }
  }
`;

const ListItem = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }

  &[aria-current="page"] {
    text-decoration: none;
    color: #000;
    font-weight: 700;
  }
`;

const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <ListItemWrapper>
      <ListItem href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </ListItem>
    </ListItemWrapper>
  );
};

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const BreadCrumb = ({ crumbList }) => {
  return (
    <Breadcrumbs>
      {crumbList.map(({ isCurrent, page, href }) => (
        <Crumb isCurrentPage={isCurrent} children={page} href={href} />
      ))}
    </Breadcrumbs>
  );
};

export { BreadCrumb };
