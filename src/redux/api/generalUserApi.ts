import { IAdmin, IGeneral, IMeta, IService } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const GENERAL_USER_URL = "/general-user";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addGeneralUser: build.mutation({
      query: (data) => ({
        url: GENERAL_USER_URL,
        method: "POST",
        data,
        //   contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.generalUser],
    }),

    generalUsers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: GENERAL_USER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IGeneral[], meta: IMeta) => {
        return {
          gereral: response,
          meta,
        };
      },
      providesTags: [tagTypes.generalUser],
    }),

    updateGeneralUser: build.mutation({
      query: (data) => {
        return {
          url: `${GENERAL_USER_URL}/${data.id}`,
          method: "PATCH",
          data,
          // contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.generalUser],
    }),
    singleGeneralUser: build.query({
      query: (id) => ({
        url: `${GENERAL_USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    deleteGeneralUser: build.mutation({
      query: (id) => ({
        url: `${GENERAL_USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.generalUser],
    }),
  }),
});

export const {
  useDeleteGeneralUserMutation,
  useSingleGeneralUserQuery,
  useUpdateGeneralUserMutation,
  useGeneralUsersQuery,
  useAddGeneralUserMutation,
} = serviceApi;
