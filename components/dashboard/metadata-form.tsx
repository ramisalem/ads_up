'use client';
import { MetaDataSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useEffect, useState, useTransition } from 'react';
import { FormCardWrapper } from './form-card-wraper';
import { getMetaData, updateMetaData } from '@/redux/slices/metadataSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { Metadata } from '@/constants/types';

import Loader from './loader';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

//type MetaDataFormValues = z.infer<typeof MetaDataSchema>;
export function MetaDataForm() {
    const dispatch = useAppDispatch();
    const [isPending, startTransition] = useTransition();

    const { hasError, isLoading, metadata } = useAppSelector((state) => state.metadata);
    useEffect(() => {
        dispatch(getMetaData());
    }, [isLoading, dispatch]);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const form = useForm<any>({
        // resolver: zodResolver(MetaDataSchema),
        defaultValues: metadata,
        mode: 'all'
    });

    const [selected, setSelected] = useState('');

    function onSubmit(data: Metadata) {
        //toast.success(`${JSON.stringify(data, null, 2)}`);
        startTransition(async () => {
            await dispatch(updateMetaData(data));
            if (!hasError) {
                setSuccess('success');
                dispatch(getMetaData());
                setTimeout(() => setSuccess(''), 4000);
                form.reset(metadata);
            } else {
                console.log('error in update');
                setError('error');
            }
        });
    }
    const onInvalid = (errors: any) => {
        //console.error(errors);
        toast.error(`${JSON.stringify(errors, null, 2)}`);
    };
    useEffect(() => {
        form.reset(metadata);
    }, [selected, isPending]);
    return (
        <FormCardWrapper headerLabel="update-metadata">
            <Form {...form}>
                {!isLoading ? (
                    <Select
                        onValueChange={(value) => {
                            form.reset();
                            setSelected(value);
                        }}
                    >
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
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-8">
                    {/* <Textarea placeholder=" " {...register(`${selected}En`)} /> */}
                    <FormField
                        control={form.control}
                        name={`${selected}En`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    {selected !== '' ? selected.toUpperCase() : ''} in English
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
                                        <Textarea
                                            className="text-xl"
                                            placeholder=""
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex m-auto items-center justify-center">
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        {isPending === true ? (
                            <Loader />
                        ) : (
                            <Button type="submit" variant="default" disabled={selected === ''}>
                                Update MetaData
                            </Button>
                        )}
                    </div>
                </form>
            </Form>
        </FormCardWrapper>
    );
}
