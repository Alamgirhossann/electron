import { IAdmin, IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_URL = "/service-list";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (data) => ({
        url: SERVICE_URL,
        method: "POST",
        data,
        // contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.service],
    }),

    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          service: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    singleService: build.query({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useServicesQuery,
  useSingleServiceQuery,
  useUpdateServiceMutation,
  useAddServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
