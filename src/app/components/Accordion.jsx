"use client"
import React,{useState} from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function AccordionCard({ item }) {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <Accordion open={open == `${item._id}`}>
        <AccordionHeader className="relative" onClick={() => handleOpen(`${item._id}`)}>
          <p className="text-start">{item.title}</p>
          <p className=" absolute right-0">
            {open == `${item._id}` ? <FaCircleMinus /> : <FaCirclePlus />}
          </p>
        </AccordionHeader>
        <AccordionBody>{item.description}</AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionCard;