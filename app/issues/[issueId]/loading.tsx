import { Skeleton } from "@nextui-org/react";
import { Flex, Box, Card } from "@radix-ui/themes";
import React from "react";

const IssueDetailLoading = () => {
  return (
    <Box>
      <Skeleton className="h-6 w-60 rounded-lg" />
      <Flex gap="5" className="my-3">
        <Skeleton className="h-6 w-20 rounded-lg" />
        <Skeleton className="h-6 w-30 rounded-lg" />
      </Flex>

      <Card className="max-w-xl">
        <Skeleton className="h-6 rounded-lg my-5" />
        <Skeleton className="h-6 rounded-lg my-5" />
        <Skeleton className="h-6 rounded-lg my-5" />
      </Card>
    </Box>
  );
};

export default IssueDetailLoading;
