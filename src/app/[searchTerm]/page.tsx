import React from "react";
import getWikiResult from "../../../lib/getWikiResult";
import type { Metadata } from "next";
import Item from "./components/item";
import { notFound } from "next/navigation";
type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({params: { searchTerm }}: Props): Promise<Metadata> {
    const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
    const data = await wikiData;
    const dispalyTerm = searchTerm.replaceAll('%20',' ')
    if(!data?.query?.pages) {
      return {
        title:`${dispalyTerm} Not Found`
      };
    }
    return {
      title:dispalyTerm,
      description: `search result for  ${dispalyTerm}`,
    };
}

const page = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  if(!results){
    return notFound()
  }



  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
        {results ? (
            Object.values(results).map(result => {
                return <Item key={result.pageid} result={result}/>
            })
        ) : (<h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>)}
    </main>
  );

  return content;
};

export default page;
