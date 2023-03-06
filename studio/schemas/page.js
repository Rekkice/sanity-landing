import {defineType} from 'sanity'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
        title: "Title",
        name: "title",
        type: "string"
    },
    {
        title: "Content",
        name: "content",
        type: "array",
        of: [{type: 'image'}, {type: "block"}, {type: "hero"}]
    },
  ],
})
