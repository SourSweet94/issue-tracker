import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import Filter from "./Filter";

const Toolbar = () => {
  return (
    <Flex className="pb-5" justify="between">
      <Filter />
      <Link href="/issues/new">
        <Button>Create new issue</Button>
      </Link>
    </Flex>
  );
};

export default Toolbar;
