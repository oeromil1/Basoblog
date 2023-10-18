import { createClient } from "next-sanity";

const projectId = "iid5m96j";
const dataset = "production";
const apiVersion = "2023-10-17";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});