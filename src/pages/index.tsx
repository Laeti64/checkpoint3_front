import NewTicketForm from "@/components/NewTicketForm";
import TicketLign from "@/components/TicketLign";
import { TTickets } from "@/types/types";
import useApi from "useapifetcher";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ticketsHandler } from "services/axiosTools";
import { Accordion } from "react-accessible-accordion";

type Iprops = {
  tickets: TTickets;
};

export default function Home({ tickets }: Iprops) {
  const [displayForm, setDisplayForm] = useState<Boolean>(false);

  const { data: ticketsList, refetch } = useApi({
    queryFn: () => ticketsHandler.getAll(),
  });

  if (!ticketsList)
    return (
      <div className="text-gray-300  h-full font-bold text-xl text-center">
        <p>Your teacher is a master and have solved all your tickets!</p>
        <div className="w-1/3 flex items-center justify-center m-auto mt-10">
          <button
            onClick={() => setDisplayForm(true)}
            className=" shadow-inner shadow-white text-gray-300 h-12 w-auto p-3 rounded-lg "
          >
            Créer un nouveau ticket
          </button>
        </div>
        <NewTicketForm refetch={refetch} displayForm={displayForm} />
      </div>
    );
  console.log(ticketsList);
  return (
    <>
      <div className="flex flex-col align-middle ">
        <p className="text-gray-300  font-bold text-xl text-center">
          Liste des tickets en cours
        </p>
        <div className="max-h-[50vh] overflow-auto">
          <Accordion>
            {ticketsList.map((ticket) => (
              <TicketLign ticket={ticket} key={ticket.id} />
            ))}
          </Accordion>
        </div>
        <div className="w-1/3 flex items-center justify-center m-auto">
          <button
            onClick={() => setDisplayForm(true)}
            className=" shadow-inner shadow-white text-gray-300 h-12 w-auto p-3 rounded-lg "
          >
            Créer un nouveau ticket
          </button>
        </div>
        <NewTicketForm refetch={refetch} displayForm={displayForm} />
      </div>
    </>
  );
}
