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
    {/* <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button asChild variant="ghost" className={`capitalize ${type === 'schedule' && 'text-green-500'}`}>
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} this Appointment</DialogTitle>
          <DialogDescription>
            Please fill out the form below to {type} an appointment.
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm 
          type={type}
          patientId={patientId}
          userId={userId}
          appointment={appointment}
          setOpen={setOpen}
          />
      </DialogContent>
    </Dialog> */}
    <p> HI ndnsvabhjqbwviugnbwue</p>

  )
}

export default AppointmentModal