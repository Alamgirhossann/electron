import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta, ISuperAdmin } from "@/types";

const SUPER_ADMIN_URL = "/super-admin";

export const superAdminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    superAdmins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SUPER_ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ISuperAdmin[], meta: IMeta) => {
        return {
          superAdmin: response,
          meta,
        };
      },

      providesTags: [tagTypes.superAdmin],
    }),

    singleSuperAdmin: build.query({
      query: (id) => ({
        url: `${SUPER_ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.superAdmin],
    }),

    updateSuperAdmins: build.mutation({
      query: (data) => {
        return {
          url: `${SUPER_ADMIN_URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
          // contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.superAdmin],
    }),
  }),
});

export const {
  useSuperAdminsQuery,
  useUpdateSuperAdminsMutation,
  useSingleSuperAdminQuery,
} = superAdminApi;
