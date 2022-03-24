import axios from 'axios';

const baseURL = "https://marketplace-api.k1.kiva.org/graphql";

export const fetchLoans = () => {
    const res = axios.post(baseURL, {
        query: `{   
            lend {
                loans(offset: 0, filters: {sector: 9}) {
                    values {
                        id
                        name
                        loanAmount
                        loanFundraisingInfo {
                            fundedAmount
                        }
                        image {
                            url(customSize: "w480h300")
                        }
                        whySpecial
                        geocode {
                            country {
                                name
                            }
                        }
                        }
                    }
                }
            }`,
    }, {
    })
    .then(result => result.data.data.lend.loans.values)
    .catch(err => console.error('Error while fetching loan data', err));

    return res;
}