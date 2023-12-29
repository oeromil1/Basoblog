import { createClient } from "next-sanity";

const projectId = "uzd5ohrx";
const dataset = "production";
const apiVersion = "2023-12-25";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});