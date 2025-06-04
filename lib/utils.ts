import { IoIosHome } from "react-icons/io";
import { siteConfig } from "./config";
import { BreadcrumbType, LabelType } from "./types/common";
import { IconType } from "react-icons";

export const getMediaURL = (path: string, base?: boolean) => {
  const isDev = siteConfig.env.isDev;
  const cdnUrl = siteConfig.aws.cdn.url;

  if (isDev) {
    if (base) {
      return siteConfig.site.url + "/assets" + path;
    }
    return path;
  } else {
    return cdnUrl + path;
  }
};

export const genericBreadcrumb = (crumbs: BreadcrumbType) => {
  let breadcrumb: BreadcrumbType = [
    {
      icon: IoIosHome, // TODO: set home icon for breadcrumb (optional) remove this TODO comment if you are fine with the default logo
      url: "/",
      schemaUrl: "/",
      label: "Home",
    },
  ];
  const extraBreadcrumbs = crumbs.map((crumb) => {
    const crumbData: Partial<LabelType> = {};
    Object.entries(crumb).forEach(([key, value]) => {
      if (!value) return;
      crumbData[key as keyof LabelType] = value as string & IconType;
    });
    return crumbData;
  });

  breadcrumb = [...breadcrumb, ...extraBreadcrumbs];
  return breadcrumb;
};

export class ServerActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ServerActionError";
  }
}

// Types for the result object with discriminated union
type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type Result<T, E = ServerActionError> = Success<T> | Failure<E>;

// Main wrapper function
export async function tryCatch<T, E = ServerActionError>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promise: Promise<T>, errorType?: new (...args: any[]) => E
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error) {
    // If an error is of type server error return the server action error instance
    if (error instanceof ServerActionError) {
      return { data: null, error: error as E };
    }

    // If an error type is provided, return it
    if (errorType) {
      return { data: null, error: error as E };
    }

    // If no error type is provided, return a generic error
    return { data: null, error: error as E };
  }
}
