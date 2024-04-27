"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useAppDispatch } from "@/hooks/hooks";
import { closeTicket } from "@/redux/slices/ticketsSlice";
import { Tickets } from "@/constants/types";
import { useTransition } from "react";

interface closeTicketProps {
  ticket: Tickets;
}
export default function CloseTicketComponent({ ticket }: closeTicketProps) {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          dispatch(closeTicket(ticket));
        });
      }}>
      close Ticket
    </DropdownMenuItem>
  );
}
