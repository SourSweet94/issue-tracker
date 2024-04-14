"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "@/app/validation";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import dynamic from "next/dynamic";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IssueFormProps {
  issue?: Issue;
}

type IssueFormType = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: IssueFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormType>({
    resolver: zodResolver(IssueSchema),
  });
  const [error, setError] = useState<string>("");
  const [loading, SetLoading] = useState<boolean>(false);
  const router = useRouter();

  console.log(issue);

  return (
    <div className="max-w-xl">
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            SetLoading(true);
            await axios.post("/api/issues", data);
            router.push("/issues");
            router.refresh();
          } catch (error) {
            setError("Unexpected error occurred");
          }
          SetLoading(false);
        })}
      >
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact
              defaultValue={issue?.description}
              placeholder="Description"
              {...field}
            />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button>
          {loading ? "Submitting" : "Submit new issue"} {loading && <Spinner />}
        </Button>
      </form>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
};

export default IssueForm;
