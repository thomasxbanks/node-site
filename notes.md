# Notes

## Generating a blog post
1. Fill in a form
1. Save the form content
1. The form content is used to populate a page
1. The page is saved to a folder with a unique filename
1. The content and the path to the assets are added to a JSON file
1. Any associated files are saved to a folder with a unique filename
1. When the unique url (_eg_ http://myblog.com/post_1111.html) is navigated to the content is displayed using the generic, shared stylesheet

## Generating the archive
1. When the archive page (_eg_ http://myblog.com/posts) is navigated to the content is pulled from the JSON file and displayed using the generic, shared stylesheet

## Deleting a post
- Option 1
  1. The page with the matching unique filename is deleted
  1. Associated assets are deleted
  1. The JSON file has the content removed and all fields replaced with `null`
- Option 2 (__my favourite__)
  1. The JSON file is updated to show a status of `deleted` and is not displayed in the archive (allowing for _undeleting_ of a post)

## Editing a post
- Option 1
  1. When the form is saved, the new content is assigned to the associated unique filename
  1. And/or assets are saved to a folder with the associated filename
  1. The JSON file is updated to replace content in the fields with the new data
- Option 2
  1. When the form is saved, the new content is given a new unique filename
  1. As are any assets
  1. The JSON file is rewritten to associate the _existing_ data with a new unique identifier and the _new_ post with the existing identifier

## Data needed for a 'Post'
_italics_ are optional
- Title
- Content
- _Image_ (default image displayed in layout)
- Author
- Category
- _Post date_ (This can be generated or provided. Later stage development, possibly when editing becomes a thing.)

## Options
- Publish
- Edit
- Delete
- _Draft_
