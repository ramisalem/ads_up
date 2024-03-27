import * as z from "zod";
//import { UserRole } from "@prisma/client";

// export const enum UserRole {
//   ADMIN,
//   USER
// }

export const UserRole = z.enum(['ADMIN', 'USER']);

const CouponStatus = z.enum(['Activated', 'Deactivated']);
export const CupounsSchema = z.object({
  uuid: z.string().uuid({ message: "Invalid UUID" }),
  code: z.coerce.string({
    required_error: "Code is required",
    invalid_type_error: "code must be string",
  }
  ).min(2),
  description: z.string({
    required_error: "Description is required",
  }).min(3),
  start: z.date({
    required_error: 'start date is required',

  }),  // Long (Timestamp in UTC zone )
  end: z.date({
    required_error: 'end date is required',

  }), //Long (Timestamp in UTC zone )
  usage: z.coerce.number({
    required_error: "Usage is required",
    description: "blaaaaaaa blaaa",
  }).positive(),
  percentage: z.coerce.number({
    required_error: "precentage is required",
    invalid_type_error: "it must be float number",
  }).multipleOf(0.001).positive(),
  price: z.coerce.number({
    required_error: "price is required",
    invalid_type_error: "it must be float number",
  }).multipleOf(0.00001).positive(),
  status: z.optional(z.string()),
}).refine((data) => {
  if (data.end < data.start) {
    return false;
  }
  return true;
}, {
  message: "End date must be after the Start date",
  path: ["end"]
})

export const MetaDataSchema = z.object({
  aboutAr: z.string(),
  aboutEn: z.string(),
  termsAndConditionsAr: z.string(),
  termsAndConditionsEn: z.string(),
  privacyPolicyAr: z.string(),
  privacyPolicyEn: z.string(),
});

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: UserRole,//z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
