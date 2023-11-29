import React, { useState } from 'react'
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import './App.css'

const defaultValue = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

function App() {
  const [input, setInput] = useState(defaultValue)

  return (
    <>
    <h1 id='title'>Markdown Previwer</h1>
      <div id='bundleDiv'>
        <textarea
          id="editor"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div id="preview">
          <Markdown remarkPlugins={[remarkGfm,remarkBreaks]}>{input}</Markdown>
        </div>
      </div>
    </>
  )
}

export default App
