import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
        url: 'https://time.com/6266679/musk-ai-open-letter/',
        length: '3'
    },
    headers: {
        'X-RapidAPI-Key': '6205bd2fa6mshe1b309c181be10ep1a0fcfjsn40ca06db33bf',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'KEY')
            headers.set('X-RapidAPI-Host', 'KEY')
        }

    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })

})