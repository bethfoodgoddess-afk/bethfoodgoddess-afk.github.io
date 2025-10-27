"use client";

import Image from "next/image";
import { getGitLabPageUrl } from "@/app/common/gitlab-pages";
import { WebsiteEntry } from "@/lib/types";
import { useLocalizedWebsiteMetadata } from "@/app/common/demo-aiagents";


const getRandomIndex = (n: number): number => {
  return Math.floor(Math.random() * n);
};

export default function WebsiteItem({ id, metadata }: WebsiteEntry) {
  const localized = useLocalizedWebsiteMetadata(metadata);
  return (
    <div key={id}>
      <a
        href={getGitLabPageUrl(id)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <Image
          src={localized.thumbnails[getRandomIndex(localized.thumbnails.length)]}
          alt={localized.name ?? "Website thumbnail"}
          width={384}
          height={216}
          className="rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold">{localized.name}</h2>
        <div className="flex-grow">{localized.description}</div>
      </a>
    </div>
  );
}
// ...existing code...
