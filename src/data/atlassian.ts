import { StatusPageInfo } from "../types";

export const name = "Atlassian";

export const statusPageUrl = "https://status.atlassian.com/";

export const domains = [
  "atlassian.net",
  "*.atlassian.net",
  "atlassian.com",
  "*.atlassian.com",
];

export const isOperational = true;

export const atlassianStatusInfo: StatusPageInfo = {
  name,
  domains,
  statusPageUrl,
  isOperational,
};