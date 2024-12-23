
type Props = {
  page: number
};
const queryCharacters = async ({page}: Props) => {
  const query = gql`
    query {
      characters(page: ${page}) {
        info {
          count,
          pages,
          next,
          prev
        }
        results {
          id,
          name,
          image,
          location {
            name,
            type
          }
        }
      }
    }
  `

  const variables = { limit: 5 }
  return await useAsyncQuery(query, variables);
};

export default queryCharacters;