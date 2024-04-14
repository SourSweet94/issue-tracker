import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "../../_components/IssueForm";

interface EditIssuePageProps {
  params: { issueId: string };
}

const EditIssuePage = async ({ params: { issueId } }: EditIssuePageProps) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) {
    notFound();
  }
  
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
