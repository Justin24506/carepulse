"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "./ui/button";
import AppointmentForm from "./forms/AppointmentForm";
import { Appointment } from "@/types/appwrite.types";

const AppointmentModal = ({ type, patientId, userId, appointment }: {
  type: 'schedule' | 'cancel';
  patientId: string;
  userId: string;
  appointment: Appointment;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <p> wfwbvb </p>
    

  )
}

export default AppointmentModal