export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8921e8ca94ba4d6d68454c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vrekmxtm',
                  apiId: '3cab365c-f717-4cb4-a333-94c3aff9317f'
                },
                {
                  buildHookId: '5e8921e9ca94badd7d684b1c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tn13axht',
                  apiId: '238b1ab2-bb84-487e-8272-847a96ee3634'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zanedev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tn13axht.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
