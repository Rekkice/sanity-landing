import {defineType} from 'sanity'

export default defineType({
  title: 'Header',
  name: 'header',
  type: 'document',
  fields: [
    {
        title: "Links",
        name: "links",
        type: "array",
        of: [{type: "object", name: "link", title: "Link", fields: [
            {
                title: "Page",
                name: "page",
                type: "reference",
                to: [
                    {type: "page"}
                ]
            },
            {
                title: "Displayed name",
                name: "name",
                type: "string"
            }
        ]}]
    },
    {
        title: "Call to Action",
        name: "cta",
        type: "cta"
    }
  ],
})
