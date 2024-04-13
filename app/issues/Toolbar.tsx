import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Toolbar = () => {
  return (
    <div className="pb-5">
      <Link href="/issues/new">
        <Button>Create new issue</Button>
      </Link>
    </div>
  );
};

export default Toolbar;
