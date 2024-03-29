import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from '../components/Cart';

function createClient({ headers }) {
	return new ApolloClient({
		uri         :
			process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
		request     : (operation) => {
			operation.setContext({
				fetchOptions : {
					credentials : 'include'
				},
				headers
			});
		},
		clientState : {
			resolvers : {
				Mutation : {
					toggleCart(_, variables, { cache }) {
						const { cartOpen } = cache.readQuery({
							query : LOCAL_STATE_QUERY
						});
						const updatedData = {
							data : { cartOpen: !cartOpen }
						};
						cache.writeData(updatedData);
						return updatedData;
					}
				}
			},
			defaults  : {
				cartOpen : false
			}
		}
	});
}

export default withApollo(createClient);
