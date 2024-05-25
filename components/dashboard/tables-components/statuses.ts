import {
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons";

export const AdsStatuses = [
    {
        value: "Hidden",
        label: "Hidden",
        icon: CircleIcon,
    },
    {
        value: "Pending",
        label: "pending",
        icon: StopwatchIcon,
    },
    {
        value: "Published",
        label: "Published",
        icon: CheckCircledIcon,
    },
    {
        value: "Deleted",
        label: "Deleted",
        icon: CrossCircledIcon,
    },
];

export const CouponStatuses = [
    {
        value: "Activated",
        label: "Activated",
        icon: CheckCircledIcon,
    },
    {
        value: "Deactivated",
        label: "Deactivated",
        icon: CrossCircledIcon,
    },
];

export const TicketStatuses = [
    {
        value: "Opened",
        label: "Opened",
        icon: CheckCircledIcon,
    },
    {
        value: "Closed",
        label: "Closed",
        icon: CrossCircledIcon,
    },
];

///TODO ask abdualrahman whats users status

export const UserStatus = [
    {
        value: "Verified",
        label: "Verified",
        icon: CheckCircledIcon,
    },
    {
        value: "Suspended",
        label: "Suspended",
        icon: CrossCircledIcon,
    },
];
