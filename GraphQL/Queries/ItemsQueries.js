import {gql} from '@apollo/client'

export const LOAD_ITEMS=gql`
query Query {
    items {
      itemCode
      categories {
        categoryName
        items {
          name
          description
     
          status
          cost
        }
      }
    }
  }
`
export const GET_ITEMS=gql`

query Query($getItemByCodeItemCode: String!) {
  getItemByCode(itemCode: $getItemByCodeItemCode) {
    itemCode
    categories {
      categoryName
      items {
        name
        description
        status
        cost
      }
    }
  }
}
`
export const GET_ITEMS_BY_ID=gql`
query Query($itemId: ID!) {
  item(id: $itemId) {
    id
    itemCode
    categories {
      categoryName
      items {
        name
        description
        status
        cost
      }
    }
  }
}`