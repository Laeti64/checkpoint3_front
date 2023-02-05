import { useAuth } from "@/context/UserContext";
import { TCategory } from "@/types/types";
import React from "react";
import useApi from "../hooks/useApi";
import { FieldValues, useForm } from "react-hook-form";
import { categoriesHandler, ticketsHandler } from "services/axiosTools";

type Props = {
  displayForm: Boolean;
  refetch: () => void;
};

export default function NewTicketForm({ displayForm, refetch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data: categories } = useApi({
    queryFn: () => categoriesHandler.getAll(),
  });

  const { user } = useAuth();
  const handleData = async (data: FieldValues) => {
    const ticketToCreate = {
      title: data.title,
      description: data.description,
      categoryId: data.categoryId,
      userName: user!.username,
      deadLine: data.deadLine,
      linkedToProject: data.linkedToProject,
    };
    console.log(ticketToCreate);
    await ticketsHandler.create(ticketToCreate);
    refetch();
    reset();
  };

  return (
    <>
      {displayForm ? (
        <>
          <form
            onSubmit={handleSubmit((data) => handleData(data))}
            className="flex flex-col justify-center w-1/3 m-auto"
          >
            <div className="flex flex-row  mt-14">
              <div className=" flex-grow bg-black text-gray-300 font-semibold">
                <label htmlFor="Title">
                  Title
                  <input
                    id="title"
                    type="text"
                    className="mx-2 p-2 w-[80%] h-8 bg-slate-300 text-black rounded-md"
                    {...register("title")}
                  />
                </label>
              </div>

              <div className="  bg-black text-gray-300 font-semibold">
                <label htmlFor="Catégorie">
                  Categorie
                  <select
                    id="Catégorie"
                    className="mx-2 w-auto h-8 rounded-md bg-slate-300 text-black"
                    {...register("categoryId", { required: true })}
                  >
                    <option value="">---</option>
                    {categories &&
                      categories
                        .sort((a: string, b: string) => (a > b ? 1 : -1))
                        .map((categorie: TCategory) => (
                          <option key={categorie.id} value={categorie.id}>
                            {categorie.name}
                          </option>
                        ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="  bg-black text-gray-300 font-semibold mt-3">
              <label htmlFor="Description">
                Description
                <textarea
                  id="Description"
                  className="  mx-2 p-2 w-full h-40  rounded-md text-black bg-slate-300"
                  {...register("description")}
                />
              </label>
            </div>

            <div className="  bg-black text-gray-300 font-semibold mt-3">
              <label htmlFor="LinkedToProject">
                En lien avec quel projet?
                <input
                  id="LinkedToProject"
                  type="text"
                  className="mx-2 w-full h-8 rounded-md text-black bg-slate-300"
                  {...register("linkedToProject")}
                />
              </label>
            </div>

            <div className="  bg-black text-gray-300 font-semibold mt-3">
              <label htmlFor="DeadLine">
                DeadLine
                <input
                  id="DeadLine"
                  type="date"
                  className="mx-2 p-2 w-auto h-8 rounded-md text-black bg-slate-300"
                  {...register("deadLine")}
                />
              </label>
            </div>
            <div className="w-[10%] flex items-center justify-center m-auto mt-10">
              <button
                type="submit"
                className=" shadow-inner shadow-white text-gray-300 h-12  p-3 rounded-lg "
              >
                Create
              </button>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
