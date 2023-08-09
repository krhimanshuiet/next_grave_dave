"use client"
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearch('');
    router.push(`/${search}/`);
   
  };
  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleEvent}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="serach"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
      &#128640;
      </button>
    </form>
  );
};

export default Search;
