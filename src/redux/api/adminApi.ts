import { IAdmin, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),
    singleAdmin: build.query({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    userProfile: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "POST",
        // data: data.body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useAdminsQuery,
  useAddAdminWithFormDataMutation,
  useSingleAdminQuery,
  useUserProfileMutation,
} = adminApi;
