import StatusBadge from "@/app/components/StatusBadge";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

interface IssueDetailsProps {
  issue: Issue;
}

const IssueDetails = ({ issue }: IssueDetailsProps) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="5" className="my-3">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>

      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
