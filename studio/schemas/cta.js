import {defineType} from 'sanity'

export default defineType({
  title: 'Call to Action',
  name: 'cta',
  type: 'object',
  fields: [
    {
        title: "Action",
        name: "action",
        type: "reference",
        to: [
            {type: "page"}
        ]
    },
    {
        title: "Text",
        name: "text",
        type: "string"
    }
  ],
})
