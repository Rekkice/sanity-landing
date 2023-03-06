import {defineType} from 'sanity'

export default defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
        title: "Image",
        name: "image",
        type: "image"
    },
    {
        title: "Content",
        name: "content",
        type: "array",
        of: [{type: "block"}]
    },
  ],
})
