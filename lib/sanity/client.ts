import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  postquery,
  limitquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  searchquery,
  paginatedSearchQuery,
  socialsQuery,
  allLawyersQuery,
  getPageDataQuery,
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export const fetcher = async ([query, params]: any) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

export async function getSocials() {
  if (client) {
    return (await client.fetch(socialsQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: any) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map((slug: any) => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map((slug: any) => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug: any) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

export async function getAllLawyers() {
  if (client) {
    return (await client.fetch(allLawyersQuery)) || [];
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug: any) => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug: any) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts({ limit, pageIndex = 0 }: any) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || []
    );
  }
  return [];
}

export async function getLatestPost({ limit = 2 }: any) {
  if (client) {
    return (
      (await client.fetch(limitquery, {
        limit: limit,
      })) || []
    );
  }
  return [];
}

export async function getPaginatedSearchQuery(
  { limit = 5, pageIndex = 0 },
  query: string
) {
  if (client) {
    return (
      (await client.fetch(paginatedSearchQuery, {
        limit: limit,
        pageIndex: pageIndex,
        query: query,
      })) || []
    );
  }
  return [];
}

export async function getPageData(page: string) {
  if (client) {
    return await client.fetch(getPageDataQuery, {
      page,
    });
  }

  return {};
}
