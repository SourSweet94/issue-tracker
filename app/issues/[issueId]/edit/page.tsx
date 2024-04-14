import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import LoadingIssueForm from "../../_components/LoadingIssueForm";
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <LoadingIssueForm />,
});

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
