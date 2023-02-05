import { TTickets } from "@/types/types";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

type Props = {
  ticket: TTickets;
};

export default function TicketLign({ ticket }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div
            key={ticket.id}
            className="flex flex-row flex-grow justify-between border solid border-white w-2/3 my-2 h-10 rounded-lg px-2 m-auto"
          >
            <div className="text-gray-300 font-bold w-2/3 h-10">
              <p className="text-gray-300 font-bold  w-2/3 my-2 h-10  px-2 m-auto">
                {ticket.title}
              </p>
            </div>
            <div className="text-gray-300 font-bold  w-auto my-2 h-10  px-2 m-auto">
              <p>
                - {ticket.category.name} - by {ticket.user.username}
              </p>
            </div>
            <div className="text-gray-300 font-bold  w-auto my-2 h-10  px-2 m-auto">
              <button>Answer</button>
              <button>Close</button>
              <button>🗑️</button>
            </div>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="flex justify-center text-gray-300 font-bold  w-full my-2 h-auto  px-2 m-auto">
          <p>Description : {ticket.description}</p>
        </div>
        {ticket.solution && (
          <div className="flex justify-center text-gray-300 font-bold  w-full my-2 h-auto  px-2 m-auto">
            <p>Solution : {ticket.solution}</p>
          </div>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  );
}
