import { get, post, put, del } from "../utils";

export const getEventTypes = async () => {
  return await get({ url: "httpz://localhost:8001/event/types", options: {} });
};

export const getEvents = async (params: Object | null = null) => {
  return await get({ url: "https://localhost:8001/events", options: { params } });
};

export const postEvent = async (event: Object) => {
  return await post({ url: "https://localhost:8001/event/new", data: { event }, options: {} });
};

export const postEventDate = async (eventDate: Object) => {
  return await post({ url: "https://localhost:8001/eventDate/new", data: { eventDate }, options: {} });
};