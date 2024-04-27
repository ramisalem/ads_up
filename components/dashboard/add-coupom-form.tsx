"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { SetStateAction, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CupounsSchema, CouponStatus } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { v4 as uuidv4 } from "uuid";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormCardWrapper } from "@/components/dashboard/form-card-wraper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { addCoupon } from "@/actions/coupons";
import { useI18n } from "@/locales/client";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { addNewCoupon } from "@/redux/slices/couponsSlice";
import { Coupons } from "@/constants/types";
import Loader from "./loader";
import { Textarea } from "../ui/textarea";

export const AddCouponForm = () => {
  const t = useI18n();
  const dispatch = useAppDispatch();
  const { hasError, isLoading } = useAppSelector((state) => state.coupons);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CupounsSchema>>({
    resolver: zodResolver(CupounsSchema),
    defaultValues: {
      uuid: uuidv4(),
      code: "",
      description: "",
      start: new Date(),
      end: new Date(),
      usage: 0,
      percentage: 0.0,
      price: 0.0,
      status: CouponStatus.Enum.Activated,
    },
  });

  const onInvalid = (errors: any) => console.error(errors);
  const onSubmit = (values: z.infer<typeof CupounsSchema>) => {
    // console.log("in submit form values ");
    setError("");
    setSuccess("");
    values.uuid = uuidv4();

    startTransition(() => {
      dispatch(addNewCoupon(values));
      if (!hasError) {
        form.reset();
        setSuccess("success");
        setTimeout(() => setSuccess(""), 2000);
      } else {
        setError("error");
      }
    });
  };

  return (
    <FormCardWrapper headerLabel="add-coupn">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="space-y-6">
          <div className="  space-y-4 ">
            <>
              {/* <div className="flex flex-row justify-center items-center"> */}
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="code"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        placeholder="description"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* </div> */}
              <div className="flex flex-row flex-shrink-1   justify-center items-center ">
                <FormField
                  control={form.control}
                  name="start"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "md:w-[220px] w-auto pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}>
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        start date is used to blaaa.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="end"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "md:w-[220px] w-auto pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}>
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date("1900-01-01") ||
                              date < form.getValues("start")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        End date is used to blaaa.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row  space-x-2 flex-shrink-1 justify-between ">
                <FormField
                  control={form.control}
                  name="usage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usage</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          type="number"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="percentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Percentage</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="0.0"
                          type="number"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          type="number"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>

            <FormError message={error} />
            <FormSuccess message={success} />
            {isPending === true ? (
              <Loader />
            ) : (
              <Button disabled={isPending} type="submit" className="w-full">
                confirm
              </Button>
            )}
          </div>
        </form>
      </Form>
    </FormCardWrapper>
  );
};
