"use client";
import { MetaDataSchema } from "@/schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useEffect, useRef, useState, useTransition } from "react";
import { FormCardWrapper } from "./form-card-wraper";
import { getMetaData, updateMetaData } from "@/redux/slices/metadataSlice";
import { useAppSelector, useAppStore } from "@/hooks/hooks";
import { Metadata } from "@/constants/types";

import Loader from "./loader";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

//type MetaDataFormValues = z.infer<typeof MetaDataSchema>;
export function MetaDataForm() {
  const store = useAppStore();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      store.dispatch(getMetaData());
      initialized.current = true;
    }
  }, [initialized, store]);

  const [isPending, startTransition] = useTransition();

  const { hasError, isLoading, metadata } = useAppSelector(
    (state) => state.metadata
  );

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<any>({
    // resolver: zodResolver(MetaDataSchema),
    defaultValues: metadata,
    mode: "all",
  });

  const [selected, setSelected] = useState("");

  function onSubmit(data: Metadata) {
    //toast.success(`${JSON.stringify(data, null, 2)}`);
    startTransition(() => {
      store.dispatch(updateMetaData(data));
      if (!hasError) {
        //console.log("there is no error");
        form.reset();
        setSuccess("success");
        setTimeout(() => setSuccess(""), 4000);
      } else {
        console.log("error in update");
        setError("error");
      }
    });
  }
  const onInvalid = (errors: any) => {
    console.error(errors);
    toast.error(`${JSON.stringify(errors, null, 2)}`);
  };
  useEffect(() => {
    form.reset(metadata);
  }, [selected]);
  return (
    <FormCardWrapper headerLabel="update-metadata">
      <Form {...form}>
        {!isLoading ? (
          <Select
            onValueChange={(value) => {
              form.reset();
              setSelected(value);
            }}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a section to update" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="about">Update About</SelectItem>
              <SelectItem value="termsAndConditions">
                Update Terms and Conditions
              </SelectItem>
              <SelectItem value="privacyPolicy">
                Update Privacy Policy
              </SelectItem>
            </SelectContent>
          </Select>
        ) : (
          <Loader />
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="space-y-8">
          {/* <Textarea placeholder=" " {...register(`${selected}En`)} /> */}
          <FormField
            control={form.control}
            name={`${selected}En`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {selected !== "" ? selected.toUpperCase() : ""} in English
                </FormLabel>
                <FormControl>
                  <Textarea className="text-xl" placeholder=" " {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div dir="rtl">
            <FormField
              control={form.control}
              name={`${selected}Ar`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> باللغة العربية</FormLabel>
                  <FormControl>
                    <Textarea className="text-xl" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center">
            <FormError message={error} />
            <FormSuccess message={success} />
            {isPending === true ? (
              <Loader />
            ) : (
              <Button type="submit" disabled={selected === ""}>
                Update MetaData
              </Button>
            )}
          </div>
        </form>
      </Form>
    </FormCardWrapper>
  );
}
