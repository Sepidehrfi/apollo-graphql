import { gql } from "@apollo/client/core";

const REPO_FRAGMENT = gql`
  fragment repo on Domains {
    id
    name
    url
    stargazers {
      totalCount
    }
    viewerHasStarred
    description
    licenseInfo {
      name
    }
    updatedAt
    owner {
      login
      avatarUrl
    }
    primaryLanguage {
      color
      name
    }
    DomainsTopics(first: 10) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
  }
`;

export const ADD_STAR = gql`
  mutation($DomainsId: ID!) {
    addStar(input: { starrableId: $DomainsId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const REMOVE_STAR = gql`
  mutation($DomainsId: ID!) {
    removeStar(input: { starrableId: $DomainsId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const SEARCH_REPOS = gql`
  ${REPO_FRAGMENT}

  query SearchRepoQuery($query: String!, $limit: Int!) {
    search(query: $query, type: Domains, first: $limit) {
      edges {
        node {
          ...repo
        }
      }
    }
  }
`;
