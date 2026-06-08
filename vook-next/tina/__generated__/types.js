export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  slide1_image
  slide1_title
  slide1_subtitle
  slide1_text
  slide2_image
  slide2_title
  slide2_subtitle
  slide2_text
  welcome_title
  vision
  mission
  feature_boxes {
    __typename
    title
    icon
    desc
  }
  founder_name
  founder_title
  founder_image
  founder_bio
  founder_quote
  moses_name
  moses_title
  moses_image
  moses_bio
  core_team {
    __typename
    name
    title
    initials
    country
  }
  partnerships {
    __typename
    title
    icon
    desc
  }
  programs_hero_title
  departments {
    __typename
    id
    title
    icon
    short
    details
  }
  strategic_programs {
    __typename
    title
    tag
    desc
  }
  courses_hero_title
  beneficiaries_title
  beneficiaries_text
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  primary_color
  email
  phone
  address
}
    `;
export const CoursesPartsFragmentDoc = gql`
    fragment CoursesParts on Courses {
  __typename
  title
  icon
  desc
}
    `;
export const BlogsPartsFragmentDoc = gql`
    fragment BlogsParts on Blogs {
  __typename
  title
  date
  author
  image
  description
  body
}
    `;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export const CoursesDocument = gql`
    query courses($relativePath: String!) {
  courses(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CoursesParts
  }
}
    ${CoursesPartsFragmentDoc}`;
export const CoursesConnectionDocument = gql`
    query coursesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CoursesFilter) {
  coursesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CoursesParts
      }
    }
  }
}
    ${CoursesPartsFragmentDoc}`;
export const BlogsDocument = gql`
    query blogs($relativePath: String!) {
  blogs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BlogsParts
  }
}
    ${BlogsPartsFragmentDoc}`;
export const BlogsConnectionDocument = gql`
    query blogsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BlogsFilter) {
  blogsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BlogsParts
      }
    }
  }
}
    ${BlogsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    },
    courses(variables, options) {
      return requester(CoursesDocument, variables, options);
    },
    coursesConnection(variables, options) {
      return requester(CoursesConnectionDocument, variables, options);
    },
    blogs(variables, options) {
      return requester(BlogsDocument, variables, options);
    },
    blogsConnection(variables, options) {
      return requester(BlogsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
