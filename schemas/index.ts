import * as z from "zod";

export const UserRole = z.enum(["ADMIN", "USER"]);

export const CouponStatus = z.enum(["Activated", "Deactivated"]);
export const CupounsSchema = z
  .object({
    uuid: z.string().uuid({ message: "Invalid UUID" }),
    code: z.coerce
      .string({
        required_error: "Code is required",
        invalid_type_error: "code must be string",
      })
      .min(2),
    description: z
      .string({
        required_error: "Description is required",
      })
      .min(3),
    start: z.date({
      required_error: "start date is required",
    }), // Long (Timestamp in UTC zone )
    end: z.date({
      required_error: "end date is required",
    }), //Long (Timestamp in UTC zone )
    usage: z.coerce
      .number({
        required_error: "Usage is required",
        description: "blaaaaaaa blaaa",
      })
      .positive(),
    percentage: z.coerce
      .number({
        required_error: "precentage is required",
        invalid_type_error: "it must be float number",
      })
      .multipleOf(0.001)
      .positive(),
    price: z.coerce
      .number({
        required_error: "price is required",
        invalid_type_error: "it must be float number",
      })
      .multipleOf(0.00001)
      .positive(),
    status: z.optional(CouponStatus.default("Activated")),
  })
  .refine(
    (data) => {
      if (data.end < data.start) {
        return false;
      }
      return true;
    },
    {
      message: "End date must be after the Start date",
      path: ["end"],
    }
  );

export const CategoriesSchema = z.object({
  uuid: z.string().uuid({ message: "Invalid UUID" }),
  nameAr: z.coerce.string({
    required_error: "name AR is required",
    invalid_type_error: "name ar must be arabic string",
  }),
  nameEn: z.coerce.string({
    required_error: "name EN is required",
    invalid_type_error: "name en must be arabic string",
  }),
  classificationUuid: z.string().uuid({ message: "Invalid UUID" }),
  classificationNameAr: z.coerce.string({
    required_error: "classification AR is required",
    invalid_type_error: "classification name ar must be arabic string",
  }),
  classificationNameEn: z.coerce.string({
    required_error: "classification EN is required",
    invalid_type_error: "classification name en must be arabic string",
  }),
  subCategories: z.string(),
  status: z.coerce.string({
    required_error: "classification AR is required",
    invalid_type_error: "classification name ar must be arabic string",
  }),
});

export const MetaDataSchema = z.object({
  aboutAr: z.optional(z.string()),
  aboutEn: z.optional(z.string()),
  termsAndConditionsAr: z.optional(z.string()),
  termsAndConditionsEn: z.optional(z.string()),
  privacyPolicyAr: z.optional(z.string()),
  privacyPolicyEn: z.optional(z.string()),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: UserRole, //z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

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
