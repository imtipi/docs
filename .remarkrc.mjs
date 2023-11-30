import remarkNetworkTemplate from './utils/plugins/remark/remark-network-template.mjs'

export default {
  plugins: [
    remarkNetworkTemplate,
    'remark-gfm',
    'remark-frontmatter',
    'remark-preset-lint-consistent',
    'remark-preset-lint-recommended',
    'remark-lint-table-cell-padding',
    'remark-lint-table-pipe-alignment',
    'remark-lint-table-pipes',
    [
      'remark-lint-heading-style',
      'atx'
    ],
    [
      'remark-lint-unordered-list-marker-style',
      '*'
    ],
    [
      'remark-lint-frontmatter-schema',
      {
        schemas: {
          './utils/schemas/page.schema.yaml': [
            './pages/**/*.mdx'
          ]
        }
      }
    ]
  ]
}