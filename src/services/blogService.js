async function fetchAPI(query, { variables } = {}) {
    const res = await fetch("https://api-us-east-1.graphcms.com/v2/cky4lj7uy0bng01z6hq6f4aa2/master", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const json = await res.json()
  
    if (json.errors) {
      console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    console.log(json.data)
  
    return json.data
  }
  
  export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
      `
      {
        posts(orderBy: date_DESC, first: 3) {
          title
          slug
          excerpt
          date
          coverImage {
            url(transformation: {
              image: {
                resize: {
                  fit:crop,
                  width:2000,
                  height:1000
                }
              }
            })
          }
          author {
            name
            picture {
              url(transformation: {
                image: {
                  resize: {
                    width:100,
                    height:100,
                    fit:crop
                  }
                }
              })
            }
          }
        }
      }
    `,
      { preview }
    )
    return data.posts
  }