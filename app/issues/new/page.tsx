import React from "react";
import dynamic from "next/dynamic";
import LoadingIssueForm from "../_components/LoadingIssueForm";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingIssueForm />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
